//setTimeout() se ejecuta una vez
//setInterval() se ejecuta de manera ilimitada




setTimeout(mostrardatos,5000);
function mostrardatos(){
    let date = new Date();
    console.log("hora actual:" + date.toLocaleTimeString());
    console.log("ejemplo");
} 


setInterval(mostrarimg,2000);
function mostrarimg(){

    let date = new Date();
    console.log("hora actual:" + date.toLocaleTimeString());
    console.log("ejemplo 02");

}









