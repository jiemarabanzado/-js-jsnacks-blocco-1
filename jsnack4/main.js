const invitati=["marco","sergio","franco"];
let risposta="non sei invitato";
let nome=prompt('inserisci il tuo nome');
for(let index=0; index<invitati.length;index++){
    if(nome===invitati[index]){
        risposta='sei invitato';
    }
}
console.log(nome,risposta);