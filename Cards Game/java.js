
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

function shuffle(){
    const cardData = matrix();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;

}

const orderedImages = shuffle();

function cardGenerator(cardData) {


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
            addEvents(e,cardData);

        })
    });
};




function addEvents(e,cardData) {
    console.log(e);
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');


    if(flippedCards.length == 2){
        if(flippedCards[0].getAttribute('name') == flippedCards[1].getAttribute('name')){
            console.log('match');

            flippedCards.forEach(card => {
                card.classList.remove('flipped');

                card.style.pointerEvents = 'None';
            });
            console.log(cardData);
            removeHTML();
            console.log(cardData);

            let faces = document.querySelectorAll('.face');
            let cards = document.querySelectorAll('.card');
            let matrix = matrix();
            matrix.forEach((item , index) => {
                faces[index].src = item.imageSrc;
                cards[index].setAttribute('id',item.id);
            })


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
    let cardData = shuffle();
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

function addHTML(cardData){
    const myobj = document.getElementById('CardGame');
    const flippedCards = document.querySelectorAll('.flipped');
    for( var i = 0; i < 16; i ++){
        myobj.innerHTML = flippedCards[i];
    }

}
function removeHTML(){
    /*var element=document.createElement('div');
    element.innerHTML = matrix;
    return '';*.

     */

    const myobj = document.getElementById('CardGame');
    myobj.remove();
    /*const myobj = document.getElementById('CardGame');
    myobj.innerHTML = '';*/
}

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

cardGenerator(orderedImages);
click();