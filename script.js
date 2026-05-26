// Select DOM elements
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');

// Initialize counter variable
let count = 0;

// Function to update the display text color dynamically
function updateColor() {
    if (count > 0) {
        counterValue.style.color = '#2ecc71'; // Green for positive
    } else if (count < 0) {
        counterValue.style.color = '#e74c3c'; // Red for negative
    } else {
        counterValue.style.color = '#4a90e2'; // Blue for zero
    }
}

// Event Listeners
incrementBtn.addEventListener('click', () => {
    count++;
    counterValue.textContent = count;
    updateColor();
});

decrementBtn.addEventListener('click', () => {
    count--;
    counterValue.textContent = count;
    updateColor();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counterValue.textContent = count;
    updateColor();
});