let bton = document.getElementById("btn");
let numArreglo = [20]
let mensaje = document.createElement("p");
let pe = document.getElementById('texto');
bton.addEventListener('click', (e) => {
    for(let cont = 0; cont <= 20; cont++){
        numArreglo[cont] = cont;
        if (numArreglo[cont]%2 == 0){
            let messenger = document.createTextNode(`${numArreglo[cont]} es par `);
            mensaje.appendChild(messenger);
            document.body.insertBefore(mensaje, pe);
        } else{
            let messenger = document.createTextNode(`${numArreglo[cont]} es par `);
            mensaje.appendChild(messenger);
            document.body.insertBefore(mensaje, pe);
        }
    }
});

console.log("hola mundo")


