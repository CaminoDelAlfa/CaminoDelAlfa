// Alternar FAQ
        function alternarFaq(elemento) {
            const respuesta = elemento.nextElementSibling;
            const icono = elemento.querySelector('.icono-faq');
            const todasRespuestas = document.querySelectorAll('.respuesta-faq');
            const todosIconos = document.querySelectorAll('.icono-faq');
            
            // Cerrar todos los otros FAQs
            todasRespuestas.forEach(r => {
                if (r !== respuesta) {
                    r.classList.remove('activo');
                }
            });
            
            todosIconos.forEach(i => {
                if (i !== icono) {
                    i.classList.remove('activo');
                }
            });
            
            // Alternar el actual
            respuesta.classList.toggle('activo');
            icono.classList.toggle('activo');
        }

        // Pausar animación del carrusel al hacer hover
        const carruselTestimonios = document.querySelector('.carrusel-testimonios');
        carruselTestimonios.addEventListener('mouseenter', () => {
            carruselTestimonios.style.animationPlayState = 'paused';
        });
        carruselTestimonios.addEventListener('mouseleave', () => {
            carruselTestimonios.style.animationPlayState = 'running';
        });

        // Scroll suave para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(enlace => {
            enlace.addEventListener('click', function (e) {
                e.preventDefault();
                const objetivo = document.querySelector(this.getAttribute('href'));
                if (objetivo) {
                    objetivo.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        