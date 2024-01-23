// Po załadowaniu strony
$(document).ready(function () {
    // Pokaż preloader obrazu
    $('#imagePreloader').show();

    // Po załadowaniu wszystkich obrazów
    $('#imagePreloader img').on('load', function() {
        // Ukryj preloader obrazu
        $('#imagePreloader').hide();

        // Aktywuj slider
        $('#carouselExampleSlidesOnly').carousel({
            interval: 500,
            ride: 'carousel',
            wrap: true
        });
    });
});


// Dodatkowe funkcje lub kod JavaScript
function calculateRate() {
    // Kod funkcji calculateRate
}

function closePopup() {
    // Kod funkcji closePopup
}

