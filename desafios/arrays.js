class tortas{
    constructor (nombre, relleno, kilos, recubierto){
        this.nombre = nombre
        this.relleno = relleno
        this.kilos = kilos
        this.recubierto = recubierto
    }
}

const torta = []
const torta1 = new tortas("torta kakita", "relleno con dulce de leche y oreo", "4 kg", "ganacheada de chocolate")
torta.push(torta1)
const torta2 = new tortas("torta campeon", "relleno con dulce de leche y fruta a eleccion", "3 kg", "masa dulce")
torta.push(torta2)
const torta3 = new tortas("torta duff", "relleno con dulce de leche y frutilla", "3 kg", "masa dulce")
torta.push(torta3)
const torta4 = new tortas("torta dj", "relleno con dulce de leche y chips de chocolate", "6 kg", "masa dulce")
torta.push(torta4)

console.log(torta)

//busco mi torta

const elecciontorta = prompt('¿decime que relleno te gustaria en nuestras tortas?')
torta.push(elecciontorta)

/*
let eleccion = torta.indexOf(elecciontorta)

console.log(eleccion)
*/


/*
let buscandotorta = tortas.incluides(elecciontorta)
let indice = tortas.indexOf(elecciontorta)

if(buscandotorta){
    alert('si esta')
} else {
    alert('no esta')
}
*/
/*
const elecciontorta = parseInt(prompt('¿que modelo de torta buscas?'))

const existelatorta = torta.find(
    (tor) => tor.id === elecciontorta 
)
*/

/*
let elecciontorta = parseInt(prompt('¿que torta estas buscando?'));

let existetorta = tortas.incluide(elecciontorta);

let indice = tortas.index0f(elecciontorta);

if(existetorta) {
    alert('la torta buscada es ${indice}')
} else {
    alert('la torta no se encuentra en nuestra busqueda')
}
*/

/*
tortaarrays.push(comentariocliente)

console.log(tortaarrays) 
*/
