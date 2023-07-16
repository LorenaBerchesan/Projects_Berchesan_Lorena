
var  n=4;
const Button = document.getElementById('button');
//var images = [ { imageSrc: 'download%20(3).jpg', id: 'id1' }, {imageSrc: 'download.jpg', id: 'id'}, { imageSrc: 'download%20(1).jpg', id:'id3' }, { imageSrc: 'download%20(2).jpg', id:'id4' }, { imageSrc:'images.jpg', id:'id5' }, { imageSrc:'images%20(1).jpg', id:'id6' }, { imageSrc:'images%20(2).jpg', id:'id7' }, { imageSrc:'images%20(3).jpg', id:'id8' }];
var images = [ { imageSrc: 'download%20(3).jpg', id: 'id1' }, {imageSrc: 'download.jpg', id: 'id2'}, { imageSrc: 'download%20(1).jpg', id:'id3' }, { imageSrc: 'download%20(2).jpg', id:'id4' }, { imageSrc:'images.jpg', id:'id5' }, { imageSrc:'images%20(1).jpg', id:'id6' }, { imageSrc:'images%20(2).jpg', id:'id7' }, { imageSrc:'images%20(3).jpg', id:'id8' }];


console.log("Prima matrice",images);
images = images.concat(images);
console.log("Matricea dupa concat",images);

function shuffle(images){
    const cardData = images;
    cardData.sort(() => Math.random() - 0.5);
    return cardData;

}

shuffle(images);
for(i = 0; i < n*n; i++){
    console.log(images[i]);
}


function createState(n){
    const emptyList = [];

    for(i = 0; i < n; i ++){
        emptyList[i] = [];
    }
    console.log("emptyList=",emptyList);
    return emptyList;

}
const matrix = createState(n);
console.log("Matrix=",matrix);

function createMatrix(matrix,images){
    for(var i = 0; i < n*n; i++){

            if(i < 4){
                console.log(images[i])
                matrix[0][i]= images[i];
                console.log(matrix[0][i])
                /*matrix[0][i]={
                    id: images[i],
                    status: "invisible"//visible or destroyed
                }*/


            }else{
                if(i >= 4 && i < 8){
                    matrix[1][i-n] = images[i];
                    /*matrix[1][i-n]={
                        id: images[i],
                        status: "invisible"//visible or destroyed
                    }*/
                }else{
                    if(i >= 8 && i < 12){
                        matrix[2][i-2*n] = images[i];
                        /*matrix[2][i-2*n]={
                            id: images[i],
                            status: "invisible"//visible or destroyed
                        }*/
                    }else{
                        matrix[3][i-3*n] = images[i];
                        /*matrix[3][i-3*n]={
                            id: images[i],
                            status: "invisible"//visible or destroyed
                        }*/
                    }
                }
            }

    }
    //console.log(matrix);
    return matrix;

}
const finalMatrix = createMatrix(matrix,images);
console.log("FinalMatrix=",finalMatrix);


function renderState(finalMatrix) {
    for (var i = 0; i < 4; i++) {
    finalMatrix.forEach((item) => {

        const card = document.createElement('div');
        const face = document.createElement('img');
        const back = document.createElement('div')

        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        //card.style.backgroundColor = "grey";

        card.setAttribute('id',item.id);
        console.log("Card cu id",card);
        var url = "url('" + item[i].imageSrc + "')";

        //console.log(url);
        face.style.backgroundImage = url;
        //console.log(face)
        console.log("item",item);
        console.log("face",face)

        //card.setAttribute('status', item.status);

        console.log("card",card)
        card.appendChild(face);
        card.appendChild(back);
        //console.log(card)
        //document.getElementById('CardGame').appendChild(item);
        //CardGame.appendChild(card);
        //console.log(CardGame)
        CardGame.appendChild(card);

        card.addEventListener('click', (e) =>{
            card.classList.toggle('toggleCard');
            AddEvent(e);


        })
    })

}
}

renderState(finalMatrix);

function AddEvent(e){
    console.log(e);
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');


    if(flippedCards.length == 2){
        /*var url1 = "url('" + flippedCards[0] + "')";
        console.log("url1=",url1);
        var url2 = "url('" + flippedCards[1] + "')";
        console.log("url2=",url2);*/

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

}

function removeHTML(n,images){


    const myobj = document.getElementById('CardGame');
    myobj.remove();
    const list = createState(n);
    FinalMatrix = createMatrix(list, images)
    renderState(FinalMatrix);
}

function restart(images){
    let cardData = shuffle(images);
    let faces = document.querySelectorAll('.face');
    let cards = document.querySelectorAll('.card');
    CardGame.style.pointerEvents = 'none';
    cardData.forEach((item , index) => {
        cards[index].classList.remove('toggleCard');
        cards[index].style.pointerEvents = 'all';

    })
}

function clickEvents(n,images) {
    Button.addEventListener('click', () => {
        //removeHTML(n,images);
    })
}

clickEvents(n,images);

