

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


function tortas (nombre, relleno, kilos, recubierto) {
  this.nombre = nombre
  this.relleno = relleno
  this.kilos = kilos
  this.recubierto = recubierto
}

const torta1 = new torta("torta kakita", "relleno con dulce de leche y oreo", "4 kg", "ganacheada de chocolate" )
const torta2 = new torta("torta campeon", "relleno con dulce de leche y fruta a eleccion", "3 kg", "masa dulce")
const torta3 = new torta("torta duff", "relleno con dulce de leche y frutilla", "3 kg", "masa dulce")
const torta4 = new torta("torta dj", "relleno con dulce de leche y chips de chocolate", "6 kg", "masa dulce")

const tortaarrays = [torta1]

console.log (tortaarrays)


