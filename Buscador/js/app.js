//var
const marca = document.querySelector('#marca')
const year = document.querySelector('#year')
const minPrice = document.querySelector('#minimo')
const maxPrice = document.querySelector('#maximo')
const puertas = document.querySelector('#puertas')
const transmision = document.querySelector('#transmision')
const color = document.querySelector('#color')
const resultados = document.querySelector('#resultado')

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10


//Genero un objeto para la busqueda segun sea la eleccion del usuario
const datosBusqueda = {
    marca:'',
    year:'',
    minPrice:'',
    maxPrice:'',
    puertas:'',
    transmision:'',
    color:'',
}


//events
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos(autos)

    llenarSelect()
})

//listener para los select de busqueda
marca.addEventListener('change',e=>{
    datosBusqueda.marca = e.target.value

    filtrarAuto()
})

year.addEventListener('change',e=>{
    datosBusqueda.year = parseInt(e.target.value)
    filtrarAuto()
})

minPrice.addEventListener('change',e=>{
    datosBusqueda.minPrice = parseInt(e.target.value)
})

maxPrice.addEventListener('change',e=>{
    datosBusqueda.maxPrice = parseInt(e.target.value)
})

puertas.addEventListener('change',e=>{
    datosBusqueda.puertas = parseInt(e.target.value)
})

transmision.addEventListener('change',e=>{
    datosBusqueda.transmision = e.target.value
})

color.addEventListener('change',e=>{
    datosBusqueda.color = e.target.value
    
})

//functions
function mostrarAutos(autos){
    limpiarHTML() //Actualizando html
    autos.forEach(auto => {
        const autoHTML = document.createElement('p')

        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmisión: ${transmision}
            
        `

        resultados.appendChild(autoHTML)
    })
}

//Limpiar HTML para la busqueda
function limpiarHTML(){
    while (resultados.firstChild) {
        resultados.removeChild(resultados.firstChild)
    }
}

function llenarSelect(){
    for (let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}

function filtrarAuto(){
     const resultado = autos.filter(filtrarMarca).filter(filtrarYear)

     mostrarAutos(resultado)
    // console.log(resultado)
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda

    if (marca){
        return auto.marca === marca 
    }
    return auto
}

function filtrarYear(auto){
    const {year} = datosBusqueda

    if (year){
        return auto.year === year
    }
    return auto
}