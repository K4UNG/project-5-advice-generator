const button = document.getElementById('btn');
const heading = document.getElementById('header');
const quote = document.getElementById('quote');

async function fetchQuote() {
    let data = await fetch("https://api.adviceslip.com/advice");
    let quoteData = await data.json();
    heading.innerText = `ADVICE #${quoteData.slip.id}`;
    quote.innerText = quoteData.slip.advice;
}

fetchQuote();

button.onclick = () => {
    fetchQuote();
}