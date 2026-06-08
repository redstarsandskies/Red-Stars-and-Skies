/* ========================================
   VIDEOS PAGE JAVASCRIPT
   ========================================
   Handles video display and interactions
   ======================================== */

class VideosPage {
    constructor() {
        this.videos = [
            {
                id: 1,
                title: "The Beauty of the Cosmos: An Artistic Journey Through Space",
                channel: "Cosmic Chronicles",
                duration: "18:45",
                description: "A stunning visual exploration of how art and astronomy intersect, featuring interviews with contemporary astronomers and visual artists.",
                embedId: "dQw4w9WgXcQ"
            },
            {
                id: 2,
                title: "From Copernicus to Einstein: Revolutions in Thought",
                channel: "History of Science",
                duration: "22:30",
                description: "Explore the pivotal moments in scientific history that changed our understanding of the universe forever.",
                embedId: "dQw4w9WgXcQ"
            },
            {
                id: 3,
                title: "Ancient Astronomers: The Sky's First Observers",
                channel: "Ancient Voices",
                duration: "15:20",
                description: "Discover how ancient civilizations mapped the stars and built monuments aligned with celestial events.",
                embedId: "dQw4w9WgXcQ"
            },
            {
                id: 4,
                title: "Modern Astrophysics: Exploring the Extremes",
                channel: "Space Frontiers",
                duration: "25:15",
                description: "Journey to black holes, neutron stars, and the edge of our observable universe with leading astrophysicists.",
                embedId: "dQw4w9WgXcQ"
            },
            {
                id: 5,
                title: "The Renaissance Sky: Art Meets Science",
                channel: "Art History Network",
                duration: "19:40",
                description: "How Renaissance artists depicted the cosmos and what their artwork reveals about the science of their time.",
                embedId: "dQw4w9WgXcQ"
            },
            {
                id: 6,
                title: "Our Place in the Universe: A Philosophical Journey",
                channel: "Cosmic Chronicles",
                duration: "20:55",
                description: "A contemplative exploration of humanity's quest to understand its position in the vast cosmos.",
                embedId: "dQw4w9WgXcQ"
            }
        ];
        
        this.displayVideos();
    }
    
    displayVideos() {
        const grid = document.getElementById('videosGrid');
        grid.innerHTML = '';
        
        this.videos.forEach(video => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
                <div class="video-thumbnail">
                    <img src="https://img.youtube.com/vi/${video.embedId}/maxresdefault.jpg" alt="${video.title}">
                    <div class="play-button">▶</div>
                </div>
                <div class="video-content">
                    <p class="video-channel">${video.channel}</p>
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                    <div class="video-meta">
                        <span class="video-duration">${video.duration}</span>
                        <a href="#" class="watch-now">Watch Now →</a>
                    </div>
                </div>
            `;
            
            // Add click handler for play button
            card.querySelector('.play-button').addEventListener('click', (e) => {
                e.preventDefault();
                this.openVideoModal(video);
            });
            
            grid.appendChild(card);
        });
    }
    
    openVideoModal(video) {
        // Create modal
        const modal = document.createElement('div');
        modal.className = 'video-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2000;
            padding: 20px;
        `;
        
        modal.innerHTML = `
            <div style="width: 100%; max-width: 900px; position: relative;">
                <button class="close-modal" style="position: absolute; top: -40px; right: 0; background: none; border: none; color: white; font-size: 2em; cursor: pointer; z-index: 2001;">&times;</button>
                <div style="position: relative; width: 100%; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px;">
                    <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 8px;" 
                        src="https://www.youtube.com/embed/${video.embedId}" 
                        title="${video.title}" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen></iframe>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Close modal handlers
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
        
        // Restore scroll on close
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => {
            document.body.style.overflow = '';
        });
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new VideosPage();
    });
} else {
    new VideosPage();
}
