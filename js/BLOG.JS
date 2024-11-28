document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate on scroll
    const animatables = document.querySelectorAll('.animatable');
    const animateOnScroll = () => {
        animatables.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top <= window.innerHeight - 100) {
                item.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Testimonial Slider
    const testimonials = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonials.addEventListener('mousedown', (e) => {
        isDown = true;
        testimonials.classList.add('active');
        startX = e.pageX - testimonials.offsetLeft;
        scrollLeft = testimonials.scrollLeft;
    });

    testimonials.addEventListener('mouseleave', () => {
        isDown = false;
        testimonials.classList.remove('active');
    });

    testimonials.addEventListener('mouseup', () => {
        isDown = false;
        testimonials.classList.remove('active');
    });

    testimonials.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonials.offsetLeft;
        const walk = (x - startX) * 3; // scroll-fast
        testimonials.scrollLeft = scrollLeft - walk;
    });
});
