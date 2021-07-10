const btn = document.querySelector("button")




function generateQuote() {
    const quoteContainer = document.getElementById("quote-container");
    document.getElementById("fetching").innerHTML= "<h1>Generating Quote...please wait...</h1>"
    let quoteNum = document.getElementById("quotes-num").value;
    const url = `https://geek-quote-api.herokuapp.com/v1/quote/${quoteNum}`
    fetch(url)
    .then(response => response.json())
    .then( (data) => {
        
       data.map((item) => {
        //    return 
        const quote = item.quote;
        const author = item.author;
           quoteContainer.innerHTML += `<div class="quote-div"><blockquote>
            <p class="quote">
               ${quote}
            </p> <br>
            <p class="author"><i>  ${author}</i></p>
           </blockquote><div>`
           document.getElementById("fetching").innerHTML = "";
           document.getElementById("quotes-num").value = "";
       })
        
           
     
     
    
    })
}



btn.addEventListener("click", generateQuote);