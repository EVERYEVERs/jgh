const generateBtn = document.getElementById('generate-btn');
const lottoNumbers = document.querySelectorAll('.lotto-number');

generateBtn.addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNum);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    lottoNumbers.forEach((numberEl, index) => {
        numberEl.textContent = '';
        numberEl.style.animation = 'none';
        void numberEl.offsetWidth; // Reflow
        setTimeout(() => {
            numberEl.textContent = sortedNumbers[index];
            numberEl.style.animation = 'reveal 0.5s ease forwards';
            numberEl.style.animationDelay = `${index * 0.1}s`;
        }, 100);
    });
});

const style = document.createElement('style');
style.textContent = `
@keyframes reveal {
    from {
        transform: scale(0.5);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}
`;
document.head.appendChild(style);
