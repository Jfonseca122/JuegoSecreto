
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Numero entre 0-10';


let numeroSecretoAleaotorio = 0;
let intentos = 0;
let numeroMaximo=10;

let numeroSorteado = [];

function asignarTextoElemento (elemento,texto) {

    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;

}




function numeroSecreto () {

    let numero = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numero);
    console.log(numeroSorteado);

    if (numeroSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya los numeros sorteados se acabaron');
    }else{
        if (numeroSorteado.includes(numero)) {

            return numeroSecreto();
             
        }else{
             numeroSorteado.push(numero);
             return numero;
        }
         
    }

    
}





function btn_intentar () {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    
   

    if (numeroUsuario===numeroSecretoAleaotorio) {

        asignarTextoElemento('p',`Acertaste al numero secreto en un total ${intentos} ${(intentos==1) ? 'vez':'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{

        
        if (numeroUsuario>numeroSecretoAleaotorio) {

            asignarTextoElemento('p',`Tu numero ${numeroUsuario} es mayor al numero secreto`);

           

        }else{
            asignarTextoElemento('p',`Tu numero ${numeroUsuario}  es menor al numero secreto`);
        }
        limpiarCaja();
        intentos++;
    }

    return;



    

   

}

function limpiarCaja() {

    document.getElementById('valorUsuario').value = '';
    
}

function btn_reiniciar () {

    // limpiar la caja 
    limpiarCaja ();

    condicionesIniciales();

    document.getElementById('reiniciar').setAttribute('disabled',true);

   



    
}

function condicionesIniciales (){
    
    asignarTextoElemento ('h1','Guessing game');
    asignarTextoElemento ('p','Numero entre 0-10');
    numeroSecretoAleaotorio = numeroSecreto();
    
    intentos=1;
}

condicionesIniciales();