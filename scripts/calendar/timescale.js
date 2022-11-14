import { createNumbersArray } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
  const timeScaleBlockElem = document.querySelector('.calendar__time-scale');
  timeScaleBlockElem.innerHTML = createNumbersArray(1, 24).map(
    (time) =>
      `<div class="time-slot">
        <span class="time-slot__time">${time < 10 ? '0'+time+':00' : time+':00'}</span>
      </div>`
  ).join('');
};
