document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');

    button.addEventListener('mousedown', () => {
        button.textContent = 'ur a sigma🫵';
    });

    button.addEventListener('mouseup', () => {
        button.textContent = 'Click me';
    });
});

// button.addEventListener('click', () => {
//     window.location.href = 'https://www.youtube.com';
// });