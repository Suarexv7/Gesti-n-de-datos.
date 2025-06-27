# Gesti-n-de-datos.
Gestión de Datos con Objetos, Sets y Maps.

# Gestión de Productos con Objetos, Sets y Maps

Este proyecto está diseñado para gestionar productos utilizando **objetos**, **Sets** y **Maps** en JavaScript. El objetivo es evitar duplicados, asociar categorías a los productos y recorrer los datos usando distintos tipos de bucles.

## Requisitos
El programa permite almacenar productos con las siguientes propiedades:
- **ID**: Clave única del producto.
- **Nombre**: Nombre del producto.
- **Precio**: Valor numérico del producto.

### Funcionalidades:
1. **Evitar duplicados**: Usando un **Set**, se asegura que no haya productos duplicados.
2. **Asociar categorías**: Usamos un **Map** para asociar categorías con los productos.
3. **Recorrer los datos**: El programa recorre los productos utilizando:
   - `for...of` para el `Set`.
   - `for...in` para las claves del `Map`.
   - `forEach()` para iterar sobre el `Set`.

## Instrucciones de Uso

1. **Ejecutar el código**:
   - Este código está escrito en JavaScript y puedes ejecutarlo en cualquier entorno que soporte JavaScript, como un navegador o un entorno de desarrollo Node.js.
   - Si lo ejecutas en un navegador, puedes pegar el código en la consola de desarrollador (F12 > Consola).

2. **Descripción del flujo**:
   - El programa comienza creando varios productos con la clase `Producto`, con propiedades de `id`, `nombre` y `precio`.
   - Luego se agrega cada producto a un **Set**, lo que asegura que no haya duplicados.
   - Después, se agrega cada producto a un **Map** con categorías asociadas.
   - Finalmente, el programa recorre y muestra los productos y sus categorías usando tres métodos de iteración:
     1. **`for...of`** para recorrer el `Set` de productos.
     2. **`for...in`** para recorrer las claves del `Map`.
     3. **`forEach()`** para recorrer el `Set`.

## Código JavaScript

```javascript
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
const producto4 = new Producto(1, "Laptop", 1000); // Producto duplicado

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
console.log("Recorriendo Set de productos:");
for (let producto of productosSet) {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
}

// Usando for...in para recorrer las claves del Map
console.log("\nRecorriendo Map de categorías y productos:");
for (let categoria in productosMap) {
    console.log(`Categoría: ${categoria}, Producto: ${productosMap[categoria]}`);
}

// Usando forEach() en el Set
console.log("\nUsando forEach() para recorrer el Set:");
productosSet.forEach((producto) => {
    console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
});
