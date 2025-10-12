// TIMER CIRCULAR DE 15 MINUTOS
        const tiempoTotal = 15 * 60; // 15 minutos en segundos
        let tiempoRestante = tiempoTotal;
        const circuloProgreso = document.getElementById('circuloProgreso');
        const tiempoDisplay = document.getElementById('tiempoDisplay');
        const loboTimer = document.getElementById('loboTimer');
        const radio = 82;
        const circunferencia = 2 * Math.PI * radio;

        // Configurar el círculo
        circuloProgreso.style.strokeDasharray = circunferencia;
        circuloProgreso.style.strokeDashoffset = 0;

        function actualizarTimer() {
            if (tiempoRestante <= 0) {
                tiempoRestante = tiempoTotal; // Reiniciar cuando llegue a 0
            }

            // Calcular minutos y segundos
            const minutos = Math.floor(tiempoRestante / 60);
            const segundos = tiempoRestante % 60;
            
            // Actualizar display
            tiempoDisplay.textContent = `${minutos}:${segundos.toString().padStart(2, '0')}`;

            // Calcular progreso (invertido para que baje)
            const progreso = (tiempoTotal - tiempoRestante) / tiempoTotal;
            const offset = circunferencia * progreso;
            circuloProgreso.style.strokeDashoffset = offset;

            // Animar el lobo a medida que avanza
            const opacidadLobo = 0.15 + (progreso * 0.65); // De 0.15 a 0.8
            const grayscale = 100 - (progreso * 100); // De 100% a 0%
            loboTimer.style.opacity = opacidadLobo;
            loboTimer.style.filter = `grayscale(${grayscale}%)`;

            tiempoRestante--;
        }

        // Actualizar cada segundo
        actualizarTimer(); // Llamada inicial
        setInterval(actualizarTimer, 1000);

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

        // Ocultar timer en móvil cuando se hace scroll (opcional)
        let ultimoScroll = 0;
        const timerFlotante = document.querySelector('.timer-flotante');
        
        window.addEventListener('scroll', () => {
            if (window.innerWidth > 768) {
                const scrollActual = window.pageYOffset;
                
                if (scrollActual > ultimoScroll && scrollActual > 200) {
                    timerFlotante.style.opacity = '0.3';
                } else {
                    timerFlotante.style.opacity = '1';
                }
                
                ultimoScroll = scrollActual;
            }
        });