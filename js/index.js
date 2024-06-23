
alert("ok");

/*
let img=document.getElementById("imgprueba");
//obtener el atributo src
console.log(img.getAttribute("src"));
//obtener el atributo width
console.log(img.getAttribute("width"));
//modificar la propiedad ancho
img.setAttribute("width","300px");
//modificar la propiedad largo
img.setAttribute("height","300px");
*/


/*
let btnmin=document.getElementById("btnmin");
let btnmax=document.getElementById("btnmax");
let btnotro=document.getElementById("btnotro");
let img=document.getElementById("imgprueba");


btnmin.addEventListener("click",function(){
    alert("minimizar");
    
    img.setAttribute("height","50px");
    img.setAttribute("width","50px");


});

btnmax.addEventListener("click",()=>{
    alert("maximizar");
    img.setAttribute("height","300px");
    img.setAttribute("width","300px");
    
});

btnotro.addEventListener("click",fn_otro);

function fn_otro(){
    alert ("otro");


}

*/

let btnmin=document.getElementById("btnmin");
let btnmax=document.getElementById("btnmax");
let btnotro=document.getElementById("btnotro");
let img=document.getElementById("imgprueba");


let alturainicial=100;
let anchoinicial=100;

let a_o_r_dim=30;

btnmin.addEventListener("click",function(){
    
    let ancho = imgprueba.getAttribute("width");
    let altura = imgprueba.getAttribute("height");

    console.log("ancho:"+ancho);
    console.log("altura:"+altura);

    let anchosinpx = ancho.replace("px","");   
    let alturasinpx = altura.replace("px","");

    console.log("anchosinpx:"+anchosinpx);
    console.log("alturasinpx:"+alturasinpx);
    
    imgprueba.setAttribute("width",fn_formatmedidapx(parseInt(anchosinpx)-parseInt(a_o_r_dim)));
    imgprueba.setAttribute("height",fn_formatmedidapx(parseInt(alturasinpx)-parseInt(a_o_r_dim)));

    });

    function fn_formatmedidapx(dimension){
    return dimension + "px";
    }



btnmax.addEventListener("click",function(){
    
        let ancho = imgprueba.getAttribute("width");
        let altura = imgprueba.getAttribute("height");
    
        console.log("ancho:"+ancho);
        console.log("altura:"+altura);
    
        let anchosinpx = ancho.replace("px","");   
        let alturasinpx = altura.replace("px","");
    
        console.log("anchosinpx:"+anchosinpx);
        console.log("alturasinpx:"+alturasinpx);
        
        imgprueba.setAttribute("width",fn_formatmedidapx(parseInt(anchosinpx)+parseInt(a_o_r_dim)));
        imgprueba.setAttribute("height",fn_formatmedidapx(parseInt(alturasinpx)+parseInt(a_o_r_dim)));
    
        });
    
        function fn_formatmedidapx(dimension){
        return dimension + "px";
        }
    
    

btnotro.addEventListener("click",fn_estado_original);

    function fn_estado_original(){
    imgprueba.setAttribute("width",fn_formatmedidapx(anchoinicial));
    imgprueba.setAttribute("height",fn_formatmedidapx(alturainicial));


}












