const timer = (deadline) => {
  //получил доступ к таймеру
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');
  
  //Получаем цифры времени
  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    if (timeRemaining < 0)
    {
      timeRemaining = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    }

    return {timeRemaining, hours, minutes, seconds};
  };


  //Заношу данные на страницу
  const updateClock = () => {
    let getTime = getTimeRemaining();

    getTime.hours < 10 ? timerHours.textContent = '0' + getTime.hours : timerHours.textContent = getTime.hours;
    getTime.minutes < 10 ? timerMinutes.textContent = '0' + getTime.minutes : timerMinutes.textContent = getTime.minutes;
    getTime.seconds < 10 ? timerSeconds.textContent = '0' + getTime.seconds : timerSeconds.textContent = getTime.seconds;
  };

  //Запуск таймера
  const startTimer = () => {
    let intervalId;
    let getTime = getTimeRemaining();
    updateClock();

    if(getTime.timeRemaining > 0)
    {
      intervalId = setInterval(updateClock, 1000);
    }
    else
    {
      clearInterval(intervalId);
    }
  };
  startTimer();  

};

export default timer;
