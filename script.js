// Loading Screen and Progress Bar - Truly Instant
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('progress-bar');

    // Truly instant - no transition, immediate hide
    loadingScreen.style.transition = 'none';
    progressBar.style.width = '100%';
    loadingScreen.style.opacity = '0';
    loadingScreen.style.visibility = 'hidden';
    document.body.classList.add('loaded');
});

// Floating Action Button
document.addEventListener('DOMContentLoaded', function() {
    const fabMain = document.getElementById('fab-main');
    const fabMenu = document.querySelector('.fab-menu');

    fabMain.addEventListener('click', function() {
        this.classList.toggle('active');
        fabMenu.classList.toggle('active');
    });

    // Close FAB menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!fabMain.contains(e.target) && !fabMenu.contains(e.target)) {
            fabMain.classList.remove('active');
            fabMenu.classList.remove('active');
        }
    });

    // FAB actions
    document.querySelectorAll('.fab-item').forEach(item => {
        item.addEventListener('click', function() {
            const tooltip = this.getAttribute('data-tooltip');
            if (tooltip === 'WhatsApp') {
                window.open('https://wa.me/6281123456789', '_blank');
            } else if (tooltip === 'Call') {
                window.open('tel:+622112345678');
            } else if (tooltip === 'Email') {
                window.open('mailto:info@laviviclinic.com');
            }
        });
    });
});

// Scroll Animation with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in-up class
document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// Living Atmosphere Effects - Dynamic Background
let atmosphereIndex = 0;
const atmosphereColors = [
    'rgba(255, 255, 255, 0.1)',
    'rgba(108, 117, 125, 0.05)',
    'rgba(255, 255, 255, 0.08)',
    'rgba(108, 117, 125, 0.03)'
];

setInterval(() => {
    const hero = document.querySelector('.hero');
    if (hero) {
        atmosphereIndex = (atmosphereIndex + 1) % atmosphereColors.length;
        hero.style.background = `linear-gradient(135deg, ${atmosphereColors[atmosphereIndex]} 0%, rgba(248, 249, 250, 0.9) 100%), url('https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`;
    }
}, 8000);

// Gentle Breathing Effect for Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.animation = 'gentleBreath 2s ease-in-out infinite';
    });

    card.addEventListener('mouseleave', () => {
        card.style.animation = '';
    });
});

// Dynamic Floating Elements
function updateFloatingElements() {
    const elements = document.querySelectorAll('.floating-element');
    elements.forEach((el, index) => {
        const delay = index * 2;
        el.style.animationDelay = `${delay}s`;
        el.style.animationDuration = `${6 + Math.random() * 2}s`;
    });
}

updateFloatingElements();

// Subtle Parallax for Hero Background
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.backgroundPositionY = rate + 'px';
    }
});

// Living Gallery Effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.animation = 'gentleBreath 3s ease-in-out infinite';
    });

    item.addEventListener('mouseleave', () => {
        item.style.animation = '';
    });
});

// Dynamic Color Shifts for Buttons
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('mouseenter', () => {
        const colors = ['#6c757d', '#495057', '#343a40'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        btn.style.background = `linear-gradient(45deg, ${randomColor}, #495057)`;
    });

    btn.addEventListener('mouseleave', () => {
        btn.style.background = 'linear-gradient(45deg, #6c757d, #495057)';
    });
});

// Smooth scrolling for navigation links
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

// Form Validation and Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        showAlert('Semua field harus diisi!', 'danger');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        showAlert('Email tidak valid!', 'danger');
        return;
    }

    // Simulate form submission
    showAlert('Pesan berhasil dikirim! Kami akan menghubungi Anda segera.', 'success');
    this.reset();
});

// Appointment Form Handler
document.getElementById('appointmentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const appointmentData = {
        name: formData.get('appName').trim(),
        email: formData.get('appEmail').trim(),
        phone: formData.get('appPhone').trim(),
        service: formData.get('appService'),
        date: formData.get('appDate'),
        message: formData.get('appMessage').trim()
    };

    // Validate appointment form
    if (!appointmentData.name || !appointmentData.email || !appointmentData.phone || !appointmentData.service || !appointmentData.date) {
        showAlert('Mohon lengkapi semua field yang wajib!', 'danger');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(appointmentData.email)) {
        showAlert('Email tidak valid!', 'danger');
        return;
    }

    // Here you would typically send the data to a server
    console.log('Appointment data:', appointmentData);
    showAlert('Terima kasih! Janji temu Anda telah dibuat. Kami akan mengkonfirmasi melalui email.', 'success');
    this.reset();
});

// Custom Alert Function
function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 10000; min-width: 300px;';
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    document.body.appendChild(alertDiv);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (alertDiv.parentNode) {
            alertDiv.remove();
        }
    }, 5000);
}

// Modal for Service Details
function openModal(serviceTitle, serviceDesc) {
    document.getElementById('modalTitle').textContent = serviceTitle;
    document.getElementById('modalDesc').textContent = serviceDesc;
    const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
    modal.show();
}

// Parallax Effect
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    }
});

// Testimonial Slider with Controls
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');

function showTestimonial(index) {
    testimonials.forEach((t, i) => {
        t.style.display = i === index ? 'block' : 'none';
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
}

// Auto-play testimonials
let testimonialInterval = setInterval(nextTestimonial, 5000);

// Pause auto-play on hover
document.querySelector('.testimonial-slider').addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.querySelector('.testimonial-slider').addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(nextTestimonial, 5000);
});

showTestimonial(currentTestimonial);

// Gallery lightbox functionality
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', function() {
        // Create enhanced lightbox
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10001;
            cursor: pointer;
            animation: fadeIn 0.3s ease;
        `;

        const imgContainer = document.createElement('div');
        imgContainer.style.cssText = `
            position: relative;
            max-width: 90%;
            max-height: 90%;
        `;

        const imgClone = this.cloneNode();
        imgClone.style.cssText = `
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            border-radius: 10px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        `;

        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: -15px;
            right: -15px;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #6c757d;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        `;

        closeBtn.addEventListener('mouseenter', () => {
            closeBtn.style.background = '#495057';
            closeBtn.style.transform = 'scale(1.1)';
        });

        closeBtn.addEventListener('mouseleave', () => {
            closeBtn.style.background = '#6c757d';
            closeBtn.style.transform = 'scale(1)';
        });

        imgContainer.appendChild(imgClone);
        imgContainer.appendChild(closeBtn);
        lightbox.appendChild(imgContainer);
        document.body.appendChild(lightbox);

        const closeLightbox = () => {
            lightbox.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                if (lightbox.parentNode) {
                    document.body.removeChild(lightbox);
                }
            }, 300);
        };

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        closeBtn.addEventListener('click', closeLightbox);

        // Keyboard navigation
        document.addEventListener('keydown', function handler(e) {
            if (e.key === 'Escape') {
                closeLightbox();
                document.removeEventListener('keydown', handler);
            }
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98) !important';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95) !important';
        navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
    }
});

// Pricing Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const pricingItems = document.querySelectorAll('.pricing-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            // Filter pricing items
            pricingItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
