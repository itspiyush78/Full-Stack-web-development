// Constants for the OMDB API
const APILINK = "http://www.omdbapi.com/?i=tt3896198&apikey=77dcdb87";
const IMG_PATH = "http://img.omdbapi.com/?apikey=77dcdb87&s=";
const SEARCHAPI = "http://www.omdbapi.com/?apikey=77dcdb87&s=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const query = document.getElementById("query");

// Function to create a card for a movie
function createCard(movie) {
  const card = document.createElement("div");
  card.classList.add("card");

  const image = document.createElement("img");
  image.src = movie.Poster;
  card.appendChild(image);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const title = document.createElement("h3");
  title.innerHTML = movie.Title;

  const button = document.createElement("button");
  button.textContent = "Watch Now";

  cardContent.appendChild(title);
  cardContent.appendChild(button);

  card.appendChild(cardContent);

  return card;
}

// Function to fetch and display trending movies as cards
function displayTrendingMovies() {
  // Fetch "movie" as one of the trending movies
  fetch(APILINK + "&s=Multiverse")
    .then((res) => res.json())
    .then(function (data) {
      if (data.Response === "True" && Array.isArray(data.Search)) {
        data.Search.forEach((movie) => {
          const card = createCard(movie);
          main.appendChild(card);
        });
      } else {
        console.log("Error fetching trending movies");
      }
    })
    .catch(function (error) {
      console.error("Error fetching trending movies:", error);
    });
}

// Function to fetch and display searched movies as cards
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data);

      main.innerHTML = ""; // Clear previous results

      // Check if the API request was successful and data.Search is an array
      if (data.Response === "True" && Array.isArray(data.Search)) {
        data.Search.forEach((movie) => {
          // Check if the movie has a valid poster before creating a card
          if (movie.Poster && movie.Poster !== "N/A") {
            const card = createCard(movie);
            main.appendChild(card);
          }
        });
      } else {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = "No movies found or there was an error.";
        main.appendChild(errorMessage);
      }
    })
    .catch(function (error) {
      console.error("Error fetching movie details:", error);
      const errorMessage = document.createElement("p");
      errorMessage.textContent =
        "Error fetching movie details. Please try again later.";
      main.appendChild(errorMessage);
    });
}

// Display trending movies when the page loads
displayTrendingMovies();

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchItem = query.value.trim();
  if (searchItem) {
    returnMovies(SEARCHAPI + encodeURIComponent(searchItem));
    query.value = "";
  }
});
