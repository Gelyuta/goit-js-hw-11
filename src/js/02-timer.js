
// Получаю доступ к элементам DOM-дерева

const refs = {
btnStart : document.querySelector('button[data-start]'),
inputEl : document.querySelector('input#date-selector'),
daysEl : document.querySelector('[data-days]'),
hoursEl : document.querySelector('[data-hours]'),
minutesEl : document.querySelector('[data-minutes]'),
secondsEl : document.querySelector('[data-seconds]'),
}

// Вешаю классы на форму и кнопку

refs.inputEl.classList.add('input__style'),
refs.btnStart.classList.add('button__style'),

// Вешаю слушатель событий на кноаку

refs.btnStart.addEventListener('click', onClickBtn)

function onClickBtn () {
    console.log('клик')
}