document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('visible');
            });
            const target = document.querySelector(this.getAttribute('href'));
            target.classList.remove('hidden');
            target.classList.add('visible');
        });
    });
    sections[0].classList.remove('hidden');
    sections[0].classList.add('visible');
});