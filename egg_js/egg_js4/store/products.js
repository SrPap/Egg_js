
// const producto1 = {
    // nombre: "celular",
    // precio: 100000,
    // stock: 2,
    // };
    
    // producto1.id = "id123";
    // producto1[foto] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

    // console.log(producto1)
    // console.log(producto1.nombre)
   
   
    class Product {
        constructor(id, title, price = 0, stock = 0, images = [], onsale = false, supplier = '') {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.images = images;
        this.onsale = onsale;
        this.supplier = supplier;
        
        }
        get getSupplier() {
            return this.supplier;
            }
            set setSupplier(newName) {
            this.supplier = newName;
            } 

        // sellUnits(units) {
        //         this.stock = this.stock - units
        //     }

             sellUnits(units) {
                 if (units > 0 && units <= this.stock) {
                     this.stock -= units; // Restar unidades del stock
                     console.log(`Se vendieron ${units} unidades de ${this.title}. Stock restante: ${this.stock}`);
                 } else {
                     console.log(`No se pueden vender ${units} unidades de ${this.title}. Stock insuficiente.`);
                 }
             }
    }
        
    const prod1 = new Product();
    const prod2 = new Product("bread","pan",1);
    const prod3 = new Product("water","agua",2,30,null,true);
    const prod4 = new Product("wine","vino",30,10,null,true,"Juan");
    const prod5 = new Product("car","carro",20000,12,null,true,"Pedro");

    console.log(prod1);
    console.log(prod2);
    console.log(prod3);
    console.log(prod4);
    console.log(prod5);

    console.log(prod2.title);
    console.log(prod3.onsale);
    console.log(prod4.getSupplier);

    prod5.sellUnits(10);
    console.log(prod5);
    prod5.sellUnits(5);
    console.log(prod5);
    // prod4.setSupplier = "Pedro";
    // console.log(prod4.getSupplier);
        