document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const contactLink = document.querySelector('a[href="contact.html"]');
if (contactLink) {
    contactLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert("Feel free to reach out via email or social media!");
        window.location.href = "contact.html"; 
    });
}