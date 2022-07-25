const retornoCardContenido = (contenido)=> {
   const {imagen, titulo, destino, disponibilidad,} = contenido
   return `<div class="col s12 m6 l3">
               <div class="card z-depth-2">
                  <div class="card-image">
                     <img class="tamano" loading="lazy" src="${imagen}" title="${titulo}">
                  </div>
                  <div class="card-content grey">
                     <p class="yellow-text">DESTINO: <span class="white-text">${destino}</span></p>
                     <p class="yellow-text">DISPONIBILIDAD: <span class="white-text">${disponibilidad}</span></p>
                  </div>
               </div>
         </div>`
}

const retornoCardError = ()=> {
   return `<div class="center white-text"> 
               <br><br><br><br> 
               <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
               <br><br> 
               <i class="large material-icons">sentiment_very_dissatisfied</i> 
               <br><br> 
         </div>`
}


const obtenerContenido = (URL)=> {
let cardsAmostrar = ""
      fetch(URL)
         .then((response)=> response.json() )
         .then( (data)=> {
               for (contenido of data)
                  cardsAmostrar += retornoCardContenido(contenido)
               contenidoDOM.innerHTML = cardsAmostrar
         })
         .catch((error)=> contenidoDOM.innerHTML = retornoCardError() )
         .finally(()=> cargandoDOM.innerHTML = "")

         function cargarProductos() {
            listadoFrutas.innerHTML = ""
            for (const producto of productos) {
               const li = document.createElement("li")
                  li.className = "collection-item blue-text"
                  li.innerText = producto
                  li.id = producto + "Prod"
                  li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
                  listadoFrutas.append(li)
            }
      }

      cargarProductos()
      
      function agregarAlCarrito(prod) {
            if (prod.trim() !== "") {
               carrito.push(prod) 
               guardoCarrito()
               const liNuevoProducto = document.createElement("li")
                  liNuevoProducto.className = "collection-item blue-text"
                  liNuevoProducto.innerText = prod
                  liNuevoProducto.id = prod + "EnCarrito"
                  liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
                  listadoCarrito.append(liNuevoProducto)
            }
      }
   
      function removerDelCarrito(prod) {
            const productoAremover = document.getElementById(`${prod}`)
               productoAremover.remove()
               item = carrito.indexOf(productoAremover.innerText)
               if (item >= 0) {
                  carrito.splice(item, 1)
                  guardoCarrito()
               }
               console.warn(`${prod} ha sido eliminado del carrito.`)
      }
      
      function guardoCarrito() {
            if (carrito.length > 0) {
               localStorage.setItem("carrito", JSON.stringify(carrito))
            }
      }
      
      function recuperoCarrito() {
            if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
               miCarrito.forEach(prod => {
                  carrito.push(prod)
                  const liNuevoProducto = document.createElement("li")
                        liNuevoProducto.className = "collection-item blue-text"
                        liNuevoProducto.innerText = prod
                        liNuevoProducto.id = prod + "EnCarrito"
                        liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
                        listadoCarrito.append(liNuevoProducto)
               });
            }
      }
   
      recuperoCarrito()
}









