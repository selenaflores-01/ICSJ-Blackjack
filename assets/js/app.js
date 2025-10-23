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