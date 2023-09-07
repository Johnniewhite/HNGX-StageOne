const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const today = new Date();
const currentDayIndex = today.getDay();
const currentDay = days[currentDayIndex];

const dayOfWeekElement = document.querySelector('.dayOfTheWeek');
dayOfWeekElement.innerHTML = currentDay;



const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();

const currentTime = `${hours}:${minutes}:${seconds}`;

const timeElement = document.querySelector('.time');
timeElement.innerHTML = currentTime;