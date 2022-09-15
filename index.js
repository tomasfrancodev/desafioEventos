let admin = "administrador";
let cliente = "cliente";
let usuarioActual;

let titulo = document.getElementById("titulo");
let parrafoPelis = document.getElementById("parrafo-peliculas");
let subitulo = document.getElementById("subtitulo");
let boton = document.getElementById("boton-ingresar")

class Pelicula {
    constructor(nombre, tipo, minutos, genero) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.minutos = minutos;
        this.genero = genero;
    }
    calcularDuracion() {
        var horas = (this.minutos / 60);
        var rhoras = Math.floor(horas);
        var minutos = (horas - rhoras) * 60;
        var rminutos = Math.round(minutos);        

        return rhoras + "h" + " " + rminutos + "m"
        }
}

const elPadrino = new Pelicula("El Padrino", "+16", 177, "Crimen/Drama");
const jurassicPark = new Pelicula("Jurassic Park", "ATP", 130, "Ciencia Ficción/Acción");
const jujutsuKaisen = new Pelicula("Jujutsu Kaisen", "ATP", 84, "Acción/Fantasía");

let peliculas = [jujutsuKaisen, elPadrino, jurassicPark];

function ingreseUsuario() {
    usuarioActual = prompt("Ingrese que tipo de usuario es administrador o cliente");
    while (usuarioActual != admin && usuarioActual != cliente) {
        usuarioActual = prompt("Reingrese que tipo de usuario es administrador o cliente")
    }
    if (usuarioActual === admin) {
        
        alert("Bienvenido administrador, a continuación cargue una película a la página")
        let nombre = prompt("Ingrese el nombre de la película que desea subir")
        let tipoDePeliculaASubir = prompt("Ingrese el tipo de película") 
        let minutosDePeliculaASubir = parseInt(prompt("Ingrese los minutos de duración de la película"))
        let generoDePeliculaASubir = prompt("Ingrese el género de la película")
        subirPelicula(nombre, tipoDePeliculaASubir, minutosDePeliculaASubir, generoDePeliculaASubir)
        titulo.innerText = 'Bienvenido administrador'
        subtitulo.innerText = 'Has cargado recientemente la pelicula: ' + nombre;
        parrafoPelis.innerText = 'Las películas que se encuentran en la página son: ' + mostrarPeliculas();
    }
    else {
        titulo.innerText = 'Bienvenido cliente';
        parrafoPelis.innerText = 'Las peliculas disponibles son: ' + mostrarPeliculas();

    }
}


function subirPelicula(nombreDePelicula, tipoDePelicula, minutosDePelicula, generoDePelicula) {
    const peliculaASubir = new Pelicula(nombreDePelicula, tipoDePelicula, minutosDePelicula, generoDePelicula)

    peliculas.push(peliculaASubir)
}

function mostrarPeliculas() {
    let nombresDePeliculas = '';  
    peliculas.forEach(pelicula => nombresDePeliculas = nombresDePeliculas + ' ' + pelicula.nombre);
    return nombresDePeliculas;
}

    boton.addEventListener("click", () => {ingreseUsuario(); boton.parentNode.removeChild(boton);});