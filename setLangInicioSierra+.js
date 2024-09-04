import inicioEs from './lenguajes/es/esInicio+.js';
import inicioEn from './lenguajes/en/enInicio+.js';
import inicioGer from './lenguajes/ger/gerInicio+.js';

const elements = document.getElementsByClassName('nav-link');
const pasos = document.getElementsByClassName('paso');
const mochilla = document.getElementsByClassName('mochilla');
const mapa = document.getElementsByClassName('mapa');
const somosSierraEc = document.getElementsByClassName('somosSierraEc');
const sanCristo = document.getElementsByClassName('sanCristo');
const sanCruz = document.getElementsByClassName('sanCruz');
const cuyabeno = document.getElementsByClassName('cuyabeno');
const reservaAhora = document.getElementsByClassName('reservaAhora');
const cuatroMundos = document.getElementsByClassName('text4Mundos');
const testimoniosTitulos = document.getElementsByClassName('testimoniosTitulos');
const textTestimonios = document.getElementsByClassName('textTestimonio');
const tituloFooter = document.getElementsByClassName('tituloFooter');
const textoSecFooter = document.getElementsByClassName('textoSecFooter');
const titleDestCar = document.getElementsByClassName("titleDestCar");
const cardDestText = document.getElementsByClassName("cardDestText");
const btnCards = document.getElementsByClassName("btnCards");
const destBanner = document.getElementsByClassName("destBanner");
const programasSpec = document.getElementsByClassName("programasSpec");

const navbarCollapse = document.getElementById('navbarNav');

let currentLang;

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });

window.localStorage.setItem('source', 'ec');

document.getElementById("changeEn").onclick = () => cambiarIdioma('en', true);
document.getElementById("changeEs").onclick = () => cambiarIdioma('es', true);
document.getElementById("changeGer").onclick = () => cambiarIdioma('ger', true);

document.getElementById("cardMejoresDestinos").onclick = ({currentTarget}) => {
    currentTarget.children[0].setAttribute('hidden', '');
}
document.getElementById("cardMejoresDestinos").onmouseout = ({currentTarget}) => {
    currentTarget.children[0].removeAttribute('hidden');
}

document.getElementById("cardGalapagos").onclick = ({currentTarget}) => {
    currentTarget.children[0].setAttribute('hidden', '');
}
document.getElementById("cardGalapagos").onmouseout = ({currentTarget}) => {
    currentTarget.children[0].removeAttribute('hidden');
}

document.getElementById("cardEcuador").onclick = ({currentTarget}) => {
    currentTarget.children[0].setAttribute('hidden', '');
}
document.getElementById("cardEcuador").onmouseout = ({currentTarget}) => {
    currentTarget.children[0].removeAttribute('hidden');
}

document.getElementById("cardTurquia").onclick = ({currentTarget}) => {
    currentTarget.children[0].setAttribute('hidden', '');
}
document.getElementById("cardTurquia").onmouseout = ({currentTarget}) => {
    currentTarget.children[0].removeAttribute('hidden');
}

function cambiarIdioma(idioma, isReload) {
    var dropdownBtn = document.getElementById('dropdownMenuButton');
    var banderaImg = document.querySelector('.bandera');
    if (idioma === 'es' && currentLang !== 'es') {
        dropdownBtn.innerHTML = '<img src="./assets/imgs/spain.png" alt="Español" class="bandera" width="10%"> Español';
        banderaImg.src = './assets/imgs/spain.png';
        currentLang = 'es';
        document.getElementById('sierraEcAllPage').lang = 'es';
        window.localStorage.setItem('lang', 'es');
        idiomaText(inicioEs);
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
        idiomaText(inicioEn);
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
        idiomaText(inicioGer);
        if (isReload) {
            const bootstrapCollapse = new bootstrap.Collapse(navbarCollapse);
            bootstrapCollapse.hide();
        }
    }
}

const idiomaText = (inicio) => {
    elements[0].innerHTML = inicio.inicio;
    elements[1].innerHTML = inicio.paquetes;
    elements[2].innerHTML = inicio.nosotros;
    elements[3].innerHTML = inicio.contactanos;
    document.getElementById('welcome').innerText = inicio.welcomeMessage;
    reservaAhora[0].innerHTML = inicio.botonViajamos;
    destBanner[0].innerHTML = inicio.destBanner;
    document.getElementById('welcomeText').innerText = inicio.subtitloWelcomeMessage;
    reservaAhora[1].innerHTML = inicio.botonViajamos;
    destBanner[1].innerHTML = inicio.destBanner2;
    document.getElementById('welcomeText2').innerText = inicio.destBanner2Text;
    reservaAhora[2].innerHTML = inicio.botonViajamos;
    document.getElementById("tresPasos").innerText = inicio.pasosMensaje;
    pasos[0].innerHTML = inicio.pasos[0];
    pasos[1].innerHTML = inicio.pasos[1];
    pasos[2].innerHTML = inicio.pasos[2];
    document.getElementById('adondeText').innerText = inicio.aDondeIr;
    document.getElementById('destinosTop').innerText = inicio.destinosTop;
    document.getElementById('btnReservaAhora').innerText = inicio.btnReserva;
    mapa[0].innerHTML = inicio.vuelaPorEcuador[0];
    mapa[1].innerHTML = inicio.vuelaPorEcuador[1];
    mochilla[0].innerHTML = inicio.paquetesIncluyen[0];
    mochilla[1].innerHTML = inicio.paquetesIncluyen[1];
    somosSierraEc[0].innerHTML = inicio.noEsperesMas[0];
    somosSierraEc[1].innerHTML = inicio.noEsperesMas[1];
    somosSierraEc[2].innerHTML = inicio.noEsperesMas[2];
    document.getElementById('subtituloNuestrosDestinos').innerText = inicio.tripsGallery[0];
    document.getElementById('nuestrosDestinosText').innerText = inicio.tripsGallery[1];
    sanCristo[0].innerHTML = inicio.galerias.SanCristobal[0];
    sanCristo[1].innerHTML = inicio.galerias.SanCristobal[1];
    sanCristo[2].innerHTML = inicio.galerias.SanCristobal[2];
    sanCruz[0].innerHTML = inicio.galerias.SantaCruz[0];
    sanCruz[1].innerHTML = inicio.galerias.SantaCruz[1];
    sanCruz[2].innerHTML = inicio.galerias.SantaCruz[2];
    cuyabeno[0].innerHTML = inicio.galerias.Cuyabeno[0];
    cuyabeno[1].innerHTML = inicio.galerias.Cuyabeno[1];
    cuyabeno[2].innerHTML = inicio.galerias.Cuyabeno[2];
    cuatroMundos[0].innerHTML = inicio.cuatroMundos[0];
    cuatroMundos[1].innerHTML = inicio.cuatroMundos[1];
    document.getElementById('list4mundos').innerHTML = '';
    inicio.cuatroMundosLista.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element;
        li.style.fontSize = '25px';
        document.getElementById('list4mundos').appendChild(li);
    });
    document.getElementById('btnExploralo').innerText = inicio.botonExploro;
    testimoniosTitulos[0].innerHTML = inicio.testimoniosTitulo[0];
    testimoniosTitulos[1].innerHTML = inicio.testimoniosTitulo[1];
    textTestimonios[0].innerHTML = inicio.testimonios[0];
    textTestimonios[1].innerHTML = inicio.testimonios[1];
    tituloFooter[0].innerHTML = inicio.footer.secciones[0].titulo;
    tituloFooter[1].innerHTML = inicio.footer.secciones[1].titulo;
    tituloFooter[2].innerHTML = inicio.footer.secciones[2].titulo;
    tituloFooter[3].innerHTML = inicio.footer.secciones[3].titulo;
    textoSecFooter[0].innerHTML = inicio.footer.secciones[0].texto;
    textoSecFooter[1].innerHTML = inicio.footer.secciones[1].texto;
    textoSecFooter[2].innerHTML = inicio.footer.secciones[2].texto;
    textoSecFooter[3].innerHTML = inicio.footer.secciones[3].texto;
    textoSecFooter[4].innerHTML = inicio.footer.lastPart[0].texto;
    textoSecFooter[5].innerHTML = inicio.footer.lastPart[1].texto;
    textoSecFooter[6].innerHTML = inicio.footer.lastPart[2].texto;
    document.getElementsByClassName('copyRight')[1].innerHTML = inicio.footer.derechos;
    titleDestCar[0].innerHTML = inicio.cardsDestinos.destinosTop[0];
    titleDestCar[1].innerHTML = inicio.cardsDestinos.ecuador[0];
    titleDestCar[2].innerHTML = inicio.cardsDestinos.galapagos[0];
    titleDestCar[3].innerHTML = inicio.cardsDestinos.turquia[0];
    cardDestText[0].innerHTML = inicio.cardsDestinos.destinosTop[1];
    cardDestText[1].innerHTML = inicio.cardsDestinos.ecuador[1];
    cardDestText[2].innerHTML = inicio.cardsDestinos.galapagos[1];
    cardDestText[3].innerHTML = inicio.cardsDestinos.turquia[1];
    btnCards[0].innerHTML = inicio.cardsDestinos.btn;
    btnCards[1].innerHTML = inicio.cardsDestinos.btn;
    btnCards[2].innerHTML = inicio.cardsDestinos.btn;
    btnCards[3].innerHTML = inicio.cardsDestinos.btn;
    document.getElementById('teOfrecemos').innerText = inicio.teOfrecemos;
    document.getElementById('programasSierra').innerText = inicio.programasSierra;
    programasSpec[0].innerHTML = inicio.programasSpec[0];
    programasSpec[1].innerHTML = inicio.programasSpec[1];
    programasSpec[2].innerHTML = inicio.programasSpec[2];
    programasSpec[3].innerHTML = inicio.programasSpec[3];
    programasSpec[4].innerHTML = inicio.programasSpec[4];
    programasSpec[5].innerHTML = inicio.programasSpec[5];
    programasSpec[6].innerHTML = inicio.programasSpec[6];
    document.getElementById('programasFinal').innerHTML = inicio.programasFinal;
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
    idiomaText(inicioEs);
    window.localStorage.setItem('lang', 'es');
    currentLang = 'es';
}

window.onscroll = ({target}) => {
    const seccion = document.getElementById('cuatroMundos');
    const seccionTop = seccion.getBoundingClientRect().top;
    // Verificar si la parte superior de la sección está dentro de la ventana visible
    if (seccionTop === 800) {
        // Agregar una clase CSS para activar el efecto
        seccion.style.animationDuration = '5'; /* Duración de la animación */
        seccion.style.animationFillMode = forwards;
        seccion.style.animationName = fadeInImgs;
    } else {
        // Quitar la clase si la sección no está visible
        seccion.classList.remove('fadeInImgs');
    }
}

const testFunction = a => {
    console.log(a);
}

