let cursos=[];

let formulario;
let inputNombre;
let inputModalidad;
let inputIdioma;

class Curso {
  constructor (formulario, nombre, modalidad, idioma, precio){
    this.formulario=formulario;
    this.nombre=nombre;
    this.idioma=idioma;
    this.modalidad=modalidad;
    this.precio=precio;
  }
}

function inicializarElementos(){
  formulario=document.getElementById("formulario");
  inputNombre=document.getElementById("nombre");
  inputIdioma=document.getElementById("idioma");
  inputModalidad=document.getElementById("modalidad");
  console.log(formulario, nombre, idioma, modalidad);
}

let curso1= new Curso (1,"extensivo", "ingles",5000);
let curso2= new Curso (2,"extensivo", "frances",5000);
let curso3= new Curso (3,"extensivo", "portugues",5000);
let curso4= new Curso (4,"extensivo", "espaniol",5000);
let curso5= new Curso (5, "intensivo", "ingles", 7000);
let curso6= new Curso (6, "intensivo", "frances", 7000);
let curso7= new Curso (7, "intensivo", "portugues", 7000);
let curso8= new Curso (8, "intensivo", "espaniol", 7000);
let curso9= new Curso (9, "conversacion", "ingles", 3000);
let curso10= new Curso (10, "conversacion", "frances", 3000);
let curso11= new Curso (11, "conversacion", "portugues", 3000);
let curso12= new Curso (12, "conversacion", "espaniol", 3000);
let curso13= new Curso (13, "business", "ingles", 10000);
let curso14= new Curso (14, "business", "frances", 10000);
let curso15= new Curso (15, "business", "portugues", 10000);
let curso16= new Curso (16, "business", "espaniol", 10000);

cursos.push(curso1, curso2, curso3, curso4, curso5, curso6, curso7, curso8, curso9, curso10, curso11, curso12, curso13, curso14, curso15, curso16);

console.log(cursos);

formulario.onsubmit= (event) => {
  inicializarElementos();
  event.preventDefault();
  console.log(inputNombre.value, inputIdioma.value, inputModalidad);

  let curso17= new Curso (inputNombre, inputIdioma, inputModalidad);
  cursos.push(curso17)
  limpiarTabla();
  agregarCursosParaTabla();
  formulario.reset();
  
}



function limpiarTabla(){
  while(tabla.rows.length > 1){
    table.deleteRow(1)
}
}
function agregarCursosParaTabla(){
  cursos.forEach(element => {
    let tabla = document.querySelector(".tabla")
    let filaTabla = document.createElement("tr")

    filaTabla.innerHTML = `
    <td>${curso.nombre}</td>
    <td>${curso.idioma}</td>
    <td>${curso.modalidad}</td>
    `
  tabla.append(filaTabla)
  });
}
