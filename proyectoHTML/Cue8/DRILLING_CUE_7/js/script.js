let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


/*------------------------------------------------------------ */
const carrito = document.getElementById('carrito');
const zapatos = document.getElementById('lista-productos');
const listaZapato = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');


cargarEventListeners();

function cargarEventListeners() {
    zapatos.addEventListener('click', comprarZapatos);
    carrito.addEventListener('click', eliminarZapatos);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    document.addEventListener('DOMContentLoaded', leerLocalStorage)
}


function comprarZapatos(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const zapato = e.target.parentElement.parentElement;
        leerDatosZapatos(zapato);
    }
}

function leerDatosZapatos(zapato) {
    const infoZaptatos = {
        imagen: zapato.querySelector('img').src,
        titulo: zapato.querySelector('h3').textContent,
        precio: zapato.querySelector('.price ').textContent,
        id: zapato.querySelector('a').getAttribute('date-id')
    }
    insertarCarrito(infoZaptatos);
}

function insertarCarrito(zapato) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${zapato.imagen}" width=100>
        </td>
        <td>${zapato.titulo}</td>
        <td>${zapato.precio}</td>
        <td>
            <a href="#" class="borrar-zapato" data-id="${zapato.id}">X</a>
        </td>
    `;
    listaZapato.appendChild(row);
    guardarZapatoLocalStorage(zapato);
}


function eliminarZapatos(e) {
    e.preventDefault();

    let zapato,
        zapatoId;
    if (e.target.classList.contains('borrar-zapato')) {
        e.target.parentElement.parentElement.remove();
        zapato = e.target.parentElement.parentElement;
        zapatoId = zapato.querySelector('a').getAttribute('data-id');
    }
    eliminarZapatoLocalStorage(zapatoId);
}


function vaciarCarrito() {
    while (listaZapato.firstChild) {
        listaZapato.removeChild(listaZapato.firstChild);
    }
    vaciarLocalStorage();
    return false;
}

function guardarZapatoLocalStorage(zapato) {
    let zapatos;
    zapatos = obtenerZapatosLocalStorage();
    zapatos.push(zapato);
    localStorage.setItem('zapatos', JSON.stringify(zapatos))
}

function obtenerZapatosLocalStorage() {
    let zapatoLS;

    if (localStorage.getItem('zapatos') === null) {
        zapatoLS = [];
    } else {
        zapatoLS = JSON.parse(localStorage.getItem('zapatos'));
    }
    return zapatoLS;
}


function leerLocalStorage() {
    let zapatoLS;

    zapatoLS = obtenerZapatosLocalStorage();

    zapatoLS.forEach(function (zapato) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${zapato.imagen}" width=100> 
            </td>
            <td>${zapato.titulo}</td>
            <td>${zapato.precio}</td>
            <td>
                <a href="#" class="borrar-zapato" data-id="${zapato.id}">X</a>
            </td>
        `;
        listaZapato.appendChild(row);
    });

}


function eliminarZapatoLocalStorage(zapato) {
    let zapatosLS;

    zapatosLS = obtenerZapatosLocalStorage();

    zapatosLS.forEach(function (zapatosLS, index) {
        if (zapatosLS.id === zapato) {
            zapatosLS.splice(index, 1)
        }
    });

    localStorage.setItem('zapatos', JSON.stringify(zapatosLS));
}

function vaciarLocalStorage() {
    localStorage.clear();
}