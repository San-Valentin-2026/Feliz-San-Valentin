const noButton = document.querySelector('.no');
const popupContainer = document.getElementById('popup-container');

let messageSize = 24; // tamaño inicial de fuente

noButton.addEventListener('click', (e) => {
    e.preventDefault(); // evitar que el enlace navegue
    messageSize = 24; // reiniciar tamaño al primer clic
    showPopup("¿Estás segura?");
});

function showPopup(messageText) {
    // Crear contenedor del mensaje
    const popup = document.createElement('div');
    popup.className = 'popup-message';
    popup.style.fontSize = `${messageSize}px`; // tamaño dinámico
    popup.innerHTML = `
        <p>${messageText}</p>
        <a href="#" class="sure">Estoy segura</a>
        <a href="#" class="yes-popup">Si quiero ser tu San Valentín</a>
    `;

    popupContainer.appendChild(popup);

    // Botón "Estoy segura" → genera mismo mensaje más grande
    popup.querySelector('.sure').addEventListener('click', (e) => {
        e.preventDefault();
        messageSize += 10; // aumentar tamaño
        showPopup("¿Estás segura?");
    });

    // Botón "Si quiero ser tu San Valentín" → reinicia todo
    popup.querySelector('.yes-popup').addEventListener('click', (e) => {
    e.preventDefault();
    popupContainer.innerHTML = ''; // limpiar mensajes
    messageSize = 24; // reiniciar tamaño
    // Redirigir a gallery.html
    window.location.href = 'gallery.html';
});
}
