let testimonials = document.querySelectorAll('.testimonial-card');
let currentIndex = 0;

// Oculta todas las tarjetas al principio
testimonials.forEach(function(testimonial) {
    testimonial.style.display = 'none';
});

// Muestra la primera tarjeta
if (testimonials.length > 0) {
    testimonials[0].style.display = 'block';
}

// Cambia la tarjeta visible cada 3 segundos
setInterval(function() {
    testimonials[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].style.display = 'block';
}, 3000);