/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */
let eta = parseInt( prompt("Scrivi la tua età") )

let km = parseInt( prompt("Scrivi i km che devi percorrere") )

let prezzoBase = 0.21 * km

const scontomin = 0.20

const scontoover = 0.40

let prezzoFinale;

if (eta < 18){
    prezzoFinale = prezzoBase * scontomin
}
else if (eta > 65){
    prezzoFinale = prezzoBase * scontoover
}
else{
    prezzoFinale = prezzoBase
}

console.log(`Il costo finale è €${ prezzoFinale.toFixed (2) }`)
