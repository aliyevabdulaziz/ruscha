// Smooth scroll for anchor links

// Pol right
// Radio group logic

// Timer functionality
let timeLeft = 60 * 60; // 59 minutes and 24 seconds in total seconds

function updateTimer() {
	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
	const timerElement = document.getElementById('timer');
	if (timerElement) {
		timerElement.textContent = formattedTime;
	}

	if (timeLeft > 0) {
		timeLeft--;
	} else {
		timeLeft = 59 * 60 + 24; // Reset timer
	}
}

// Update timer every second
setInterval(updateTimer, 1000);

// Radio button functionality
const radioItems = document.querySelectorAll('.radio-item');

radioItems.forEach(item => {
	item.addEventListener('click', function () {
		// Remove selected class and checked state from all items
		radioItems.forEach(radio => {
			radio.classList.remove('selected');
			radio.querySelector('.radio-input').classList.remove('checked');
		});

		// Add selected class and checked state to clicked item
		this.classList.add('selected');
		this.querySelector('.radio-input').classList.add('checked');
	});
});

const input = document.querySelectorAll('.form-input');

// Form submission
button.addEventListener('click', function () {
	console.log('salom');
});

// Функция для открытия модального окна
function openModal() {
	const modal = document.getElementById('modal');
	modal.style.display = 'block';
	document.body.style.overflow = 'hidden';

	// Отключаем прокрутку страницы
}

// Функция для закрытия модального окна
function closeModal() {
	const modal = document.getElementById('modal');
	modal.style.display = 'none';
	document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
}

// Функция для перехода в Telegram
function goToTelegram() {
	// Замените на ваш Telegram username или ссылку
	window.open('https://t.me/your_username', '_blank');
}

// Функция для перехода в WhatsApp
function goToWhatsApp() {
	// Замените на ваш номер WhatsApp
	window.open('https://wa.me/your_phone_number', '_blank');
}

// Закрытие модального окна при клике вне его области
window.onclick = function (event) {
	const modal = document.getElementById('modal');
	if (event.target === modal) {
		closeModal();
	}
};

// Закрытие модального окна при нажатии Escape
document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		closeModal();
	}
});
