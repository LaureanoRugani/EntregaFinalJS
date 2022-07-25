const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")
// const productos = ['Venecia', 'Roma', 'Iguazu', 'Amsterdam', 'Berlin', 'Praga', 'Paris', 'Hawai', 'Cancun', 'Brasil']
const productos = ['Venecia', 'Roma', 'Iguazu', 'Amsterdam', 'Berlin', 'Praga', 'Paris', 'Hawai', 'Cancun', 'Brasil']
const carrito = []

const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito = document.getElementById("listadoCarrito")

const inputNombre = document.querySelector("#inputNombre")
const inputTelefono = document.querySelector("#inputTelefono")
const inputEmail = document.querySelector("#inputEmail")
const btnSubmit = document.querySelector("#submit")

let datosDeInput = ""

const URL = `js/viajeslr.json`
