var carrouselInterval;
var isMoving = false;

function carrousel() {
    $(".element__caroussel div").off('click').on('click', function(e) {
        if (!$(this).hasClass('middle') && !isMoving) {
            e.preventDefault();
            clearInterval(carrouselInterval);
            rotateCarrousel(this);
            startCarrouselInterval();
        }
    });

    startCarrouselInterval();
}

function startCarrouselInterval() {
    carrouselInterval = setInterval(function() {
        var currentElement = $(".element__caroussel .middle");
        var nextElement = currentElement.next().length ? currentElement.next() : currentElement.siblings().first();
        rotateCarrousel(nextElement.get(0));
    }, 10000);
}

function rotateCarrousel(element) {
    var pos = $(element).attr('class');
    if (pos != "middle") {
        isMoving = true;
        var old = $(element);
        var current_middle = $(element).parent().children('.middle');
        current_middle.fadeOut(200);
        $(element).fadeOut(100);

        setTimeout(function() {
            current_middle.removeClass("middle").addClass(pos).fadeIn(800);
            old.removeClass("left").removeClass("right").addClass("middle").fadeIn(200);
            isMoving = false;
        }, 500);
    }
}



$(document).ready(function() {
    carrousel();
});
