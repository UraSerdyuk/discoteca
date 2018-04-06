let container = document.querySelector('#container');
let div = document.createElement('div');
container.append(div);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

setInterval(()=>{
    setInterval(()=>{
        div.style.backgroundColor=`rgb(${getRandomInt(256)}, ${getRandomInt(256)},${getRandomInt(256)} )`;
    },getRandomInt(1000));


},3000);

div.style.width='100%';
div.style.height='100vh';