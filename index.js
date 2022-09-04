

let productoseleccionado = parseInt(
  prompt('ingresa el numero del producto a elejir 1-torta 2-galletitas 3-git box')
)


let totalcompra = 0


let seguircomprando = true
let desicion

while (seguircomprando === true) {
  if (productoseleccionado === 1) {
    totalcompra = totalcompra + 3000
  }
  else if (productoseleccionado === 2) {
    totalcompra = totalcompra + 1000
  }
  else if (productoseleccionado === 3) {
    totalcompra = totalcompra + 5000
  }
  else {

    productoseleccionado = parseInt(prompt('Ingrese un numero valido'))
    continue
  }

  desicion = parseInt(prompt('quiere seguir comprando marque 1-si 2-no'))
  if (desicion === 1) {
    productoseleccionado = parseInt(prompt('Elija mas producto de 1-torta 2-galletitas 3-git box'))
  }
  else if (desicion === 2) {
    seguircomprando = false
  }


}
alert('el valor es ' + totalcompra)

let cash = parseInt(
  prompt('¿Paga en Efectivo? si - no')
)

function calculandodescuento(precio) {

  let descuento

  if (cash == 'si') {
    descuento = 0.9
  }
  else if (cash == 'no') {
    descuento = 0
  }
  else {
    cash = parseInt(prompt('ingrese un numero valido'))
  }
  let resultado = precio * descuento
  precio = precio + resultado
  return precio
}
let preciofinal = calculandodescuento(totalcompra)



alert('valor final es ' + preciofinal)

/*
function calcularImpuestos(precio) {
  let impuesto = 0 
  if (precio <= 300) {
     impuesto = 10 } 
     else if (precio >= 400 || precio <= 700) {
       impuesto = 20 } 
       else if (precio >= 800) {
         impuesto = 25 } 
         else { 
          alert(“guau no puedo calcular los impuestos”) 
        } let valorDelImpuesto = precio * (impuesto / 100) 
        precio = precio + valorDelImpuesto return precio }
let valorConImpuesto = calcularImpuestos(precioTotal)

alert(“el valor de tu producto con impuestos incluidos es de”+valorConImpuesto)
*/

/*

let descuento = 0
while (cash === 'si') {
  if (cash === 'si'){

    descuento = descuento + 0.9 
  }
  else if ( cash === 'no') {

    descuento = descuento + 0 
  }
  else {
    alert (parseInt(prompt('ingrese un numero valido')))
  }
  
}



function valorfinal (){
  const resultado = totalcompra * descuento
  return resultado
}

valorfinal (totalcompra)
alert('valor final es' + valorfinal)

*/

