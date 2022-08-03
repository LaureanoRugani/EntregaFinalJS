const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}
focoEnCampos()

btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete los datos antes de ENVIAR"
})

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosDeUsr()
    alert(`Lo contactaremos por mail para enviarle su cotizacion 😃`)
})

function guardarDatosDeUsr() {
    const datosDeUsr = {nombre: inputNombre.value,
                        telefono: inputTelefono.value,
                        email: inputEmail.value
    } 
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}

function recuperoDatosDeUsr() {
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        document.querySelector("#productosComprados").innerHTML = `<strong>Mi Compra:</strong> ${miCarrito.join(", ")}`
        if (localStorage.getItem("datosDeUsr")) {
            const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
                inputNombre.value = datosDeUsr.nombre
                inputTelefono.value = datosDeUsr.telefono
                inputEmail.value  = datosDeUsr.email
        }    
    }
}
recuperoDatosDeUsr()