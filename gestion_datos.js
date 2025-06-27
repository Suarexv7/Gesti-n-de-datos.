// Paso 1: Crear productos como objetos
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Crear algunos productos
const producto1 = new Producto(1, "Laptop", 1000);
const producto2 = new Producto(2, "Smartphone", 500);
const producto3 = new Producto(3, "Tablet", 300);
const producto4 = new Producto(1, "Televisor", 1000); // Producto duplicado

// Paso 2: Crear un Set para evitar duplicados
const productosSet = new Set();
productosSet.add(producto1);
productosSet.add(producto2);
productosSet.add(producto3);
productosSet.add(producto4); // Este no se agregará, ya que es un duplicado

// Paso 3: Crear un Map para asociar categorías con productos
const productosMap = new Map();
productosMap.set("Electrónica", "Laptop");
productosMap.set("Electrónica", "Smartphone");
productosMap.set("Tablets", "Tablet");

// Paso 4: Recorrer los datos con distintos bucles

// Usando for...of para recorrer el Set de productos
console.log("Recorriendo productos:");
for (let producto of productosSet) {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
}

// Usando for...in para recorrer las claves del Map
console.log("\nRecorriendo categorías y productos:");
for (let categoria in productosMap) {
    console.log(`Categoría: ${categoria}, Producto: ${productosMap[categoria]}`);
}

// Usando forEach() en el Set
console.log("\nRecorriendo:");
productosSet.forEach((producto) => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
});
