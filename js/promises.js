"use strict";
// const myPromise = fetch("https://api.github.com/users")
//   .then((response) => console.log(response))
//   .catch((error) => console.error(error));

// const myPromise = fetch("https://api.github.com/users", {
//   headers: { Authorization: "token `${keys.github}`" },
// });
// myPromise.then((response) => console.log(response, "this is the response"));
// myPromise.catch((error) => console.error(error));

const button = document.querySelector("#btnRepos");
const divResult = document.querySelector("#divResult");
button.addEventListener("click", getRepos);

let html = "";

async function getRepos() {
  try {
    const url = "https://api.github.com/users/wtwilliams310/events/public";
    const response = await fetch(url, {
      headers: { Authorization: `token ${keys.github}` },
    });
    const result = await response.json();
    const date = new Date(result[0].created_at);

    // console.log(result);
    divResult.innerHTML += `<p>${date}</p>`;
  } catch (error) {
    console.error("error");
  }
}
