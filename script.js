let noButtonScale = 1;
let yesButtonScale = 1;
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.querySelector('.button-container');

yesButton.addEventListener('click', function() {
    document.getElementById('response').textContent = '';
    // Mostrar el modal
    document.getElementById('modal').style.display = 'block';
});

function getRandomPosition(element) {
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const maxX = containerRect.width - elementRect.width;
    const maxY = containerRect.height - elementRect.height;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    return [randomX, randomY];
}

function moveNoButton() {
    noButtonScale -= 0.1;
    yesButtonScale += 0.1;
    noButton.style.transform = `scale(${noButtonScale})`;
    yesButton.style.transform = `scale(${yesButtonScale})`;
    
    const [newX, newY] = getRandomPosition(noButton);
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

noButton.addEventListener('mouseover', moveNoButton);
noButton.addEventListener('click', moveNoButton);

// Ajuste para asegurar que el botón "Sí" esté siempre visible
yesButton.style.visibility = 'visible';

// Cerrar el modal cuando se hace clic en el botón de cerrar
document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
});

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('modal')) {
        document.getElementById('modal').style.display = 'none';
    }
});
