const hotels = [
    {
        img: '/image/1-slide.jpg', 
        city: 'Rostov-on-Don <br> LCD admiral', 
        area: '81 m2',
        time: '3.5 months',
        cost: 'Upon request'
    },
    {
        img: '  /image/2-slide.jpg', 
        city: 'Sochi <br> Thieves', 
        area: '105 m2',
        time: '4 months',
        cost: 'Upon request'
    },
    {
        img: '/image/3-slide.jpg', 
        city: 'Rostov-on-Don <br> Patriotic', 
        area: '93 m2',
        time: '3 months',
        cost: 'Upon request'
    }
];sliderImages


// Функция слайдера фото 
function initSlider(hotels) {
    if(!hotels || !hotels.length) return; // проверка на наличие массива с фото 

    const sliderWrapper = document.querySelector(".wrapper");
    const sliderImages = sliderWrapper.querySelector(".slider-img");
    const sliderArrows = sliderWrapper.querySelector(".arrows");

    initImages(); 

    function initImages() {
        initImages.forEach((Image, index) => {
            let imageElement = document.createElement("div");
            imageElement.className = `image n${index} ${index? "" : "active"}`;
            imageElement.dataset.index = index;
            imageElement.style.backgroundImage = `url(${hotels.img})`
            sliderImages.appendChild(imageElement);
        })

    }
}


document.addEventListener('DOMContentLoaded', () => {
    initSlider(hotels);
});


