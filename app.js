const blockquote = document.querySelector("blockquote");
const author = document.querySelector("span");
const newQuoteButton = document.querySelector(".New-Quote");
const apiKey = "6ZyCKaqZDfg4zJ9fVpzz+A==yKNqi5AFDywgVa3K";


function fetchQuote() {
    fetch("https://api.api-ninjas.com/v1/quotes", {
        method: "GET",
        headers: { "X-Api-Key": apiKey }
    })
    .then((response) => response.json()) 
    .then(([quoteData]) => {
        blockquote.innerText = quoteData.quote;
        author.innerText = quoteData.author || "Unknown";
    })
    .catch((error) => {
        console.error("Error fetching quote:", error);
        blockquote.innerText = "An error occurred. Please try again later.";
        author.innerText = "";
    });
}


newQuoteButton.addEventListener("click", fetchQuote);
window.addEventListener("load", fetchQuote);
