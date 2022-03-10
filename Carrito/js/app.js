//variables
const carrito = document.querySelector('#carrito')
const contenedorCarrito = document.querySelector('#lista-carrito tbody')
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos')
let articulosCarrito = []

cargarEvenListeners()
function cargarEvenListeners(){
    //se agrega un curso al presionar el boton
    listaCursos.addEventListener('click', agregarCurso)

    //se elmina un curso del carrito
    carrito.addEventListener('click', eliminarCurso)

    //se limpia todo el contenido del carrito
    vaciarCarritoBtn.addEventListener('click', ()=>{
        //console.log('Vaciando Carrito...')
        articulosCarrito = []
        limpiarHTML()
    })
}


//Funciones
function agregarCurso(e){
    //evitamos que la pagina se vaya
    //hacia arriba cuando hacemos clic sobre el boton
    e.preventDefault()

    //Evitamos el event bubling
    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement
        
        leerDatosCursos(cursoSeleccionado)
    }
}


//Eliminar curso del carro
function eliminarCurso(e){
    //console.log(e.target.classList)
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id')

        //Elimina del arreglo articulosCarrito por el id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId)

        //console.log(articulosCarrito)

        //Llamo a la funcion carrito
        //para que actualice el contenido del
        //html
        carritoHTML()
    }

}

//Leyendo los datos del div del curso
function leerDatosCursos(curso){

    //creando un objeto curso
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //Revisa si un elemento fue agregado al carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id)

    if (existe){
        //Se actualiza la cantidad
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
               curso.cantidad ++
               return curso //retorna el objeto actualizado
            }else{
                return curso
            }
        })
        articulosCarrito = [...cursos]
    }else{
        //Agrega elementos al carrito
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    
    //console.log(articulosCarrito)

    carritoHTML()
    
}

function carritoHTML(){
    //limpiar HTML
    limpiarHTML()
    
    //Se recorre los elementos del array de articulos
    articulosCarrito.forEach(curso => {

        //Destructurando el objeto curso
        const { imagen, titulo, precio, cantidad, id } = curso
        const row = document.createElement('tr')
        row.innerHTML = `
            <td>
                <img src="${imagen}" width="100" >
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X </a>
            </td>
        `

        //Se agrega al HTML tbody del carrito
        contenedorCarrito.appendChild(row)
    })


}

function limpiarHTML(){
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}
