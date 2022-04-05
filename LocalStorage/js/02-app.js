//Obtener datos del localStorage
const nombre = localStorage.getItem('Nombre')
console.log(nombre)

//conviertiendo un string a uun objeto
const productoJson = JSON.parse(localStorage.getItem('producto'))
console.log(productoJson)

//convirtiendo un strin a un array
const autoArray = JSON.parse(localStorage.getItem('Autos'))
console.log(autoArray)