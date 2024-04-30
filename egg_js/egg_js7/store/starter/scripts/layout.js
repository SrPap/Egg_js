// act1

const navselector = document.querySelector("#nav1");

const optionsNav = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html" },
    { title: "Como comprar", linkTo: "./how.html" },
    { title: "Costos y tarifas", linkTo: "./taxs.html" },
    { title: "Mis pedidos", linkTo: "./orders.html" },
    { title: "Garantia", linkTo: "./warranty.html" },
];

for (let option of optionsNav) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button";
    anchor.textContent = option.title;
    anchor.href = option.linkTo;

    navselector.appendChild(anchor);
};

// act2


const footerSelector = document.querySelector("#footer");

const optionsFooter = [
    { title: ["Ofertas"], opts: ["Laptops", "Audio", "Auticulares"] ,linkTo: "index.html"},
    { title: ["Como comprar"], opts: ["Formas de pago", "Envios", "Devoluciones"] ,linkTo: "index.html"},
    { title: ["Costos y tarifas"], opts: ["Impuestos", "Facturacion"] ,linkTo: "index.html"},
    { title: ["Mis pedidos"], opts: ["Pedir nuevamente", "Listas de deseos"] ,linkTo: "index.html"},
    { title: ["Garantia"], opts: [] ,linkTo: "index.html"},
    ];


    for (let option of optionsFooter) {
    // Crear el título y enlace
    const title = document.createElement("h3");
    const titleLink = document.createElement("a");
    titleLink.textContent = option.title;
    titleLink.href = option.linkTo;
    title.appendChild(titleLink);

    // Crear la lista de opciones
    const optsList = document.createElement("ul");
    for (let opt of option.opts) {
        const optItem = document.createElement("li");
        optItem.textContent = opt;
        optsList.appendChild(optItem);
    }

    // Agregar elementos al pie de página
    footerSelector.appendChild(title);
    footerSelector.appendChild(optsList);
}
    

// act3
class Product {
    constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '', colors = '', description = '') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this.supplier = supplier;
        this.colors = colors;
        this.description = description;
    }
}

const imagenesProd1 = ['/egg_js5/store/img_js/pan1.jpg', '/egg_js5/store/img_js/pan2.jpg', '/egg_js5/store/img_js/pan3.jpg']; //pan
const imagenesProd2 = ['/egg_js5/store/img_js/agua1.jpg', '/egg_js5/store/img_js/agua2.jpg', '/egg_js5/store/img_js/agua3.jpg']; //agua
const imagenesProd3 = ['/egg_js5/store/img_js/vino1.jpg', '/egg_js5/store/img_js/vino2.jpg']; //vino
const imagenesProd4 = ['/egg_js5/store/img_js/carro1.jpg', '/egg_js5/store/img_js/carro2.jpg']; //carro
const imagenesProd5 = ['/egg_js5/store/img_js/papel1.jpg', '/egg_js5/store/img_js/papel2.jpg']; //papel
const imagenesProd6 = ['/egg_js5/store/img_js/silla1.jpg', '/egg_js5/store/img_js/silla2.jpg']; //silla

const prod1 = new Product(1, "Pan", 1, 50, imagenesProd1, true, "Juan", ['blanco', 'negro', 'rojo'], "Pan fresco y crujiente");
const prod2 = new Product(2, "Agua", 2, 100, imagenesProd2, false, "Pedro", ['azul', 'verde'], "Agua purificada sin gas");
const prod3 = new Product(3, "Vino", 30, 20, imagenesProd3, true, "Carlos", ['rojo'], "Vino tinto reserva");
const prod4 = new Product(4, "Carro", 20000, 5, imagenesProd4, false, "María", ['negro', 'gris'], "Carro deportivo de lujo");
const prod5 = new Product(5, "Papel", 10, 200, imagenesProd5, true, "Ana", ['blanco'], "Papel de alta calidad");
const prod6 = new Product(6, "Silla", 50, 30, imagenesProd6, false, "Luis", ['madera', 'negro'], "Silla ergonómica moderna");

const products = [prod1, prod2, prod3, prod4, prod5, prod6];

const productsSelector = document.getElementById("products");

// Iterar sobre el array de productos y renderizar las tarjetas
products.forEach(product => {
    // Crear contenedor de tarjeta
    const card = document.createElement("div");
    card.classList.add("product-card");

    // Crear elementos para mostrar información del producto (título, imagen, precio, etc.)
    const title = document.createElement("h2");
    title.textContent = product.title;

    const image = document.createElement("img");
    image.src = product.images[0]; // Mostrar la primera imagen del producto
image.style.width = '100px';
image.style.height = '100px';
    const price = document.createElement("p");
    price.textContent = `Precio: $${product.price}`;

    // Agregar elementos a la tarjeta
    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(price);

    // Agregar tarjeta al contenedor de productos
    productsSelector.appendChild(card);
});
