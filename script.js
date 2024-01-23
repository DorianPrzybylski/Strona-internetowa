// index
document.addEventListener('DOMContentLoaded', function () {
    // Inicjalizacja slidera przy załadowaniu strony
    const slider = new bootstrap.Carousel(document.getElementById('slider'), {
      interval: 4000, // Zmiana slajdu co x sekundy
      pause: hover // Nie pauzuj slidera po najechaniu myszką (hover pauzuje)
    });
});

// kalkulator
function calculate() {
    validateInputs(); // Dodaj to na początku funkcji

    const hours1 = parseFloat(document.getElementById('service1').value) || 0;
    const rate1 = 80;

    const hours2 = parseFloat(document.getElementById('service2').value) || 0;
    const rate2 = 50;

    const hours3 = parseFloat(document.getElementById('service3').value) || 0;
    const rate3 = 100;

    const hours4 = parseFloat(document.getElementById('service4').value) || 0;
    const rate4 = 70;

    const hours5 = parseFloat(document.getElementById('service5').value) || 0;
    const rate5 = 60;

    const total1 = hours1 * rate1;
    const total2 = hours2 * rate2;
    const total3 = hours3 * rate3;
    const total4 = hours4 * rate4;
    const total5 = hours5 * rate5;

    const totalAmount = total1 + total2 + total3 + total4 + total5;

    const summaryArray = [];

    if (hours1 > 0) {
        summaryArray.push(`Gotowa strona w HTML CSS I JS: ${hours1} godz. - ${total1} zł`);
    }

    if (hours2 > 0) {
        summaryArray.push(`Pomoc mentora w tworzeniu strony w HTML CSS I JS: ${hours2} godz. - ${total2} zł`);
    }

    if (hours3 > 0) {
        summaryArray.push(`Debugowanie strony w HTML CSS I JS: ${hours3} godz. - ${total3} zł`);
    }

    if (hours4 > 0) {
        summaryArray.push(`Tworzenie grafik: ${hours4} godz. - ${total4} zł`);
    }

    if (hours5 > 0) {
        summaryArray.push(`Tworzenie multimedialnych prezentacji po dostarczeniu przez użytkownika materiałów: ${hours5} godz. - ${total5} zł`);
    }

    const summary = summaryArray.join('\n') + `\n\nSuma: ${totalAmount.toFixed(2)} zł`;

    const rate1Field = document.getElementById('rate1');
    const rate2Field = document.getElementById('rate2');
    const rate3Field = document.getElementById('rate3');
    const rate4Field = document.getElementById('rate4');
    const rate5Field = document.getElementById('rate5');

    const originalRate1Value = "Stawka: 80.00 zł/h";
    const originalRate2Value = "Stawka: 50.00 zł/h";
    const originalRate3Value = "Stawka: 100.00 zł/h";
    const originalRate4Value = "Stawka: 70.00 zł/h";
    const originalRate5Value = "Stawka: 60.00 zł/h";

    rate1Field.value = originalRate1Value;
    rate2Field.value = originalRate2Value;
    rate3Field.value = originalRate3Value;
    rate4Field.value = originalRate4Value;
    rate5Field.value = originalRate5Value;

    document.getElementById('summary').value = summary;
}

function validateInputs() {
    // Pobierz przycisk "Oblicz"
    const calculateButton = document.getElementById('calculateButton');

    // Sprawdź, czy co najmniej jedno pole z godzinami ma wartość większą niż 0
    const hasPositiveValue = Array.from({ length: 5 }, (_, i) => {
        const hours = parseFloat(document.getElementById(`service${i + 1}`).value) || 0;
        return hours > 0;
    }).some(Boolean);

    // Sprawdź, czy żadne pole z godzinami nie ma wartości mniejszej niż 0
    const hasNegativeValue = Array.from({ length: 5 }, (_, i) => {
        const hours = parseFloat(document.getElementById(`service${i + 1}`).value) || 0;
        return hours < 0;
    }).some(Boolean);

    // Aktywuj lub dezaktywuj przycisk "Oblicz" w zależności od obecności wartości i braku ujemnych wartości
    calculateButton.disabled = !hasPositiveValue || hasNegativeValue;
}

// Poniżej dodaj nasłuchiwanie na zmiany w polach z godzinami
document.addEventListener('input', validateInputs);

// prace
function openModal(imageName) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'block';
    modalImage.src = imageName;
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

//popup

function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
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

    // Dodaj nasłuchiwacze na zmiany w polach z imieniem, nazwiskiem i numerem telefonu
    document.getElementById('firstName').addEventListener('input', blockNumbersAndSymbols);
    document.getElementById('lastName').addEventListener('input', blockNumbersAndSymbols);
    document.getElementById('phoneNumber').addEventListener('input', blockLetters);

    function blockNumbersAndSymbols(event) {
        // Usuń cyfry i symbole z wprowadzonego tekstu
        var newValue = event.target.value.replace(/[0-9!@#$%^&*()_+={}[\]:;<>,.?~\\/-]/g, '');
        event.target.value = newValue;
    }

    function blockLetters(event) {
        // Usuń litery z wprowadzonego tekstu
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




