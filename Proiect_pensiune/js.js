const enable = (e) =>{
    document.getElementById('meniu').classList.toggle('open')
    document.getElementById('nav').classList.toggle('nav-open')
}

$(document).ready(function() {
    $(".title").lettering();
    $(".button").lettering();
});





$(document).ready(function() {
    animation();
}, 1000);

$('.button').click(function() {
    animation();
});


function animation() {
    var title1 = new TimelineMax();
    title1.to(".button", 0, {visibility: 'hidden', opacity: 0})
    title1.staggerFromTo(".title span", 0.5,
        {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
        {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
    title1.to(".button", 0.2, {visibility: 'visible' ,opacity: 1})
}

const l_summary=document.querySelectorAll("#summary a");
for (var i=0; i <l_summary.length; i++){
    l_summary[i].addEventListener("click",function (event){
        event.preventDefault();
        const idparagraph = this.getAttribute("href");
        scroll(idparagraph)
    });
}

const scroll = (idparagraph) => {
    const y1=-125
    const paragraph = document.querySelector(idparagraph);
    const y=paragraph.getBoundingClientRect().top+window.pageYOffset+y1;
    window.scrollTo({
        top:y,
        behavior:'smooth'
    });
}


function validate(){
    let x=document.forms['dateBirth']['dateBirth'].value;
    if (x > "03/23/2023"){
        alert("Not valid");
        return false
    }
}


