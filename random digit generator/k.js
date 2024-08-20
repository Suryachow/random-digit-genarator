document.getElementById('generate').addEventListener('click', function() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);

    if (isNaN(min) || isNaN(max)) {
        alert("Please enter valid numbers for both minimum and maximum values.");
        return;
    }
    
    if (min > max) {
        alert("Minimum value should be less than or equal to the maximum value.");
        return;
    }

    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result').textContent = "Random Number: " + randomNum;
});
