// Write your code here!
const main = document.querySelector('main#main')
main.remove()

const head = document.createElement('h1')
head.id = "victory"
document.body.appendChild(head)
const newHeader = document.querySelector('h1#victory')
newHeader.innerHTML = 'Allene is the champion'