'use strict';

const colors = [
  '#0d9b9b',
  '#2196F3',
  '#4CAF50',
  '#ca974a',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.body,
};

const color = {
  isActive: false,
  start() {
    if (this.isActive) return;

    this.isActive = true;

    this.intervalID = setInterval(() => {
      const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
      refs.body.style.backgroundColor = colors[randomIndex];
    }, 1000);

    refs.startBtn.disabled = true;
  },
  stop() {
    clearInterval(this.intervalID);
    this.isActive = false;
    refs.startBtn.disabled = false;
  },
};

refs.startBtn.addEventListener('click', color.start.bind(color));
refs.stopBtn.addEventListener('click', color.stop.bind(color));
