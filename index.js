

let productoseleccionado = parseInt(
  prompt('Ingresa el numero del producto a elejir 1-torta 2-galletitas 3-git box')
)


let totalcompra = 0


let seguircomprando = true
let desicion



class productos {
  constructor(nombre, valor) {
    this.nombre = nombre
    this.valor = valor
  }
}
const producto = []
const productotorta = new productos("Valor Por KG de torta", "3000")
producto.push(productotorta)
const productogalletitas = new productos("Valor Por KG de galletitas", "1000")
producto.push(productogalletitas)
const productogifbox = new productos("Valor Por Caja", "4000")
producto.push(productogifbox)

console.log(producto)


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

let cash = prompt('¿Paga en Efectivo? si - no')

function calculandodescuento(precio) {

  let descuento

  if (cash == 'si') {
    descuento = 0.9
  }
  else if (cash == 'no') {
    descuento = 1
  }
  else {
    cash = prompt('ingrese un numero valido')
  }
  let resultado = precio * descuento

  return resultado
}
let preciofinal = calculandodescuento(totalcompra)



alert('tu compra total es ' + preciofinal)


