// query selector
//.class
//#id
const heading = document.querySelector('.header__texto h2'); // 0 o 1 elemento
console.log(heading);

/* const heading2 = document.querySelector('#heading');
console.log(heading2); */

// query selector all
const enlaces = document.querySelectorAll('.navegacion a');
//console.log(enlaces[0]);

enlaces[0].textContent = 'Nuevo Texto para enlace';
enlaces[0].classList.add('nueva-clase');
//enlaces[0].classList.remove('navegacion__enlace');


//get element by id
//const heading3 = document.getElementById("heading")
//console.log(heading3)

// Generar un nuevo enlace
const nuevoEnlace = document.createElement('H1');
//Referencia: <a href="nosotros.html" class="nuevo-enlace">Nosotros</a>
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar el texto
nuevoEnlace.textContent = 'Tienda Online';
//Agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');
console.log(nuevoEnlace);

//Agregarlo al Documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//Eventos
/* console.log(1);

//AddEventListener
window.onload = function (){
    console.log(3);
};

window.addEventListener('load', imprimir);
function imprimir () {
    console.log(2);
}

window.addEventListener('load', function(){ //callbacks, cuando este evento ocurre, se ejecuta la función
    console.log(2); //load espera a que JS y los archivos que dependen del HTML estén listos
} );

document.addEventListener('DOMContentLoaded', function () { //solo espera a que se descargue el HTML, pero no le importa el CSS o imágenes
    console.log(4);
});

//usualmente se usa DOMContentLoaded, ya que no moidificar el CSS e imágenes con JS, pero si requerimos el HTML


console.log(5); */

/* window.onscroll = function () {
    console.log('scrolling ...');
} */

//Seleccionar elementos y asociarles un evento
/* const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function (evento){ //la buena práctica dice que debemos usar el submit, aunque, el click tb funciones
    //El click está asociado al btn, imagen, texto, etc, asociado al evento
    //console.log(evento);
    evento.preventDefault(); //evita que se recargue la página al clickar en el btn enviar

    //validar formulario

    console.log('enviando formulario');
}); */

//Evento de submit
//const formulario = document.querySelector('.formulario'); //submit está asociado al formulario y el envio de su información
/* formulario.addEventListener('submit', function(e){
    e.preventDefault();

    console.log('Enviando formulario');
}); */

//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario'); //submit está asociado al formulario y el envio de su información

/* nombre.addEventListener('input', function(e){
    console.log(e.target.value); //Value es aquello que está escribiendo en el input
});
email.addEventListener('input', function(e){
    console.log(e.target.value); //Value es aquello que está escribiendo en el input
});
mensaje.addEventListener('input', function(e){
    console.log(e.target.value); //Value es aquello que está escribiendo en el input
}); */

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //Validar formulario

    const { nombre, email, mensaje } = datos; //extraer y crear estas variables que vienen de datos

    if(nombre === '' || email === '' || mensaje ==='' ){
        //console.log('Todos los campos son obligatorios')
        mostrarAlerta('Todos los campo son obligatorios', true)
        return; //return costa la ejecución de código
    } 

    console.log(nombre);
    console.log(email);
    console.log(mensaje);

    //Enviar Formulario

    console.log('Enviando Formulario');
    mostrarAlerta('El formulario se ha enviado con éxito');
});

function leerTexto(e){
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(e.target);

    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto');
    }

    formulario.appendChild(alerta);

    //Desaparece luego de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

