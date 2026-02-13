// Selección de elementos
const images = document.querySelectorAll('.image-card img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const prevBtn = document.querySelector('.lightbox .prev');
const nextBtn = document.querySelector('.lightbox .next');

let currentIndex = 0;

// Abrir lightbox al hacer click en cualquier imagen
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
    });
});

// Cerrar lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

// Navegación anterior
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Navegación siguiente
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
});

// Navegar con teclado
document.addEventListener('keydown', (e) => {
    if(lightbox.style.display === 'flex'){
        if(e.key === 'ArrowLeft') prevBtn.click();
        if(e.key === 'ArrowRight') nextBtn.click();
        if(e.key === 'Escape') closeBtn.click();
    }
});
