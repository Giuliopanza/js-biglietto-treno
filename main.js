/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 */
const etàs = prompt("Scrivi la tua età");

const km = prompt("Scrivi i km che devi percorrere");

const prezzoBase = 0.21 * Number(km);

const età = Number(etàs);

if (età < 18){
    const prezzoFinale = prezzoBase - (prezzoBase * 20 / 100);
    let cost = prezzoFinale.toFixed(2);
    console.log(`Il costo finale è €${cost}`)
}
else if (età > 65){
    const prezzoFinale = prezzoBase - (prezzoBase * 40 / 100);
    let cost = prezzoFinale.toFixed(2);
    console.log(`Il costo finale è €${cost}`)
}
else{
    const prezzoFinale = prezzoBase;
    let cost = prezzoFinale.toFixed(2);
    console.log(`Il costo finale è €${cost}`)
}

