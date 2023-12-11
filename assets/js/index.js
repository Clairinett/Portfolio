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
const li = document.querySelectorAll('li'); 

if (window.matchMedia("(min-width:1200px)").matches) {
    nav.classList.add('show'); //la nav reste ouverte grâce à l'ajout de la class show
    
    li.forEach(function (allLi) { //selectionne tout les li grace au foreach qui parcours le tableau (nodelist) de querySelectorAll (un tableau avec tout les li)
        allLi.removeAttribute("data-bs-dismiss"); //enlève l'attribut data-bs-dismiss qui en mobile sert à ferme la nav quand on clique sur un lien
    });
};