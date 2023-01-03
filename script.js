const qoutes = document.querySelector(".qoute");
const getBtn = document.querySelector(".get-quote");
const authorQuote = document.querySelector(".author");
const api = "https://api.quotable.io/random";

getBtn.addEventListener("click", () => {
  fetch(api)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data.author);
      const { content, author } = data;
      qoutes.innerText = `\"${content}\"`;
      authorQuote.innerText = `-${author}`;
    });
});
