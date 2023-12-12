const grid = document.querySelector('.grid');

const cardsItem = [
    'cssIcon',
    'angularIcon',
    'reactIcon',
    'htmlIcon',
    'jsIcon',
    'javaIcon'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';

const checkEndGame = () => {
    const reavealedCards = document.querySelectorAll('.reveal-card');

    if (reavealedCards.length === 12) {
            alert('Você ganhou!');
            window.location.reload();
    }
}

const checkCards = () => {
    const firstLanguage = firstCard.getAttribute('data-language');
    const secondLanguage = secondCard.getAttribute('data-language');

    if (firstLanguage === secondLanguage) {
        firstCard = '';
        secondCard = '';

        checkEndGame();
    } else {
        setTimeout( () => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
        }, 500);
    }
}

const revealCard = ({target}) => {

    if(target.parentNode.className.includes('reveal-carde')) {
        return;
    } 

    if (firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode;
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode;

        checkCards();
    }

    
}

const createCard = (Language) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const costas = createElement('div', 'face costas');

    front.style.backgroundImage = `url(../assets/images/${Language}.png)`;

    card.appendChild(front);
    card.appendChild(costas);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-language', Language);

    return card;
}

const loadGame = () => {

    duplicateCards = [ ...cardsItem, ...cardsItem ];

    const shuffledCards = duplicateCards.sort( () => Math.random() - 0.5);

    shuffledCards.forEach((Language) => {
        
        const card = createCard(Language);
        grid.appendChild(card);
    })
}

loadGame();