'use strict';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.start();
  }
  start() {
    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = this.targetDate - currentTime;
      this.updateClockFace(this.deltaTime);
      const timeIsOut = this.deltaTime < 1000;
      if (timeIsOut) {
        this.stop();
      }
    }, 1000);
  }
  stop() {
    clearInterval(this.timerId);
  }
  selectEl(value) {
    const element = document.querySelector(
      `${this.selector} .field > [data-value="${value}"]`,
    );
    return element;
  }
  updateClockFace(time) {
    const definedTime = this.defineTime(time);
    this.insertData(definedTime);
  }
  defineTime(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  pad(value) {
    return String(value).padStart(2, '0');
  }
  insertData(time) {
    const unitsOfTime = Object.keys(time);
    unitsOfTime.map(
      unitOfTime => (this.selectEl(unitOfTime).textContent = time[unitOfTime]),
    );
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('2020 Oct 24 19:52:45'),
});
