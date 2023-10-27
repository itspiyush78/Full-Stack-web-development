fetch('https://jsonplaceholder.typicode.com/posts/123456789')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.error('Error:', error);
    // Display error message on webpage
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Sorry, there was an error retrieving the data.';
    document.body.appendChild(errorMessage);
  });