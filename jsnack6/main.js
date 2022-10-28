let somma=0;
const number=[1,2,1,2,1,2,1,2,1,2];
for(let index = 0; index < number.length; index++) {
    console.log(number[index]);
    if(index!=0 && index%2!=0){
        somma+=number[index];}
}
console.log('tot=',somma);
