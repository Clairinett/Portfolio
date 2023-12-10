const btnFormation = document.getElementById('btnFormation');
const btnPerso = document.getElementById('btnPerso');
const secFormation = document.getElementById('realisationsFormation');
const secPerso = document.getElementById('realisationsPerso');
const btnProjet = document.getElementById('btnProjet');
const secProjet = document.getElementById('realisationsProjet');

secFormation.style.display = "none";
secProjet.style.display = "none";

btnFormation.addEventListener('click', ()=> {
    secFormation.style.display ="inline-flex";
    secPerso.style.display = "none";
    secProjet.style.display = "none";
});

btnPerso.addEventListener('click', ()=> {
    secPerso.style.display = "inline-flex";
    secFormation.style.display ="none";
    secProjet.style.display ="none";
});

btnProjet.addEventListener('click', ()=> {
    secProjet.style.display = "inline-flex";
    secPerso.style.display = "none";
    secFormation.style.display ="none";
});


const nav = document.getElementById('offcanvasNavbar');

function navOuverte() {
    if (window.matchMedia("(min-width:1200px")) {
        offcanvasNavbar.classList.add('show');
    }
}; navOuverte();
