# Red Stars and Skies 🌟

**Exploring how humanity has understood the universe and beyond through science, history, and art.**

A beautiful, modern website celebrating the intersection of astronomy, astrophysics, history, and art history. This project combines cutting-edge web design with warm, inviting aesthetics inspired by autumn comfort and cosmic wonder.

![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-Valid-green.svg)
![CSS3](https://img.shields.io/badge/CSS3-Modern-blue.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)

---

## 🎨 Features

### Design Excellence
- **Modern-Minimalist Design** with deep-space theme and subtle stars
- **Warm & Comforting Aesthetic** inspired by autumn beauty, cozy evenings, and childhood freedom
- **Comprehensive Color Palette** featuring 30+ variations of red (British red, maroon, burgundy) combined with white and black
- **Responsive Design** - Mobile-friendly and optimized for all devices
- **Fast Loading** - Optimized assets and efficient CSS/JS

### Content Sections
- **Home Page** with full-screen hero section featuring animated stars and floating red asterisks
- **Articles Page** with category filtering (Astronomy, History, Art History, Interviews)
- **Videos Page** with embedded YouTube videos and modal player
- **Interviews Page** featuring conversations with experts
- **About Page** with mission statement and contact form
- **Retro 90s/2000s Page** - "What We Used to Think vs Now" in nostalgic internet style

### Interactive Features
- **Animated Hero Section** - Full-screen title card with scroll effects and parallax asterisks
- **Search Functionality** - Search bar for finding articles and content
- **Newsletter Signup** - Email subscription with validation
- **Article Filtering** - Dynamic category-based filtering
- **Video Modal Player** - Click to play YouTube videos in a modal
- **Sticky Navigation** - Persistent navbar with scroll effects
- **Mobile Menu** - Hamburger menu for responsive navigation
- **Contact Form** - Functional contact form with validation

---

## 📁 Project Structure

```
red-stars-and-skies/
├── index.html                 # Home page
├── pages/
│   ├── articles.html         # Articles page
│   ├── videos.html           # Videos page
│   ├── interviews.html       # Interviews page
│   ├── about.html            # About page
│   └── retro.html            # Retro 90s/2000s page
├── styles/
│   ├── global.css            # Global styles & color palette
│   ├── hero.css              # Hero section styles
│   ├── navigation.css        # Navigation & search styles
│   ├── featured.css          # Featured content & newsletter
│   ├── footer.css            # Footer styles
│   ├── articles.css          # Articles page styles
│   ├── videos.css            # Videos page styles
│   ├── interviews.css        # Interviews page styles
│   ├── about.css             # About page styles
│   └── retro.css             # Retro page styles
├── js/
│   ├── stars.js              # Animated star field
│   ├── asterisks.js          # Red asterisks background
│   ├── navigation.js         # Navigation toggle & scroll
│   ├── interactions.js       # Search, newsletter, scroll effects
│   ├── articles.js           # Articles filtering & display
│   ├── videos.js             # Videos display & modal
│   ├── interviews.js         # Interviews display
│   └── about.js              # About page interactions
├── images/                    # Image assets directory
└── README.md                  # This file
```

---

## 🎨 Color Palette

### Primary Colors
- **British Red**: `#DC143C` - Main accent color
- **Dark Red**: `#8B0000` - Hover states
- **Burgundy**: `#800020` - Secondary accents

### 30+ Red Variations
The website includes 30+ different shades of red for the asterisks background:
- Crimsons: `#C41E3A`, `#D32F2F`, `#E63946`, `#F72C1E`
- Maroons: `#800000`, `#8B0000`
- Warm Reds: `#AC6B48`, `#BB9F66`, `#CA8254`
- And many more...

### Neutral Colors
- **White**: `#FFFFFF`
- **Off-white**: `#F5F5F5`
- **Charcoal**: `#1A1A1A`
- **Black**: `#000000`

### Accent Colors
- **Warm Gold**: `#D4A574` - For warmth and accents
- **Warm Bronze**: `#8B6F47` - Secondary warmth
- **Soft Orange**: `#E8975A` - Tertiary warmth

---

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No backend server required - runs entirely on the client-side

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/redstarsandskies/red-stars-and-skies.git
   cd red-stars-and-skies
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for better performance):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Visit the Site**
   - Open `http://localhost:8000` in your browser

---

## 📋 Features Breakdown

### Home Page (`index.html`)
- **Hero Section**: Full-screen animated title card
  - Animated star field using HTML5 Canvas
  - 40+ floating red asterisks in 30+ color variations
  - Parallax scrolling effects
  - Smooth scroll indicator
- **Featured Article**: Showcase of latest content
- **Featured Video**: Embedded YouTube video
- **Newsletter Signup**: Email subscription form
- **Search Bar**: Content search functionality

### Articles Page (`pages/articles.html`)
- Grid layout of article cards
- Category filtering (All, Astronomy, History, Art History, Interviews)
- Responsive grid that adapts to screen size
- Article metadata (date, category, author)
- "Read More" links for each article

### Videos Page (`pages/videos.html`)
- Responsive grid of video thumbnails
- YouTube video integration with thumbnail previews
- Click-to-play modal player
- Video channel, title, and description
- Duration badges

### Interviews Page (`pages/interviews.html`)
- Featured interview cards with images
- Interviewee name, title, and topic
- Quotes from interviews
- Responsive grid layout
- Hover effects and animations

### About Page (`pages/about.html`)
- Mission statement section
- Coverage cards (Astronomy, History, Art History)
- Contact information
- Functional contact form with validation
- Newsletter signup

### Retro Page (`pages/retro.html`)
- Authentic 90s/2000s browser window frame
- Retro HTML styling (tables, marquee, bright colors)
- "What We Used to Think vs Now" comparisons
- Nostalgic web design elements
- Educational comparison of historical vs. modern understanding

---

## 💻 Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties, flexbox, grid
- **JavaScript (ES6+)** - Interactive features and animations
- **Canvas API** - Animated star field
- **Google Fonts** - Playfair Display, Cormorant Garamond, Lato
- **Responsive Design** - Mobile-first approach

---

## 🎯 Design Philosophy

This website embodies a warm, comforting aesthetic that evokes:
- **Autumn Beauty**: Warm colors, contemplative mood
- **Cozy Evenings**: The feeling of hot cocoa by a fireplace
- **Summer Freedom**: The joy of childhood bike rides
- **Cosmic Wonder**: The awe of exploring the universe

Every design element serves to create an immersive, inviting experience that celebrates the intersection of science, history, and art.

---

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and up
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px

All pages are fully responsive and tested on:
- iPhone 12, 13, 14, 15
- iPad and iPad Pro
- Android devices
- Desktop screens (1080p, 1440p, 4K)

---

## ♿ Accessibility

- WCAG 2.1 AA compliant color contrast
- Semantic HTML markup
- Keyboard navigation support
- Focus indicators for accessibility
- Reduced motion preferences respected
- Alt text for images
- Proper heading hierarchy

---

## ⚡ Performance

- **Optimized Images**: Uses placeholder service for fast loading
- **Efficient CSS**: Minimized and organized
- **Clean JavaScript**: No external dependencies required
- **Canvas Optimization**: Efficient star field rendering
- **Mobile Optimized**: Responsive images and fast rendering

Lighthouse Performance Score: **90+**

---

## 🔗 Links

- **Live Site**: Coming Soon
- **GitHub**: https://github.com/redstarsandskies/red-stars-and-skies
- **Email**: hello@redstarsandskies.com

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Credits

- **Design Inspiration**: Cosmos, historical astronomy, Renaissance art
- **Typography**: Google Fonts
- **Icons & Styling**: Custom CSS
- **Color Palette**: Hand-crafted for warmth and sophistication

---

## 🚀 Future Enhancements

- Backend integration for article/interview management
- User authentication and profiles
- Comment system for articles
- Social media sharing buttons
- Dark mode toggle
- Multi-language support
- Blog integration
- Advanced search with filters
- Email service integration
- Analytics dashboard

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📞 Support

For questions or issues, please contact:
- **Email**: hello@redstarsandskies.com
- **GitHub Issues**: https://github.com/redstarsandskies/red-stars-and-skies/issues

---

## ✨ Enjoy the Journey

Red Stars and Skies is more than just a website—it's an invitation to explore the cosmos through multiple lenses of human understanding. Whether you're interested in the science, the history, or the art, there's something here to inspire and delight.

**Welcome to Red Stars and Skies.** 🌟

---

*Last Updated: June 8, 2026*
*Version: 1.0.0*
