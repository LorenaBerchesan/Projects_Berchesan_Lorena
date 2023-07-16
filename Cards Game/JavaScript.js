
const CardGame = document.getElementById('CardGame');
const Button = document.getElementById('button');
const FinalText = document.getElementById('finalText')

const matrix = () => [
    { imageSrc: "download (1).jpg", id: 'id1' },
    { imageSrc: "download (2).jpg", id: 'id2'  },
    { imageSrc: "download (3).jpg", id: 'id3'  },
    { imageSrc: "download.jpg", id: 'id4'  },
    { imageSrc: "images (1).jpg", id: 'id5'  },
    { imageSrc: "images (2).jpg", id: 'id6'  },
    { imageSrc: "images (3).jpg", id: 'id7'  },
    { imageSrc: "images.jpg", id: 'id8'  },
    { imageSrc: "download (1).jpg", id: 'id1'  },
    { imageSrc: "download (2).jpg", id: 'id2'  },
    { imageSrc: "download (3).jpg", id: 'id3'  },
    { imageSrc: "download.jpg", id: 'id4'  },
    { imageSrc: "images (1).jpg", id: 'id5'  },
    { imageSrc: "images (2).jpg", id: 'id6'  },
    { imageSrc: "images (3).jpg", id: 'id7'  },
    { imageSrc: "images.jpg", id: 'id8'  },

];

function random(){
    const cardData = matrix();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;

}




//html generate

function cardGenerator() {
    const cardData = random();


    cardData.forEach((item) => {
        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div');

        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';

        face.src = item.imageSrc;
        card.setAttribute('id',item.id);

        CardGame.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', (e) =>{
            card.classList.toggle('toggleCard');
            addEvents(e);

        })
    });
};

function click(){
    Button.addEventListener('click', () => {
        restart();
    })
    /*if(toggleCard.length == 16){
        const Text = document.createElement('div');
        Text.classList = Text;
        FinalText.appendChild(Text);

    }*/
}

function addEvents(e) {
    console.log(e);
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');


    if(flippedCards.length == 2){
        if(flippedCards[0].getAttribute('id') == flippedCards[1].getAttribute('id')){
            console.log('match');
            flippedCards.forEach(card => {
                card.classList.remove('flipped');

                card.style.pointerEvents = 'None';

            });

        }else{
            console.log('wrong');
            flippedCards.forEach((card) => {
                card.classList.remove('flipped');

                setTimeout(() => card.classList.remove('toggleCard'),1000);
            });

        }
    }

};

function restart(){
    let cardData = random();
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    CardGame.style.pointerEvents = 'none';
    cardData.forEach((item , index) => {
        cards[index].classList.remove('toggleCard');
        cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imageSrc;
        cards[index].setAttribute('id',item.id);
    })
}


cardGenerator();
click();
















/*var button = document.getElementById('button');
var gameContainer = document.getElementById('game');
var images = ['download%20(3).jpg','download.jpg','download%20(1).jpg','"download%20(2).jpg','images.jpg','images%20(1).jpg','images%20(2).jpg','images%20(3).jpg'];
images = images.concat(images);
//images.flush();


var nr = 0;
var cells = [];
var card = document.getElementById('card') // TODO avand in vedere ca e un element ar trebui numit la singular

var finalText = 'You won!' // TODO nume sugestive la variabile
var middleButton = document.getElementById('middle-button')

function flash(images){
    var items = images[Math.floor(Math.random()*images.length)]
    return items;
}

for( var i =0; i < 4; i ++ ){
    cells[i]=[];
    for( var j=0; j < 4; j++ ) {
        cells[i][j] = {
            imageURL: flash(images),
            id: nr,
            state: 1 //1-ascuns(gri);2-imaginea; 3-nimic(alb)

        }
        nr += 1;
    }
}
console.log(cells);

gameContainer.onload = addDiv(cells);

function addDiv(cells){
    for(var i = 0; i < 4; i ++){
        cells[i]=[];
        for(var j = 0; j < 4; j ++){
            var Div = document.createElement('div');
            const newContent = cells[i][j];

            Div.appendChild(newContent)
            Div.addEventListener('click', () =>{

                Div.style.backgroundColor = cells[i][j].imageURL;

            })
            const currentDiv = document.getElementById('div1');
            gameContainer.insertBefore('Div',currentDiv);
        }
    }

}
addDiv(cells);

*/

/*
function addDiv(nr) {
    var divLine = document.createElement('div');
    for( var i = 0; i < 4; i ++){
        var div = document.createElement('div');

        div.classList.add('div');
        div.id= nr;
        nr ++;
        //gameContainer.appendChild(div);
    }
    gameContainer.appendChild(divLine);

/*
    /*for (var k = 0; k < 4; k++) {
        gameContainer.appendChild(htmlElement);
        for (var i = 0; i < 4; i++) {
            gameContainer.appendChild(htmlElement);
        }
    }
}*/

/*
for( var i =0; i < 4; i ++ ){
    // TODO daca vrei sa faci cate un container pe fiecare row aici trebuie sa creezi un div aditional pe care sa il bagi in containerul mare, iar cele 4 poze sa vin in acest div
    for( var j=0; j < 4; j++ ){
        var currentCell = cells[i][j];
        const htmlElement = document.createElement("div");
        htmlElement.classList.add('card');
        if( currentCell.state == 1 ){
            htmlElement.style.backgroundColor ='grey';
            cells[i][j] = {
                state : 2
            }
        }else{
            if( currentCell.state == 2 ){
                htmlElement.style.backgroundImage = cells[i][j].imageURL;
                cells[i][j] = {
                    state: 3
                }

            }else{
                htmlElement.style.backgroundColor = '#FFFFFF'
            }
        }

        var nr = 0;
        const elementHTML = document.createElement("div");
        for( i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                cells[i][j] = {
                    imageUrl: images[nr],
                    state: 1
                }
                nr += 1;
                if( cells[i][j].state == 1 ){
                    elementHTML.style.backgroundColor ='grey';
                    cells[i][j] = {
                        state : 2
                    }
                }else{
                    if( currentCell.state == 2 ){
                        elementHTML.style.backgroundImage = cells[i][j].imageURL;
                        cells[i][j] = {
                            state: 3
                        }

                    }else{
                        elementHTML.style.backgroundColor = '#FFFFFF'
                    }
                //if (cells[i][j].state == 1) {
                //    elementHTML.style.backgroundColor = '#CCCCCC';
                }
                gameContainer.insertAdjacentElement(elementHTML);
            }
        }

        //TODO partea de add event listener o faci tot aici, unde pregatesti practic elementele de html
       // document.body.insertAdjacentElement(htmlElement); // TODO ar trebui sa injectezi aceste htmlElement direct intr-un container, si in html sa nu ai nici o poza/div default (exceptand containerul).
    }
}

button.addEventListener('click', () => {
    images = images.concat(images);
    images.flush();
    const htmlElement = document.createElement("div");
    var nr = 0;
    middleButton = NULL;
    for( i = 0; i < 4; i++){
        for( j = 0; j < 4; j ++){
            cells[i][j] = {
                imageUrl: images[nr],
                state: 1
            }
            nr += 1;
            if( cells[i][j].state == 1){
                htmlElement.style.backgroundColor ='#CCCCCC';
            }
            document.body.insertAdjacentElement(htmlElement);
        }

    }

});

for( i = 0; i < 4; i ++ ){
    for( j = 0; j < 4; j++){
        cells[i][j].addEventListener('click', () => {
            currentCellID = cells[i][j].id;
            currentCellImg = cells[i][j].imageURL
            if( cells[i][j].state == 1){
                cells[i][j].style.backgroundImage = cells[i][j].imageURL
                cells[i][j] = {
                    state: 2
                }

                    card.addEventListener('click', () => {

                        if( currentCellID != card.id ){//verificam daca id-ul este dif sa nu se fi apasat de 2 ori pe acelasi card
                            if( card.state == 1){
                                card.style.backgroundImage = cells[i][j].imageURL
                                card = {
                                    state: 2
                                }
                                if( currentCellImg == card.imageURL ){
                                    card.style.backgroundColor = '#FFFFFF'
                                    card = {
                                        state: 3
                                    }
                                    cells[i][j].style.backgroundColor = '#FFFFFF'
                                    cells[i][j] = {
                                    state: 3
                                    }
                                }

                            }
                        }
                    })

            }
        });
    }
}
nr = 0;
for(i = 0; i < 4; i ++ ){
     for( j = 0; j < 4; j ++){
         if( cells[i][j] != 3 )
             nr += 1;
     }
}
if(nr == 0){
    middleButton.innerHTML = finalText;
}

*/

