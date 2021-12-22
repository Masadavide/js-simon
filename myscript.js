/* Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma. */



function generaNumeriCasuali (numero){
    while(numeriCasualiArray.length < numero){
        let num = Math.floor((Math.random()) * 100 + 1);
        if(!numeriCasualiArray.includes(num)){
            numeriCasualiArray.push(num);
        }else{
            console.log("doppione " + num);
        }
    }
    numeriHtml.innerHTML = numeriCasualiArray;
}

function sparireNumeri(){
    document.getElementById('numeri').classList.add('displaynone');
}

function inserisciPrompt(){
    for(i = 0; i < 5; i++) {
        let numeriInseriti = parseInt(prompt('inserisci numero'))
        console.log(numeriInseriti)
        numeriInseritiArray.push(numeriInseriti)
        if(numeriCasualiArray.includes(numeriInseriti)){
            numeriCorrettiArray.push(numeriInseriti)
            console.log(numeriCorrettiArray)
            numeriHtml.innerHTML = numeriCorrettiArray
            document.getElementById('numeri').classList.remove('displaynone');
        }
    }
    console.log(numeriInseritiArray)
}



setTimeout(sparireNumeri, 3000);

setTimeout(inserisciPrompt, 3010);

let numeriCasualiArray = [];
let numeriHtml = document.getElementById("numeri");
let numeriInseritiArray = [];
let numeriCorrettiArray = [];


generaNumeriCasuali (5);
console.log(numeriCasualiArray);
