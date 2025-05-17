// light and dark mode
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.textContent === 'AC') {
            display.textContent = '0';
        } else if (button.textContent === 'DEL') {
            display.textContent = display.textContent.slice(0, -1) || '0';
        } else if (button.textContent === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        } else {
            if (display.textContent === '0') {
                display.textContent = button.textContent;
            } else {
                display.textContent += button.textContent;
            }
        }
    });
});