function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
  document.getElementById('result').value = '';
}

function calculate() {
    const input = document.getElementById('result').value;
    try {
        const result = math.evaluate(input);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}