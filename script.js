// Función para toggle del FAQ
        function toggleFaq(element) {
            const answer = element.nextElementSibling;
            const icon = element.querySelector('.faq-icon');
            
            answer.classList.toggle('active');
            icon.classList.toggle('active');
        }

        // Pausar animación del carrusel al hacer hover
        const carousel = document.querySelector('.testimonials-carousel');
        carousel.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });
        carousel.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });