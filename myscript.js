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
    document.getElementById('titolo').classList.add('displaynone');
}

function inserisciPrompt(){
    for(i = 0; i < 5; i++) {
        let numeriInseriti = parseInt(prompt('Inserisci i numeri che ricordi'))
        console.log(numeriInseriti)
        numeriInseritiArray.push(numeriInseriti)
        if(numeriCasualiArray.includes(numeriInseriti)){
            numeriCorrettiArray.push(numeriInseriti)
            console.log(numeriCorrettiArray)
            numeriHtml.innerHTML = numeriCorrettiArray
            document.getElementById('numeri').classList.remove('displaynone');
        }
    }
    if(numeriCorrettiArray.length == 5){
        document.getElementById('corretti5').classList.add('display');
    }else if(numeriCorrettiArray.length == 4){
        document.getElementById('corretti4').classList.add('display');
    }else if(numeriCorrettiArray.length == 3){
        document.getElementById('corretti3').classList.add('display');
    }else if(numeriCorrettiArray.length == 2){
        document.getElementById('corretti2').classList.add('display');
    }else if(numeriCorrettiArray.length == 1){
        document.getElementById('corretti1').classList.add('display');
    }else if(numeriCorrettiArray.length == 0){
        document.getElementById('corretti0').classList.add('display');
    }
    console.log(numeriInseritiArray)
}



setTimeout(sparireNumeri, 30000);

setTimeout(inserisciPrompt, 30100);

let numeriCasualiArray = [];
let numeriHtml = document.getElementById("numeri");
let numeriInseritiArray = [];
let numeriCorrettiArray = [];


generaNumeriCasuali (5);
console.log(numeriCasualiArray);
