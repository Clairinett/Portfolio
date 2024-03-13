const nav = document.getElementById('offcanvasNavbar');
const li = document.querySelectorAll('li'); 

if (window.matchMedia("(min-width:1200px)").matches) {
    nav.classList.add('show'); //la nav reste ouverte grâce à l'ajout de la class show
    
    li.forEach(function (allLi) { //selectionne tout les li grace au foreach qui parcours le tableau (nodelist) de querySelectorAll (un tableau avec tout les li)
        allLi.removeAttribute("data-bs-dismiss"); //enlève l'attribut data-bs-dismiss qui en mobile sert à ferme la nav quand on clique sur un lien
    });
};