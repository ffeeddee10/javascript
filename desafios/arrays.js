class tortas{
    constructor (nombre, relleno, kilos, recubierto, opinion){
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

//agregarndo ideas de clientes a nuestra base de datos de tortas

const opinion = prompt('¿danos una idea para crear una torta?')
torta.push(opinion)

alert ( 'tu idea ' + opinion + ' sera analizada')


