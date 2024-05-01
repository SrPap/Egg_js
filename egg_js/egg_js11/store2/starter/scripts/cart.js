function resetLocalStorage() {
    localStorage.clear(); // Limpiar todos los datos almacenados en localStorage
  }



// Primera parte
// Obtener productos del localStorage
let cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

// Verificar si hay productos en el carrito y son válidos
if (!Array.isArray(cartProducts)) {
    cartProducts = []; // Reiniciar a un array vacío si no es un array válido
}


function createCartCard(product) {
    return `
        <div class="cart-item">
            <img src="${product.image}" alt="${product.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h3 class="cart-item-title">${product.title}</h3>
                <p class="cart-item-description">${product.description}</p>
                <p class="cart-item-price">Precio:  $${product.price}</p>
                <p class="cart-item-quantity">Cantidad: ${product.quantity}</p>
            </div>
        </div>
    `;
}

function printCartCards(products) {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.innerHTML = ''; // Limpiar el contenido actual del contenedor

    // Generar y agregar tarjetas de productos al contenedor
    products.forEach(product => {
        const cartCard = createCartCard(product);
        cartContainer.innerHTML += cartCard;
    });
}

// Renderizar las tarjetas de productos en el carrito
printCartCards(cartProducts);


// Segunda parte

// Definir función para generar el template del cuadro de detalle del total
function createTotalTemplate(arrayOfProducts) {
    let total = 0;

    // Calcular el subtotal sumando el precio * cantidad de cada producto
    arrayOfProducts.forEach(product => {
        total += product.price * product.quantity;
    });

    // Generar el template con el subtotal y el botón de compra
    return `
        <h4 class="total-title">Resumen del pedido</h4>
        <div class="Buy-cart">
          <p class="total-p">Total a pagar: $${total.toFixed(2)}</p>
          <p class="total-p">Incluye impuesto PAIS y percepcion AFIP.</p>
          <button id="buy" type="button">COMPRAR</button>
        </div>
        <button onclick="resetLocalStorage()" type="button" class="cart-btn">
                    Borrar al Carrito
                  </button>
    `;
}

// Definir función para imprimir el cuadro de detalle del total en la vista
function printTotal(products) {
    const totalContainer = document.querySelector('.total-container');

    // Verificar si hay productos para calcular el total
    if (products.length > 0) {
        const totalTemplate = createTotalTemplate(products);
        totalContainer.innerHTML = totalTemplate;

        // Agregar evento al botón de compra (puedes implementar la lógica de compra aquí)
        const buyButton = document.querySelector('#buy');
        if (buyButton) {
            buyButton.addEventListener('click', () => {
                // Lógica para realizar la compra
                alert('Compra realizada. ¡Gracias por tu compra!');
                // Aquí puedes añadir la lógica adicional después de la compra
            });
        }
    } else {
        // Si no hay productos, mostrar un mensaje o manejar el caso según tu necesidad
        totalContainer.innerHTML = '<p>No hay productos en el carrito.</p>';
    }
}

// Ejemplo de uso:
// Suponiendo que 'cartProducts' es un array de productos del carrito obtenido del localStorage
printTotal(cartProducts);