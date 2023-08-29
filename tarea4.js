// Clase principal
class Personaje {
    constructor(person) {
      this.nombre = person.nombre;
      this.salud = person.datos.salud;
      this.fuerza = person.datos.fuerza;
    }
  
    atacar() {
      console.log(`${this.nombre} ataca con una fuerza de ${this.fuerza}.`);
    }
  
    recibirAtaque() {
      console.log(`Daño causado a ${this.nombre}`);
    }
  }
  
  // Clase que hereda de la clase principal
  class Guerrero extends Personaje {
    constructor(person) {
        super(person);
      this.arma = person.arma;
      
    }

    mostrarInfoCompleta() {
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Arma: ${this.arma}`);
      }

    usarArma() {
      console.log(`${this.nombre} ataca con ${this.arma} y una fuerza de ${this.fuerza + 10}.`);
    }
  }


const person = {
    nombre: 'Kratos',
    arma: 'Espadas',
    datos:{    
        salud: 100,
        fuerza: 80
    }
}
  // Creación de objetos para las instancias de las clases
  const personaje1 = new Personaje(person);
  personaje1.atacar(); 
  personaje1.recibirAtaque(); 
  
  const humano = new Guerrero ({ 
  nombre: 'Mylser',
  arma: 'hacha',
  datos:{    
      salud: 80,
      fuerza: 10
  }
})


humano.mostrarInfoCompleta();
humano.usarArma(); 
  
  