function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
// Получаю доступ к кнопкам

  const refs = {
    btnStart : document.querySelector('button[data-start]'),
    btnStop : document.querySelector('button[data-stop]'),
}

// Вешаю слушатель событий на кнопки

refs.btnStart.addEventListener('click', onClickBtnStart);
refs.btnStop.addEventListener('click', onClickBtnStop);

let timerId = null;

// Функция, которая меняет цвет боди при клике на кнопку 'start'
 function onClickBtnStart () {
    refs.btnStart.disabled = true;

    timerId = setInterval(() => {
        const colors = getRandomHexColor();
        document.body.style.backgroundColor = colors;
    }, 1000);

    console.log('старт')
}

// Функция, которая останавлявает смену цвета боди при клике на кнопку 'stop'
 function onClickBtnStop () {
  refs.btnStart.disabled = false;
  clearInterval(timerId);
  console.log('стоп')
 }

 