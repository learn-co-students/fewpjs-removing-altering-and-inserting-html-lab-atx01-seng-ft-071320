// Write your code here!

document.getElementById('main').remove();

const h1 = document.createElement('h1');

h1.id = "victory"

document.body.appendChild(h1);

const newHeader = document.getElementById('victory');

newHeader.innerHTML = "JT is the champion!"
