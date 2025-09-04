// Lógica para o Slider "Antes e Depois"
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider-container');
    if (!slider) return;

    const beforeImage = slider.querySelector('.before-image');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;

    function startDrag(e) {
        isDragging = true;
    }

    function stopDrag(e) {
        isDragging = false;
    }

    function onDrag(e) {
        if (!isDragging) return;

        // Previne o comportamento padrão (ex: selecionar texto)
        e.preventDefault();

        // getBoundingClientRect() dá a posição e tamanho do elemento na tela
        const rect = slider.getBoundingClientRect();
        
        // Calcula a posição do mouse/toque dentro do slider
        let offsetX = (e.clientX || e.touches[0].clientX) - rect.left;

        // Limita o movimento dentro das bordas do slider
        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width) offsetX = rect.width;
        
        // Converte a posição em percentagem
        const percent = (offsetX / rect.width) * 100;

        // Atualiza a largura da imagem "antes" e a posição do handle
        beforeImage.style.width = percent + '%';
        handle.style.left = percent + '%';
    }

    // Eventos para o Rato (Desktop)
    handle.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', stopDrag);
    slider.addEventListener('mousemove', onDrag);
    slider.addEventListener('mouseleave', stopDrag); // Para o drag se o rato sair do slider

    // Eventos para o Toque (Mobile)
    handle.addEventListener('touchstart', startDrag);
    window.addEventListener('touchend', stopDrag);
    slider.addEventListener('touchmove', onDrag);
});