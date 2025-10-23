/**
 * Referencias
 * 2C = Two of Clubs (Treboles)
 * 2D = Two of Diamonds (Diamantes)
 * 2H = Two of Hearts (Corazones)
 * 2S = Two of Spades (Espadas)
 */

let deck = [];  /*lista del numero de cartas que salgan al azar*/
const tipos = ['C', 'D', 'H', 'S']; /*lista del tipo de carta que salga al azar*/
const especiales = ['A', 'J', 'Q', 'K']; /*lista de las iniciales de las letras de las cartas especiales*/
let puntosJugador = 0

//variables de referencias al HTML
const btnPedir = document.querySelector('#btnPedir');
const mostrarPuntos = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');


//Funcion para crear el mazo
const crearDeck = () => {
    for(let i = 2; i <= 10; i++){
        for(let tipo of tipos) /*este tipo de for hace un bucle que se mezclen entre si or el 'OF'*/{
        deck.push(i + tipo); 
        }
    }

    for(let esp of especiales){    /*comando para que las cartas especiales con el OF se mezclen los posibles variables del mazo tipo de carta. por ej: diamante)*/
        for(let tipo of tipos){
            deck.push(esp+tipo);
        }
    }



    deck = _.shuffle(deck);  /*con este comando ahora si mezclo todo*/
    //console.log(deck);
    return deck; 
}

crearDeck();

//funcion para pedir una carta
const pedirCarta = () => {
    
    if(deck.length == 0){
        throw "No hay mas cartas en el mazo!!";
    }
    const carta = deck.pop();
    return carta;     
}

//Funcion para determinar el valor de la carta 
const valorCarta = (carta)=>{
    const valor = carta.substring(0, carta.length - 1);
    //let puntos = 0;
    
    //if(isNaN(valor) ){
        /*puntos = (valor === 'A' ) ? 11 : 10;*//*o tambien puede ser representado de la siguiente manera para que quede mas corta y comoda*/
        
        
    //} else{
    //    console.log("Si es un numero!!")
    //    puntos = valor * 1;
   // }

    return ( isNaN(valor) ) ? 
                   valor === 'A' ? 11 : 10
                   : valor * 1; 

}

//Eventos
btnPedir.addEventListener('click', ()=>{
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    mostrarPuntos[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = ´assets/cartas/${carta}.png´ //apostrofe invertido al que puse ERROR
    imgCarta.classList.add('carta')

    divCartasJugador.appendChild(imgCarta);

   if(puntosJugador > 21){
    btnPedir.disabled = true; // el .disableb aplica su funcion para desactivar el boton btnPedir para que no sigamos sacando cartas
    console.warn("Lo siento mucho peeero... PERDISTE!!!");S
   }else if(puntosJugador == 21){
    btnPedir.disabled = true;
    console.info("21!!!...GENIAL!!!");
   }
})

