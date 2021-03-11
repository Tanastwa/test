const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

setInterval(() => {
	const date = new Date();

	const hour = date.getHours();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	if (hour > 12) {
		seconds.innerHTML = `${second} PM`;
	} else {
		seconds.innerHTML = `${second} AM`;
	}
	hours.textContent = `${hour}:`;
	minutes.textContent = `${minute}:`;
}, 1000);

const UIS = ['#Time', '#Stop-Watch', '#Countdown'];
let i = 0;
function displayNext() {
	const clock_div = document.querySelector('#clock');
	i > UIS.length ? null : i++;
	clock_div.style = '';
}

let count_seconds = 0;
let count_minutes = 0;
let count_hour = 0;

const minutesDiv = document.querySelector('#Counter-minutes');
const secondsDiv = document.querySelector('#Counter-seconds');
const hoursDiv = document.querySelector('#Counter-hours');
function incrementCount() {
	if (count_seconds >= 60) {
		minutesDiv.style = 'display:inherit';
		count_seconds = 0;
		count_minutes++;
	}
	if (count_minutes >= 60) {
		hoursDiv.style = 'display:inherit';
		count_minutes = 0;
		count_hour++;
	}
	count_seconds++;
	secondsDiv.textContent = `${count_seconds} s`;
	minutesDiv.textContent = `${count_minutes} m`;
	hoursDiv.textContent = `${count_hour} h`;
}

function reset() {
	count_seconds = 0;
	count_minutes = 0;
	count_hour = 0;
	secondsDiv.textContent = `${count_seconds} s`;
	minutesDiv.textContent = `${count_minutes} m`;
	hoursDiv.textContent = `${count_hour} h`;
}
const startBtn = document.querySelector('#start-count-btn');
const resetBtn = document.querySelector('#reset-count-btn');
const pauseBtn = document.querySelector('#pause-count-btn');

function removeBtns() {
	pauseBtn.style = 'display:inherit';
	resetBtn.style = 'display:inherit';
	startBtn.style = 'display:none';
}
function addBtns() {
	startBtn.style = 'display:inherit';
	resetBtn.style = 'display:none';
	pauseBtn.style = 'display:none';
}
startBtn.addEventListener('click', () => {
	const hi = setInterval(incrementCount, 1000);
	removeBtns();
	resetBtn.addEventListener('click', () => {
		reset();
		clearInterval(hi);
		addBtns();
	});
	pauseBtn.addEventListener('click', () => {
		clearInterval(hi);
		addBtns();
	});
});
