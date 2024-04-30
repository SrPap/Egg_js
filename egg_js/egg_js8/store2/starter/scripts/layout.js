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


const productsSelector = document.getElementById("products");
