/* ========================================
   INTERVIEWS PAGE JAVASCRIPT
   ========================================
   Handles interview display and interactions
   ======================================== */

class InterviewsPage {
    constructor() {
        this.interviews = [
            {
                id: 1,
                name: "Dr. Aurora Clarke",
                title: "Astrophysicist & Researcher",
                date: "June 8, 2026",
                topic: "Astronomy",
                excerpt: "\"The universe never ceases to amaze us. Every new discovery reminds us how much we still have to learn about the cosmos.\"",
                image: "placeholder"
            },
            {
                id: 2,
                name: "Prof. James Mitchell",
                title: "Medieval History Scholar",
                date: "June 5, 2026",
                topic: "History",
                excerpt: "\"Medieval astronomers were far more sophisticated than we often give them credit for. Their observations laid crucial groundwork for modern science.\"",
                image: "placeholder"
            },
            {
                id: 3,
                name: "Dr. Elena Rossi",
                title: "Art History Specialist",
                date: "June 1, 2026",
                topic: "Art History",
                excerpt: "\"The intersection of art and science in the Renaissance represents humanity's unique attempt to comprehend beauty and truth simultaneously.\"",
                image: "placeholder"
            },
            {
                id: 4,
                name: "Prof. Michael Zhang",
                title: "Archaeoastronomy Expert",
                date: "May 28, 2026",
                topic: "History",
                excerpt: "\"Ancient peoples understood the sky in ways we're only beginning to appreciate. Their knowledge is encoded in monuments across the globe.\"",
                image: "placeholder"
            },
            {
                id: 5,
                name: "Dr. Sarah Okonkwo",
                title: "Theoretical Physicist",
                date: "May 22, 2026",
                topic: "Astronomy",
                excerpt: "\"Black holes represent the universe's most extreme physics laboratory. Understanding them brings us closer to a unified theory of everything.\"",
                image: "placeholder"
            },
            {
                id: 6,
                name: "Prof. Lisa Hartmann",
                title: "Contemporary Art Curator",
                date: "May 18, 2026",
                topic: "Art History",
                excerpt: "\"Modern artists continue to be inspired by the cosmos, creating works that bridge the gap between scientific understanding and emotional expression.\"",
                image: "placeholder"
            }
        ];
        
        this.displayInterviews();
    }
    
    displayInterviews() {
        const grid = document.getElementById('interviewsGrid');
        grid.innerHTML = '';
        
        this.interviews.forEach(interview => {
            const card = document.createElement('div');
            card.className = 'interview-card';
            card.innerHTML = `
                <div class="interview-image">
                    <img src="https://via.placeholder.com/400x280?text=${encodeURIComponent(interview.name)}" alt="${interview.name}">
                </div>
                <div class="interview-content">
                    <p class="interview-date">${interview.date}</p>
                    <h3 class="interviewee-name">${interview.name}</h3>
                    <p class="interviewee-title">${interview.title}</p>
                    <blockquote class="interview-excerpt">${interview.excerpt}</blockquote>
                    <div class="interview-footer">
                        <a href="#" class="read-interview">Read Full Interview →</a>
                        <span class="interview-topic">${interview.topic.toUpperCase()}</span>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new InterviewsPage();
    });
} else {
    new InterviewsPage();
}
