import { Productos } from "./productos.js";
import { Carrito } from "./carrito.js";
const URL = "http://hp-api.herokuapp.com/api/characters"

//Solicitar nombre al usuario
/* const { value: usuario } = await Swal.fire({
  title: `<p class="texto-alert">Ingrese su nombre</p>`,
  input: 'text',
  inputPlaceholder: 'Ingrese su nombre',
  width:'50%',
})

if (usuario) {
  Swal.fire(`<p class="texto-alert">Bievenido : ${usuario}</p>`)
  const usuarioHTML=document.getElementById("usuario");
  usuarioHTML.innerHTML=`<h2> Usuario: ${usuario}</h2>`;
  usuarioHTML.setAttribute("usuario",usuario);
} */


/* Crear un carrito */
const carrito = new Carrito([]);

/* Creación de los objetos */

const producto = [];

producto.push({ id: 1, nombre: "Nike Air Jordan 1-1", precio: 200, cantidad: 10, stock: true });
producto.push({ id: 2, nombre: "Nike Dunk Low Multi-Camo", precio: 175, cantidad: 10, stock: true });
producto.push({ id: 3, nombre: "Nike Dunk Low SE FREE.99", precio: 200, cantidad: 10, stock: true });
producto.push({ id: 4, nombre: "Nike Dunk Low SP City Market", precio: 250, cantidad: 10, stock: true });
producto.push({ id: 5, nombre: "Nike SB Zoom Dunk HP QS Kevin Bradley", precio: 350, cantidad: 10, stock: true });
producto.push({ id: 6, nombre: "Nike Air Force 1 Low 'Just Do It", precio: 75, cantidad: 10, stock: true });
producto.push({ id: 7, nombre: "Vans Old Skool LOGO", precio: 120, cantidad: 10, stock: true });
producto.push({ id: 8, nombre: "Vans Rowan", precio: 135, cantidad: 10, stock: true });
producto.push({ id: 9, nombre: "Vans SK8-Hi MTE-2", precio: 150, cantidad: 10, stock: true });


let totalCompra=0;
//Añadir accion a boton carrito 

document.getElementById("btn-Carrito-1").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-2").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-3").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-4").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-5").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-6").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-7").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-8").addEventListener("click",añadir_Producto);
document.getElementById("btn-Carrito-9").addEventListener("click",añadir_Producto);

function añadir_Producto(e){
  switch(e.target.id){
    case "btn-Carrito-1": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[0].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[0]);
    totalCompra+=producto[0].precio;
    break;

    case "btn-Carrito-2": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[1].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[1]);
    totalCompra+=producto[1].precio;
    break;

    case "btn-Carrito-3": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[2].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[2]);
    totalCompra+=producto[2].precio;
    break;

    case "btn-Carrito-4": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[3].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[3]);
    totalCompra+=producto[3].precio;
    break;

    case "btn-Carrito-5": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[4].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[4]);
    totalCompra+=producto[4].precio;
    break;

    case "btn-Carrito-6": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[5].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[5]);
    totalCompra+=producto[5].precio;
    break;

    case "btn-Carrito-7": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[6].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[6]);
    totalCompra+=producto[6].precio;
    break;

    case "btn-Carrito-8": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[7].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[7]);
    totalCompra+=producto[7].precio;
    break;

    case "btn-Carrito-9": 
    Swal.fire({
      icon: 'success',
      html: `<p class="texto-alert"> Has añadido al carrito: ${producto[8].nombre} </p>`, 
      width: '25%',
      timer: 1000
    })
    carrito.createItem(producto[8]);
    totalCompra+=producto[8].precio;
    break;

    default: alert("Producto inexistente");
    
  }

  //Capturamos el total acumulado
  /* let totalAcumulado = document.getElementById("totalAcumulado");
  totalAcumulado.innerHTML = `<h2>Total acumulado: ${totalCompra} USD</h2>`;
  totalAcumulado.setAttribute("totalAcumulado", totalCompra) */
}

//GET Usuario
$('#usuario').click( () => {
  $.get(URL, (response, status) => {
    if(status!=="success"){
      throw new Error("Error")
    }
    for(let i=0;i<response.length;i++){
      console.log(response[i].name)
    }
  })
})








