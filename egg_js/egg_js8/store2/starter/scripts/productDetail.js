const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(id);

function printDetails(id) {
    // Encontrar el producto con el ID proporcionado
    const product = products.find((each) => each.id === id);
 
    // Verificar si se encontró un producto con el ID dado
    if (!product) {
       console.error(`No se encontró ningún producto con el ID ${id}`);
       return; // Salir de la función si no se encuentra el producto
    }
 
     // Generar las opciones del <select> a partir del array de colores del producto
    const colorOptions = product.colors.map(
    (color) => `<option value="${color}">${color}</option>`
    ).join(""); // Unir todas las opciones en una cadena

 // Generar las miniaturas de las imágenes del producto con la clase "product-img"
 const imageThumbnails = product.images.map(
    (image) => `<img class="miniImg product-img" src="${image}" alt="mini" onclick="changeMini(event)" />`
 ).join(""); // Unir todas las miniaturas en una cadena


    // Definir la plantilla de detalles del producto
    const detailsTemplate = `
    <div class="product-details">
       <h2>${product.title}</h2>
       <div class="product-images-block">
          ${imageThumbnails}
       </div>

       <p><strong>Precio:</strong> ${product.price}</p>
       <p><strong>Stock:</strong> ${product.stock}</p>
       <p><strong>Descripción:</strong> ${product.description}</p>
       <label for="colorSelect"><strong>Selecciona un color:</strong></label>
       <select id="colorSelect" name="colorSelect">
          ${colorOptions}
       </select>
    </div>
 `;
 
    // Seleccionar el elemento donde se imprimirá la plantilla
    const detailsSelector = document.querySelector("#details");
 
    // Actualizar la vista de detalles con la plantilla renderizada
    detailsSelector.innerHTML = detailsTemplate;
 }

 // Capturar el parámetro 'id' de la URL
const busqueda = location.search;
const parammetros = new URLSearchParams(query);
const idNumero = parseInt(params.get('id')); // Convertir a número entero

// Llamar a la función printDetails con el 'id' capturado
printDetails(idNumero);
 