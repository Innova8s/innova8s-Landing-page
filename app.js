// Mobile Menu Toggle
document.querySelector('.mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
    this.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.mobile-menu').classList.remove('active');
        }
    });
});

// Enhanced Particle System for Background
function initParticleSystem() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 4 + 2;
        
        // Random animation delay and duration
        const delay = Math.random() * 15;
        const duration = Math.random() * 10 + 10;
        
        // Apply styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color between light blue and light green
        const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#06b6d4'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.backgroundColor = randomColor;
        
        particlesContainer.appendChild(particle);
    }
}

// Enhanced Glowing Effect for Company Name
function enhanceGlowEffect() {
    const companyName = document.querySelector('.company-name');
    let glowIntensity = 1;
    let increasing = true;
    
    setInterval(() => {
        if (increasing) {
            glowIntensity += 0.02;
            if (glowIntensity >= 1.2) increasing = false;
        } else {
            glowIntensity -= 0.02;
            if (glowIntensity <= 1) increasing = true;
        }
        
        companyName.style.filter = `brightness(${glowIntensity})`;
    }, 100);
}

// Enhanced Scroll Animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .zoom-in');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Parallax Effect for Hero Section
function initParallax() {
    const hero = document.getElementById('home');
    const techElements = document.querySelectorAll('.tech-element');
    const shapes = document.querySelectorAll('.shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        techElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });
        
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.2;
            shape.style.transform = `translateY(${rate * speed}px)`;
        });
    });
}

// Mouse Move Animation for Hero
function initMouseMove() {
    const hero = document.getElementById('home');
    const floatingShapes = document.querySelectorAll('.shape');
    const particles = document.querySelectorAll('.particle');
    
    hero.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { width, height } = hero.getBoundingClientRect();
        
        const moveX = (clientX - width / 2) / 25;
        const moveY = (clientY - height / 2) / 25;
        
        floatingShapes.forEach((shape, index) => {
            const speed = (index + 1) * 0.5;
            shape.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
        
        particles.forEach((particle, index) => {
            const speed = (index % 3 + 1) * 0.3;
            particle.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
        });
    });
}

// Typing Animation for Company Name
function initTypingAnimation() {
    const companyName = document.querySelector('.company-name');
    const text = 'INNOVA8S';
    let index = 0;
    
    companyName.textContent = '';
    
    function type() {
        if (index < text.length) {
            companyName.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    
    // Start typing after a delay
    setTimeout(type, 1000);
}

// Particle Interaction
function initParticleInteraction() {
    const particles = document.querySelectorAll('.particle');
    
    particles.forEach(particle => {
        particle.addEventListener('mouseenter', () => {
            particle.style.transform = 'scale(2)';
            particle.style.backgroundColor = '#f97316';
            particle.style.transition = 'all 0.3s ease';
        });
        
        particle.addEventListener('mouseleave', () => {
            particle.style.transform = 'scale(1)';
            particle.style.backgroundColor = '';
            particle.style.transition = 'all 0.5s ease';
        });
    });
}

// Data Stream Animation Enhancement
function enhanceDataStreams() {
    const dataStreams = document.querySelectorAll('.data-stream');
    
    dataStreams.forEach(stream => {
        stream.addEventListener('mouseenter', () => {
            stream.style.width = '4px';
            stream.style.backgroundColor = '#f97316';
            stream.style.filter = 'blur(0px)';
        });
        
        stream.addEventListener('mouseleave', () => {
            stream.style.width = '2px';
            stream.style.backgroundColor = '';
            stream.style.filter = 'blur(0px)';
        });
    });
}

// Particle effect for partner cards
function initPartnerCardEffects() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--x', `${x}px`);
            card.style.setProperty('--y', `${y}px`);
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--x', '50%');
            card.style.setProperty('--y', '50%');
        });
    });
}

// Call this function in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    initPartnerCardEffects();
    // ... your other initialization code
});

// AI Chatbot Functionality
const aiAssistant = document.getElementById('aiAssistant');
const aiChatbot = document.getElementById('aiChatbot');
const chatMessages = document.getElementById('chatMessages');
const chatInput = document.getElementById('chatInput');
const sendMessage = document.getElementById('sendMessage');
const chatbotClose = document.querySelector('.chatbot-close');

// Toggle chatbot
aiAssistant.addEventListener('click', function() {
    aiChatbot.classList.toggle('active');
});

chatbotClose.addEventListener('click', function() {
    aiChatbot.classList.remove('active');
});

// Add message to chat
function addMessage(message, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// AI Responses
function getAIResponse(userMessage) {
    const responses = {
        'hello': 'Hello! How can I assist you with Innovas8s technologies today?',
        'hi': 'Hi there! What would you like to know about our agricultural solutions?',
        'technology': 'We use Advanced Analytics, AI/ML, IoT, and Rover Technology to transform agriculture.',
        'agriculture': 'Our agricultural solutions include precision farming, crop monitoring, and yield optimization using AI.',
        'livestock': 'We provide smart monitoring systems for livestock health, feeding optimization, and behavior analysis.',
        'poultry': 'Our poultry solutions include automated environment control, health monitoring, and production optimization.',
        'contact': 'You can reach us at enquiry@innova8s.com or call +65 6679 6157 (Singapore) / +61 493 182 200 (Australia).',
        'products': 'We offer Easiagri, Easy Ranch Livestock, Easy Ranch Poultry, Gaunation, Pet Vitals, and Easyherd.',
        'partners': 'Our partners include Google Cloud, Google Analytics, TensorFlow, SRM Institute, ERI@N-ECOI, and Roboflow.',
        'ai': 'Our AI systems use machine learning to analyze farm data and provide actionable insights for better decision-making.',
        'iot': 'IoT devices monitor environmental conditions, animal health, and equipment status in real-time.',
        'demo': 'I can schedule a demo for you! Please provide your contact details and preferred time.'
    };

    userMessage = userMessage.toLowerCase();
    
    // Check for keywords
    for (const keyword in responses) {
        if (userMessage.includes(keyword)) {
            return responses[keyword];
        }
    }
    
    // Default response
    const defaultResponses = [
        "I'm not sure I understand. Could you please rephrase your question?",
        "That's an interesting question! Could you provide more details?",
        "I'm still learning about that topic. Try asking about our technologies, products, or services.",
        "Let me connect you with a human expert for that question. In the meantime, is there anything else I can help with?"
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Send message function
sendMessage.addEventListener('click', function() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';
        
        // Simulate AI thinking
        setTimeout(function() {
            const response = getAIResponse(message);
            addMessage(response, false);
        }, 1000);
    }
});

// Enter key to send message
chatInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});

// Enhanced animations for cards on hover
document.querySelectorAll('.spec-card, .tech-item, .logo-item, .ai-feature, .tech-icon').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initParticleSystem();
    enhanceGlowEffect();
    initScrollAnimations();
    initParallax();
    initMouseMove();
    initTypingAnimation();
    initParticleInteraction();
    enhanceDataStreams();
    
    // Add welcome message to chatbot after a delay
    setTimeout(function() {
        addMessage("Welcome to Innovas8s! I'm your AI assistant. How can I help you today?", false);
    }, 2000);
    
    // Enhanced console message
    console.log(`%c
    🌱 INNOVA8S - Smart Agriculture Solutions
    %cExperience the future of farming with our AI-powered platform!
    `, 'color: #10b981; font-size: 18px; font-weight: bold;', 'color: #64748b; font-size: 14px;');
});

// Performance optimization: Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
        scrollTimeout = setTimeout(function() {
            scrollTimeout = null;
            // Navbar scroll effect code here
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 10);
    }
});