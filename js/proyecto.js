// constructores de perros y gatos

class Dogs {
  constructor(name, age, color, race) {
    (this.name = name),
      (this.age = age),
      (this.color = color),
      (this.race = race);
  }
}

// constructor de gatos sin incluir la raza

class Cats {
  constructor(name, age, color) {
    (this.name = name), (this.age = age), (this.color = color);
  }
}
// Creo los perros y los gatos

const dog1 = new Dogs("rocco", 4, "Blanco", "Caniche");
const dog2 = new Dogs("galgo", 3, "Marron", "Galgo");
// const dog3 = new Dogs("Denver", 1, "white and black", "Dalmata");
// const dog4 = new Dogs("Firu", 4, "Black", "Mezcla");
const cat1 = new Cats("isi", 2, "Negro");
const cat2 = new Cats("raul", 3, "Amarillo");

// constructor donar

class Donar {
  constructor(nombreDonante, cantidadDonada) {
    (this.nombreDonante = nombreDonante),
      (this.cantidadDonada = cantidadDonada);
  }
}

// creo un array y ingreso todos los objetos perros y gatos que tengo

const dogs = [dog1, dog2];
const cats = [cat1, cat2];

// bienvenida
let nombre = prompt("Ingrese su nombre");

// funcion principal llamada seleccion

const seleccion = () => {
  let elegir = prompt(
    `Bienvenido a Adopciones ${nombre}, ¿qué desea hacer? ¿Adoptar o Donar?`
  ).toLocaleLowerCase();

  while (elegir !== "adoptar" && elegir !== "donar") {
    if (elegir === null) {
      alert("Hasta luego");
      return;
    }
    elegir = prompt('Opción inválida. Por favor, elija "Adoptar" o "Donar"');
  }

  if (elegir === "adoptar") {
    adoptar();
  } else if (elegir === "donar") {
    donar();
  }
};

// funcion donar

const donar = () => {
  while (true) {
    const option = prompt(`${nombre}, elija una opción:
        1. Si desea donar.
        2. Si desea ver la cantidad donada.
        3. Si desea salir.`);

    if (option === "1") {
      const nombreDonante = prompt("Ingrese su nombre y su apellido");
      let cantidadDonada = prompt("Ingrese el monto a donar");
      cantidadDonada = Number(cantidadDonada);

      while (isNaN(cantidadDonada) || cantidadDonada <= 0) {
        alert("Ingrese un monto válido");
        cantidadDonada = prompt("Ingrese el monto a donar");
        cantidadDonada = Number(cantidadDonada);
      }

      const donante = new Donar(nombreDonante, cantidadDonada);
      montoDonar.push(donante);

      alert(
        `${nombreDonante}, usted ha donado ${cantidadDonada}. ¡Muchas gracias por su aporte!`
      );
    } else if (option === "2") {
      alert(
        montoDonar.map(
          (dog) =>
            `Gracias ${dog.nombreDonante} por donar ${dog.cantidadDonada}.`
        )
      );
    } else if (option === "3") {
      break;
    } else {
      alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
  }

  alert("¡Gracias por su participación! ¡Hasta la próxima!");
};

// funcion adoptar
const adoptar = () => {
  let continuar = true;
  while (continuar) {
    const dogsOrCats = prompt(`${nombre} selecciones que desea adoptar: 1-perros
    2-Gatos
    3-salir`);
    if (dogsOrCats === "1") {
      funcionOptionDogs();
      continuar = false;
    } else if (dogsOrCats === "2") {
      funcionOptionCats();
      continuar = false;
    } else if (dogsOrCats === "3") {
      alert("gracias lo esperamos pronto");
      break;
    } else {
      alert("ingrese la opcion correcta");
    }
  }
};

// funcion perros
const funcionOptionDogs = () => {
  const dogNames = dogs.map((dog) => dog.name).join(", ");
  const dogName = prompt(
    `Estos son los perritos disponibles: ${dogNames}
      Ingrese el nombre del perro que desea adoptar o ingrese "no" para salir.`
  );

  if (dogName === "no") {
    alert(
      "Gracias de todas formas, ellos te estarán esperando aquí cuando quieras."
    );
    return;
  }

  const selectedDog = dogs.find((dog) => dog.name === dogName);

  if (selectedDog) {
    alert(`Elegiste a ${selectedDog.name}. ¡Es tu nuevo compañero de vida!
        Detalles: Color: ${selectedDog.color}, Edad: ${selectedDog.age} años, Raza: ${selectedDog.race}.`);
  } else {
    alert("El nombre ingresado no coincide con ningún perro disponible.");
  }
};

// funcion gatos
const funcionOptionCats = () => {
  const catNames = cats.map((cat) => cat.name).join(", ");
  const catName = prompt(
    `Estos son los perritos disponibles: ${catNames}
      Ingrese el nombre del perro que desea adoptar o ingrese "no" para salir.`
  );

  if (catName === "no") {
    alert(
      "Gracias de todas formas, ellos te estarán esperando aquí cuando quieras."
    );
    return;
  }

  const selectedCat = cats.find((cat) => cat.name === catName);

  if (selectedCat) {
    alert(`Elegiste a ${selectedCat.name}. ¡Es tu nuevo compañero de vida!
        Detalles: Color: ${selectedCat.color}, Edad: ${selectedCat.age} años.`);
  } else {
    alert("El nombre ingresado no coincide con ningún perro disponible.");
  }
};

// array donde se almacena los montos donados
const montoDonar = [];

// llamado a la funcion principal
seleccion();
