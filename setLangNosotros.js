import sierraEs from './lenguajes/es/esNosotros.js'
import sierraEn from './lenguajes/en/enNosotros.js';
import sierraGer from './lenguajes/ger/gerNosotros.js';

const elements = document.getElementsByClassName('nav-link');
const negritaSegundaSlide = document.getElementsByClassName('negritaSegundaSlide');
const textoSegundaSlide = document.getElementsByClassName('textoSegundaSlide');
const reservaAhora = document.getElementsByClassName('reservaAhoraNosotros');
const pasos = document.getElementsByClassName('paso');
const nombreEquipo = document.getElementsByClassName('nombreEquipo');
const puestoEquipo = document.getElementsByClassName('puestoEquipo');
const tituloEquipo = document.getElementsByClassName('tituloEquipo');
const descEquipo = document.getElementsByClassName('descEquipo');
const contactoEquipo = document.getElementsByClassName('contactoEquipo');
const porqueTitle = document.getElementsByClassName('porqueTitle');
const porqueText = document.getElementsByClassName('porqueText');
const tituloFooter = document.getElementsByClassName('tituloFooter');
const textoSecFooter = document.getElementsByClassName('textoSecFooter');
const cardMembros = document.getElementsByClassName('cardEquipo');

const navbarCollapse = document.getElementById('navbarNav');

const numbers = ['593987682019', '593987938964', '593963616397', '593987682019'];
for (let i = 0; i < cardMembros.length; i++) {
    cardMembros[i].onclick = () => {
        const number = numbers[i];
        const message = 'Hola, estoy interesado en el servicio de Sierra Ecuador.';
        const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };
}

let currentLang;

document.getElementById("changeEn").onclick = () => cambiarIdioma('en', true);
document.getElementById("changeEs").onclick = () => cambiarIdioma('es', true);
document.getElementById("changeGer").onclick = () => cambiarIdioma('ger', true);

function cambiarIdioma(idioma, isReload) {
    var dropdownBtn = document.getElementById('dropdownMenuButton');
    var banderaImg = document.querySelector('.bandera');
    if (idioma === 'es' && currentLang !== 'es') {
        dropdownBtn.innerHTML = '<img src="./assets/imgs/spain.png" alt="Español" class="bandera" width="10%"> Español';
        banderaImg.src = './assets/imgs/spain.png';
        currentLang = 'es';
        document.getElementById('sierraEcAllPage').lang = 'es';
        window.localStorage.setItem('lang', 'es');
        idiomaText(sierraEs);
        if (isReload) {
            const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
            bootstrapCollapse.hide();
        }
    } else if (idioma === 'en' && currentLang !== 'en') {
        dropdownBtn.innerHTML = '<img src="./assets/imgs/united-states.png" alt="English" class="bandera" width="10%"> English';
        banderaImg.src = './assets/imgs/united-states.png';
        currentLang = 'en';
        document.getElementById('sierraEcAllPage').lang = 'en';
        window.localStorage.setItem('lang', 'en');
        idiomaText(sierraEn);
        if (isReload) {
            const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
            bootstrapCollapse.hide();
        }
    } else if (idioma === 'ger' && currentLang !== 'ger') {
        dropdownBtn.innerHTML = '<img src="./assets/imgs/germany.png" alt="Deutsch" class="bandera" width="10%"> Deutsch';
        banderaImg.src = './assets/imgs/germany.png';
        currentLang = 'ger';
        document.getElementById('sierraEcAllPage').lang = 'ger';
        window.localStorage.setItem('lang', 'ger');
        idiomaText(sierraGer);
        if (isReload) {
            const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
            bootstrapCollapse.hide();
        }
    }
}

const idiomaText = (sierra) => {
    elements[0].innerHTML = sierra.inicio;
    elements[1].innerHTML = sierra.paquetes;
    elements[2].innerHTML = sierra.nosotros;
    elements[3].innerHTML = sierra.contactanos;
    document.getElementById('subtituloNosotros').innerText = sierra.subTitle;
    document.getElementById('welcome').innerText = sierra.title;
    document.getElementById('segundaSlideTitleNosotros').innerText = sierra.quienesSomos.propuestas.title;
    negritaSegundaSlide[0].innerHTML = sierra.quienesSomos.propuestas.negrita[0];
    negritaSegundaSlide[1].innerHTML = sierra.quienesSomos.propuestas.negrita[1];
    negritaSegundaSlide[2].innerHTML = sierra.quienesSomos.propuestas.negrita[2];
    negritaSegundaSlide[3].innerHTML = sierra.quienesSomos.propuestas.negrita[3];
    textoSegundaSlide[0].innerHTML = sierra.quienesSomos.propuestas.contenido[0];
    textoSegundaSlide[1].innerHTML = sierra.quienesSomos.propuestas.contenido[1];
    textoSegundaSlide[2].innerHTML = sierra.quienesSomos.propuestas.contenido[2];
    textoSegundaSlide[3].innerHTML = sierra.quienesSomos.propuestas.contenido[3];
    reservaAhora[0].innerHTML = sierra.btnEscribenos;
    pasos[0].innerHTML = sierra.fortalezas.desc[0];
    pasos[1].innerHTML = sierra.fortalezas.desc[1];
    pasos[2].innerHTML = sierra.fortalezas.desc[2];
    pasos[3].innerHTML = sierra.fortalezas.desc[3];
    nombreEquipo[0].innerHTML = sierra.quienesSomos.miembros[0].nombre;
    nombreEquipo[1].innerHTML = sierra.quienesSomos.miembros[1].nombre;
    nombreEquipo[2].innerHTML = sierra.quienesSomos.miembros[2].nombre;
    nombreEquipo[3].innerHTML = sierra.quienesSomos.miembros[3].nombre;
    nombreEquipo[4].innerHTML = sierra.quienesSomos.miembros[4].nombre;
    puestoEquipo[0].innerHTML = sierra.quienesSomos.miembros[0].puesto;
    puestoEquipo[1].innerHTML = sierra.quienesSomos.miembros[1].puesto;
    puestoEquipo[2].innerHTML = sierra.quienesSomos.miembros[2].puesto;
    puestoEquipo[3].innerHTML = sierra.quienesSomos.miembros[3].puesto;
    puestoEquipo[4].innerHTML = sierra.quienesSomos.miembros[4].puesto;
    tituloEquipo[0].innerHTML = sierra.quienesSomos.miembros[0].titulo;
    tituloEquipo[1].innerHTML = sierra.quienesSomos.miembros[1].titulo;
    tituloEquipo[2].innerHTML = sierra.quienesSomos.miembros[2].titulo;
    tituloEquipo[3].innerHTML = sierra.quienesSomos.miembros[3].titulo;
    tituloEquipo[4].innerHTML = sierra.quienesSomos.miembros[4].titulo;
    descEquipo[0].innerHTML = sierra.quienesSomos.miembros[0].descripcion;
    descEquipo[1].innerHTML = sierra.quienesSomos.miembros[1].descripcion;
    descEquipo[2].innerHTML = sierra.quienesSomos.miembros[2].descripcion;
    descEquipo[3].innerHTML = sierra.quienesSomos.miembros[3].descripcion;
    descEquipo[4].innerHTML = sierra.quienesSomos.miembros[4].descripcion;
    contactoEquipo[0].innerHTML = sierra.quienesSomos.miembros[0].contacto;
    contactoEquipo[1].innerHTML = sierra.quienesSomos.miembros[1].contacto;
    contactoEquipo[2].innerHTML = sierra.quienesSomos.miembros[2].contacto;
    contactoEquipo[3].innerHTML = sierra.quienesSomos.miembros[3].contacto;
    contactoEquipo[4].innerHTML = sierra.quienesSomos.miembros[4].contacto;
    document.getElementById('quienesSomos').innerText = sierra.quienesSomos.title;
    document.getElementById('porque').innerText = sierra.porque.title;
    porqueTitle[0].innerHTML = sierra.porque.subTitle[0];
    porqueTitle[1].innerHTML = sierra.porque.subTitle[1];
    porqueText[0].innerHTML = sierra.porque.desc[0];
    porqueText[1].innerHTML = sierra.porque.desc[1];
    //document.getElementById('fraseFinal').innerText = sierra.final;
    tituloFooter[0].innerHTML = sierra.footer.secciones[0].titulo;
    tituloFooter[1].innerHTML = sierra.footer.secciones[1].titulo;
    tituloFooter[2].innerHTML = sierra.footer.secciones[2].titulo;
    tituloFooter[3].innerHTML = sierra.footer.secciones[3].titulo;
    textoSecFooter[0].innerHTML = sierra.footer.secciones[0].texto;
    textoSecFooter[1].innerHTML = sierra.footer.secciones[1].texto;
    textoSecFooter[2].innerHTML = sierra.footer.secciones[2].texto;
    textoSecFooter[3].innerHTML = sierra.footer.secciones[3].texto;
    textoSecFooter[4].innerHTML = sierra.footer.lastPart[0].texto;
    textoSecFooter[5].innerHTML = sierra.footer.lastPart[1].texto;
    textoSecFooter[6].innerHTML = sierra.footer.lastPart[2].texto;
    document.getElementsByClassName('copyRight')[1].innerHTML = sierra.footer.derechos;
}

const storeLang = window.localStorage.getItem('lang');
if (storeLang) {
    console.log(window.localStorage.getItem('lang'));
    if (storeLang === 'es') {
        cambiarIdioma('es', false);
    } else if (storeLang === 'en') {
        cambiarIdioma('en', false);
    } else if (storeLang === 'ger') {
        cambiarIdioma('ger', false);
    } else {
        cambiarIdioma('es', false);
    }
} else {
    idiomaText(sierraEs);
    window.localStorage.setItem('lang', 'es');
    currentLang = 'es';
}