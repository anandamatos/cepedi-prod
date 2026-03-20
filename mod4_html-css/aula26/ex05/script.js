const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const container = document.getElementById('main-carousel');

let currentSlide = 0;
let slideInterval;
const intervalTime = 4000; // Tempo de rotação: 4 segundos

// Função para mudar o slide
function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    slides[currentSlide].classList.add('active');
}

// Funções de navegação
function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Iniciar Rotação Automática
function startAutoPlay() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Parar Rotação (quando o usuário interage)
function stopAutoPlay() {
    clearInterval(slideInterval);
}

// Eventos de Clique
nextBtn.addEventListener('click', () => {
    stopAutoPlay(); // Para o automático ao clicar
    nextSlide();
    startAutoPlay(); // Reinicia o contador
});

prevBtn.addEventListener('click', () => {
    stopAutoPlay();
    prevSlide();
    startAutoPlay();
});

// Eventos de Mouse (Pausar ao passar o mouse por cima)
container.addEventListener('mouseenter', stopAutoPlay);
container.addEventListener('mouseleave', startAutoPlay);

// Inicialização
startAutoPlay();