/* ========================================
   ABOUT PAGE JAVASCRIPT
   ========================================
   Handles about page interactions
   ======================================== */

class AboutPage {
    constructor() {
        this.initContactForm();
    }
    
    initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmit(contactForm);
        });
    }
    
    handleFormSubmit(form) {
        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const subject = form.querySelectorAll('input[type="text"]')[1].value.trim();
        const message = form.querySelector('textarea').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            this.showNotification('Please fill in all fields', 'error');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            this.showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // In production, this would send to a backend service
        console.log({
            name,
            email,
            subject,
            message,
            timestamp: new Date().toISOString()
        });
        
        this.showNotification('Thank you for your message! We will get back to you soon.', 'success');
        form.reset();
    }
    
    showNotification(message, type = 'info') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 1rem 1.5rem;
            background-color: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#DC143C' : '#2196F3'};
            color: white;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideIn 0.3s ease-out;
            max-width: 300px;
            word-wrap: break-word;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Auto-remove after 4 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 4000);
    }
}

// Add animation keyframes if not already present
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    @media (max-width: 600px) {
        .notification {
            right: 10px !important;
            left: 10px !important;
            max-width: none !important;
        }
    }
`;
document.head.appendChild(style);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AboutPage();
    });
} else {
    new AboutPage();
}
