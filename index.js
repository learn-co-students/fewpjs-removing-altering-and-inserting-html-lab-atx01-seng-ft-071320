const body = document.querySelector('body');
body.removeChild(body.querySelector('main#main'));

let element = document.createElement('h1');
element.setAttribute("id", "victory");
element.innerHTML = "YOUR-NAME is the champion"
document.body.appendChild(element);

let newHeader = body.querySelector('h1#victory')
