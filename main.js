const productos = [
    {
        nombre: 'Zapato negro',
        tipo: 'zapato',
        color: 'negro',
        img: './img/taco-negro.jpg',
    },
    {
        nombre: 'Zapato azul',
        tipo: 'zapato',
        color: 'azul',
        img: './img/taco-azul.jpg',
    },
    {
        nombre: 'Bota negra',
        tipo: 'bota',
        color: 'negro',
        img: './img/bota-negra.jpg',
    },
    { nombre: 'Bota azul', tipo: 'bota', color: 'azul', img: './img/bota-azul.jpg' },
    {
        nombre: 'Zapato rojo',
        tipo: 'zapato',
        color: 'rojo',
        img: './img/zapato-rojo.jpg',
    },
];


const contenedorTarjeta = document.getElementById("tarjetas")
const formfiltro = document.getElementById("filtro")
const inputFiltro = document.getElementById("buscador")
const inputSubmit = document.querySelectorAll("input[type= 'text']")

//Funcion filtros 

const ejecutaFiltro = (valorElegido) => {
    let arrayElegido = valorElegido.toLowerCase().split(" ")

    let productosElegidos = arrayElegido.reduce((acc, curr) => {
        acc = acc.filter(producto => {
            return producto.color.includes(curr) ||
                producto.tipo.includes(curr) ||
                producto.nombre.toLowerCase().includes(curr)
        })
        return acc
    }, productos)

    contenedorTarjeta.innerHTML = accTarjetas(productosElegidos)

}

//Funcion que acc tarjetas 

const accTarjetas = (arr) => {
    let acc = "";
    arr.forEach(producto => {
        acc += `<div class="card"><img src="${producto.img}" alt="${producto.nombre}">
     <div class="nombrecard">${producto.nombre}</div>
     </div>`
    })
    return acc
}
contenedorTarjeta.innerHTML = accTarjetas(productos)

formfiltro.onsubmit = e => {
    e.preventDefault()
    ejecutaFiltro(inputFiltro.value)

}

window.onkeypress = e => {
    if (e.keyCode == 13) {
        ejecutaFiltro(inputFiltro.value)
    }

}