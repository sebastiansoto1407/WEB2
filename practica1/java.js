document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    yearElement.textContent = new Date().getFullYear();
    const visitCounter = document.getElementById('visit-counter');
    let visits = localStorage.getItem('pageVisits');
    
    if (visits) {
        visits = parseInt(visits) + 1;
    } else {
        visits = 1;
    }
    
    localStorage.setItem('pageVisits', visits);
    visitCounter.textContent = visits;

    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // cambiamos de tono
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        const newTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        
        themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // formulario funcional
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;
        setTimeout(() => {
            formMessage.textContent = `gracias loco ${nombre}, tu mensaje ha sido enviado. Te respondere mas tarde al ${email} pronto o no xd.`;
            formMessage.className = 'form-message success';
            contactForm.reset();
            
            // desaparece mensaje
            setTimeout(() => {
                formMessage.style.opacity = '0';
                setTimeout(() => {
                    formMessage.className = 'form-message';
                    formMessage.style.opacity = '1';
                }, 300);
            }, 5000);
        }, 1000);
    });

    // añadimos efecto hover
    const menuLinks = document.querySelectorAll('.header__menu__link');
    
    menuLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // animamos foto
    const mainImage = document.getElementById('main-image');
    
    mainImage.addEventListener('load', function() {
        this.style.opacity = '1';
        this.style.transition = 'opacity 1s ease';
    });

    // enlace actibos
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    menuLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
        