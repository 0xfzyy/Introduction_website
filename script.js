document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
                // Add a cool animation when the section becomes visible
                entry.target.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            } else {
                entry.target.style.transform = 'translateY(50px)';
                entry.target.style.opacity = '0';
            }
        });
    }, options);

    sections.forEach(section => {
        section.style.transform = 'translateY(50px)';
        section.style.opacity = '0';
        observer.observe(section);
    });

    // Toggle background and text color with a smooth transition
    document.body.addEventListener('click', () => {
        const currentBgColor = getComputedStyle(document.body).backgroundColor;
        const newBgColor = currentBgColor === 'rgb(240, 248, 255)' ? '#e0f7fa' : '#f0f8ff';
        const newTextColor = currentBgColor === 'rgb(240, 248, 255)' ? '#000' : '#333';
        
        document.body.style.transition = 'background-color 0.5s ease, color 0.5s ease';
        document.body.style.backgroundColor = newBgColor;
        document.body.style.color = newTextColor;
    });

    // Add keyboard event listener for smooth scrolling
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp') {
            window.scrollBy({
                top: -window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
        } else if (event.key === 'ArrowDown') {
            window.scrollBy({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
            });
        }
    });
});
