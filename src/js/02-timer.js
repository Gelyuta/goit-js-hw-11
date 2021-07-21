
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

userTime = null;
refs.btnStart.setAttribute('disabled', true);


// Таймер

 timer = {

    intervalId: null,
    isActive: false,
    

    start() {
        if(this.isActive){
    
            return;
        }
        
        const startTime = Date.now();
     
        this.isActive = true;
        
        this.intervalId = setInterval(() =>{
            const currentTime = Date.now();
            const timeZoneDifference = 10800000;//10800000 - разница во времени из-за часового пояса
            const deltaTime =  userTime - currentTime - timeZoneDifference;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);

            onTimerData({ days, hours, minutes, seconds })

            // console.log(`${days}:${hours}:${minutes}:${seconds}`);
        }, 1000);
    },
    stop(){
        clearInterval(this.intervalId);
        this.isActive = false;
    },
};

// Старт таймера
refs.btnStart.addEventListener('click', ()=> {
  timer.start();
});

// Событие инпута
    refs.inputEl.addEventListener('change', ()=>{
      userTime = Date.parse(new Date(refs.inputEl.value));
    if(userTime <= Date.now()){
         Swal.fire({
        title: 'Error!',
        text: 'Please choose a date in the future',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
                return;
    }
        // console.log('клик')
  
        refs.btnStart.removeAttribute('disabled');
     });

// **********************************************************************************************
// Функция, которая добавляет "0" перед числом

function pad(value){
return String(value).padStart(2, '0');
}

// ************************************************************************************************
// Функция, которая конвертирует дату и время

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = pad(Math.floor(ms / day));
    // Remaining hours
    const hours = pad(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); //{days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6, minutes: 42, seconds: 20}


// ************************************************************************************************
// Функция, которая добавляет данные таймера в интерфейс

function onTimerData({ days, hours, minutes, seconds }) {
    refs.daysEl.textContent = `${days}`;
    refs.hoursEl.textContent = `${hours}`;
    refs.minutesEl.textContent = `${minutes}`;
    refs.secondsEl.textContent = `${seconds}`;
};

// ***************************************************************************
// Класс "Таймер"

// class Timer {
//     constructor({ onTick }) {
//       this.intervalId = null;
//       this.isActive = false;
//       this.onTick = onTick;
  
//       this.init();
//     }
  
//     init() {
//       const time = this.convertMs(0);
//       this.onTick(time);
//     }
  
//     start() {
//       if (this.isActive) {
//         return;
//       }
  
//       const startTime = Date.now();
//       this.isActive = true;
  
//       this.intervalId = setInterval(() => {
//         const currentTime = Date.now();
//          const deltaTime =  userTime - currentTime- 10800000;//10800000 - разница во времени из-за часового пояса
//         // const time = this.convertMs(deltaTime);
  
//         // this.onTick(time);
//       }, 1000);
//     }
  
//     stop() {
//       clearInterval(this.intervalId);
//       this.isActive = false;
//       // const time = this.convertMs(0);
//       // this.onTick(time);
//     }

//     convertMs(ms) {
//        // Number of milliseconds per unit of time
//        const second = 1000;
//        const minute = second * 60;
//        const hour = minute * 60;
//        const day = hour * 24;
          
//        // Remaining days
//        const days = this.pad(Math.floor(ms / day));
//        // Remaining hours
//        const hours = this.pad(Math.floor((ms % day) / hour));
//        // Remaining minutes
//        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
//        // Remaining seconds
//        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
          
//       return { days, hours, minutes, seconds };
//     }

//     pad(value) {
//       return String(value).padStart(2, '0');
//     }
//   }
  
//   const timer = new Timer({
//     onTick: onTimerData,
//   });
  
//   refs.btnStart.addEventListener('click', timer.start.bind(timer));
  

//   function onTimerData({ days, hours, minutes, seconds }) {
//     refs.daysEl.textContent = `${days}`;
//     refs.hoursEl.textContent = `${hours}`;
//     refs.minutesEl.textContent = `${minutes}`;
//     refs.secondsEl.textContent = `${seconds}`;
// };

// refs.inputEl.addEventListener('change', ()=>{
//   userTime = Date.parse(new Date(refs.inputEl.value));
// if(userTime <= Date.now()){
//     Swal.fire({
//         icon: 'error',
//         title: 'Oops...',
//         text: 'Something went wrong!',
//         footer: 'Please select a date later than the current one',
//             });
//             return;
// }
//     console.log('клик')

//     refs.btnStart.removeAttribute('disabled');
//  });
  
          