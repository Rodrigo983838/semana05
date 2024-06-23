
/*
for (let a=1; a<=40; a++){
     console.log("numero: "+a); 
}
*/
console.log("*******************");

let contador=1;

while(contador<=30){
    console.log("numero:"+contador );
    contador=contador+1;

}

/*otra forma es*/

console.log("*******************");

let contador2=1;

while(contador2<=30){
    console.log("numero:"+contador2 );
    contador2++;

}


/* ahora vamos con do while */


let contador3=0;

do{
    contador3++;
    console.log("numero:"+contador3);

}while(contador3<=30)

/* ahora vamos con brake que es un cortador de secuencia*/

let contador4=1;

while(contador4<=30){
    console.log("numero:"+contador4);
    if (contador4==20){
        break;
    }
    contador4++;

}

/* ejemplos con continue*/

let contador5=0;
while(contador5<=30){
    contador5++;
    if (contador===15){
        continue;
    }
    console.log("numero:"+contador5);
}































