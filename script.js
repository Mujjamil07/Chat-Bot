// Professional Resume Chatbot functionality
class ResumeChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.conversationHistory = [];
        this.isTyping = false;
        
        // Mujjamil's Resume data - Updated with actual information
        this.resumeData = {
            name: "Mujjamil Chand Shaikh",
            title: "Full Stack Developer & Data Analyst",
            about: {
                introduction: "I'm a passionate Full Stack Developer and Data Analyst with expertise in web development, data analysis, and machine learning. I love creating innovative solutions and turning data into actionable insights.",
                whatIDo: ["Building robust web applications", "Analyzing complex data sets", "Developing machine learning models", "Creating interactive user interfaces"],
                strengths: ["Strong problem-solving skills", "Excellent communication abilities", "Adaptable to new technologies", "Passion for continuous learning"],
                experience: "1+",
                education: "Bachelor of Technology (Computer Science & Engineering)",
                location: "Satara, Maharashtra, India"
            },
            email: "mujjamil007.dev@gmail.com",
            phone: "+918668205361",
            linkedin: "https://www.linkedin.com/in/mujjamil007-dev",
            github: "https://github.com/Mujjamil07",
            
            skills: {
                "Programming Languages": ["HTML", "CSS", "JavaScript", "TypeScript", "Java", "Python", "C++", ".Net", "R", "SQL"],
                "Frameworks & Libraries": ["React.js", "Bootstrap", "Spring Boot", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn"],
                "Databases & Tools": ["MongoDB", "MySQL", "Postman", "Git", "Power BI", "Tableau", "Linux"],
                "Specialized Skills": ["Real-time Applications", "Client Management Systems", "Digital Ledger Development", "Business Solutions", "Web3", "Blockchain"],
                "Soft Skills": ["Data Storytelling", "Report Building", "Business Communication", "Problem-solving"]
            },
            
            experience: [
                {
                    company: "VALTECH INNOVATION",
                    position: "FRONTEND DEVELOPER INTERN",
                    duration: "August 2023 - October 2023",
                    description: "Developed responsive and mobile-friendly web pages using HTML5, CSS3, & JavaScript. Created modern, user-friendly interfaces and ensured cross-browser compatibility.",
                    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-browser Compatibility"]
                },
                {
                    company: "CODEKUL PVT LTD",
                    position: "FULL STACK JAVA INTERN",
                    duration: "March 2023 - May 2023",
                    description: "Developed and maintained Java-based web applications using Spring Boot framework. Worked on both frontend and backend development, implementing RESTful APIs and database integration.",
                    technologies: ["Java", "Spring Boot", "RESTful APIs", "Database Integration", "Full Stack Development"]
                }
            ],
            
            projects: [
                {
                    name: "Digital Khatabook",
                    description: "A comprehensive digital ledger application for managing client transactions and accounts in real-time. Features include client management, transaction tracking, balance calculations, and professional invoicing. Built with modern React.js and deployed on Netlify.",
                    technologies: ["React.js", "JavaScript", "Real-time Data", "Client Management", "Netlify", "CSS3"],
                    link: "",
                    github: "https://github.com/Mujjamil07/Digital-Khatabook",
                    duration: "January 2024 - February 2024",
                    isLive: false
                },
                {
                    name: "Car Selling Website",
                    description: "A professional car selling and dealership website with modern UI/UX design. Features include car listings, search functionality, contact forms, and responsive design for mobile and desktop users.",
                    technologies: ["React.js", "JavaScript", "Responsive Design", "UI/UX", "Netlify"],
                    link: "https://newstarmotors.netlify.app/",
                    github: "https://github.com/Mujjamil07/Car-Selling-Website",
                    duration: "February 2024 - March 2024",
                    isLive: true
                },
                {
                    name: "CryptoPulse",
                    description: "A real-time cryptocurrency tracking application built with TypeScript and React. Features live price updates, interactive charts, market analysis, and portfolio tracking with external API integration.",
                    technologies: ["TypeScript", "React.js", "External APIs", "Chart.js", "Real-time Data"],
                    link: "",
                    github: "https://github.com/Mujjamil07/CryptoPulse",
                    duration: "December 2023 - February 2024",
                    isLive: false
                },
                {
                    name: "Chainfolio Resume NFT Mint",
                    description: "A decentralized web application for minting resumes as NFTs on the blockchain. Users can create, mint, and trade their professional resumes as unique digital assets using Web3 technology.",
                    technologies: ["React.js", "Blockchain", "Web3", "Solidity", "NFT", "Ethereum"],
                    link: "",
                    github: "https://github.com/Mujjamil07/Chainfolio-Resume-Nft-Mint-",
                    duration: "March 2025 - April 2025",
                    isLive: false
                },
                {
                    name: "Profile Management",
                    description: "A React.js web application for managing user profiles with location-based data. Features include user authentication, profile editing, location services, and real-time updates.",
                    technologies: ["React.js", "JavaScript", "Location APIs", "User Management", "Authentication"],
                    link: "",
                    github: "https://github.com/Mujjamil07/ProfileManagement",
                    duration: "March 2025 - March 2025",
                    isLive: false
                },
                {
                    name: "TODOLIST",
                    description: "A dynamic todo list application built with JavaScript. Features include task management, local storage, drag-and-drop functionality, and responsive design.",
                    technologies: ["JavaScript", "HTML5", "CSS3", "Local Storage", "DOM Manipulation"],
                    link: "",
                    github: "https://github.com/Mujjamil07/TODOLIST",
                    duration: "November 2023 - December 2023",
                    isLive: false
                },
                {
                    name: "CRUD Operations",
                    description: "A comprehensive CRUD (Create, Read, Update, Delete) application built with Java and Spring Boot. Demonstrates full-stack development with database operations.",
                    technologies: ["Java", "Spring Boot", "MySQL", "RESTful APIs", "Maven"],
                    link: "",
                    github: "https://github.com/Mujjamil07/Crud--Operations",
                    duration: "October 2023 - November 2023",
                    isLive: false
                },
                {
                    name: "Diabetes Prediction",
                    description: "Machine learning model for diabetes risk prediction using health and demographic features. Built with Python and Jupyter Notebook, featuring data analysis and predictive modeling.",
                    technologies: ["Python", "Machine Learning", "Jupyter Notebook", "scikit-learn", "Data Analysis"],
                    link: "",
                    github: "https://github.com/Mujjamil07/Diabetic-Prediction",
                    duration: "September 2023 - October 2023",
                    isLive: false
                },
                {
                    name: "Credit Risk Analyzer",
                    description: "Performed EDA and built classification model to predict credit default risk using Python & Power BI. Analyzed financial data to identify patterns and create predictive models.",
                    technologies: ["Python", "Power BI", "Machine Learning", "Data Analysis", "EDA"],
                    link: "",
                    github: "https://github.com/mujjamil-dev/credit-risk-analyzer",
                    duration: "October 2023 - November 2023",
                    isLive: false
                },
                {
                    name: "Hypertension Using ML",
                    description: "Built a machine learning model to identify individuals at risk of high blood pressure based on health metrics. Implemented feature engineering and model optimization for better accuracy.",
                    technologies: ["Python", "Machine Learning", "Health Analytics", "Predictive Modeling"],
                    link: "",
                    github: "https://github.com/mujjamil-dev/hypertension-ml",
                    duration: "August 2023 - September 2023",
                    isLive: false
                }
            ],
            
            education: [
                {
                    degree: "Bachelor of Technology (Computer Science & Engineering)",
                    university: "Dnyanshree Institute Of Engineering & Technology",
                    location: "Satara, Maharashtra, India",
                    duration: "June 2019 - August 2022",
                    score: "CGPA: 8.36"
                },
                {
                    degree: "Diploma - Computer Engineering",
                    university: "Satara Polytechnic Satara",
                    location: "Satara, Maharashtra, India",
                    duration: "June 2017 - August 2019",
                    score: "Percentage: 70.38"
                }
            ],
            
            certificates: [
                {
                    name: "Full Stack Java Development",
                    issuer: "Codekul Pvt Ltd",
                    description: "Developed and maintained web applications using Java for backend and HTML/CSS, JavaScript for frontend",
                    date: "March 2023"
                },
                {
                    name: "Associate Data Analyst",
                    issuer: "EXL Edubridge India",
                    description: "Collected, cleaned, and analyzed data to find trends and insights",
                    date: "March 2023"
                },
                {
                    name: "Deloitte Australia Technology Job Simulation",
                    issuer: "Forage",
                    description: "Completed a job simulation involving development and coding. Wrote a proposal for creating a dashboard",
                    date: "July 2025"
                }
            ]
        };
        
        // Initialize the chatbot
        this.init();
    }
    
    init() {
        // Focus on input when page loads
        this.messageInput.focus();
        
        // Add event listeners
        this.messageInput.addEventListener('input', () => {
            this.toggleSendButton();
        });
    }
    
    // Send message function
    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message || this.isTyping) return;
        
        // Add user message to chat
        this.addMessage(message, 'user');
        
        // Clear input
        this.messageInput.value = '';
        this.toggleSendButton();
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Generate bot response after a short delay
        setTimeout(() => {
            this.hideTypingIndicator();
            const botResponse = this.generateResponse(message);
            this.addMessage(botResponse, 'bot');
            // Auto-scroll after bot response
            this.scrollToBottom();
        }, 1000 + Math.random() * 1000);
    }
    
    // Add message to chat with enhanced formatting
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        
        const icon = document.createElement('i');
        icon.className = sender === 'bot' ? 'fas fa-user-tie' : 'fas fa-user';
        avatar.appendChild(icon);
        
        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Handle HTML content for rich responses
        if (typeof text === 'string') {
            const messageText = document.createElement('div');
            messageText.innerHTML = this.formatMarkdown(text);
            content.appendChild(messageText);
        } else {
            content.appendChild(text);
        }
        
        const time = document.createElement('span');
        time.className = 'message-time';
        time.textContent = this.getCurrentTime();
        content.appendChild(time);
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        this.chatMessages.appendChild(messageDiv);
        
        // Auto-scroll to bottom after adding message
        this.scrollToBottom();
        
        // Store in conversation history
        this.conversationHistory.push({ sender, text, timestamp: new Date() });
    }
    
    // Enhanced markdown formatting with creative elements
    formatMarkdown(text) {
        return text
            // Convert **bold** to <strong>
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Convert *italic* to <em>
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Convert line breaks to <br>
            .replace(/\n/g, '<br>')
            // Convert bullet points
            .replace(/• (.*?)(?=<br>|$)/g, '• $1')
            // Add emoji support
            .replace(/🚀/g, '<span class="emoji">🚀</span>')
            .replace(/💻/g, '<span class="emoji">💻</span>')
            .replace(/📊/g, '<span class="emoji">📊</span>')
            .replace(/🎯/g, '<span class="emoji">🎯</span>')
            .replace(/⚡/g, '<span class="emoji">⚡</span>');
    }
    
    // Create interactive project showcase
    createProjectShowcase(project) {
        const showcaseDiv = document.createElement('div');
        showcaseDiv.className = 'project-showcase';
        
        const header = document.createElement('div');
        header.className = 'project-header';
        header.innerHTML = `
            <h3>${project.name}</h3>
            <div class="project-badges">
                ${project.isLive ? '<span class="badge live">🌐 Live Demo</span>' : '<span class="badge github">📁 GitHub</span>'}
                <span class="badge tech">${project.technologies[0]}</span>
            </div>
        `;
        
        const description = document.createElement('p');
        description.textContent = project.description;
        
        const techStack = document.createElement('div');
        techStack.className = 'tech-stack';
        techStack.innerHTML = `
            <strong>Tech Stack:</strong>
            <div class="tech-tags">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        `;
        
        const actions = document.createElement('div');
        actions.className = 'project-actions';
        
        if (project.isLive) {
            actions.innerHTML = `
                <a href="${project.link}" target="_blank" class="btn-demo live-demo">
                    <i class="fas fa-external-link-alt"></i> View Live Demo
                </a>
                <span class="duration">${project.duration}</span>
            `;
        } else {
            actions.innerHTML = `
                <a href="${project.link}" target="_blank" class="btn-demo">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
                <span class="duration">${project.duration}</span>
            `;
        }
        
        showcaseDiv.appendChild(header);
        showcaseDiv.appendChild(description);
        showcaseDiv.appendChild(techStack);
        showcaseDiv.appendChild(actions);
        
        return showcaseDiv;
    }
    
    // Create skill progress visualization
    createSkillProgress(skills) {
        const progressDiv = document.createElement('div');
        progressDiv.className = 'skill-progress-container';
        
        for (const [category, skillList] of Object.entries(skills)) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category';
            
            const title = document.createElement('h4');
            title.textContent = category;
            categoryDiv.appendChild(title);
            
            const skillsGrid = document.createElement('div');
            skillsGrid.className = 'skills-grid';
            
            skillList.forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                
                const skillName = document.createElement('span');
                skillName.textContent = skill;
                
                const progressBar = document.createElement('div');
                progressBar.className = 'progress-bar';
                const progress = document.createElement('div');
                progress.className = 'progress-fill';
                progress.style.width = Math.floor(Math.random() * 30 + 70) + '%'; // 70-100%
                progressBar.appendChild(progress);
                
                skillItem.appendChild(skillName);
                skillItem.appendChild(progressBar);
                skillsGrid.appendChild(skillItem);
            });
            
            categoryDiv.appendChild(skillsGrid);
            progressDiv.appendChild(categoryDiv);
        }
        
        return progressDiv;
    }
    
    // Create achievement badges
    createAchievementBadges() {
        const badgesDiv = document.createElement('div');
        badgesDiv.className = 'achievement-badges';
        
        const badges = [
            { icon: '🏆', title: 'Full Stack Expert', desc: 'React.js + Java + ML' },
            { icon: '⚡', title: 'Real-time Developer', desc: 'Live Applications' },
            { icon: '📊', title: 'Data Analyst', desc: 'Python + Power BI' },
            { icon: '🎯', title: 'Problem Solver', desc: 'Business Solutions' },
            { icon: '🚀', title: 'Innovation Leader', desc: 'Blockchain + NFT' }
        ];
        
        badges.forEach(badge => {
            const badgeDiv = document.createElement('div');
            badgeDiv.className = 'badge-item';
            badgeDiv.innerHTML = `
                <div class="badge-icon">${badge.icon}</div>
                <div class="badge-info">
                    <strong>${badge.title}</strong>
                    <small>${badge.desc}</small>
                </div>
            `;
            badgesDiv.appendChild(badgeDiv);
        });
        
        return badgesDiv;
    }
    
    // Generate intelligent response
    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        
        // About me responses
        if (this.containsAny(message, ['about you', 'tell me about yourself', 'who are you', 'introduce yourself'])) {
            return this.getAboutMeResponse();
        }
        
        // Skills responses
        if (this.containsAny(message, ['skills', 'technologies', 'programming languages', 'what can you do'])) {
            return this.getSkillsResponse();
        }
        
        // Experience responses
        if (this.containsAny(message, ['experience', 'work history', 'jobs', 'employment', 'internship'])) {
            return this.getExperienceResponse();
        }
        
        // Projects responses
        if (this.containsAny(message, ['projects', 'portfolio', 'work', 'applications'])) {
            return this.getProjectsResponse();
        }
        
        // Education responses
        if (this.containsAny(message, ['education', 'degree', 'university', 'college', 'gpa', 'cgpa'])) {
            return this.getEducationResponse();
        }
        
        // Contact responses
        if (this.containsAny(message, ['contact', 'email', 'phone', 'linkedin', 'github'])) {
            return this.getContactResponse();
        }
        
        // Certificates responses
        if (this.containsAny(message, ['certificates', 'certifications', 'certificate'])) {
            return this.getCertificatesResponse();
        }
        
        // Resume PDF request
        if (this.containsAny(message, ['resume', 'pdf', 'download resume'])) {
            return "I can share my resume information through our chat! You can ask me about my skills, experience, projects, or education. For a downloadable version, please contact me directly at mujjamil007.dev@gmail.com";
        }
        
        // Greeting responses
        if (this.containsAny(message, ['hello', 'hi', 'hey', 'namaste'])) {
            const greetings = [
                `Hello! I'm ${this.resumeData.name}'s AI Assistant 🤖. I'm a ${this.resumeData.title}. How can I help you learn more about my professional background?`,
                `Hi there! I'm ${this.resumeData.name}'s AI. I'd be happy to tell you about my skills, experience, and projects. What interests you?`,
                `Hey! I'm ${this.resumeData.name}'s AI Assistant. Ask me anything about my professional journey, skills, or projects!`
            ];
            return this.getRandomResponse(greetings);
        }
        
        // Help responses
        if (this.containsAny(message, ['help', 'what can you tell me', 'options'])) {
            return "I can tell you about my professional background! Try asking about:\n• My skills and technologies\n• Work experience and internships\n• Projects I've built (both web apps and data analysis)\n• Education background\n• Certifications\n• Contact information\n\nOr use the quick action buttons above!";
        }
        
        // Default responses
        const defaultResponses = [
            "That's an interesting question! I'd be happy to tell you more about my professional background. What specific aspect would you like to know about?",
            "I'm here to share my professional experience! You can ask me about my skills, projects, work history, or education.",
            "Great question! I can provide details about my technical skills, work experience, projects, and more. What would you like to know?",
            "I'd love to share more about my professional journey! Feel free to ask about my skills, experience, or any specific projects."
        ];
        
        return this.getRandomResponse(defaultResponses);
    }
    
    // About me response with achievement badges
    getAboutMeResponse() {
        const about = this.resumeData.about;
        let response = `<strong>👋 About ${this.resumeData.name}</strong><br><br>`;
        
        response += `<p>${about.introduction}</p><br>`;
        
        response += `<strong>🎯 What I Do:</strong><br>`;
        response += `<ul>`;
        about.whatIDo.forEach(item => {
            response += `<li>${item}</li>`;
        });
        response += `</ul><br>`;
        
        response += `<strong>🌟 My Strengths:</strong><br>`;
        response += `<ul>`;
        about.strengths.forEach(strength => {
            response += `<li>${strength}</li>`;
        });
        response += `</ul><br>`;
        
        response += `<div class="achievement-badges">
            <div class="achievement-badge">
                <span class="emoji">💼</span>
                <span>${about.experience} Years Experience</span>
            </div>
            <div class="achievement-badge">
                <span class="emoji">🌍</span>
                <span>${about.location}</span>
            </div>
            <div class="achievement-badge">
                <span class="emoji">🚀</span>
                <span>Full Stack Developer</span>
            </div>
            <div class="achievement-badge">
                <span class="emoji">📊</span>
                <span>Data Analyst</span>
            </div>
        </div>`;
        
        return response;
    }
    
    // Skills response with progress bars
    getSkillsResponse() {
        const skills = this.resumeData.skills;
        let response = `<strong>🚀 My Technical Skills & Expertise</strong><br><br>`;
        
        response += `<div class="skills-grid">`;
        
        // Frontend Skills
        response += `<div class="skill-item">
            <h4>🎨 Frontend Development</h4>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: 90%"></div>
            </div>
            <p><strong>Expertise:</strong> ${skills['Programming Languages'].join(', ')}</p>
        </div>`;
        
        // Backend Skills
        response += `<div class="skill-item">
            <h4>⚙️ Backend Development</h4>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: 85%"></div>
            </div>
            <p><strong>Expertise:</strong> ${skills['Frameworks & Libraries'].join(', ')}</p>
        </div>`;
        
        // Database Skills
        response += `<div class="skill-item">
            <h4>🗄️ Database & Cloud</h4>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: 80%"></div>
            </div>
            <p><strong>Expertise:</strong> ${skills['Databases & Tools'].join(', ')}</p>
        </div>`;
        
        // Tools & Others
        response += `<div class="skill-item">
            <h4>🛠️ Tools & Others</h4>
            <div class="skill-bar-container">
                <div class="skill-bar-fill" style="width: 75%"></div>
            </div>
            <p><strong>Expertise:</strong> ${skills['Specialized Skills'].join(', ')}</p>
        </div>`;
        
        response += `</div>`;
        
        response += `<div class="achievement-badges">
            <div class="achievement-badge">
                <span class="emoji">🏆</span>
                <span>Full Stack Expert</span>
            </div>
            <div class="achievement-badge">
                <span class="emoji">🚀</span>
                <span>Problem Solver</span>
            </div>
            <div class="achievement-badge">
                <span class="emoji">💡</span>
                <span>Innovative Thinker</span>
            </div>
            <div class="achievement-badge">
                <span class="emoji">🎯</span>
                <span>Data Analyst</span>
            </div>
        </div>`;
        
        return response;
    }
    
    // Enhanced experience response
    getExperienceResponse() {
        const experience = this.resumeData.experience;
        let response = `<strong>💼 Professional Experience</strong><br><br>`;
        
        experience.forEach(exp => {
            response += `<div class="project-showcase">
                <div class="project-header">
                    <h4>${exp.position}</h4>
                    <div class="project-badges">
                        <span class="badge">${exp.duration}</span>
                        <span class="badge">Internship</span>
                    </div>
                </div>
                
                <p><strong>Company:</strong> ${exp.company}</p>
                <p><strong>Description:</strong> ${exp.description}</p>
                
                <div class="tech-stack">
                    <strong>Technologies Used:</strong>
                    <div class="tech-tags">
                        ${exp.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="tech-stack">
                    <strong>Key Achievements:</strong>
                    <ul>
                        <li>Developed responsive and mobile-friendly web pages using HTML5, CSS3, & JavaScript.</li>
                        <li>Created modern, user-friendly interfaces and ensured cross-browser compatibility.</li>
                    </ul>
                </div>
            </div>`;
        });
        
        return response;
    }
    
    // Projects response with interactive showcases
    getProjectsResponse() {
        const projects = this.resumeData.projects;
        let response = `<strong>🎯 My Featured Projects</strong><br><br>`;
        
        projects.forEach(project => {
            response += `<div class="project-showcase">
                <div class="project-header">
                    <h4>${project.name}</h4>
                    <div class="project-badges">
                        <span class="badge">${project.duration}</span>
                        ${project.isLive ? '<span class="badge">Live Demo</span>' : '<span class="badge">GitHub</span>'}
                    </div>
                </div>
                
                <p><strong>Description:</strong> ${project.description}</p>
                
                <div class="tech-stack">
                    <strong>Tech Stack:</strong>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-actions">
                    ${project.isLive && project.link ? `<a href="${project.link}" target="_blank" class="btn-demo">🚀 Live Demo</a>` : ''}
                    <a href="${project.github}" target="_blank" class="btn-github">📁 GitHub</a>
                </div>
            </div>`;
        });
        
        return response;
    }
    
    // Enhanced education response
    getEducationResponse() {
        const education = this.resumeData.education;
        let response = `<strong>📚 Educational Background</strong><br><br>`;
        
        education.forEach(edu => {
            response += `<div class="project-showcase">
                <div class="project-header">
                    <h4>${edu.degree}</h4>
                    <div class="project-badges">
                        <span class="badge">${edu.duration}</span>
                        <span class="badge">${edu.score}</span>
                    </div>
                </div>
                
                <p><strong>Institution:</strong> ${edu.university}</p>
                <p><strong>Location:</strong> ${edu.location}</p>
                
                <div class="achievement-badges">
                    <div class="achievement-badge">
                        <span class="emoji">🎓</span>
                        <span>${edu.degree}</span>
                    </div>
                    <div class="achievement-badge">
                        <span class="emoji">🏫</span>
                        <span>${edu.university}</span>
                    </div>
                    <div class="achievement-badge">
                        <span class="emoji">📊</span>
                        <span>${edu.score}</span>
                    </div>
                </div>
            </div>`;
        });
        
        return response;
    }
    
    // Enhanced contact response with resume download
    getContactResponse() {
        return `<strong>📞 Contact Information</strong><br><br>
        
        <div class="contact-info">
            <p><strong>📧 Email:</strong> ${this.resumeData.email}</p>
            <p><strong>📱 Phone:</strong> ${this.resumeData.phone}</p>
            <p><strong>💼 LinkedIn:</strong> <a href="${this.resumeData.linkedin}" target="_blank">${this.resumeData.linkedin}</a></p>
            <p><strong>🐙 GitHub:</strong> <a href="${this.resumeData.github}" target="_blank">${this.resumeData.github}</a></p>
        </div>
        
        <button class="resume-download-btn" onclick="downloadResume()">
            <i class="fas fa-download"></i>
            Download Resume (PDF)
        </button>
        
        <p><strong>🚀 Ready to discuss exciting opportunities!</strong></p>`;
    }
    
    // Enhanced certificates response
    getCertificatesResponse() {
        const certificates = this.resumeData.certificates;
        let response = `<strong>🏆 Certifications & Achievements</strong><br><br>`;
        
        certificates.forEach(cert => {
            response += `<div class="project-showcase">
                <div class="project-header">
                    <h4>${cert.name}</h4>
                    <div class="project-badges">
                        <span class="badge">${cert.issuer}</span>
                        <span class="badge">${cert.date}</span>
                    </div>
                </div>
                
                <p><strong>Description:</strong> ${cert.description}</p>
                
                ${cert.link ? `<div class="project-actions">
                    <a href="${cert.link}" target="_blank" class="btn-demo">🔗 View Certificate</a>
                </div>` : ''}
            </div>`;
        });
        
        return response;
    }
    
    // Utility functions
    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }
    
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getCurrentTime() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    showTypingIndicator() {
        this.isTyping = true;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator-container';
        typingDiv.id = 'typingIndicator';
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        const icon = document.createElement('i');
        icon.className = 'fas fa-user-tie';
        avatar.appendChild(icon);
        
        const typingContent = document.createElement('div');
        typingContent.className = 'typing-indicator';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'typing-dot';
            typingContent.appendChild(dot);
        }
        
        typingDiv.appendChild(avatar);
        typingDiv.appendChild(typingContent);
        
        this.chatMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }
    
    hideTypingIndicator() {
        this.isTyping = false;
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
        // Auto-scroll after typing indicator is hidden
        this.scrollToBottom();
    }
    
    scrollToBottom() {
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
    
    toggleSendButton() {
        const sendBtn = document.querySelector('.send-btn');
        if (this.messageInput.value.trim()) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    }
    
    clearChat() {
        // Keep only the initial bot message
        const initialMessage = this.chatMessages.querySelector('.bot-message');
        this.chatMessages.innerHTML = '';
        if (initialMessage) {
            this.chatMessages.appendChild(initialMessage);
        }
        
        // Clear conversation history
        this.conversationHistory = [];
        
        // Focus on input
        this.messageInput.focus();
    }

    // Handle user input
    handleUserInput() {
        const input = document.getElementById('messageInput');
        const message = input.value.trim();
        
        if (message) {
            this.addMessage(message, 'user');
            input.value = '';
            
            // Show typing indicator
            this.showTypingIndicator();
            
            // Generate and show bot response after a short delay
            setTimeout(() => {
                this.hideTypingIndicator();
                const response = this.generateResponse(message);
                this.addMessage(response, 'bot');
                // Auto-scroll after bot response
                this.scrollToBottom();
            }, 1000);
        }
    }
}

// Simple and reliable QR Code functionality
function showQRCode() {
    try {
        const modal = document.getElementById('qrModal');
        const qrContainer = document.getElementById('qrCode');
        
        if (!modal || !qrContainer) {
            console.error('QR modal elements not found');
            alert('QR code feature not available');
            return;
        }
        
        // Clear previous QR code
        qrContainer.innerHTML = '';
        
        // Get current URL
        const currentURL = window.location.href;
        
        if (!currentURL) {
            console.error('Current URL not available');
            alert('Cannot generate QR code: URL not found');
            return;
        }
        
        // Check if running locally and provide branded QR code
        if (currentURL.startsWith('file://')) {
            // Create a branded QR code with logo
            createBrandedQRCode('https://github.com/Mujjamil07', 'Local Development');
            return;
        }
        
        console.log('Generating QR code for URL:', currentURL);
        
        // Create branded QR code with logo
        createBrandedQRCode(currentURL, 'Live Chatbot');
        
        img.onerror = function() {
            console.error('Failed to load QR code from QR Server API');
            // Try alternative QR service
            const altQrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(currentURL)}&chco=667eea`;
            const altImg = document.createElement('img');
            altImg.src = altQrUrl;
            altImg.style.width = '200px';
            altImg.style.height = '200px';
            altImg.style.borderRadius = '10px';
            altImg.style.border = '2px solid #667eea';
            
            altImg.onload = function() {
                qrContainer.innerHTML = '';
                qrContainer.appendChild(altImg);
                console.log('QR Code generated successfully using Google Charts API (fallback)');
            };
            
            altImg.onerror = function() {
                console.error('Both QR services failed');
                // Final fallback: Create a simple text-based QR representation
                qrContainer.innerHTML = `
                    <div style="text-align: center; padding: 20px;">
                        <div style="font-size: 48px; color: #667eea; margin-bottom: 10px;">📱</div>
                        <h3 style="color: #667eea; margin-bottom: 10px;">QR Code</h3>
                        <p style="color: #666; font-size: 12px; word-break: break-all;">${currentURL}</p>
                        <p style="color: #999; font-size: 11px; margin-top: 10px;">Scan this URL with your phone's camera</p>
                        <p style="color: #999; font-size: 10px; margin-top: 5px;">Or visit: <a href="${currentURL}" target="_blank">${currentURL}</a></p>
                    </div>
                `;
                console.log('QR Code fallback displayed');
            };
        };
        
        // Add timeout for image loading
        setTimeout(() => {
            if (qrContainer.querySelector('img') === null && qrContainer.querySelector('div') && qrContainer.querySelector('div').innerHTML.includes('Generating')) {
                console.log('QR code loading timeout, trying fallback...');
                img.onerror();
            }
        }, 5000);
        
    } catch (error) {
        console.error('Error in showQRCode function:', error);
        alert('An error occurred while generating QR code. Please try again.');
    }
}

function closeQRModal() {
    const modal = document.getElementById('qrModal');
    modal.style.display = 'none';
}

function downloadQR() {
    try {
        const img = document.querySelector('#qrCode img');
        const qrContainer = document.getElementById('qrCode');
        
        if (img) {
            // Method 1: Direct image download
            try {
                const link = document.createElement('a');
                link.download = 'mujjamil-resume-chatbot-qr.png';
                link.href = img.src;
                link.click();
                console.log('QR code downloaded successfully (direct method)');
                return;
            } catch (directError) {
                console.log('Direct download failed, trying canvas method...');
            }
            
            // Method 2: Canvas method
            try {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                canvas.width = 200;
                canvas.height = 200;
                
                // Wait for image to load
                if (img.complete) {
                    ctx.drawImage(img, 0, 0, 200, 200);
                } else {
                    img.onload = function() {
                        ctx.drawImage(img, 0, 0, 200, 200);
                        downloadCanvas(canvas);
                    };
                    return;
                }
                
                downloadCanvas(canvas);
                
            } catch (canvasError) {
                console.error('Canvas method failed:', canvasError);
                throw canvasError;
            }
            
        } else {
            console.error('QR code image not found');
            alert('QR code not available for download. Please generate it first.');
        }
        
    } catch (error) {
        console.error('Error downloading QR code:', error);
        alert('Failed to download QR code. Please try again.');
    }
}

// Helper function to download canvas
function downloadCanvas(canvas) {
    try {
        const link = document.createElement('a');
        link.download = 'mujjamil-resume-chatbot-qr.png';
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('QR code downloaded successfully (canvas method)');
    } catch (error) {
        console.error('Canvas download failed:', error);
        alert('Download failed. Please try right-clicking the QR code and saving manually.');
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('qrModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Create branded QR code with logo and name
function createBrandedQRCode(url, type) {
    const qrContainer = document.getElementById('qrCode');
    const modal = document.getElementById('qrModal');
    
    if (!qrContainer || !modal) return;
    
    // Clear previous content and show loading
    qrContainer.innerHTML = `
        <div style="text-align: center; padding: 20px;">
            <div style="display: inline-block; padding: 15px; background: #f8f9fa; border-radius: 10px; border: 2px solid #667eea;">
                <i class="fas fa-spinner fa-spin" style="font-size: 24px; color: #667eea; margin-bottom: 10px;"></i>
                <p style="margin: 0; color: #667eea; font-weight: bold;">Generating Professional QR Code...</p>
            </div>
        </div>
    `;
    modal.style.display = 'block';
    
    // Use local QR generator immediately (no external API dependency)
    try {
        const qrGenerator = new SimpleQRGenerator();
        const qrDataURL = qrGenerator.createQRCodeDataURL(url);
        
        // Create canvas for branded QR code with local QR
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 280;
        canvas.height = 320;
        
        // Background
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, 280, 320);
        
        // Border
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 2;
        ctx.strokeRect(2, 2, 276, 316);
        
        // Title
        ctx.fillStyle = '#667eea';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Mujjamil Shaikh', 140, 25);
        
        // Subtitle
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.fillText('AI Resume Assistant', 140, 42);
        
        // Background highlight for text behind QR code
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillRect(10, 125, 260, 70);
        
        // Border around text area
        ctx.strokeStyle = '#667eea';
        ctx.lineWidth = 1;
        ctx.strokeRect(10, 125, 260, 70);
        
        // Type indicator (behind QR code)
        ctx.fillStyle = '#667eea';
        ctx.font = 'bold 15px Arial';
        ctx.fillText(type, 140, 140);
        
        // Contact info (behind QR code)
        ctx.fillStyle = '#333';
        ctx.font = 'bold 12px Arial';
        ctx.fillText('Full Stack Developer', 140, 155);
        ctx.fillText('& Data Analyst', 140, 170);
        ctx.fillText('Scan to chat with AI', 140, 185);
        
        // Draw local QR code
        const localQR = new Image();
        localQR.onload = function() {
            ctx.drawImage(localQR, 15, 55, 250, 250);
            
            // Logo/Icon in center of QR code
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(125, 155, 30, 30);
            ctx.fillStyle = '#667eea';
            ctx.font = '20px Arial';
            ctx.fillText('🤖', 130, 175);
            
            // Bottom text
            ctx.fillStyle = '#667eea';
            ctx.font = 'bold 11px Arial';
            ctx.fillText('Professional QR Code', 140, 280);
            
            ctx.fillStyle = '#999';
            ctx.font = '9px Arial';
            ctx.fillText('Ready for Resume', 140, 295);
            ctx.fillText('Download & Use', 140, 308);
            
            // Display the result
            const brandedImg = new Image();
            brandedImg.src = canvas.toDataURL();
            brandedImg.style.width = '280px';
            brandedImg.style.height = '320px';
            brandedImg.style.borderRadius = '12px';
            brandedImg.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.15)';
            brandedImg.style.margin = '0 auto';
            brandedImg.style.display = 'block';
            
            qrContainer.innerHTML = '';
            qrContainer.appendChild(brandedImg);
            
            // Add success message
            const successDiv = document.createElement('div');
            successDiv.innerHTML = `
                <div style="text-align: center; padding: 10px; background: #d4edda; border-radius: 8px; margin: 10px 0; border: 1px solid #c3e6cb;">
                    <p style="margin: 0; color: #155724; font-size: 12px;">
                        <i class="fas fa-check-circle"></i> QR Code generated successfully!
                    </p>
                </div>
            `;
            qrContainer.appendChild(successDiv);
        };
        localQR.src = qrDataURL;
        
    } catch (error) {
        console.error('QR generation failed:', error);
        qrContainer.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <div style="display: inline-block; padding: 15px; background: #f8d7da; border-radius: 10px; border: 2px solid #dc3545;">
                    <i class="fas fa-times-circle" style="font-size: 24px; color: #dc3545; margin-bottom: 10px;"></i>
                    <p style="margin: 0; color: #721c24; font-weight: bold;">QR Code generation failed</p>
                    <p style="margin: 5px 0 0 0; color: #721c24; font-size: 12px;">Please try again.</p>
                    <button onclick="showQRCode()" style="margin-top: 10px; padding: 8px 16px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                        <i class="fas fa-redo"></i> Try Again
                    </button>
                </div>
            </div>
        `;
}
    
    img.onerror = function() {
        clearTimeout(timeout);
        console.error('Failed to load QR code from API, using local generator');
        
        // Use local QR generator as fallback
        try {
            const qrGenerator = new SimpleQRGenerator();
            const qrDataURL = qrGenerator.createQRCodeDataURL(url);
            
            // Create canvas for branded QR code with local QR
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 280;
            canvas.height = 320;
            
            // Background
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, 280, 320);
            
            // Border
            ctx.strokeStyle = '#667eea';
            ctx.lineWidth = 2;
            ctx.strokeRect(2, 2, 276, 316);
            
            // Title
            ctx.fillStyle = '#667eea';
            ctx.font = 'bold 18px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Mujjamil Shaikh', 140, 25);
            
            // Subtitle
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.fillText('AI Resume Assistant', 140, 42);
            
            // Background highlight for text behind QR code
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(10, 125, 260, 70);
            
            // Border around text area
            ctx.strokeStyle = '#667eea';
            ctx.lineWidth = 1;
            ctx.strokeRect(10, 125, 260, 70);
            
            // Type indicator (behind QR code)
            ctx.fillStyle = '#667eea';
            ctx.font = 'bold 15px Arial';
            ctx.fillText(type, 140, 140);
            
            // Contact info (behind QR code)
            ctx.fillStyle = '#333';
            ctx.font = 'bold 12px Arial';
            ctx.fillText('Full Stack Developer', 140, 155);
            ctx.fillText('& Data Analyst', 140, 170);
            ctx.fillText('Scan to chat with AI', 140, 185);
            
            // Draw local QR code
            const localQR = new Image();
            localQR.onload = function() {
                ctx.drawImage(localQR, 15, 55, 250, 250);
                
                // Logo/Icon in center of QR code
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(125, 155, 30, 30);
                ctx.fillStyle = '#667eea';
                ctx.font = '20px Arial';
                ctx.fillText('🤖', 130, 175);
                
                // Bottom text
                ctx.fillStyle = '#667eea';
                ctx.font = 'bold 11px Arial';
                ctx.fillText('Professional QR Code', 140, 280);
                
                ctx.fillStyle = '#999';
                ctx.font = '9px Arial';
                ctx.fillText('Ready for Resume', 140, 295);
                ctx.fillText('Download & Use', 140, 308);
                
                // Display the result
                const brandedImg = new Image();
                brandedImg.src = canvas.toDataURL();
                brandedImg.style.width = '280px';
                brandedImg.style.height = '320px';
                brandedImg.style.borderRadius = '12px';
                brandedImg.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.15)';
                brandedImg.style.margin = '0 auto';
                brandedImg.style.display = 'block';
                
                qrContainer.innerHTML = '';
                qrContainer.appendChild(brandedImg);
                
                // Add success message
                const successDiv = document.createElement('div');
                successDiv.innerHTML = `
                    <div style="text-align: center; padding: 10px; background: #d4edda; border-radius: 8px; margin: 10px 0; border: 1px solid #c3e6cb;">
                        <p style="margin: 0; color: #155724; font-size: 12px;">
                            <i class="fas fa-check-circle"></i> QR Code generated successfully (Local)
                        </p>
                    </div>
                `;
                qrContainer.appendChild(successDiv);
            };
            localQR.src = qrDataURL;
            
        } catch (error) {
            console.error('Local QR generation also failed:', error);
            qrContainer.innerHTML = `
                <div style="text-align: center; padding: 20px;">
                    <div style="display: inline-block; padding: 15px; background: #f8d7da; border-radius: 10px; border: 2px solid #dc3545;">
                        <i class="fas fa-times-circle" style="font-size: 24px; color: #dc3545; margin-bottom: 10px;"></i>
                        <p style="margin: 0; color: #721c24; font-weight: bold;">QR Code generation failed</p>
                        <p style="margin: 5px 0 0 0; color: #721c24; font-size: 12px;">Please try again or check your internet connection.</p>
                        <button onclick="showQRCode()" style="margin-top: 10px; padding: 8px 16px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer;">
                            <i class="fas fa-redo"></i> Try Again
                        </button>
                    </div>
                </div>
            `;
        }
    };
}

// QR Code test function
function testQRCode() {
    console.log('Testing QR code functionality...');
    console.log('Current URL:', window.location.href);
    console.log('Modal element:', document.getElementById('qrModal'));
    console.log('QR container element:', document.getElementById('qrCode'));
}

// Initialize chatbot when page loads
let chatbot;

document.addEventListener('DOMContentLoaded', () => {
    chatbot = new ResumeChatbot();
    window.resumeChatbot = chatbot; // Make chatbot globally accessible
});

// Global functions for HTML onclick events
function sendMessage() {
    if (chatbot) {
        chatbot.sendMessage();
    }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function clearChat() {
    if (chatbot) {
        chatbot.clearChat();
    }
}

// Global function for quick action buttons
function askQuestion(question) {
    const chatbot = window.resumeChatbot;
    if (chatbot) {
        chatbot.addMessage(question, 'user');
        chatbot.showTypingIndicator();
        
        // Automatically close quick actions after clicking
        setTimeout(() => {
            toggleQuickActions();
        }, 300);
        
        setTimeout(() => {
            chatbot.hideTypingIndicator();
            const response = chatbot.generateResponse(question);
            chatbot.addMessage(response, 'bot');
            // Auto-scroll after quick action response
            chatbot.scrollToBottom();
        }, 1000);
    }
}

// Global function to toggle quick actions
function toggleQuickActions() {
    const quickActions = document.getElementById('quickActions');
    const fabBtn = document.getElementById('floatingActionBtn');
    const fabIcon = document.getElementById('fabIcon');
    
    if (quickActions.classList.contains('show')) {
        // Hide quick actions
        quickActions.classList.remove('show');
        fabBtn.classList.remove('active');
        fabIcon.className = 'fas fa-bolt';
    } else {
        // Show quick actions
        quickActions.classList.add('show');
        fabBtn.classList.add('active');
        fabIcon.className = 'fas fa-times';
    }
}

// Close quick actions when clicking outside
document.addEventListener('click', function(event) {
    const quickActions = document.getElementById('quickActions');
    const fabBtn = document.getElementById('floatingActionBtn');
    
    if (!quickActions.contains(event.target) && !fabBtn.contains(event.target)) {
        quickActions.classList.remove('show');
        fabBtn.classList.remove('active');
        document.getElementById('fabIcon').className = 'fas fa-bolt';
    }
});

// Global function to toggle theme (dark/light mode)
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('themeIcon');
    
    if (body.classList.contains('dark-mode')) {
        // Switch to light mode
        body.classList.remove('dark-mode');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    } else {
        // Switch to dark mode
        body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('themeIcon');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.className = 'fas fa-sun';
    }
});

// Resume download function
function downloadResume() {
    try {
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Set initial position and margins
        let yPosition = 15;
        const leftMargin = 20;
        const rightMargin = 190;
        const lineHeight = 5;
        
        // Helper function to add text with word wrap
        function addText(text, x, y, maxWidth = rightMargin - leftMargin) {
            const lines = doc.splitTextToSize(text, maxWidth);
            doc.text(lines, x, y);
            return lines.length * lineHeight;
        }
        
        // Helper function to add section header
        function addSectionHeader(title, y) {
            doc.setFontSize(12);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(30, 60, 114);
            doc.text(title, leftMargin, y);
            // Add underline
            doc.setDrawColor(30, 60, 114);
            doc.line(leftMargin, y + 1, leftMargin + 40, y + 1);
            doc.setFontSize(9);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(50, 50, 50);
            return y + 6;
        }
        
        // Helper function to add subsection
        function addSubsection(title, y) {
            doc.setFontSize(10);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(30, 60, 114);
            doc.text(title, leftMargin, y);
            doc.setFontSize(9);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(50, 50, 50);
            return y + 4;
        }
        
        // Header with centered alignment
        doc.setFontSize(20);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(30, 60, 114);
        doc.text("MUJJAMIL CHAND SHAIKH", 105, yPosition, { align: 'center' });
        yPosition += 6;
        
        doc.setFontSize(11);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(100, 100, 100);
        doc.text("Full Stack Developer & Data Analyst", 105, yPosition, { align: 'center' });
        yPosition += 10;
        
        // Contact Information - Two columns
        yPosition = addSectionHeader("CONTACT INFORMATION", yPosition);
        
        // Left column
        doc.text("Email:", leftMargin, yPosition);
        doc.text("mujjamil007.dev@gmail.com", leftMargin + 25, yPosition);
        yPosition += 4;
        
        doc.text("Phone:", leftMargin, yPosition);
        doc.text("+918668205361", leftMargin + 25, yPosition);
        yPosition += 4;
        
        doc.text("Location:", leftMargin, yPosition);
        doc.text("Satara, Maharashtra, India", leftMargin + 25, yPosition);
        yPosition += 6;
        
        // Right column
        doc.text("LinkedIn:", 110, yPosition - 14);
        doc.text("linkedin.com/in/mujjamil007-dev", 110 + 25, yPosition - 14);
        
        doc.text("GitHub:", 110, yPosition - 10);
        doc.text("github.com/Mujjamil07", 110 + 25, yPosition - 10);
        
        yPosition += 8;
        
        // Professional Summary
        yPosition = addSectionHeader("PROFESSIONAL SUMMARY", yPosition);
        const summary = "Passionate Full Stack Developer and Data Analyst with expertise in web development, data analysis, and machine learning. Experienced in building robust web applications, analyzing complex data sets, and developing machine learning models. Strong problem-solving skills and excellent communication abilities.";
        yPosition += addText(summary, leftMargin, yPosition) + 6;
        
        // Education
        yPosition = addSectionHeader("EDUCATION", yPosition);
        
        yPosition = addSubsection("Bachelor of Technology (Computer Science & Engineering)", yPosition);
        doc.text("Dnyanshree Institute Of Engineering & Technology", leftMargin + 5, yPosition);
        yPosition += 3;
        doc.text("June 2019 - August 2022 | CGPA: 8.36", leftMargin + 5, yPosition);
        yPosition += 6;
        
        yPosition = addSubsection("Diploma - Computer Engineering", yPosition);
        doc.text("Satara Polytechnic Satara", leftMargin + 5, yPosition);
        yPosition += 3;
        doc.text("June 2017 - August 2019 | Percentage: 70.38", leftMargin + 5, yPosition);
        yPosition += 8;
        
        // Experience
        yPosition = addSectionHeader("PROFESSIONAL EXPERIENCE", yPosition);
        
        yPosition = addSubsection("Frontend Developer Intern - VALTECH INNOVATION", yPosition);
        doc.text("August 2023 - October 2023", leftMargin + 5, yPosition);
        yPosition += 3;
        doc.text("• Developed responsive and mobile-friendly web pages using HTML5, CSS3, & JavaScript", leftMargin + 5, yPosition);
        yPosition += 3;
        doc.text("• Created modern, user-friendly interfaces and ensured cross-browser compatibility", leftMargin + 5, yPosition);
        yPosition += 6;
        
        yPosition = addSubsection("Full Stack Java Intern - CODEKUL PVT LTD", yPosition);
        doc.text("March 2023 - May 2023", leftMargin + 5, yPosition);
        yPosition += 3;
        doc.text("• Developed and maintained Java-based web applications using Spring Boot framework", leftMargin + 5, yPosition);
        yPosition += 3;
        doc.text("• Worked on both frontend and backend development, implementing RESTful APIs and database integration", leftMargin + 5, yPosition);
        yPosition += 8;
        
        // Technical Skills
        yPosition = addSectionHeader("TECHNICAL SKILLS", yPosition);
        
        // Skills in organized format
        const skills = [
            { category: "Programming Languages", skills: "HTML, CSS, JavaScript, TypeScript, Java, Python, C++, .Net, R, SQL" },
            { category: "Frameworks & Libraries", skills: "React.js, Bootstrap, Spring Boot, Pandas, NumPy, Matplotlib, Seaborn, scikit-learn" },
            { category: "Databases & Tools", skills: "MongoDB, MySQL, Postman, Git, Power BI, Tableau, Linux" },
            { category: "Specialized Skills", skills: "Real-time Applications, Client Management Systems, Digital Ledger Development, Business Solutions, Web3, Blockchain" },
            { category: "Soft Skills", skills: "Data Storytelling, Report Building, Business Communication, Problem-solving" }
        ];
        
        skills.forEach(skill => {
            yPosition = addSubsection(skill.category, yPosition);
            doc.text(skill.skills, leftMargin + 5, yPosition);
            yPosition += 4;
        });
        
        yPosition += 6;
        
        // Projects - Key ones only
        yPosition = addSectionHeader("KEY PROJECTS", yPosition);
        
        const projects = [
            {
                name: "Digital Khatabook",
                description: "A comprehensive digital ledger application for managing client transactions and accounts in real-time.",
                tech: "React.js, JavaScript, Real-time Data, Client Management, Netlify, CSS3",
                link: "github.com/Mujjamil07/Digital-Khatabook"
            },
            {
                name: "Car Selling Website",
                description: "A professional car selling and dealership website with modern UI/UX design.",
                tech: "React.js, JavaScript, Responsive Design, UI/UX, Netlify",
                link: "newstarmotors.netlify.app | github.com/Mujjamil07/Car-Selling-Website"
            },
            {
                name: "CryptoPulse",
                description: "A real-time cryptocurrency tracking application built with TypeScript and React.",
                tech: "TypeScript, React.js, External APIs, Chart.js, Real-time Data",
                link: "github.com/Mujjamil07/CryptoPulse"
            },
            {
                name: "Diabetes Prediction",
                description: "Machine learning model for diabetes risk prediction using health and demographic features.",
                tech: "Python, Machine Learning, Jupyter Notebook, scikit-learn, Data Analysis",
                link: "github.com/Mujjamil07/Diabetic-Prediction"
            }
        ];
        
        projects.forEach(project => {
            yPosition = addSubsection(project.name, yPosition);
            doc.text(project.description, leftMargin + 5, yPosition);
            yPosition += 3;
            doc.text("Technologies: " + project.tech, leftMargin + 5, yPosition);
            yPosition += 3;
            doc.text("Link: " + project.link, leftMargin + 5, yPosition);
            yPosition += 4;
        });
        
        // Languages
        yPosition = addSectionHeader("LANGUAGES", yPosition);
        doc.text("English (Professional), Hindi (Native), Marathi (Native)", leftMargin, yPosition);
        yPosition += 6;
        
        // Footer
        doc.setFontSize(7);
        doc.setTextColor(100, 100, 100);
        doc.text("Generated by Mujjamil's AI Resume Assistant", 105, 275, { align: 'center' });
        doc.text(`Last Updated: ${new Date().toLocaleDateString()}`, 105, 280, { align: 'center' });
        
        // Save the PDF
        doc.save("Mujjamil_Shaikh_Resume.pdf");
        
        // Show success message
        const chatbot = window.chatbot;
        if (chatbot) {
            chatbot.addMessage('📄 Resume downloaded successfully as PDF! Check your downloads folder for "Mujjamil_Shaikh_Resume.pdf"', 'bot');
        }
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        // Fallback to text download if PDF fails
        const chatbot = window.chatbot;
        if (chatbot) {
            chatbot.addMessage('❌ PDF generation failed. Please try again or contact support.', 'bot');
        }
    }
}

// Enhanced contact response with resume download
function getContactResponse() {
    return `<strong>📞 Contact Information</strong><br><br>
    
    <div class="contact-info">
        <p><strong>📧 Email:</strong> ${this.resumeData.email}</p>
        <p><strong>📱 Phone:</strong> ${this.resumeData.phone}</p>
        <p><strong>💼 LinkedIn:</strong> <a href="${this.resumeData.linkedin}" target="_blank">${this.resumeData.linkedin}</a></p>
        <p><strong>🐙 GitHub:</strong> <a href="${this.resumeData.github}" target="_blank">${this.resumeData.github}</a></p>
    </div>
    
    <button class="resume-download-btn" onclick="downloadResume()">
        <i class="fas fa-download"></i>
        Download Resume (PDF)
    </button>
    
    <p><strong>🚀 Ready to discuss exciting opportunities!</strong></p>`;
}
