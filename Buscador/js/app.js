//var
const resultados = document.querySelector('#resultado')
const year = document.querySelector('#year')

const maxYear = new Date().getFullYear()
const minYear = maxYear - 10





//events
document.addEventListener('DOMContentLoaded', ()=>{
    mostrarAutos()

    llenarSelect()
})

//functions
function mostrarAutos(){
    autos.forEach(auto => {
        const autoHTML = document.createElement('p')

        const {marca, modelo, year, precio, puertas, color, transmision} = auto
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmisión: ${transmision}
            
        `

        resultados.appendChild(autoHTML)
    })
}

function llenarSelect(){
    for (let i = maxYear; i >= minYear; i--) {
        const opcion = document.createElement('option')
        opcion.value = i
        opcion.textContent = i
        year.appendChild(opcion)
    }
}