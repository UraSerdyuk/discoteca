let container = document.querySelector('#container');
let div = document.createElement('div');
div.className = "color1";
container.append(div);
let a = 1;
setInterval(()=>{
    if(a<=15){
        div.className = `color${a++}`;
    }else{
        a =1;

    }

},1);