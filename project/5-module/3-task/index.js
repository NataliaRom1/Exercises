function initCarousel() {
  let position = 0;
  const slidesToShow = 1; //сколько эл. показывать
  const slidesToScroll = 1; //сколько эл. проскроливать


  const carousel = document.querySelector(".carousel");
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselSlide = document.querySelector(".carousel__slide")
  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  const slideCount = carouselInner.children.length;
  const slideWidth = carouselInner.clientWidth / slidesToShow; //Ширина элемента
  const movePosition = slidesToScroll * slideWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  console.log(slideWidth);





//  /* конфигурация */
//  let width = 988; // ширина картинки
//  let count = 1; // видимое количество изображений

//  let list = carousel.querySelector('ul');
//  let listElems = carousel.querySelectorAll('li');

//  let position = 0; // положение ленты прокрутки

//  carousel.querySelector('.prev').onclick = function() {
//    // сдвиг влево
//    position += width * count;
//    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//    position = Math.min(position, 0)
//    list.style.marginLeft = position + 'px';
//  };

//  carousel.querySelector('.next').onclick = function() {
//    // сдвиг вправо
//    position -= width * count;
//    // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//    position = Math.max(position, -width * (listElems.length - count));
//    list.style.marginLeft = position + 'px';
//  };


}

initCarousel(); // после того, как эта функция выполнится, в карусели должны начать переключаться слайды













// function initCarousel() {
//   const carousel = document.querySelector(".carousel"),
//         carouselInner = document.querySelector(".carousel__inner"),
//         carouselArrowRight = document.querySelector(".carousel__arrow_right"),
//         carouselArrowLeft = document.querySelector(".carousel__arrow_left"),
//         carouselSLide = document.querySelector(".carousel__slide");

//   const slideQuantity = carouselInner.children.length;
//   let counter = 1;

//   if (counter === 1) {
//     carouselArrowLeft.style.display = 'none';
//   }

//   carousel.addEventListener("click", function (event) {
//     const slideWidth = carouselSLide.offsetWidth;

//     if (event.target.closest(".carousel__arrow_right")) {
//       carouselInner.setAttribute(
//         "style",
//         `transform: translateX(${-slideWidth * counter}px)`
//       );

//       counter++;

//       if (counter === slideQuantity) {
//       carouselArrowRight.style.display = 'none'
//         counter--;
//       }

//       carouselArrowLeft.removeAttribute("style");
//     }

//     if (event.target.closest(".carousel__arrow_left")) {
//       counter--;
//       carouselInner.setAttribute(
//         "style",
//         `transform: translateX(${-slideWidth * counter}px)`
//       );

//       carouselArrowRight.removeAttribute("style");
//     }

//     if (counter === 0) {
//       carouselArrowLeft.style.display = 'none'
//       counter++
//     }
//   });
// }
