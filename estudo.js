// console.log("Console: Alô Mundo...");
// alert("Alerta: Alô mundo...");
let tabuada = 4;


function meChame(){
   document.write("Tabuado do " + tabuada + "<br>");
   document.write(tabuada + " x 1 = " + (tabuada*1) +"<br>");
   document.write(tabuada + " x 2 = " + (tabuada*2) +"<br>");
   document.write(tabuada + " x 3 = " + (tabuada*3) +"<br>");
   document.write(tabuada + " x 4 = " + (tabuada*4) +"<br>");
   document.write(tabuada + " x 5 = " + (tabuada*5) +"<br>");
   document.write(tabuada + " x 6 = " + (tabuada*6) +"<br>");
   document.write(tabuada + " x 7 = " + (tabuada*7) +"<br>");
   document.write(tabuada + " x 8 = " + (tabuada*8) +"<br>");
   document.write(tabuada + " x 9 = " + (tabuada*9) +"<br>");
   document.write(tabuada + " x 10 = " + (tabuada*10) +"<br>");
}


function minhaTabuada(){
   for(var i=1; i <= 10; i++){

      for(var j = 1; j <=10; j++){
         document.write(i + " x " + j + " = " + (i*j) +"<br>");
      }

      document.write("<br><br>");
   }
}

func  fotion quadrado(){
 r(var i = 2; i < 21; i++){
      document.write("O quadrado de " + i + " é " + (i*i) + "<br>");
   }
}

function total(){
   let val = document.getElementById("valor").value;
   let ju = document.getElementById("juros").value;
  
   document.write("o resultado  é" + resultado);
if(Number(val))
 alert ('o valor dos juros deve ser um numero.');
 document.getElementById.value = '';
 document.getElementById.focus ()= "";
 return 
 {
   document.write("o resultado  é" + resultado);
   if(Number(val))
    alert ('o valor dos juros deve ser um numero.');
    document.getElementById.value = '';
    document.getElementById.focus ()= "";
    return       
}
 let resultado = (val * (ju/100)));
 document.write('o resultado é ' + resultado);
}
