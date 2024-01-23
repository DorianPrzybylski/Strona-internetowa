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
        summaryArray.push(`Gotowa strona w HTML CSS I JS: ${hours1} godzin - ${total1} zł`);
    }

    if (hours2 > 0) {
        summaryArray.push(`Pomoc mentora w tworzeniu strony w HTML CSS I JS: ${hours2} godzin - ${total2} zł`);
    }

    if (hours3 > 0) {
        summaryArray.push(`Debugowanie strony w HTML CSS I JS: ${hours3} godzin - ${total3} zł`);
    }

    if (hours4 > 0) {
        summaryArray.push(`Tworzenie grafik: ${hours4} godzin - ${total4} zł`);
    }

    if (hours5 > 0) {
        summaryArray.push(`Tworzenie multimedialnych prezentacji po dostarczeniu przez użytkownika materiałów: ${hours5} godzin - ${total5} zł`);
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
});

function submitForm(event) {
    event.preventDefault(); // Zapobiegaj domyślnej akcji formularza (tj. przeładowania strony)

    // Tutaj dodaj logikę do wysłania formularza, na przykład za pomocą fetch() lub innej metody.
    // Możesz również dodać kod do walidacji formularza przed wysłaniem.

    // Przykład: Wysyłanie formularza za pomocą fetch
    fetch('url_do_serwera', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(getFormData()), // Pobranie danych formularza
    })
    .then(response => response.json())
    .then(data => {
        console.log('Formularz został wysłany:', data);
        // Tutaj możesz dodać dodatkową logikę po wysłaniu formularza, np. pokazać potwierdzenie.
    })
    .catch(error => {
        console.error('Wystąpił błąd podczas wysyłania formularza:', error);
    });
}

// Funkcja pomocnicza do pobierania danych formularza
function getFormData() {
    const formData = new FormData(document.getElementById('contactForm'));
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    return data;
}
