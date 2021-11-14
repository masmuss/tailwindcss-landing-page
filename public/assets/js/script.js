const navToggler = document.querySelector('#nav-toggler');
const target = navToggler.getAttribute('data-target');

navToggler.addEventListenener('click', function() {
	console.log('ok');
});
