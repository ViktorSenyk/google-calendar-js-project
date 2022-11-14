let storage = {
  // используется для удаления события
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: new Date(),
  // хранит массив всех событий
  events: [],
  // это все данные, которые вам нужно хранить для работы приложения
};

export const setItem = (key, value) => {
  if (key === 'displayedWeekStart') {
    // storage.displayedWeekStart = new Date(storage.displayedWeekStart.getTime() + 6.048e8);
    console.log('Why ?');
  }
};

export const getItem = (key) => storage[key];

// пример объекта события
const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: 'Title',
  description: 'Some description',
  start: new Date('2020-03-17T01:10:00.000Z'),
  end: new Date('2020-03-17T04:30:00.000Z'),
};
