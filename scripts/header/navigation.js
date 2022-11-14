import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
  '.navigation__displayed-month'
);

function renderCurrentMonth() {
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  // вставить в .navigation__displayed-month
  displayedMonthElem.textContent = getDisplayedMonth(
    getItem('displayedWeekStart')
  );
}

const onChangeWeek = (event) => {
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
  if (event.target.dataset.direction === 'next') {
    setItem('displayedWeekStart', 6.048e8);
    renderCurrentMonth();
    renderHeader();
  } else if (event.target.dataset.direction === 'prev') {
    setItem('displayedWeekStart', -6.048e8);
    renderCurrentMonth();
    renderHeader();
  } else if (event.target.dataset.direction === 'today') {
    setItem('displayedWeekStartReset');
    renderCurrentMonth();
    renderHeader();
  }
};

export const initNavigation = () => {
  renderCurrentMonth();
  navElem.addEventListener('click', onChangeWeek);
};
