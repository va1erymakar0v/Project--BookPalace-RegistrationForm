const showPasswordButton = document.querySelector('#show_password');
const fieldPassword = document.querySelector('#password_input');
const eyeOn = document.querySelector('.item__show-password');
const eyeOff = document.querySelector('.item__hide-password');

eyeOn.onclick = function() {
		fieldPassword.setAttribute('type', 'text');
		eyeOn.style.display = 'none';
		eyeOff.style.display = 'block';
}
eyeOff.onclick = function() {
		fieldPassword.setAttribute('type', 'password');
		eyeOff.style.display = 'none';
		eyeOn.style.display = 'block';
}

const fieldName = document.querySelector('#name_input');
const fieldEmail = document.querySelector('#email_input');
const checkbox = document.querySelector('.policy__checkbox');
const checkboxChecked = document.querySelector('.policy__checkbox_checked-img');
const createAccountButton = document.querySelector('#create_button'); 
createAccountButton.disabled = true;

checkbox.addEventListener('click', function() {
	if (checkbox.classList.contains('active')) {
		checkboxChecked.style.display = 'none';
		createAccountButton.disabled = true;
	} else {
		checkboxChecked.style.display = 'block';
		createAccountButton.disabled = false;
	}
	checkbox.classList.toggle('active');
	createAccountButton.classList.toggle('active');
})



let slider1Offset = 0;

const sliderLine = document.querySelector('.slider__line');

const sliderLength = document.querySelectorAll('.book__item').length;
const sliderItems = document.querySelectorAll('.book__item');


const sliderCurrent = document.querySelector('.slider-current');
const sliderAll = document.querySelector('.slider-all');


let currentSlide = 1;
sliderCurrent.innerHTML = currentSlide;
sliderAll.innerHTML = sliderLength;

const colorAbout = document.querySelector('.book__subtitle_about');

chooseColor = function(x) {
	if (sliderItems[x].classList.contains('psychologyofmoney')) {
		colorAbout.style.color = '#7da68e'
		colorAbout.innerHTML = 'understand about money management.'
	} else if (sliderItems[x].classList.contains('sugarrun')) {
		colorAbout.style.color = '#f9c7ac'
		colorAbout.innerHTML = 'feel the modern world ethics.'
	} else if (sliderItems[x].classList.contains('disastertourist')) {
		colorAbout.style.color = '#ffe680'
		colorAbout.innerHTML = 'have a fantastic story.'
	}
}

chooseColor(currentSlide - 1);

let sliderWidth;

document.querySelector('.slider-next').addEventListener('click', function() {
	sliderWidth = Number(document.querySelector('.book__slider').offsetWidth)
	slider1Offset += sliderWidth;
	currentSlide += 1;
	if (slider1Offset > sliderWidth*3 - 1) {
		slider1Offset = 0
	}
	if (currentSlide > 3) {
		currentSlide = 1
	}
	sliderCurrent.innerHTML = currentSlide;
	sliderLine.style.left = -slider1Offset + 'px';
	chooseColor(currentSlide - 1);
})

document.querySelector('.slider-prev').addEventListener('click', function() {
	sliderWidth = Number(document.querySelector('.book__slider').offsetWidth)
	slider1Offset -= sliderWidth;
	currentSlide -= 1;
	if (slider1Offset < 0) {
		slider1Offset = sliderWidth*2;
	}	
	if (currentSlide < 1) {
		currentSlide = 3
	}
	sliderCurrent.innerHTML = currentSlide;
	sliderLine.style.left = -slider1Offset + 'px';
	chooseColor(currentSlide - 1);
})

let smallScreen = 400;
let bigScreen = 700;
let currentScreen;

let resizeFlag = 1;

const goFirstSlide = function() {
	sliderLine.style.left = 0;
	slider1Offset = 0;
	currentSlide = 1;
	sliderCurrent.innerHTML = currentSlide;
	chooseColor(currentSlide - 1);

	resizeFlag = 0;
}

window.addEventListener('resize', function(){
    if (window.innerWidth > 580 && window.innerWidth < 615 && resizeFlag == 1) {
    	goFirstSlide();
    } else {
    	resizeFlag = 1;
    }
});


