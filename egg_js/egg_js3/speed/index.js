// primera actividad

// function calcularVelocidad() {
    // const distancia = 10
    // const tiempo = 2
    // const velocidad = distancia / tiempo;
    // console.log("La velocidad del móvil es " + velocidad);
    // }

// calcularVelocidad();
// calcularVelocidad();
// calcularVelocidad();

// segunda actividad

// function calcularVelocidad(distancia, tiempo) {
    // const velocidad = distancia / tiempo;
    // console.log("La velocidad del móvil es " + velocidad);
    // }
    
// calcularVelocidad(10,2);
// calcularVelocidad(100,2);
// calcularVelocidad(75,3);

// tercera actividad

const calcularVelocidad = (distancia, tiempo) => {
    const velocidad = distancia / tiempo;
    // console.log("La velocidad del móvil es " + velocidad);
        return velocidad
    }
    const velocidad1 = calcularVelocidad(10,2);
    console.log("La velocidad de una persona es " + velocidad1);
        
    const velocidad2 = calcularVelocidad(100,2);
    console.log("La velocidad de un automovil " + velocidad2);
  
   const velocidad3 = calcularVelocidad(75,3);
   console.log("La velocidad de una moto " + velocidad3);
