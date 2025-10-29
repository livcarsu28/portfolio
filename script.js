 // ===== JAVASCRIPT MINIMALISTA =====
        document.addEventListener('DOMContentLoaded', function() {
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.getElementById('header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Smooth scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });

            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            if (mobileMenuBtn) {
                mobileMenuBtn.addEventListener('click', function() {
                    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
                    this.textContent = navLinks.style.display === 'flex' ? '✕' : '☰';
                });
            }

            // Scroll animations
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const fadeInOnScroll = function() {
                fadeElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementVisible = 150;
                    
                    if (elementTop < window.innerHeight - elementVisible) {
                        element.classList.add('visible');
                    }
                });
            };

            window.addEventListener('scroll', fadeInOnScroll);
            fadeInOnScroll(); // Run once on load

            // Form submission
            const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // SEU NÚMERO DE WHATSAPP (substitua pelo seu)
        const phoneNumber = "5515998431355"; // Formato: 55 + DDD + número
        
        // Montar mensagem
        const whatsappMessage = `
Olá Lívia! Vi seu portfólio e gostaria de entrar em contato:

*Nome:* ${name}
*E-mail:* ${email}
*Mensagem:* ${message}

Aguardo seu retorno! 😊
        `.trim();
        
        // Codificar mensagem para URL
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        // Criar link do WhatsApp
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');
        
        // Feedback opcional
        alert('Redirecionando para WhatsApp...');
        
        // Limpar formulário
        this.reset();
    });
}

            // CV Download
            const downloadBtn = document.querySelector('.btn-secondary[href="#"]');
            if (downloadBtn) {
                downloadBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    alert('Download do CV iniciado! Em breve disponível para download.');
                });
            }
        });