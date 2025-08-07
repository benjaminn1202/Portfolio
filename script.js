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

// Certificates dropdown toggle
function toggleCertificates(element) {
    const content = element.nextElementSibling;
    const arrow = element.querySelector('.dropdown-arrow');
    
    content.classList.toggle('open');
    arrow.classList.toggle('open');
}

// Grade Slip click handler
function openGradeSlip(imageUrl) {
    // Create overlay div
    const overlay = document.createElement('div');
    overlay.id = 'image-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.cursor = 'pointer';
    
    // Create image container
    const imgContainer = document.createElement('div');
    imgContainer.style.position = 'relative';
    imgContainer.style.maxWidth = '90%';
    imgContainer.style.maxHeight = '90%';
    
    // Create close button
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '15px';
    closeBtn.style.right = '15px';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '30px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.width = '40px';
    closeBtn.style.height = '40px';
    closeBtn.style.display = 'flex';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.alignItems = 'center';
    
    // Create image element
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '80vh';
    img.style.border = '5px solid white';
    img.style.borderRadius = '5px';
    
    // Prevent click events from bubbling up
    imgContainer.onclick = function(e) {
        e.stopPropagation();
    };
    
    // Close function
    function closeOverlay() {
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
    
    // Add event listeners
    closeBtn.onclick = closeOverlay;
    overlay.onclick = closeOverlay;
    
    // Build the DOM structure
    imgContainer.appendChild(closeBtn);
    imgContainer.appendChild(img);
    overlay.appendChild(imgContainer);
    
    // Add to document
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden'; // Disable scrolling
}

// Certificate Click Handler
function openCertificate(imageUrl) {
    const overlay = document.createElement('div');
    overlay.id = 'image-overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '1000';
    overlay.style.cursor = 'pointer';
    
    const imgContainer = document.createElement('div');
    imgContainer.style.position = 'relative';
    imgContainer.style.maxWidth = '90%';
    imgContainer.style.maxHeight = '90%';
    
    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.position = 'absolute';
    closeBtn.style.top = '15px';
    closeBtn.style.right = '15px';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '30px';
    closeBtn.style.fontWeight = 'bold';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.width = '40px';
    closeBtn.style.height = '40px';
    closeBtn.style.display = 'flex';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.alignItems = 'center';
    
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '100%';
    img.style.maxHeight = '80vh';
    img.style.border = '5px solid white';
    img.style.borderRadius = '5px';
    img.style.boxShadow = '0 0 20px rgba(0,0,0,0.5)';
    
    imgContainer.onclick = function(e) {
        e.stopPropagation();
    };
    
    function closeOverlay() {
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto';
    }
    
    closeBtn.onclick = closeOverlay;
    overlay.onclick = closeOverlay;
    
    imgContainer.appendChild(closeBtn);
    imgContainer.appendChild(img);
    overlay.appendChild(imgContainer);
    
    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
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

    let navMenu = document.getElementById('navLinks');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    
    // Form handling
    const contactForm = document.querySelector('.contact-form');
    const clearBtn = contactForm.querySelector('.btn-secondary');
    
    clearBtn.addEventListener('click', function() {
        contactForm.reset();
    });
});

function jumpToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        let navMenu = document.getElementById('navLinks');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
}

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