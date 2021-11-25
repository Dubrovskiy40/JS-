let cardsArray = [
    {
        id: 0,
        name: 'Data Scientist',
        link: 'https://cloveri.com/projects/drilling/ds/',
        imgPath: './img/1.png',
        text: '2 места'
    },
    {
        id: 1,
        name: 'Project-менеджер',
        link: 'https://cloveri.com/projects/drilling/pm/',
        imgPath: './img/2.png',
        text: '1 место'
    },
    {
        id: 2,
        name: 'Data Scientist2',
        link: 'https://cloveri.com/projects/drilling/ds/',
        imgPath: './img/3.png',
        text: '5 мест'
    },
    {
        id: 3,
        name: 'Project-менеджер2',
        link: 'https://cloveri.com/projects/drilling/pm/',
        imgPath: './img/4.png',
        text: '2 места'
    },
    {
        id: 4,
        name: 'Data Scientist3',
        link: 'https://cloveri.com/projects/drilling/ds/',
        imgPath: './img/5.png',
        text: '8 мест'
    },
    {
        id: 5,
        name: 'Project-менеджер3',
        link: 'https://cloveri.com/projects/drilling/pm/',
        imgPath: './img/6.png',
        text: '3 места'
    },
    {
        id: 6,
        name: 'Data Scientist4',
        link: 'https://cloveri.com/projects/drilling/ds/',
        imgPath: './img/7.png',
        text: '2 места'
    },
    {
        id: 7,
        name: 'Project-менеджер4',
        link: 'https://cloveri.com/projects/drilling/pm/',
        imgPath: './img/8.png',
        text: '0 мест'
    },
];

function renderCard() {
    console.log(`Функция запущена, всего будет отрисовано ${cardsArray.length} элементов`);

    let cards = document.querySelector('.main__cards');
    
    for (let i = 0; i < cardsArray.length; i++){

        let card = document.createElement('div');
        card.classList.add('main__card');

        let cardLink = document.createElement('a');
        cardLink.classList.add('card__link');
        cardLink.href = cardsArray[i].link;

        let cardImg = document.createElement('img');
        cardImg.classList.add('card__img');
        cardImg.src = cardsArray[i].imgPath;

        let cardDescription = document.createElement('div');
        cardDescription.classList.add('card__description');

        let cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__title');
        cardTitle.innerText = cardsArray[i].name;

        let cardText = document.createElement('span');
        cardText.classList.add('card__text');
        cardText.innerText = cardsArray[i].text;

        card.appendChild(cardLink);
        card.appendChild(cardDescription);
        cardLink.appendChild(cardImg);
        cardDescription.appendChild(cardTitle);
        cardDescription.appendChild(cardText);

        
        cards.appendChild(card);
    }
    btn.setAttribute('disabled', 'disabled');
    btn.innerText = 'Всё...';
}

const btn = document.querySelector('.main__btn');
btn.addEventListener('click', renderCard);

// когда страница загрузится, запускается ф-ю
// window.onload = renderCard; 