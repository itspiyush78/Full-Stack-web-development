const string = document.getElementById("str");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const str = string.value;
  console.log(str);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "au"
    ) {
      count += 1;
    }
  }
  msg.innerText = "No. of vowels: " + count;
});