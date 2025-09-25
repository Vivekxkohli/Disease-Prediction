document.getElementById('predictionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = document.getElementById('age').value;
    const bmi = document.getElementById('bmi').value;
    const glucose = document.getElementById('glucose').value;

    // Here you would typically send the data to a backend server for processing
    // For this example, we'll just display a dummy result

    let result = 'Based on the provided data, the prediction is: ';

    // Dummy logic for prediction (you would replace this with your actual prediction logic)
    if (glucose > 120) {
        result += 'High risk of diabetes';
    } else {
        result += 'Low risk of diabetes';
    }

    document.getElementById('result').innerText = result;
});