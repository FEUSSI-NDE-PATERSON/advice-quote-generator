let NumberId = document.querySelector('#Number')
let randomQuotes = document.querySelector('#randomQuotes')
let button = document.querySelector('button')
.addEventListener('click',getQuote)
let ids
let quotes
async function getQuote(){
  let f = await fetch('	https://api.adviceslip.com/advice')
  let data = await f.json()
  ids = data.slip.id
  quotes = data.slip.advice
  NumberId.textContent = ids
  randomQuotes.textContent = quotes
}