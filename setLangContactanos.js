import sierraEs from './lenguajes/es/esContactanos.js'
import sierraEn from './lenguajes/en/enContactanos.js';
import sierraGer from './lenguajes/ger/gerContactanos.js';

const elements = document.getElementsByClassName('nav-link');
const partesTexto = document.getElementsByClassName("partesTexto");
const partesTitulos = document.getElementsByClassName("partesTitulos");
const label = document.getElementsByTagName('label');
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

const navbarCollapse = document.getElementById('navbarNav');

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
    document.getElementById('subtituloNosotros').innerHTML = sierra.subTitle;
    document.getElementById('welcome').innerText = sierra.title;
    partesTitulos[0].innerHTML = sierra.partes.titulos[0];
    partesTitulos[1].innerHTML = sierra.partes.titulos[1];
    partesTitulos[2].innerHTML = sierra.partes.titulos[2];
    partesTitulos[3].innerHTML = sierra.partes.titulos[3];
    partesTexto[0].innerHTML = sierra.partes.texto[0];
    partesTexto[1].innerHTML = sierra.partes.texto[1];
    partesTexto[2].innerHTML = sierra.partes.texto[2];
    partesTexto[3].innerHTML = sierra.partes.texto[3];
    document.getElementById('escribenos').innerText = sierra.escribenos.title;
    document.getElementById('escribenosSubtitle').innerText = sierra.escribenos.subTitle;
    document.getElementById('escribenosCatch').innerText = sierra.escribenos.tercerTitulo;
    label[0].innerHTML = sierra.escribenos.form[0];
    label[1].innerHTML = sierra.escribenos.form[1];
    label[2].innerHTML = sierra.escribenos.form[2];
    label[3].innerHTML = sierra.escribenos.form[3];
    label[4].innerHTML = sierra.escribenos.form[4];
    label[5].innerHTML = sierra.escribenos.form[5];
    document.getElementsByClassName('submit-btn')[0].innerHTML = sierra.escribenos.btnEnviar;
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