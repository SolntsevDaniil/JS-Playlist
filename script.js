'use strict';
window.addEventListener('DOMContentLoaded', function() {

	// Submit event
	document.getElementById('submit').addEventListener('click', function() {

		// Textarea searching
		var textArea = document.getElementById('input'),
			// Textarea value is name of song
			songName = textArea.value;

		if (!songName || songName == '') {
			alert('Please, enter the name of the song');
		} else {

			// Creating of new element
			var li = document.createElement('li'),
				// List searching
				ul = document.getElementById('playlist');

			// Adding song name to the page
			li.innerHTML = songName;
			li.className = 'playlist__item';
			ul.appendChild(li);

			// Value clearing
			textArea.value = '';
		};
	});
});