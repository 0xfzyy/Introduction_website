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
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 背景颜色切换
    document.body.addEventListener('click', () => {
        document.body.style.backgroundColor = 
            document.body.style.backgroundColor === 'rgb(240, 248, 255)' ? '#e0f7fa' : '#f0f8ff';
    });
});
