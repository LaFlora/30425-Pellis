class Cursos{
  constructor (item,nombre,precio){
    this.item=item;
    this.nombre=nombre;
    this.precio=precio;
  }
}

const cursos = [];
cursos.push(new curso("extensivo","5000"));
cursos.push(new curso("intensivo","7000"));
cursos.push(new cursos("conversacion","3000"));
cursos.push(new cursos("business","10.000"));


let carrito = 0;
let inicio = Infinity;


function registrarCurso() {
  const extensivo = 5000;
  const intensivo = 7000;
  const conversacion = 3000;
  const business = 10.000;

  for (let i = 0; i < inicio; i++) {
    let curso = parseInt(
      prompt(
        "Elija el curso: \n 1- Extensivo \n 2- Intensivo \n 3- Conversación \n 4- Business \n 5- Salir"
      )
    );
    while (isNaN(curso)) {
      alert("Opcion incorrecta, vuelve a intentarlo");
      curso = parseInt(
        prompt(
          "Elija el curso: \n 1- Extensivo \n 2- Intensivo \n 3- Conversación \n 4- Business \n 5- Salir"
        )
      );
    }
    if (curso == 1) {
      carrito = carrito + extensivo;
      console.log(carrito);
    } else if (curso == 2) {
      carrito = carrito + intensivo;
      console.log(carrito);
    } else if (curso == 3) {
      carrito = carrito + conversacion;
      console.log(carrito);
    } else if (curso == 4) {
      carrito = carrito + business;
      console.log(carrito);
    else{
        console.log("TOTAL DE LA COMPRA= $" + carrito);
        break;
    }
  }
};


registrarCurso(inicio);
