// script.js
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector("#nav-menu");

// Add shadow to header on scroll
window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 50);
});

// Toggle mobile navigation menu
menu.onclick = () => {
    navbar.classList.toggle("active");
};

// Close mobile navigation menu when scrolling
window.onscroll = () => {
    navbar.classList.remove("active");
};

// Close mobile navigation when link is clicked
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

// Dark Mode / Light Mode Toggle
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
    if (darkmode.classList.contains("bx-moon")) {
        // Switch to sun icon and activate dark mode styles
        darkmode.classList.replace("bx-moon", "bx-sun");
        document.body.classList.add("active");
        localStorage.setItem("darkmode", "active");
    } else {
        // Switch back to moon icon and deactivate dark mode styles
        darkmode.classList.replace("bx-sun", "bx-moon");
        document.body.classList.remove("active");
        localStorage.setItem("darkmode", "inactive");
    }
};

// Load dark mode preference
if (localStorage.getItem("darkmode") === "active") {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
}

// Initialize Typed.js for the hero section's animated text
var typed = new Typed('#element', {
    strings: ['a Passionate AI & ML Engineer.', 'an LLM Developer.', 'a Prompt Engineer', 'a Java Backend Developer'],
    typeSpeed: 65,
    backSpeed: 45,
    loop: true,
    backDelay: 1000,
});

// Consolidated Resume button event for all buttons with class 'resume-button'
const resumeLink = "./Resume/Sonu-Kumar-Resume-AI.pdf";

document.querySelectorAll('.resume-button').forEach(button => {
    button.addEventListener("click", () => {
        window.open(resumeLink, "_blank");
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and elements for scroll animation
document.querySelectorAll('.skills-card, .project-card, .info-box, .skill-category-group, .project-category-group, .heading').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ===== SMOOTH SCROLL TO SECTIONS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== PARALLAX EFFECT ON HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && scrolled < window.innerHeight) {
        heroSection.style.backgroundPosition = `center ${scrolled * 0.5}px`;
    }
});

// ===== ADD CLICK RIPPLE EFFECT ON BUTTONS =====
function addRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
}

// ===== MOUSE MOVEMENT EFFECT =====
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    document.querySelectorAll('.skills-card, .project-card, .tech-card').forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;
        const distance = Math.sqrt((mouseX - cardX) ** 2 + (mouseY - cardY) ** 2);
        
        if (distance < 200) {
            const angle = Math.atan2(mouseY - cardY, mouseX - cardX);
            const force = (200 - distance) / 200;
            card.style.transform = `perspective(1000px) rotateX(${Math.sin(angle) * force * 5}deg) rotateY(${Math.cos(angle) * force * 5}deg)`;
        } else {
            card.style.transform = '';
        }
    });
});

// ===== PROJECT FILTERING & SEARCH =====
const tabs = document.querySelectorAll('.projects-tabs .tab');
const searchInput = document.getElementById('projects-search-input');

function filterProjects(filter='all', query=''){
    document.querySelectorAll('.projects-categories .project-card').forEach(card =>{
        const cat = (card.getAttribute('data-category') || '').toLowerCase();
        const title = (card.querySelector('.project-title')?.innerText || '').toLowerCase();
        const matchesFilter = filter === 'all' || cat.includes(filter);
        const matchesQuery = !query || title.includes(query.toLowerCase());
        card.style.display = (matchesFilter && matchesQuery) ? 'flex' : 'none';
    });
}

tabs.forEach(tab => tab.addEventListener('click', (e)=>{
    tabs.forEach(t=>t.classList.remove('active'));
    tab.classList.add('active');
    filterProjects(tab.dataset.filter, searchInput.value);
}));

searchInput?.addEventListener('input', (e)=>{
    const active = document.querySelector('.projects-tabs .tab.active')?.dataset.filter || 'all';
    filterProjects(active, e.target.value);
});

// ===== PROJECT MODAL (details) =====
const modal = document.getElementById('project-modal');
const modalClose = modal?.querySelector('.modal-close');

function openModalFromCard(card){
    if(!modal) return;
    const title = card.querySelector('.project-title')?.innerText || 'Project';
    const img = card.querySelector('img')?.src || './image/moviebot.png';
    const desc = card.querySelector('.project-description p')?.innerText || '';
    const techImgs = Array.from(card.querySelectorAll('.project-tech-stack1 img'));

    modal.querySelector('.modal-image img').src = img;
    modal.querySelector('.modal-title').innerText = title;
    modal.querySelector('.modal-desc').innerText = desc;
    const techContainer = modal.querySelector('.modal-tech');
    techContainer.innerHTML = '';
    techImgs.forEach(i=>{
        const pill = document.createElement('div');
        pill.className = 'tech-pill';
        pill.innerText = i.alt || '';
        techContainer.appendChild(pill);
    });
    // links — reuse existing anchors if any
    const live = card.querySelector('.project-deployed-link')?.href || '#';
    const code = card.querySelector('.project-github-link')?.href || '#';
    modal.querySelector('.btn-live').href = live;
    modal.querySelector('.btn-code').href = code;
    modal.classList.add('open');
}

document.querySelectorAll('.projects-categories .project-card').forEach(card =>{
    card.addEventListener('click', (e)=>{
        // if click on a link inside card, ignore
        if(e.target.closest('a')) return;
        openModalFromCard(card);
    });
});

modalClose?.addEventListener('click', ()=> modal.classList.remove('open'));
window.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') modal.classList.remove('open'); });
modal?.addEventListener('click', (e)=>{ if(e.target === modal) modal.classList.remove('open'); });

// ===== SKILL METERS (animate on view) =====
const skillObserver = new IntersectionObserver((entries) =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const card = entry.target;
            const fill = card.querySelector('.skill-fill');
            const level = parseInt(card.dataset.level || '75', 10);
            fill.style.width = level + '%';
            skillObserver.unobserve(card);
        }
    });
},{threshold:0.25});

document.querySelectorAll('.skills-card[data-level]').forEach(c => { skillObserver.observe(c); });

// ===== TESTIMONIALS CAROUSEL =====
let testIndex = 0;
const tests = document.querySelectorAll('.testimonial');
function showTest(i){ tests.forEach((t,idx)=> t.classList.toggle('active', idx===i)); }
function nextTest(){ testIndex = (testIndex+1) % tests.length; showTest(testIndex); }
if(tests.length) { showTest(0); let testTimer = setInterval(nextTest, 5000); document.querySelector('.testimonials-slider')?.addEventListener('mouseenter', ()=> clearInterval(testTimer)); }

// ===== HERO CTA =====
document.querySelector('#hire-me-cta')?.addEventListener('click', ()=>{
    const target = document.getElementById('contact');
    if(target){
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
});

// ===== GitHub stat images — graceful fallback when external service is blocked =====
['github-streak-stats','github-stats-card','github-top-langs'].forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.addEventListener('error', ()=>{
        // inline SVG placeholder (keeps layout + readable message)
        el.classList.add('img-error');
        el.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="900" height="140"><rect rx="12" width="100%" height="100%" fill="%23f8fafc" stroke="%239aa0ff" stroke-width="1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23636ff1" font-family="Poppins, Arial, sans-serif" font-size="18">GitHub stats unavailable</text></svg>';
        // add a small caption so user understands it's a fallback
        if(!el.nextElementSibling || !el.nextElementSibling.classList.contains('img-caption')){
            const c = document.createElement('div');
            c.className = 'img-caption';
            c.innerText = 'Stats currently unavailable — click to view on GitHub.';
            el.parentNode.insertBefore(c, el.nextSibling);
        }
    });
});

// If images are present but very small, ensure they keep reasonable height (defensive fix)
document.querySelectorAll('#git-stat img').forEach(i=>{ if(i.naturalWidth===0 && i.complete) { i.dispatchEvent(new Event('error')); }});



