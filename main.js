const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-links a, .nav-cta');
const form = document.querySelector('#inscription-form');
const formStatus = document.querySelector('#form-status');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('is-open');
        navToggle.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 960) {
            navMenu.classList.remove('is-open');
            navToggle.classList.remove('is-open');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

if (form && formStatus) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (!form.checkValidity()) {
            form.reportValidity();
            formStatus.textContent = 'Revisa los campos obligatorios.';
            formStatus.style.color = '#b42318';
            return;
        }

        const athleteName = form.elements['athlete-name'].value.trim();
        formStatus.textContent = `Gracias, ${athleteName}. Hemos recibido tu solicitud.`;
        formStatus.style.color = '#067647';
        form.reset();
    });
}

const year = document.querySelector('#current-year');
if (year) {
    year.textContent = String(new Date().getFullYear());
}
