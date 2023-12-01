//навигация 

const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');

const entities = [
    {
        img: './image/1-slide.jpg',
        dot: document.querySelector('.dot-1'),
        line: document.querySelector('.line-decorate-1'),
        city: 'Rostov-on-Don<br>LCD admiral',
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        img: './image/2-slide.jpg',
        dot: document.querySelector('.dot-2'),
        line: document.querySelector('.line-decorate-2'),
        city: 'Sochi<br>Thieves',
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        img: './image/3-slide.jpg',
        dot: document.querySelector('.dot-3'),
        line: document.querySelector('.line-decorate-3'),
        city: 'Rostov-on-Don<br>Patriotic',
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
];

const slider = document.querySelector('.slider-img');

//ФУНКЦИИ 
//замена фото на слайдах 
function setEntity(index) {

    slider.style.backgroundImage = `url(${entities[index].img})`;
}

//2.Неактивные -> активные элементы
function makeActive(index) {
    entities[index].dot.style.opacity = 1;
    if (entities[index].line) {
        entities[index].line.classList.add('brass-hypertext');
    }
}
//3.Активные -> неактивные элементы
function makeInactive(index) {
    entities[index].dot.style.opacity = 0.3;
    if (entities[index].line) {
        entities[index].line.classList.remove('brass-hypertext');
    }
}
//4.Смена текстового содержимого
function changeTextContent(index) {
    document.querySelector('.city-name').innerHTML = entities[index].city;
    document.querySelector('.area').textContent = entities[index].area;
    document.querySelector('.time').textContent = entities[index].time;
    document.querySelector('.cost').textContent = entities[index].cost;
}
//5.Переключение нажатием на точку/заголовок
function pressOnElement(index) {
    makeInactive(currentIndex);
    changeTextContent(index);
    currentIndex = index;
    setEntity(currentIndex);
    makeActive(currentIndex);
}


//ОБРАБОТКА НАЖАТИЙ:
//0.Настройка на нулевой элемент
let currentIndex = 0;

//1. Левая стрелка
arrowLeft.addEventListener('click', () => {
    makeInactive(currentIndex);
    currentIndex = (currentIndex === 0) ? entities.length - 1 : currentIndex - 1;
    changeTextContent(currentIndex);
    setEntity(currentIndex);
    makeActive(currentIndex);
});

//1. Правая стрелка 
arrowRight.addEventListener('click', () => {
    makeInactive(currentIndex);
    currentIndex = (currentIndex === entities.length - 1) ? 0 : currentIndex + 1;
    changeTextContent(currentIndex);
    setEntity(currentIndex);
    makeActive(currentIndex);
});


//3. Точки и заголовки 
for (let i = 0; i < entities.length; i++) {
    if (entities[i].dot && entities[i].line) {
        entities[i].dot.addEventListener('click', () => {
            pressOnElement(i);
        });
        entities[i].line.addEventListener('click', () => {
            pressOnElement(i);
        });
    }
}

// Начальная настройка слайда
setEntity(currentIndex);
makeActive(currentIndex);
changeTextContent(currentIndex);
