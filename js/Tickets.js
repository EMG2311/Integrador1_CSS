


function resumen(){
let cantidad=parseInt(document.getElementById("cantidadTicket").value);
let categoria=document.getElementById("categoriaTicket").value;
console.log(categoria);
let total=document.getElementById("TotalPagar");
console.log("INICIO")
let num;
num=cantidad*200;
if(categoria=="Estudiante"){
    num=num-((num*80)/100);
}
else if(categoria=="Trainee"){
    num=num-((num*50)/100);
}
else{
    num=num-((num*15)/100);
}

total.value="Total a Pagar: $"+num;
}

