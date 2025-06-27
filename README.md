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
