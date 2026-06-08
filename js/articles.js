/* ========================================
   ARTICLES PAGE JAVASCRIPT
   ========================================
   Handles article filtering and display
   ======================================== */

class ArticlesPage {
    constructor() {
        this.articles = [
            {
                id: 1,
                title: "The Renaissance Understanding of Celestial Bodies: From Geocentrism to Heliocentrism",
                category: "astronomy",
                date: "June 8, 2026",
                excerpt: "Journey through the pivotal moment in human history when our perspective of the cosmos fundamentally shifted. Discover how artists and scientists collaborated to reshape our understanding of our place in the universe.",
                author: "Dr. Aurora Clarke",
                image: "placeholder"
            },
            {
                id: 2,
                title: "Medieval Astronomy: The Bridge Between Ancient and Modern Science",
                category: "history",
                date: "June 5, 2026",
                excerpt: "Explore how medieval scholars preserved and built upon ancient astronomical knowledge, laying the groundwork for the scientific revolution.",
                author: "Prof. James Mitchell",
                image: "placeholder"
            },
            {
                id: 3,
                title: "Depicting the Divine: Celestial Imagery in Renaissance Art",
                category: "art-history",
                date: "June 2, 2026",
                excerpt: "From Botticelli to Raphael, discover how Renaissance artists incorporated astronomical knowledge into their masterpieces.",
                author: "Dr. Elena Rossi",
                image: "placeholder"
            },
            {
                id: 4,
                title: "Ancient Star Maps: How Civilizations Recorded the Cosmos",
                category: "history",
                date: "May 28, 2026",
                excerpt: "Examine the sophisticated astronomical knowledge preserved by ancient civilizations through their star maps and celestial monuments.",
                author: "Prof. Michael Zhang",
                image: "placeholder"
            },
            {
                id: 5,
                title: "The Physics of Black Holes: Understanding the Universe's Greatest Mysteries",
                category: "astronomy",
                date: "May 25, 2026",
                excerpt: "A deep dive into the fascinating physics of black holes and their role in our understanding of space, time, and gravity.",
                author: "Dr. Sarah Okonkwo",
                image: "placeholder"
            },
            {
                id: 6,
                title: "Cosmic Representations in Van Gogh's 'The Starry Night'",
                category: "art-history",
                date: "May 20, 2026",
                excerpt: "Analyze Van Gogh's iconic masterpiece and how it reflects both scientific understanding and personal artistic vision.",
                author: "Prof. Lisa Hartmann",
                image: "placeholder"
            }
        ];
        
        this.currentFilter = 'all';
        this.initFilterButtons();
        this.displayArticles('all');
    }
    
    initFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');
                this.displayArticles(filter);
            });
        });
    }
    
    displayArticles(filter) {
        const grid = document.getElementById('articlesGrid');
        grid.innerHTML = '';
        
        let filtered = this.articles;
        if (filter !== 'all') {
            filtered = this.articles.filter(article => article.category === filter);
        }
        
        if (filtered.length === 0) {
            grid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <h3>No articles found</h3>
                    <p>Try selecting a different category</p>
                </div>
            `;
            return;
        }
        
        filtered.forEach(article => {
            const card = document.createElement('div');
            card.className = 'article-card';
            card.innerHTML = `
                <div class="article-image">
                    <img src="https://via.placeholder.com/400x250?text=${encodeURIComponent(article.title.substring(0, 20))}" alt="${article.title}">
                </div>
                <div class="article-content">
                    <div class="article-meta">
                        <span class="category-badge ${article.category}">${article.category.replace('-', ' ').toUpperCase()}</span>
                        <span class="article-date">${article.date}</span>
                    </div>
                    <h3 class="article-title">${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <div class="article-footer">
                        <a href="#" class="read-more">Read More →</a>
                        <span class="article-author">by ${article.author}</span>
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
        new ArticlesPage();
    });
} else {
    new ArticlesPage();
}
