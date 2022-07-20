const cursos = [
    {id:1, nombre:"extensivo ingles", precio:5000,},
    {id:2,nombre:"extensivo frances",precio:5000},
    {id:3,nombre:"extensivo portugues",precio:5000},
    {id:4,nombre:"extensivo espaniol",precio:5000},
    {id:5, nombre:"intensivo ingles", precio:7000},
    {id:6, nombre:"intensivo frances", precio:7000},
    {id:7, nombre:"intensivo portugues", precio:7000},
    {id:8, nombre:"intensivo espaniol", precio:7000},
    {id:9, nombre:"conversacion ingles", precio:3000},
    {id:10, nombre:"conversacion frances", precio:3000},
    {id:11, nombre:"conversacion portugues", precio:3000},
    {id:12, nombre:"conversacion espaniol", precio:3000},
    {id:13, nombre:"business ingles", precio:10000},
    {id:14, nombre:"business frances", precio:10000},
    {id:15, nombre:"business portugues", precio:10000},
    {id:16, nombre:"business espaniol", precio:10000},
    ];

for(const curso of cursos){
    let contenedor = document.createElement("div");
    contenedor.innerHTML= `<h3>id: ${curso.id}</h3>
                          <p>Curso: ${curso.nombre}</p>;
                          <b>Precio: ${curso.precio}</b>;`
    document.body.appendChild(contenedor);
}