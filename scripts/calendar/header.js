import { getItem } from '../common/storage.js';
import { generateWeekRange, daysNames } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

export const renderHeader = () => {
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
  const calendarHeaderElem = document.querySelector('.calendar__header');
  calendarHeaderElem.innerHTML = generateWeekRange(
    getItem('displayedWeekStart')
  )
    .map(
      (day) =>
        `<div class="calendar__day-label day-label">
          <span class="day-label__day-name">${daysNames[day.getDay()]}</span>
          <span class="day-label__day-number">${day.getDate()}</span>
        </div>`
    )
    .join('');
};

// при клике на кнопку "Create" открыть модальное окно с формой для создания события
// назначьте здесь обработчик
