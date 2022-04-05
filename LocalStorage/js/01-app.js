//AGREGANDO ELEMENTOS
//SOLO ADMITE ELEMENTOS DE TIPO STRING


localStorage.setItem('Nombre', 'Martin')

producto = {
    nombre : 'Celular',
    precio : 30000,
    marca : 'Samsung'
}

autos = ['Toyota','Volskwagen','Fiat','BMW','Reanult']

//Convierto el objeto a un string
const objString = JSON.stringify(producto)

localStorage.setItem('producto',objString)

//Tambien puedo convertir un arreglo a un string
const arrayString = JSON.stringify(autos)

localStorage.setItem('Autos', arrayString)