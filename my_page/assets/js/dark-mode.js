"use strict";

const modeToggler = document.getElementById('darkmode');
const documentBody = document.getElementsByTagName('body')[0];

function setThemeFromCookie() {

	// Check if the cookie is set 
	if (Cookies.get('mode') === undefined ) {
		documentBody.classList.add('dark-mode');
		modeToggler.checked = true; // toggle change
		
		console.log('Cookie: dark mode' );
		
	} else {
		documentBody.classList.remove('dark-mode');
		modeToggler.checked = false; // toggle change
		
		console.log('Cookie: light mode' );
	}
}


setThemeFromCookie();


modeToggler.addEventListener('change', () => {
		
    if (!modeToggler.checked) {

		documentBody.classList.remove('dark-mode');
		//Set cookies for 7 days 
		Cookies.set('mode', 'white-mode', { expires: 7 });
		
		console.log ('change to white mode');
		
	} else {
		documentBody.classList.add('dark-mode');

		//Remove cookies
		Cookies.remove('mode');
		
		console.log ('change to dark mode');
	}
});