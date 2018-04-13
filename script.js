'use strict';
class Playlist {

	addSong(input) {
		if(!input || input == '') {
			alert('Please, enter the name of the song');
		} else {

			const li = document.createElement('li'),
				  ul = document.querySelector('#playlist');
			
			li.innerHTML = input;
			li.className = 'playlist__item';
			ul.appendChild(li);

			input = '';
		};
	};

};

const playlist = new Playlist();
document.querySelector('#submit').addEventListener('click', () => {
	const input = document.querySelector('#input').value;
	playlist.addSong(input);
});