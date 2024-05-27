const trigger = document.querySelector('.trigger');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

// Crea un nuevo objeto de audio y proporciona la ruta del archivo de audio
const audioOpen = new Audio('./media/retro-spell-sfx-85574.mp3'); // Reemplaza 'audio_file_open.mp3' con la ruta de tu archivo de audio para abrir
const audioClose = new Audio('./media/retro-falling-down-sfx-85575.mp3'); // Reemplaza 'audio_file_close.mp3' con la ruta de tu archivo de audio para cerrar

trigger.addEventListener('click', () => {
    nav.classList.add('open-nav');
    audioOpen.play(); // Reproduce el audio cuando se hace clic en el botón
});

backdrop.addEventListener('click', () => {
    nav.classList.remove('open-nav');
    audioClose.play(); // Reproduce el audio cuando se cierra el menú
});


// Crea un nuevo objeto de audio y proporciona la ruta del archivo de audio
var itemHover = new Audio('./media/one_beep-99630.mp3'); // Reemplaza 'audio_file.mp3' con la ruta de tu archivo de audio

// Obtén todos los elementos a dentro de los elementos li en el ul con la clase 'items'
var listItems = document.querySelectorAll('.items li a');

// Agrega un event listener a cada elemento a para reproducir el audio cuando el cursor pasa sobre él
listItems.forEach(function(listItem) {
    listItem.addEventListener('mouseover', function() {
        // Crea un nuevo objeto de audio y proporciona la ruta del archivo de audio
        var itemHover = new Audio('./media/one_beep-99630.mp3'); // Reemplaza 'audio_file.mp3' con la ruta de tu archivo de audio
        itemHover.play();
    });
});

