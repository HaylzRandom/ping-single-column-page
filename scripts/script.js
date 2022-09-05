const submitBtn = document.querySelector('.btn-submit');
const emailInput = document.querySelector('.email-input');
const errorMsg = document.querySelector('.email-error');

submitBtn.addEventListener('click', (e) => {
	/* e.preventDefault; */

	let emailAddress = emailInput.value;
	let validRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (!emailAddress.match(validRegex)) {
		errorMsg.innerText = 'Enter valid e-mail';
		submitBtn.style.marginBottom = '35px';
	} else {
		emailInput.value = '';
		errorMsg.innerText = '';
		submitBtn.style.marginBottom = '10px';
	}
});
