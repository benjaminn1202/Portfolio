// Mobile menu toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Academics dropdown toggle
function toggleAcademics(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.dropdown-arrow');
    
    content.classList.toggle('open');
    arrow.classList.toggle('open');
}

// Grade Slip click handler
function openGradeSlip(url) {
    window.open(url, '_blank');
}
// Project click handler
function openProject(url) {
    window.open(url, '_blank');
}
// Link click handler
function openLink(url) {
    window.open(url, '_blank');
}

// Smooth scrolling and active nav link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Add click event to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            document.getElementById('navLinks').classList.remove('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // Form handling
    const contactForm = document.querySelector('.contact-form');
    const clearBtn = contactForm.querySelector('.btn-secondary');
    
    clearBtn.addEventListener('click', function() {
        contactForm.reset();
    });
});

// Add project function (for easy expansion)
function addProject(title, description, icon, technologies, githubUrl) {
    const projectsGrid = document.getElementById('projectsGrid');
    
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.onclick = () => openProject(githubUrl);
    
    projectCard.innerHTML = `
        <div class="project-header">
            <div class="project-icon">${icon}</div>
            <h3 class="project-title">${title}</h3>
        </div>
        <p class="project-description">${description}</p>
        <div class="project-tech">
            ${technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
}

// Email
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
    };

    emailjs.send("service_017c55d","template_rncbk6g", templateParams)
    .then(function(response) {
        alert("Email sent successfully!");
        document.getElementById("contact-form").reset();
    }, function(error) {
        console.error("Email failed to send:", error);
        alert("Failed to send email.");
    });
});