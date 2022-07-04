let carrito = 0;
let inicio = Infinity;


function registrarCurso() {
  const ingles = 100;
  const espanol = 200;
  const frances = 250;

  for (let i = 0; i < inicio; i++) {
    let curso = parseInt(
      prompt(
        "Elija el curso: \n 1- Ingles \n 2- Español \n 3-Frances \n 4- Salir"
      )
    );
    while (isNaN(curso)) {
      alert("Opcion incorrecta, vuelve a intentarlo");
      curso = parseInt(
        prompt(
          "Elija el curso: \n 1- Ingles \n 2- Español \n 3-Frances \n 4- Salir"
        )
      );
    }
    if (curso == 1) {
      carrito = carrito + ingles;
      console.log(carrito);
    } else if (curso == 2) {
      carrito = carrito + espanol;
      console.log(carrito);
    } else if (curso == 3) {
      carrito = carrito + frances;
      console.log(carrito);
    }
    else{
        console.log("TOTAL DE LA COMPRA= $" + carrito);
        break;
    }
  }
};


registrarCurso(inicio);
