const btnYes = document.getElementById("yes");
const btnNo = document.getElementById("no");
const mensaje = document.getElementById("mensaje");
const mensajes = [
    "Te equivocaste amur jaja",
    "¿Estás segura? :(",
    "¡Otra vez te equivocaste amur!",
    "Jaja muy chistosa corazón",
    "El botón de sí está al lado amor jaja"
];

const wujuuu = () => {
    mensaje.textContent = 'Nos vemos dentro de poquito entonces, tiamu 😘 uwu';
    setTimeout(() => {
        location.href = 'https://youtu.be/vOSYQCyQqOI?t=16';
    }, 4000);
}

let agrandamientoSi = 0;
let achicamientoNo = 0;

function agrandarBotonYes() {
    agrandamientoSi += 5;
    btnYes.style.transform = `scale(${1 + agrandamientoSi / 100})`;
}

function achicarBotonNo() {
    achicamientoNo += 5;
    btnNo.style.transform = `scale(${1 - achicamientoNo / 100})`;
}

function mostrarMensaje() {
    const mensajeIndex = Math.floor(Math.random() * mensajes.length);
    return mensajes[mensajeIndex];
}

function seEquivoco() {
    mensaje.textContent = mostrarMensaje();
    agrandarBotonYes();
    achicarBotonNo();
}

btnYes.addEventListener('click', wujuuu);
btnNo.addEventListener('click', seEquivoco);

