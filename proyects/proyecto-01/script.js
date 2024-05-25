var wordToType;
var wordCount;
var errorCount;
var timer;
var interval;
var startTime;


function startGame(words) {
    wordToType = words.join(' ') + ' ';
    wordCount = 0;
    errorCount = 0;
    timer = 60;
    startTime = Date.now();

    document.querySelector('article#customAlert').style.display = 'none';
    document.getElementById('wordToType').textContent = wordToType;
    document.getElementById('timer').textContent = timer;
    document.getElementById('errorCount').textContent = errorCount;

    interval = setInterval(function() {
        timer--;
        document.getElementById('timer').textContent = timer;
        if (timer <= 0 || words.length === 0) {
            clearInterval(interval);
            var endTime = Date.now();
            var elapsedTime = (endTime - startTime) / 1000; // convertir a segundos
            var elapsedTimeInMinutes = elapsedTime / 60; // convertir a minutos
            var wpm = Math.round(wordCount / elapsedTimeInMinutes);

            // Ocultar el texto, temporizador, recuento de errores y campo de entrada
            document.getElementById('wordToType').style.display = 'none';
            document.getElementById('userInput').style.display = 'none';
            document.getElementById('errorCount').style.display = 'none';
            document.getElementById('timer').style.display = 'none';
            document.getElementById('logo').style.display = 'none';
            document.getElementById('disclaimer').style.display = 'none';
        
            // Mostrar la alerta personalizada
            document.querySelector('article#customAlert').style.display = 'block';
        
            // Mostrar WPM y errorCount
            document.querySelector('span#WPMAndErrors').textContent = `WPM: ${wpm} Errors: ${errorCount}`;
        }
    }, 1000);
    
    // Cerrar la alerta personalizada
    document.getElementById('closeAlert').addEventListener('click', function() {
        document.querySelector('article#customAlert').style.display = 'none';
    });

    document.getElementById('userInput').addEventListener('input', function(e) {
        var userInput = e.target.value;
        var currentWord = wordToType.split(' ')[0] + ' ';
        var lastInput = e.data; // último carácter ingresado
    
        if (userInput === currentWord) {
            wordCount++;
            e.target.value = '';
    
            words = words.slice(1);
            wordToType = words.join(' ') + ' ';
            document.getElementById('wordToType').textContent = wordToType;
        } else if (currentWord.startsWith(userInput)) {
            var typedPart = currentWord.slice(0, userInput.length);
            var untypedPart = currentWord.slice(userInput.length);
            document.getElementById('wordToType').innerHTML = '<span style="color: lightgreen;">' + typedPart + '</span>' + untypedPart + wordToType.slice(currentWord.length);
            document.getElementById('userInput').style.color = 'black';
        } else if (!currentWord.startsWith(userInput) && lastInput !== null) {
            errorCount++;
            document.getElementById('errorCount').textContent = errorCount;
            document.getElementById('userInput').style.color = 'red';
        }
    });

    // Enfocar el campo de entrada después de iniciar el juego
    document.getElementById('userInput').focus();
}


function fetchNewPhrase() {
    fetch('./words.json')
        .then(response => response.json())
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.length);
            var words = data[randomIndex].split(' ');

            startGame(words);
        })
        .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('startButton').addEventListener('click', function() {
        // Ocultar el botón de inicio
        this.style.display = 'none';
        document.getElementById('logo').style.display = 'none';
        document.getElementById('disclaimer').style.display = 'none';
    
        // Mostrar el texto, el temporizador, el recuento de errores, el campo de entrada y el botón de reinicio
        document.getElementById('wordToType').style.display = 'block';
        document.getElementById('timer').style.display = 'block';
        document.getElementById('errorCount').style.display = 'none';
        document.getElementById('userInput').style.display = 'block';
        document.getElementById('resetButton').style.display = 'block';
    
        fetchNewPhrase();
    });

    document.getElementById('resetButton').addEventListener('click', function() {
        // Recargar la página
        location.reload();
    });
});

