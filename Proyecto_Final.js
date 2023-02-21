//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos 
var edad_18 = 0.1 // 10%
var edad_25 = 0.2 // 20%
var edad_50 = 0.3 // 30%

var casado_18 = 0.1 // 10%
var casado_25 = 0.2 // 20%
var casado_50 = 0.3 // 30%

var hijos_recargo = 0.2 // 20%



//Recargo
var recargo = 0
var recargo_conyuge = 0
var recargo_hijos = 0
var recargo_total = 0
var numero_hijos = 0

//variables de control
var seguir = 0

//Precio final 
var precio_final = 0

while(seguir==0){

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor")

/*validacion de edad*/
var edadAsegurado = 0;

while(edadAsegurado < 18){
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ")
edadAsegurado = parseInt(edad);

if(edadAsegurado < 18)
{
  alert('Unicamente se pueden asegurar personas mayores de edad');
}
}
var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "si/no")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen

if("SI" == hijos.toUpperCase()){
   numero_hijos = prompt("¿cúantos hijos tiene?")
}

/**
 * 1. convierta la cantidad de hijos a numero
 */
var cantHijos = parseInt(numero_hijos);

//Aquí debe calcular el recargo total basado en las respuestas ingresadas
recargo_hijos = (precio_base * hijos_recargo) * cantHijos;
//Aquí es donde debe de calcular los recargos y el valor final
recargo_total = recargo_total + recargo_hijos

//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edadAsegurado>=18 && edadAsegurado<25){
  //Calculamos el recargo en base a la edad 
   recargo = precio_base * edad_18; 
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}

//aqui puede colocar un else if() con el siguiente rango
if(edadAsegurado>=25 && edadAsegurado<49){
  //Calculamos el recargo en base a la edad 
   recargo = precio_base * edad_25; 
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}

if(edadAsegurado>=50){
  //Calculamos el recargo en base a la edad 
   recargo = precio_base * edad_50; 
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo
}

/** 
 * 2. Recargo por la edad del conyuge
 */
//Recargo por edad del cónyuge
if(edad_conyuge_numero>=18 && edad_conyuge_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * casado_18; 
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_conyuge
}

//aqui puede colocar un else if() con el siguiente rango
if(edad_conyuge_numero>=25 && edad_conyuge_numero<49){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * casado_25; 
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_conyuge
}

if(edad_conyuge_numero>=50){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * casado_50; 
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo_total + recargo_conyuge
}


/**
 * 3. Recargo por la cantidad de hijos 
 */ 




precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+recargo_total)
alert ("El precio sera de: "+precio_final)

//para continuar con mas cotizaciones

var continuar = prompt("¿Desea hacer otra cotización?")

if(("NO" == continuar.toUpperCase() )|| "SALIR" == continuar.toUpperCase()){
   seguir = 1
}

}