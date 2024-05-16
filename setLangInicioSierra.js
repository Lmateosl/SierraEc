import sierraEs from './lenguajes/es/esSierra.js'
import sierraEn from './lenguajes/en/enSierra.js';
import sierraGer from './lenguajes/ger/gerSierra.js';

const elements = document.getElementsByClassName('nav-link');
const textTipoSierra = document.getElementsByClassName('textTipoSierra');
const btnSierraTipo = document.getElementsByClassName('btnSierraTipo');

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
    elements[0].innerHTML = sierra.nav[0];
    elements[1].innerHTML = sierra.nav[1];
    document.getElementById('welcomeTextSierra').innerText = sierra.body.subtitulo;
    textTipoSierra[0].innerHTML = sierra.body.descubre.sierraEc[0];
    textTipoSierra[1].innerHTML = sierra.body.descubre.sierraPlus[0];
    btnSierraTipo[0].innerHTML = sierra.body.descubre.sierraEc[1];
    btnSierraTipo[1].innerHTML = sierra.body.descubre.sierraPlus[1];
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

document.getElementById("irASierraEc").onclick = () => {
    window.location.href = "sierraEc-Home.html";
}

document.getElementById("irASierraPlus").onclick = () => {
    window.location.href = "sierra-plus-home.html";
}
