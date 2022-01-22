/* Definición de la clase productos */

export class Productos {
  constructor(id, nombre, precio, cantidad, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.stock = stock;
  }

  getNombre() {
    return this.nombre;
  }

  getPrecio() {
    return this.precio;
  }

  agotado() {
    this.stock = false;
  }
}
