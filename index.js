class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.timerId = null;
  } // конструктор
  getRefs() {
    const timerContainer = document.querySelector(this.selector);
    const days = timerContainer.querySelector('[data-value="days"]');
    const hours = timerContainer.querySelector('[data-value="hours"]');
    const mins = timerContainer.querySelector('[data-value="mins"]');
    const secs = timerContainer.querySelector('[data-value="secs"]');

    return { days, hours, mins, secs };// возвращаем ссылки
  }
  updateTimer({ days, hours, mins, secs }) {
    const currentDate = Date.now();
    const time = this.targetDate - currentDate;
    // days.textContent = Math.floor(time / (1000 * 60 * 60 * 24));
    // hours.textContent = Math.floor(
    //   (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    // mins.textContent = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    // secs.textContent = Math.floor((time % (1000 * 60)) / 1000);

    const daysLeft = Math.floor(time / (1000 * 60 * 60 * 24));// дано
    // console.log(time);
    const hoursLeft = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));// дано
    const minsLeft = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));// дано
    const secsLeft = Math.floor((time % (1000 * 60)) / 1000);// дано

    // days.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
    days.textContent = daysLeft.toString().padStart(2, "0");// добавление символи при <10
    hours.textContent = hoursLeft.toString().padStart(2, "0");// добавление символи при <10
    mins.textContent = minsLeft.toString().padStart(2, "0");// добавление символи при <10
    secs.textContent = secsLeft.toString().padStart(2, "0");// добавление символи при <10

    if (time < 1000) {
      this.clearTimer();
    }// остановка таймера
  }

  startTimer() {
    this.timerId = setInterval(() => {
      this.updateTimer(this.getRefs());
    }, 1000);
  }
  clearTimer() {
    clearInterval(this.timerId);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Sep 2, 2021 12:38"),
});// дано

// const timer2 = new CountdownTimer({
//   selector: "#timer-2",
//   targetDate: new Date("Sep 2, 2021 12:38"),
// }); второй таймер

timer.startTimer();
// timer2.startTimer(); второй таймер
console.log(timer);