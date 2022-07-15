class Curso{
    constructor(id,modalidad,precio){
        this.id=id;
        this.modalidad=modalidad;
        this.precio=precio;
    }
    mostrarCurso(){
        return"id:"+
        this.id+
        "modalidad:"+
        this.modalidad+
        "precio:"+
        this.precio+
        "\n"
    }
}

let cursos = [
    new Curso (1,"extensivo ingles",5000),
    new Curso (2,"extensivo frances",5000),
    new Curso (3,"extensivo portugues",5000),
    new Curso (4,"extensivo espaniol",5000),
    new Curso (5, "intensivo ingles", 7000),
    new Curso (6, "intensivo frances", 7000),
    new Curso (7, "intensivo portugues", 7000),
    new Curso (8, "intensivo espaniol", 7000),
    new Curso (9, "conversacion ingles", 3000),
    new Curso (10, "conversacion frances", 3000),
    new Curso (11, "conversacion portugues", 3000),
    new Curso (12, "conversacion espaniol", 3000),
    new Curso (13, "business ingles", 10000),
    new Curso (14, "business frances", 10000),
    new Curso (15, "business portugues", 10000),
    new Curso (16, "business espaniol", 10000),
    ];

let modalidades = ["extensivo","intensivo","conversacion","business"]

let cursosEnCarrito = [];
console.log(cursos);

let modalidad = "";
let salir = "salir";
let idElegido = "";
while (modalidad!=salir && modalidad!=null){
    let aux=modalidades.join(",");
    modalidad= prompt('Elija una modalidad o escriba "salir": \n ('+aux+')');
    if(modalidad!=salir && modalidad!=null){
        let modalidadConIdioma=cursos.filter(
            (item) => item.modalidad==cursos);
        console.log(modalidadConIdioma);
    let cartel="";
    for(let i=0;i <modalidadConIdioma.length;i++){
        cartel+=modalidadConIdioma[i].mostrarCurso();
        
    }
    let idElegido = parseInt(prompt("Seleccione el id del curso que desea seguir \n" + cartel));

    let cursoParaCarrito = modalidadConIdioma.find(item=> item.id == idElegido);
    console.log(cursoParaCarrito);

    if(cursoParaCarrito){
        cursosEnCarrito.push(cursoParaCarrito);
    }
    }
}

function comprar(nombre,telefono,email,cursosEnCarrito){
    let cantidad=cursosEnCarrito.reduce((acc, item)=> item.precio + acc ,0 );
    alert(
        "Gracias" + " " + nombre + "por tu compra, el valor total es $" + cantidad
    );
}
if(cursosEnCarrito>0){
    alert("Ingrese sus datos para finalizar la compra");
    let nombre= prompt("Ingrese su nombre completo");
    let telefono=prompt("Ingrese su número de móvil incluyendo su código de área");
    let email=prompt("Ingrese su correo electrónico");
}
