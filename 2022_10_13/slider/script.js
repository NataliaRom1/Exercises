
  let position = 0;
  const slidesToShow = 3; //сколько эл. показывать
  const slidesToScroll = 2; //сколько эл. проскроливать
  const container = document.querySelector('.slider-container')
  const track = document.querySelector('.slider-track');
  const items = document.querySelectorAll('.slider-item');
  const btnPrev = document.querySelector('.button-prev');
  const btnNext = document.querySelector('.button-next');
  const itemsCount = items.length;
  const itemWidth = container.clientWidth / slidesToShow; //Ширина элемента
  const movePosition = slidesToScroll * itemWidth;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth)/itemWidth;

    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
  };
  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= - (itemsCount - slidesToShow) * itemWidth;
  };

  checkBtns();
