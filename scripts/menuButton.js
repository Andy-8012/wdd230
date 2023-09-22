const hamButton = document.querySelector('#menuButton');
const navigation = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});