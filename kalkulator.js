function calculate() {
    validateInputs();

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
    const calculateButton = document.getElementById('calculateButton');
    const errorMessageDiv = document.getElementById('errorMessage');

    const hasPositiveValue = Array.from({ length: 5 }, (_, i) => {
        const hours = parseFloat(document.getElementById(`service${i + 1}`).value) || 0;
        return hours > 0;
    }).some(Boolean);

    const hasNegativeValue = Array.from({ length: 5 }, (_, i) => {
        const hours = parseFloat(document.getElementById(`service${i + 1}`).value) || 0;
        return hours < 0;
    }).some(Boolean);

    if (hasNegativeValue) {
        errorMessageDiv.textContent = "Proszę podać liczby dodatnie.";
        calculateButton.disabled = true;
    } else {
        errorMessageDiv.textContent = "";
        calculateButton.disabled = !hasPositiveValue;
    }
}

document.addEventListener('input', validateInputs);
