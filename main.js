const button = document.querySelector('.cta-button');
document.getElementById('consultationForm').addEventListener('submit', function (e) {
	e.preventDefault();

	const name = document.getElementById('name').value.trim();
	const phone = document.getElementById('phone').value.trim();

	if (name && phone) {
		// Simulate form submission
		const originalText = button.innerHTML;

		button.innerHTML = '<span class="play-icon">⏳</span> Отправка...';
		button.disabled = true;
		button.setAttribute('href', 'next.html'); // Redirect to next page after submission
		window.location.href = 'next.html'; // Redirect to next page
		setTimeout(() => {
			alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} в ближайшее время.`);
			button.innerHTML = originalText;
			button.disabled = false;
			this.reset();
			document.getElementById('phone').value = '+998 ';
			// localStorage orqali saqlash
			localStorage.setItem('userName', name);
			localStorage.setItem('userPhone', phone);

			// keyingi sahifaga o'tish
			window.location.href = 'next.html';
		}, 2000);
	} else {
		alert('Пожалуйста, заполните все поля');
	}
});

// Phone number formatting
document.getElementById('phone').addEventListener('input', function (e) {
	let value = e.target.value;

	// Ensure the value always starts with +998
	if (!value.startsWith('+998')) {
		value = '+998 ' + value.replace('+998', '');
	}

	// Keep only the first +998 occurrence
	const prefix = '+998 ';
	const numberPart = value.substring(prefix.length).replace(/[^0-9]/g, '');

	// Limit to 9 digits after +998
	const limitedNumber = numberPart.substring(0, 9);

	// Format as XX XXX XX XX after the +998 prefix
	let formatted = prefix;
	if (limitedNumber.length >= 1) {
		formatted += limitedNumber.substring(0, 2);
	}
	if (limitedNumber.length >= 3) {
		formatted += ' ' + limitedNumber.substring(2, 5);
	}
	if (limitedNumber.length >= 6) {
		formatted += ' ' + limitedNumber.substring(5, 7);
	}
	if (limitedNumber.length >= 8) {
		formatted += ' ' + limitedNumber.substring(7, 9);
	}

	e.target.value = formatted;
});

// Initialize phone input with +998 prefix
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('phone').value = '+998 ';
});

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
