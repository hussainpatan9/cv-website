// Loading Screen Management
const loadingScreen = document.getElementById('loading-screen');

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        document.body.classList.add('loaded');
    }, 1500);
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Update ARIA attributes
    const isExpanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    
    // Animate hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach((bar, index) => {
        if (isExpanded) {
            if (index === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
            if (index === 1) bar.style.opacity = '0';
            if (index === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        }
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    
    // Reset hamburger bars
    const bars = hamburger.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.transform = 'none';
        bar.style.opacity = '1';
    });
}));

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

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Counter Animation for Hero Stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add AOS animation class
            if (entry.target.hasAttribute('data-aos')) {
                entry.target.classList.add('aos-animate');
            }
            
            // Animate counters when stats section is visible
            if (entry.target.classList.contains('stat-number')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.timeline-content, .project-card, .education-item, .skill-category, .cert-item, [data-aos]');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Observe hero stats for counter animation
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
});

// Contact form handling
// Enhanced form validation with error messages
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Collect form data
        const name = contactForm.elements['name'].value.trim();
        const email = contactForm.elements['email'].value.trim();
        const subject = contactForm.elements['subject'].value.trim();
        const message = contactForm.elements['message'].value.trim();
        let valid = true;

        // Clear previous errors
        ['name','email','subject','message'].forEach(id => {
            document.getElementById('error-' + id).textContent = '';
        });

        // Name validation
        if (!name) {
            document.getElementById('error-name').textContent = 'Please enter your name.';
            valid = false;
        }
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            document.getElementById('error-email').textContent = 'Please enter your email.';
            valid = false;
        } else if (!emailRegex.test(email)) {
            document.getElementById('error-email').textContent = 'Please enter a valid email address.';
            valid = false;
        }
        // Subject validation
        if (!subject) {
            document.getElementById('error-subject').textContent = 'Please enter a subject.';
            valid = false;
        }
        // Message validation
        if (!message) {
            document.getElementById('error-message').textContent = 'Please enter your message.';
            valid = false;
        }
        if (!valid) return;

        // Send email using EmailJS
        const formData = {
            name,
            email,
            message,
            time: new Date().toLocaleString()
        };
        emailjs.send('service_udg8lv9', 'template_57l5tu3', formData)
            .then(function(response) {
                alert('Message sent successfully!');
                contactForm.reset();
            }, function(error) {
                alert('Failed to send message. Please try again later.');
            });
    });

    // Clear error on input
    ['name','email','subject','message'].forEach(id => {
        contactForm.elements[id].addEventListener('input', function() {
            document.getElementById('error-' + id).textContent = '';
        });
    });
}

// Mailto fallback function
function sendViaMailto(name, email, subject, message) {
    const mailtoLink = `mailto:hussainpatan9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    try {
        window.open(mailtoLink);
        showNotification('✅ Email client opened! Please send the message manually.', 'success');
    } catch (error) {
        // If mailto fails, show contact information
        showNotification('📧 Please contact me directly at hussainpatan9@gmail.com', 'info');
    }
    
    // Reset form
    contactForm.reset();
}

// Add aria-live region for notifications
// At the top of the script, after DOMContentLoaded or before notification functions:
if (!document.getElementById('notification-container')) {
    const notificationContainer = document.createElement('div');
    notificationContainer.id = 'notification-container';
    notificationContainer.setAttribute('aria-live', 'polite');
    notificationContainer.setAttribute('aria-atomic', 'true');
    document.body.appendChild(notificationContainer);
}

// Update showNotification to use the notification container
function showNotification(message, type = 'info') {
    const notificationContainer = document.getElementById('notification-container');
    // Remove existing notifications
    notificationContainer.innerHTML = '';
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" aria-label="Close notification">&times;</button>
        </div>
    `;
    // Add styles
    notification.style.cssText = `
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        max-width: 400px;
        margin: 20px auto;
        position: relative;
    `;
    // Add to container
    notificationContainer.appendChild(notification);
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Skill tags animation
document.addEventListener('DOMContentLoaded', () => {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 0.1}s`;
        tag.style.animation = 'fadeInUp 0.6s ease forwards';
    });
});

// Project cards hover effect enhancement
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Timeline animation on scroll
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }
    });
}

// Add timeline animation styles
const style = document.createElement('style');
style.textContent = `
    .timeline-item {
        opacity: 0;
        transform: translateX(-50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .timeline-item:nth-child(even) {
        transform: translateX(50px);
    }
    
    .timeline-item.animate {
        opacity: 1;
        transform: translateX(0);
    }
`;
document.head.appendChild(style);

// Scroll event listener for timeline
window.addEventListener('scroll', animateTimeline);

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active link styles
const activeLinkStyle = document.createElement('style');
activeLinkStyle.textContent = `
    .nav-link.active {
        color: #2563eb !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeLinkStyle);

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #2563eb;
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(backToTop);
    
    // Show/hide button based on scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top functionality
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Print functionality
function addPrintButton() {
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> Print CV';
    printBtn.className = 'print-btn';
    printBtn.setAttribute('aria-label', 'Print CV');
    printBtn.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #2563eb;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-weight: 600;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(37, 99, 235, 0.3);
        transition: all 0.3s ease;
    `;
    
    printBtn.addEventListener('click', () => {
        window.print();
    });
    
    printBtn.addEventListener('mouseenter', () => {
        printBtn.style.transform = 'translateY(-2px)';
        printBtn.style.boxShadow = '0 8px 20px rgba(37, 99, 235, 0.4)';
    });
    
    printBtn.addEventListener('mouseleave', () => {
        printBtn.style.transform = 'translateY(0)';
        printBtn.style.boxShadow = '0 5px 15px rgba(37, 99, 235, 0.3)';
    });
    
    document.body.appendChild(printBtn);
}

// Initialize print button
document.addEventListener('DOMContentLoaded', addPrintButton);

// Add print styles
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar, .hamburger, .back-to-top, .print-btn, .loading-screen {
            display: none !important;
        }
        
        body {
            background: white !important;
        }
        
        .hero {
            background: white !important;
            color: black !important;
        }
        
        section {
            page-break-inside: avoid;
        }
        
        .hero-stats {
            display: none !important;
        }
    }
`;
document.head.appendChild(printStyle);

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    
    // Enter key for form submission
    if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
        const form = e.target.closest('form');
        if (form) {
            form.requestSubmit();
        }
    }
});

// Focus management for accessibility
document.addEventListener('DOMContentLoaded', () => {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #2563eb;
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 10001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main landmark
    const mainContent = document.querySelector('.hero');
    if (mainContent) {
        mainContent.id = 'main';
        mainContent.setAttribute('role', 'main');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
    animateTimeline();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add smooth reveal animation for sections
function revealOnScroll() {
    const reveals = document.querySelectorAll('[data-aos]');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('aos-animate');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', revealOnScroll);

// Enhanced Back to Top Button
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// Section fade-in animation on scroll
function revealSectionsOnScroll() {
  const sections = document.querySelectorAll('section, .services-list, .testimonials-grid, .projects-grid');
  const windowHeight = window.innerHeight;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 80) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSectionsOnScroll);
document.addEventListener('DOMContentLoaded', revealSectionsOnScroll);

// Copyright year auto-update
const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) {
  copyrightYear.textContent = new Date().getFullYear();
}
