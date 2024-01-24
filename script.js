// index
document.addEventListener('DOMContentLoaded', function () {
    const slider = new bootstrap.Carousel(document.getElementById('slider'), {
      interval: 4000, 
      pause: hover 
    });
});


// prace (galeria)
let currentImageIndex = 0;
const images = [
  'img/galeria1.jpg',
  'img/galeria2.jpg',
  'img/galeria3.jpg',
  'img/galeria4.jpg',
  'img/galeria5.jpg',
  'img/galeria6.jpg'
];

function openModal(imageName) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modalImage.src = imageName;

    const image = new Image();
    image.src = imageName;

    image.onload = function () {
        const originalWidth = image.width;
        const originalHeight = image.height;

        const maxWidth = window.innerWidth * 0.8;
        const maxHeight = window.innerHeight * 0.8;

        if (originalWidth > maxWidth || originalHeight > maxHeight) {
            const ratio = Math.min(maxWidth / originalWidth, maxHeight / originalHeight);
            modalImage.style.width = `${originalWidth * ratio}px`;
            modalImage.style.height = `${originalHeight * ratio}px`;
        } else {
            modalImage.style.width = `${originalWidth}px`;
            modalImage.style.height = `${originalHeight}px`;
        }

        modal.style.display = 'flex';
        modal.style.alignItems = 'center';
        modal.style.justifyContent = 'center';

        document.addEventListener('keydown', handleKeyPress);
    };
}

function closeModal() {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');

    modalImage.style.width = '';
    modalImage.style.height = '';

    modal.style.display = 'none';

    document.removeEventListener('keydown', handleKeyPress);
}

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (event.key === 'ArrowRight') {
        showNextImage();
    }
}

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    const previousImage = images[currentImageIndex];
    openModal(previousImage);
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    const nextImage = images[currentImageIndex];
    openModal(nextImage);
}

  
//formularz 


function formatPhoneNumber(input) {
    var phoneNumber = input.value.replace(/\D/g, '');

    if (phoneNumber.length >= 4 && phoneNumber.length <= 6) {
        var formattedPhoneNumber = phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3);
        input.value = formattedPhoneNumber;
    } else if (phoneNumber.length > 6) {
        var formattedPhoneNumber = phoneNumber.substring(0, 3) + ' ' + phoneNumber.substring(3, 6) + ' ' + phoneNumber.substring(6);
        input.value = formattedPhoneNumber;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var inquiryTypeSelect = document.getElementById('inquiryType');
    var otherReasonField = document.getElementById('otherReason');

    inquiryTypeSelect.addEventListener('change', function () {
        var inquiryTypeValue = this.value;

        if (inquiryTypeValue === 'inne') {
            otherReasonField.style.display = 'block';
            otherReasonField.querySelector('textarea').setAttribute('required', 'required');
        } else {
            otherReasonField.style.display = 'none';
            otherReasonField.querySelector('textarea').removeAttribute('required');
        }
    });

    document.addEventListener('input', validateInputs);

    document.getElementById('firstName').addEventListener('input', blockNumbersAndSymbols);
    document.getElementById('lastName').addEventListener('input', blockNumbersAndSymbols);
    document.getElementById('phoneNumber').addEventListener('input', blockLetters);

    function blockNumbersAndSymbols(event) {
        var newValue = event.target.value.replace(/[0-9!@#$%^&*()_+={}[\]:;<>,.?~\\/-]/g, '');
        event.target.value = newValue;
    }

    function blockLetters(event) {
        var newValue = event.target.value.replace(/[a-zA-Z]/g, '');
        event.target.value = newValue;
    }
});

function validateInputs() {
    var calculateButton = document.getElementById('calculateButton');

    var hasPositiveValue = Array.from({ length: 5 }, (_, i) => {
        var hours = document.getElementById(`service${i + 1}`).value.replace(/\D/g, '');
        return hours.length > 0 && parseFloat(hours) > 0;
    }).some(Boolean);

    var hasNegativeValue = Array.from({ length: 5 }, (_, i) => {
        var hours = document.getElementById(`service${i + 1}`).value.replace(/\D/g, '');
        return hours.length > 0 && parseFloat(hours) < 0;
    }).some(Boolean);

    calculateButton.disabled = !hasPositiveValue || hasNegativeValue;
}

// formularz numer kierunkowy

document.getElementById('countryCode').addEventListener('change', function() {
    var selectedOption = this.options[this.selectedIndex];
    var countryCodeDisplay = document.getElementById('countryCodeDisplay');
    
    countryCodeDisplay.textContent = selectedOption.getAttribute('data-display');
    
    var phoneNumberInput = document.getElementById('phoneNumber');
    phoneNumberInput.value = selectedOption.value;
});

