import React, { useEffect, useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

import Typed from 'typed.js';

function App() {

    const [projectFilter, setProjectFilter] = useState('all');

    const projectsData = [
        {
            title: "InsureBot - Axis Max Life Insurance",
            category: "ai",
            image: "./image/moviebot.png",
            description: `Designed and developed an intelligent insurance assistant enabling users to upload policy-related documents and interact with them through natural language queries. Leveraged Generative AI and <strong>RAG pipelines</strong> with LangChain to deliver highly specific answers, improving customer experience and query resolution time.`,
            techStack: [
                { name: "Generative AI", icon: "./image/openai-logo.png" },
                { name: "LangChain", icon: "./image/langchain-logo.jpeg" },
                { name: "Python", icon: "./image/python-logo.png" }
            ],
            liveLink: null,
            githubLink: null,
        },
        {
            title: "AskDB - Monocept",
            category: "ai",
            image: "./image/SpringAIBot.png",
            description: `Engineered an NLP-powered LLM agent to translate natural language into MySQL queries using <strong>LangChain</strong> and <strong>OpenAI</strong>. Automated complex data retrieval workflows, reducing dependency on DBAs and increasing operational efficiency.`,
            techStack: [
                { name: "Python", icon: "./image/python-logo.png" },
                { name: "LangChain", icon: "./image/langchain-logo.jpeg" },
                { name: "OpenAI", icon: "./image/openai-logo.png" },
                { name: "MySQL", icon: "./image/mysql-logo.png" }
            ],
            liveLink: null,
            githubLink: null,
        },
        {
            title: "DataCloak - Aditya Birla Health Insurance",
            category: "ai",
            image: "./image/pueplle.png",
            description: `Developed a secure and automated pipeline for redacting sensitive Aadhaar numbers from uploaded documents using <strong>OCR</strong> and fine-tuned <strong>YOLOv8</strong> for precise detection, enhancing data security and compliance.`,
            techStack: [
                { name: "Python", icon: "./image/python-logo.png" },
                { name: "YOLOv8", icon: "./image/yolo-v8-logo.gif" },
                { name: "OCR", icon: "./image/ocr-logo.jpg" }
            ],
            liveLink: null,
            githubLink: null,
        },
        {
            title: "Serverless AI Workflow - AWS",
            category: "cloud",
            image: "./image/elec_bill_mng_sys.png",
            description: `Architected and deployed a serverless AI pipeline using <strong>AWS Lambda</strong>, <strong>Step Functions</strong>, and <strong>API Gateway</strong> integrated with foundation models.`,
            techStack: [
                { name: "AWS", icon: "./image/aws-s3-logo.jpg" },
                { name: "Python", icon: "./image/python-logo.png" }
            ],
            liveLink: null,
            githubLink: null,
        }
    ];

    const filteredProjects = projectFilter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === projectFilter);


    useEffect(() => {
        // Original script.js logic wrapped in a timeout to ensure DOM is fully rendered
        const timer = setTimeout(() => {
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

            // ===== PROJECT FILTERING (Handled by React state now) =====

            // ===== PROJECT MODAL (details) =====
            const modal = document.getElementById('project-modal');
            const modalClose = modal?.querySelector('.modal-close');

            function openModalFromCard(card) {
                if (!modal) return;
                const title = card.querySelector('.project-title')?.innerText || 'Project';
                const img = card.querySelector('img')?.src || './image/moviebot.png';
                const desc = card.querySelector('.project-description p')?.innerText || '';
                const techImgs = Array.from(card.querySelectorAll('.project-tech-stack1 img'));

                modal.querySelector('.modal-image img').src = img;
                modal.querySelector('.modal-title').innerText = title;
                modal.querySelector('.modal-desc').innerText = desc;
                const techContainer = modal.querySelector('.modal-tech');
                techContainer.innerHTML = '';
                techImgs.forEach(i => {
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

            document.querySelectorAll('.projects-categories .project-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    // if click on a link inside card, ignore
                    if (e.target.closest('a')) return;
                    openModalFromCard(card);
                });
            });

            modalClose?.addEventListener('click', () => modal.classList.remove('open'));
            window.addEventListener('keydown', (e) => { if (e.key === 'Escape') modal.classList.remove('open'); });
            modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('open'); });

            // ===== SKILL METERS (animate on view) =====
            const skillObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const card = entry.target;
                        const fill = card.querySelector('.skill-fill');
                        const level = parseInt(card.dataset.level || '75', 10);
                        fill.style.width = level + '%';
                        skillObserver.unobserve(card);
                    }
                });
            }, { threshold: 0.25 });

            document.querySelectorAll('.skills-card[data-level]').forEach(c => { skillObserver.observe(c); });

            // ===== TESTIMONIALS CAROUSEL =====
            let testIndex = 0;
            const tests = document.querySelectorAll('.testimonial');
            function showTest(i) { tests.forEach((t, idx) => t.classList.toggle('active', idx === i)); }
            function nextTest() { testIndex = (testIndex + 1) % tests.length; showTest(testIndex); }
            if (tests.length) { showTest(0); let testTimer = setInterval(nextTest, 5000); document.querySelector('.testimonials-slider')?.addEventListener('mouseenter', () => clearInterval(testTimer)); }

            // ===== HERO CTA =====
            document.querySelector('#hire-me-cta')?.addEventListener('click', () => {
                const target = document.getElementById('contact');
                if (target) {
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                }
            });

            // ===== GitHub stat images — graceful fallback when external service is blocked =====
            ['github-streak-stats', 'github-stats-card', 'github-top-langs'].forEach(id => {
                const el = document.getElementById(id);
                if (!el) return;
                el.addEventListener('error', () => {
                    // inline SVG placeholder (keeps layout + readable message)
                    el.classList.add('img-error');
                    el.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="900" height="140"><rect rx="12" width="100%" height="100%" fill="%23f8fafc" stroke="%239aa0ff" stroke-width="1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23636ff1" font-family="Poppins, Arial, sans-serif" font-size="18">GitHub stats unavailable</text></svg>';
                    // add a small caption so user understands it's a fallback
                    if (!el.nextElementSibling || !el.nextElementSibling.classList.contains('img-caption')) {
                        const c = document.createElement('div');
                        c.className = 'img-caption';
                        c.innerText = 'Stats currently unavailable — click to view on GitHub.';
                        el.parentNode.insertBefore(c, el.nextSibling);
                    }
                });
            });

            // If images are present but very small, ensure they keep reasonable height (defensive fix)
            document.querySelectorAll('#git-stat img').forEach(i => { if (i.naturalWidth === 0 && i.complete) { i.dispatchEvent(new Event('error')); } });




        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>


            {/* Navbar Section Start */}
            <header>
                <a href="#" className="logo">Sonu <span>Kumar</span></a>

                <div className="bx bx-menu" id="menu-icon"></div>

                <ul className="navbar" id="nav-menu">
                    <li><a className="nav-link home" href="#home">Home</a></li>
                    <li><a className="nav-link about" href="#about">About Me</a></li>
                    <li><a className="nav-link experience" href="#experience">Experience</a></li>
                    <li><a className="nav-link education" href="#education">Education</a></li>
                    <li><a className="nav-link skills" href="#skills">Skills</a></li>
                    <li><a className="nav-link projects" href="#projects">Projects</a></li>
                    <li><a className="nav-link contact" href="#contact">Contact</a></li>
                    <li className="nav-link resume">
                        <a id="resume-link-nav" href="/Sonu-Kumar-Resume-AI.pdf" download="Sonu-Kumar-Resume"
                            target="_blank" rel="noreferrer"> <button className="resume-button" id="resume-button-nav">Resume</button> </a>
                    </li>
                    <div className="bx bx-moon" id="darkmode"></div>
                </ul>
            </header>
            {/* Navbar Section End */}

            {/* Hero Section (formerly Home Section) Start */}
            <section id="home" className="hero-section">
                <div className="home-text">
                    <h1 id="user-detail-name">Hello, I'm Sonu Kumar</h1>
                    <h2 className="hero-typing-text">I am <span id="element"></span></h2>
                    <a id="resume-link-hero" href="/Sonu-Kumar-Resume-AI.pdf" download="Sonu-Kumar-Resume"
                        target="_blank" rel="noreferrer">
                        <button className="resume-button" id="resume-button-hero">Download Resume</button>
                    </a>

                    {/* Floating CTA */}
                    <div className="hero-cta">
                        <div className="cta-card">
                            <h4>Looking to hire?</h4>
                            <p>Available for AI/ML & backend roles. Let's build something great.</p>
                            <a href="#contact"><button id="hire-me-cta" className="resume-button">Hire me</button></a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            {/* About Section Start */}
            <section className="about section" id="about">
                <div className="heading">
                    <h2>About Me</h2>
                    <span>Introduction</span>
                </div>

                <div className="about-container">

                    <div className="home-img-main">
                        <img className="home-img" src="image/Sonu-professional-pic.jpeg" alt="sonu_kumar" />

                    </div>

                    <div className="about-text" id="user-detail-intro">
                        <p>
                            AI Engineer with 3+ years of experience building production-grade Generative AI and LLM-powered systems. Strong expertise in LLM agents, RAG pipelines, OCR + YOLOv8 document intelligence, and backend development using FastAPI and Java Spring Boot. Experienced in designing AWS-native, serverless AI architectures using Bedrock, SageMaker, Lambda, and Step Functions to deliver scalable, secure enterprise solutions.
                        </p>

                        <br />
                        
                        {/* Contact info */}
                        <div className="information" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
                            <div className="info-box">
                                <i className='bx bxs-user'></i>
                                <span>Name</span>
                                <h3>Sonu Kumar</h3>
                            </div>

                            <div className="info-box">
                                <i className='bx bxs-briefcase'></i>
                                <span>Organization</span>
                                <h3>TRC Corporate Consulting Pvt. Ltd.</h3>
                            </div>

                            <div className="info-box">
                                <i className='bx bxs-map'></i>
                                <span>Location</span>
                                <h3>Gurugram, Haryana, India</h3>
                            </div>

                            <div className="info-box">
                                <i className='bx bxl-linkedin-square'></i>
                                <span>LinkedIn</span>
                                <h3><a href="https://www.linkedin.com/in/sonu-kumar-6868b7276/" target="_blank" rel="noreferrer">Sonu Kumar</a></h3>
                            </div>

                            <div className="info-box">
                                <i className='bx bxl-github'></i>
                                <span>GitHub</span>
                                <h3><a href="https://github.com/sonukumar047" target="_blank" rel="noreferrer">sonukumar047</a></h3>
                            </div>

                            <div className="info-box">
                                <i className='bx bxs-phone'></i>
                                <span>Phone</span>
                                <h3 id="contact-phone">7595020599</h3>
                            </div>

                            <div className="info-box">
                                <i className='bx bxs-envelope'></i>
                                <span>Email</span>
                                <h3 id="contact-email">sonuhits047@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About Section End */}

            {/* Skills Section Start */}
            {/* Experience Section */}
            <section id="experience" className="timeline-section">
                <div className="heading">
                    <h2>Experience</h2>
                    <span>My Professional Journey</span>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>AI/ML Engineer</h3>
                            <h4>TRC Corporate Consulting Pvt. Ltd., Gurugram</h4>
                            <span className="timeline-date">March 2026 - Present</span>
                            <ul>
                                <li>Engineered and implemented full automation pipelines leveraging FastAPI, React, and AWS deployment architectures to optimize enterprise consulting workflows.</li>
                                <li>Designed scalable backend services and responsive user interfaces to streamline business process automation.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Software Engineer (AI/ML)</h3>
                            <h4>Monocept Consulting Pvt. Ltd., Gurugram</h4>
                            <span className="timeline-date">April 2024 - March 2026</span>
                            <ul>
                                <li>Developed AI-powered solutions using Python and ML frameworks to automate business workflows.</li>
                                <li>Built Generative AI and LLM-based agents using LangChain, LangGraph, and OpenAI for question answering and automation.</li>
                                <li>Implemented RAG pipelines for knowledge retrieval and chatbot integration.</li>
                                <li>Fine-tuned YOLOv8 model to detect Aadhaar info in documents with high accuracy.</li>
                                <li>Deployed and managed ML models on AWS SageMaker; leveraged AWS Bedrock for foundation model integration.</li>
                                <li>Led migration of databases from Oracle to PostgreSQL for Care Health Insurance ensuring zero downtime.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Associate Software Engineer</h3>
                            <h4>SuperSeva Global Services Pvt. Ltd., Bengaluru</h4>
                            <span className="timeline-date">July 2022 - May 2023</span>
                            <ul>
                                <li>Contributed to backend development using Java, Python, Spring Boot, and Flask.</li>
                                <li>Implemented REST APIs and optimized code for service reliability.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="timeline-section">
                <div className="heading">
                    <h2>Education</h2>
                    <span>My Academic Background</span>
                </div>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Full Stack Development</h3>
                            <h4>Masai School, Bengaluru</h4>
                            <span className="timeline-date">June 2023 - Nov 2023</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>B.Tech in ECE</h3>
                            <h4>Dream Institute of Technology, Kolkata</h4>
                            <span className="timeline-date">July 2019 - July 2022</span>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content">
                            <h3>Diploma in EEE</h3>
                            <h4>Holy Mary Institute of Technology and Science, Hyderabad</h4>
                            <span className="timeline-date">July 2014 - June 2017</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills">

                <div className="heading">

                    <h2>Skills</h2>

                    <span>Tech Stack & Tools</span>

                </div>



                <div className="skills-categories">

                    {/* Data Science & AI/ML Development Skills */}

                    <div className="skill-category-group">

                        <h3>Data Science & AI/ML Development</h3>

                        <div className="skills-content">

                            <div className="skills-card" data-skill="Python" data-level="92">

                                <img className="skills-card-img" src="./image/python-logo.png" alt="python" />

                                <h4 className="skills-card-name">Python</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/flask-logo.png" alt="flask" />

                                <h4 className="skills-card-name">Flask</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/openai-logo.png" alt="openAI" />

                                <h4 className="skills-card-name">OpenAI</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/ollama-logo.png" alt="ollama" />

                                <h4 className="skills-card-name">Ollama</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/groq-logo.png" alt="groq" />

                                <h4 className="skills-card-name">Groq</h4>

                            </div>

                            <div className="skills-card" data-skill="Hugging Face" data-level="80">

                                <img className="skills-card-img" src="./image/huggingface-logo.png" alt="huggingface" />

                                <h4 className="skills-card-name">Hugging Face</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                            <div className="skills-card" data-skill="LangChain" data-level="88">

                                <img className="skills-card-img" src="./image/langchain-logo.jpeg" alt="langchain" />

                                <h4 className="skills-card-name">LangChain</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/langgraph-logo.png" alt="langgraph" />

                                <h4 className="skills-card-name">LangGraph</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/deepseek-logo.jpg" alt="deepseek" />

                                <h4 className="skills-card-name">DeepSeek</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/llama-logo.jpeg" alt="llama" />

                                <h4 className="skills-card-name">Llama</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/qwen-logo.png" alt="qwen" />

                                <h4 className="skills-card-name">Qwen</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/pandas-logo.png" alt="pandas" />

                                <h4 className="skills-card-name">Pandas</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/numpy-logo.png" alt="numpy" />

                                <h4 className="skills-card-name">NumPy</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/chroma-logo.png" alt="chroma" />

                                <h4 className="skills-card-name">Chroma</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/pinecone-logo.png" alt="pinecone" />

                                <h4 className="skills-card-name">Pinecone</h4>

                            </div>

                        </div>

                    </div>



                    {/* Database & ORM Skills */}

                    <div className="skill-category-group">

                        <h3>Database & ORM</h3>

                        <div className="skills-content">

                            <div className="skills-card" data-skill="MySQL" data-level="75">

                                <img className="skills-card-img" src="./image/mysql-logo.png" alt="mysql" />

                                <h4 className="skills-card-name">MySQL</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/mongodb-logo.png" alt="mongodb" />

                                <h4 className="skills-card-name">MongoDB</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/hibernate-logo.png" alt="hibernate" />

                                <h4 className="skills-card-name">Hibernate</h4>

                            </div>

                        </div>

                    </div>



                    {/* General / Backend / Frontend Development Skills */}

                    <div className="skill-category-group">

                        <h3>General Development</h3>

                        <div className="skills-content">

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/html1.png" alt="html" />

                                <h4 className="skills-card-name">HTML</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/css.png" alt="css" />

                                <h4 className="skills-card-name">CSS</h4>

                            </div>

                            <div className="skills-card" data-skill="JavaScript" data-level="82">

                                <img className="skills-card-img" src="./image/js.png" alt="js" />

                                <h4 className="skills-card-name">JavaScript</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                            <div className="skills-card" data-skill="Java" data-level="85">

                                <img className="skills-card-img" src="./image/java.png" alt="java" />

                                <h4 className="skills-card-name">Java</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/sts.png" alt="sts" />

                                <h4 className="skills-card-name">STS</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/IntelliJ_IDEA_Icon.svg.png" alt="intellij" />

                                <h4 className="skills-card-name">IntelliJ</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/github.png" alt="github" />

                                <h4 className="skills-card-name">GitHub</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/vscode.png" alt="vscode" />

                                <h4 className="skills-card-name">VS Code</h4>

                            </div>

                            <div className="skills-card">

                                <img className="skills-card-img" src="./image/spring-logo.png" alt="spring" />

                                <h4 className="skills-card-name">Spring</h4>

                            </div>

                            <div className="skills-card" data-skill="Spring Boot" data-level="78">

                                <img className="skills-card-img" src="./image/springboot-logo.png" alt="spring_boot" />

                                <h4 className="skills-card-name">Spring Boot</h4>

                                <div className="skill-meter"><div className="skill-fill" style={{ width: "0%" }}></div></div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Skills Section End */}


            {/* Projects Section Start */}
            <section id="projects">
                <div className="heading">
                    <h2>Projects</h2>
                    <span>Few Things I've Build</span>
                </div>

                {/* Project controls: filter + search */}
                <div className="projects-controls">
                    <div className="projects-tabs">
                        <button className={`tab ${projectFilter === 'all' ? 'active' : ''}`} onClick={() => setProjectFilter('all')}>All</button>
                        <button className={`tab ${projectFilter === 'ai' ? 'active' : ''}`} onClick={() => setProjectFilter('ai')}>AI / ML</button>
                        <button className={`tab ${projectFilter === 'cloud' ? 'active' : ''}`} onClick={() => setProjectFilter('cloud')}>Cloud & Serverless</button>
                    </div>
                    {/* Keeping this for visual consistency, though filtering might be by tabs mostly */}
                    <div className="projects-search">
                        <input id="projects-search-input" type="search" placeholder="Search projects..." />
                    </div>
                </div>

                <div className="swiper-projects-container" style={{ padding: '40px 10px', overflow: 'hidden', width: '100%' }}>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 40,
                            stretch: 0,
                            depth: 150,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        navigation={true}
                        autoplay={{ delay: 5000, disableOnInteraction: true }}
                        className="mySwiper"
                        style={{ paddingBottom: '60px', paddingTop: '40px' }}
                    >
                        {filteredProjects.map((project, idx) => (
                            <SwiperSlide key={idx} style={{ height: 'auto', display: 'flex' }}>
                                <div className="project-card" style={{ width: '100%' }}>
                                    {project.image && <img src={project.image} alt={project.title} />}
                                    <div className="project-name">
                                        <h3 className="project-title">{project.title}</h3>
                                    </div>
                                    <div className="project-description">
                                        <p dangerouslySetInnerHTML={{ __html: project.description }}></p>
                                    </div>
                                    <div className="project-tech-stack1">
                                        {project.techStack.map((tech, i) => (
                                            <div className="tech-card" key={i}>
                                                <img src={tech.icon} alt={tech.name} />
                                                <h6>{tech.name}</h6>
                                            </div>
                                        ))}
                                    </div>
                                    {(project.liveLink || project.githubLink) && (
                                        <div className="projects-button">
                                            {project.liveLink && (
                                                <button className="button-project-link">
                                                    <a className="project-deployed-link" href={project.liveLink} target="_blank" rel="noreferrer">Live💻</a>
                                                </button>
                                            )}
                                            {project.githubLink && (
                                                <button className="button-project-link">
                                                    <a className="project-github-link" href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a>
                                                </button>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <br /><br />
                <p style={{ textAlign: 'center', marginTop: '8px', color: 'rgb(2, 166, 70)' }}>Made with ❤️ By Sonu Kumar</p>
            </section>
            {/* Projects Section End */}

            {/* Testimonials (new) */}
            <section id="testimonials" className="section">
                <div className="heading">
                    <h2>Testimonials</h2>
                    <span>What people say</span>
                </div>
                <div className="testimonials-slider">
                    <div className="testimonial active">
                        <p>"Sonu delivered production-grade LLM tooling for our analytics team — fast, thoughtful and reliable."</p>
                        <h4>- Product Lead, Monocept</h4>
                    </div>
                    <div className="testimonial">
                        <p>"His DB-Agent saved hours for non-technical stakeholders — brilliant engineering and UX."</p>
                        <h4>- Data Engineer</h4>
                    </div>
                    <div className="testimonial">
                        <p>"Excellent backend skills — API design and migrations were seamless and well-tested."</p>
                        <h4>- Engineering Manager</h4>
                    </div>
                </div>
            </section>

            {/* Github Stats Section Start */}

            <section className="react-activity-calendar">
                <div className="heading">
                    <h2>GitHub Statistics</h2>
                    <span>& Calender</span>
                </div>
                <br />
                <div className="calendar" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <GitHubCalendar 
                        username="sonukumar047" 
                        colorScheme="light"
                        blockSize={15}
                        blockMargin={5}
                        fontSize={14}
                    />
                </div>
                <br />
                <div id="git-stat">
                    <div>
                        <a href="https://github.com/sonukumar047" target="_blank" title="Open GitHub profile">
                            <img id="github-streak-stats" className="git-img" loading="lazy"
                                src="https://github-readme-streak-stats.herokuapp.com?user=sonukumar047&theme=dark"
                                alt="streak-stat" />
                        </a>
                        <br />
                        <a href="https://github.com/sonukumar047" target="_blank" title="Open GitHub stats">
                            <img id="github-stats-card" className="git-img" loading="lazy"
                                src="https://github-readme-stats.vercel.app/api?username=sonukumar047&count_private=true&theme=react"
                                alt="stat-card" />
                        </a>
                    </div>
                    <div>
                        <a href="https://github.com/sonukumar047?tab=repositories" target="_blank" title="Top languages">
                            <img id="github-top-langs" className="git-img" loading="lazy"
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=sonukumar047&theme=react"
                                alt="top_languages" />
                        </a>
                    </div>
                </div>
            </section>


            {/* Contact Section Start */}

            <section id="contact">
                <div className="heading">
                    <h2>Contact</h2>
                </div>
                <div className="contact-form">
                    <form action="">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" name="" id="" cols="30" rows="10" placeholder="Write Message Here..." />
                        <input type="button" value="Send" className="contact-button" />
                    </form>
                </div>

            </section>

            {/* Contact Section End */}

            {/* Project detail modal */}
            <div id="project-modal" className="modal">
                <div className="modal-content">
                    <button className="modal-close">×</button>
                    <div className="modal-body">
                        <div className="modal-image"><img src="" alt="project image" /></div>
                        <div className="modal-info">
                            <h3 className="modal-title">Project Title</h3>
                            <p className="modal-desc">Full project description will appear here.</p>
                            <div className="modal-tech"></div>
                            <div className="modal-links">
                                <a className="btn btn-live" href="#" target="_blank">Live</a>
                                <a className="btn btn-code" href="#" target="_blank">Source</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h2>Follow Me</h2>
                <div className="footer-social">
                    <a id="contact-github" href="https://github.com/sonukumar047" target="_blank" aria-label="GitHub — Sonu Kumar"><i className='bx bxl-github'></i></a>
                    <a id="contact-linkedin" href="https://www.linkedin.com/in/sonu-kumar-6868b7276/" target="_blank" aria-label="LinkedIn — Sonu Kumar"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://www.instagram.com/sanu0047/" target="_blank" aria-label="Instagram — sonu"><i className='bx bxl-instagram'></i></a>
                    <a href="https://www.facebook.com/profile.php?id=100008451156756" target="_blank" aria-label="Facebook — Sonu Kumar"><i className='bx bxl-facebook'></i></a>
                </div>

            </div>

            <div className="footer-bottom">
                <p> © Thank You for visiting my PortFolio 💙💙 </p>
            </div>


        </>
    );
}

export default App;
