const slideshow = document.getElementById('slideshow');

// Variáveis para rastrear o estado do arrastar
let isDown = false;
let startX;
let scrollLeft;

// 1. Mouse pressionado
slideshow.addEventListener('mousedown', (e) => {
    isDown = true;
    slideshow.classList.add('active'); // Opcional: Adiciona um cursor de "mão"
    
    // Posição inicial do cursor e da rolagem
    startX = e.pageX - slideshow.offsetLeft;
    scrollLeft = slideshow.scrollLeft;
});

// 2. Mouse solto ou saiu do elemento
slideshow.addEventListener('mouseleave', () => {
    isDown = false;
    slideshow.classList.remove('active');
});

slideshow.addEventListener('mouseup', () => {
    isDown = false;
    slideshow.classList.remove('active');
});

// 3. Mouse em movimento
slideshow.addEventListener('mousemove', (e) => {
    if(!isDown) return; // Parar a função se o mouse não estiver pressionado
    e.preventDefault(); 
    
    const x = e.pageX - slideshow.offsetLeft;
    const walk = (x - startX) * 2; // Multiplica por 2 para um movimento mais rápido
    slideshow.scrollLeft = scrollLeft - walk;
});

// Adicional: Adicionar preventDefault no clique se for um arrastar (para não seguir o link no clique)
// Esta parte é mais complexa e depende de quão longe o usuário arrastou.
// Para simplificar, o link funcionará quando o clique for rápido.