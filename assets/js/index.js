const btnFormation = document.getElementById('btnFormation');
const btnStage = document.getElementById('btnStage');
const secFormation = document.getElementById('realisationsFormation');
const secStage = document.getElementById('realisationsStage');

secStage.style.display = "none";

btnFormation.addEventListener('click', ()=> {
    secFormation.style.display ="initial";
    secStage.style.display = "none";
})

btnStage.addEventListener('click', ()=> {
    secFormation.style.display ="none";
    secStage.style.display = "initial";
});