const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']; 
const cards = symbols.concat(symbols); // parovi
shuffleArray(cards);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateCards() {
    const memoryGame = document.getElementById('memoryGame');

    cards.forEach((symbol) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.textContent = '?';

        card.addEventListener('click', () => {
            flipCard(card, symbol);
        });

        memoryGame.appendChild(card);
    });
}
generateCards();



let firstValue = null;
let firstElement = null;

function flipCard(cardElement, cardValue) {
    cardElement.textContent = cardValue;
    if(!firstValue){
        firstValue = cardValue;
        firstElement = cardElement;
    }
    else{
        if(firstElement == cardElement){
            setTimeout(() => {
                cardElement.textContent = '?';
            }, 400);
        }
            
        else if(firstValue == cardValue){
            cardElement.style.backgroundColor = 'lightgreen';
            firstElement.style.backgroundColor = 'lightgreen';
        }
        else{
                setTimeout(() => {
                    firstElement.textContent = '?';
                    cardElement.textContent = '?';
                }, 400);
        }
        setTimeout(() => {
            firstElement = null;
            firstValue = null;
        }, 400);
    }
}
