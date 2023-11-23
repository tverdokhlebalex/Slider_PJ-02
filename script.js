const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const entities = [
    {
        img: '/image/1-slide.jpg', 
        dot: document.querySelector('.dot-1'),
        city: 'Rostov-on-Don<br>LCD admiral', 
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        img: '/image/2-slide.jpg', 
        dot: document.querySelector('.dot-2'),
        city: 'Sochi<br>Thieves', 
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        img: '/image/3-slide.jpg', 
        dot: document.querySelector('.dot-3'),
        city: 'Rostov-on-Don<br>Patriotic', 
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
]

const slider = document.querySelector('.slider-img');

// слайдер фото 
const setEntity = (index) => {
    slider.style.backgroundImage = `url(${entities[index].img})`;
}

// активные эл-ты 
const makeActive = (index) => { 
    entities[index].dot.style.opacity = 1; 
    entities[index].line.classList.add('brass-hypertext');
}

// не активные эл-ты 
const makeInactive = (index) => {
    entities[index].dot.style.opacity = 0.3;
    entities[index].line.classList.remove('brass-hypertext');
}
// смена текста 
const changeTextContent = (index) => {
    document.querySelector('.city-name').textContent = entities[index].city;
    document.querySelector('.area').textContent = entities[index].area;
    document.querySelector('.time').textContent = entities[index].time;
    document.querySelector('.cost').textContent = entities[index].cost;
}

//переключение слайда нажатием 
const pressOnElement = (index) => {
    makeInactive(currentIndex);
    changeTextContent(index);
    currentIndex = index;
    setEntity(currentIndex);
    makeActive(currentIndex);
}

//обработчик нажатий

let currentIndex = 0;

arrowLeft.addEventListener('click', () => {
    makeInactive(currentIndex);
    if (currentIndex == 0) {
        currentIndex = entities.length - 1;
    } else {
        currentIndex -= 1;
    }

    changeTextContent(currentIndex);
    setEntity(currentIndex);
    makeActive(currentIndex);
})

arrowRight.addEventListener('click', () => {
    makeInactive(currentIndex);
    if (currentIndex == 0) {
        currentIndex = entities.length - 1;
    } else {
        currentIndex += 1;
    }

    changeTextContent(currentIndex);
    setEntity(currentIndex);
    makeActive(currentIndex);
})

for (let i = 0; i < entities.length - 1; i++) {
    entities[i].dot.addEventListener('click', () => {
        pressOnElement(i)
    });
    entities[i].line.addEventListener('click', () => {
        pressOnElement(i)
    });
}
