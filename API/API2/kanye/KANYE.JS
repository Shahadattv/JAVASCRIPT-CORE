const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(Response => Response.json())
        .then(data => displayQuote(data))
}


const displayQuote = quote => {
    // console.log(quote)
    const quoteElement = document.getElementById('QUOTE');
    quoteElement.innerText = quote.quote;
}