//Eliminando elementos del LocalStorage

// localStorage.removeItem('Nombre')

// //Para actualizar un registro
const autosArray = JSON.parse(localStorage.getItem('Autos'))
console.log(autosArray)
autosArray.push('Mercedes Benz')
localStorage.setItem('Autos',JSON.stringify(autosArray))


//Usado para limpiar todo el localStorage 
localStorage.clear() 
