# GCT Bhakkar - Government College of Technology Website

![GCT Bhakkar](./assets/favicon/favicon.png)

A modern, responsive website for Government College of Technology, Bhakkar. Built with a modular architecture featuring reusable components and a consistent design system.

## 🌟 Features

- **Modern Dark Theme** - Professional UI with smooth animations and glassmorphism effects
- **Responsive Design** - Mobile-first approach that works seamlessly on all devices
- **Dynamic Components** - Reusable navbar and footer rendered via JavaScript
- **CSS Design System** - Consistent theming with CSS variables and design tokens
- **Scroll Animations** - Engaging entrance animations on scroll
- **Counter Animations** - Animated statistics when elements come into view
- **Hero Carousel** - Auto-sliding hero section with multiple slides
- **Department Pages** - Dedicated pages for each technology program

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic markup |
| CSS3 | Custom properties, Flexbox, Grid, Animations |
| JavaScript | Dynamic components and interactivity |
| Bootstrap 5 | Grid system and utility classes |
| Font Awesome | Iconography |
| Bootstrap Icons | Additional icons |

## 📁 Project Structure

```
gct-bhakkar-website-design/
├── index.html                     # Home page
├── pages/
│   ├── about.html                 # About Us
│   ├── programs.html              # All Programs overview
│   ├── admissions.html            # Admissions & Fee Structure
│   ├── contact.html               # Contact Page with form
│   ├── campus-life.html           # Campus Life & Facilities
│   └── departments/               # Individual department pages
│       ├── cit.html               # Computer Information Technology
│       ├── electrical.html        # Electrical Technology
│       ├── mechanical.html        # Mechanical Technology
│       ├── civil.html             # Civil Technology
│       └── electronics.html       # Electronics Technology
├── assets/
│   ├── css/
│   │   ├── base/                  # Design tokens & foundation
│   │   │   ├── variables.css      # CSS variables (colors, spacing, etc.)
│   │   │   ├── reset.css          # CSS reset
│   │   │   └── typography.css     # Font styles
│   │   ├── components/            # UI component styles
│   │   │   ├── buttons.css
│   │   │   ├── cards.css
│   │   │   ├── navbar.css
│   │   │   ├── footer.css
│   │   │   └── hero.css
│   │   ├── layouts/               # Section layouts
│   │   │   └── sections.css
│   │   ├── vendor/                # Third-party CSS
│   │   │   └── bootstrap.min.css
│   │   ├── main.css               # Main entry point
│   │   └── styles.css             # Legacy/additional styles
│   ├── js/
│   │   ├── components/            # Dynamic components
│   │   │   ├── navbar.js          # Header component
│   │   │   └── footer.js          # Footer component
│   │   ├── utils/                 # Utility scripts
│   │   │   ├── animations.js      # Scroll animations
│   │   │   └── helpers.js         # Helper functions
│   │   ├── data/                  # Data store
│   │   │   └── site-data.js       # Centralized site data
│   │   ├── vendor/                # Third-party JS
│   │   │   └── bootstrap.bundle.min.js
│   │   └── main.js                # Main entry point
│   ├── images/                    # Image assets
│   └── favicon/                   # Favicon files
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Edge, Safari)
- Node.js (optional, for development server)

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/Abdul-Rasheed-Talal/gct-bhakkar-website-design.git
cd gct-bhakkar-website-design
```

2. **Start a development server:**
```bash
npx http-server -p 5500
```

3. **Open in browser:**
```
http://127.0.0.1:5500
```

Alternatively, you can open `index.html` directly in your browser.

## 📄 Pages Overview

| Page | URL | Description |
|------|-----|-------------|
| Home | `/index.html` | Hero carousel, departments grid, statistics, campus highlights |
| About | `/pages/about.html` | Mission, vision, values, facilities |
| Programs | `/pages/programs.html` | All departments with comparison table |
| Admissions | `/pages/admissions.html` | Process, requirements, fee structure, FAQs |
| Contact | `/pages/contact.html` | Contact form, map, department contacts |
| Campus Life | `/pages/campus-life.html` | Facilities, activities, student life |
| CIT | `/pages/departments/cit.html` | Computer Technology program |
| Electrical | `/pages/departments/electrical.html` | Electrical Technology program |
| Mechanical | `/pages/departments/mechanical.html` | Mechanical Technology program |
| Civil | `/pages/departments/civil.html` | Civil Technology program |
| Electronics | `/pages/departments/electronics.html` | Electronics Technology program |

## 👥 Development Team

| Name | Role | Contributions |
|------|------|---------------|
| **Abdul Rasheed** | Project Lead | Header/Footer components, Index page, Overall architecture |
| **Ali Raza** | Developer | Departments section |
| **Imran** | Developer | Why Choose Us section |
| **Naseer Nawaz** | Developer | Campus Life section |
| **Hammad Ali** | Developer | Footer design |

## 🎨 Design System

### Color Palette
- **Primary Dark:** `#0f172a` - Main background
- **Secondary Dark:** `#1e293b` - Card backgrounds
- **Accent Blue:** `#2563eb` - Primary accent
- **Accent Gold:** `#f59e0b` - Highlights
- **Text Primary:** `#ffffff` - Main text
- **Text Secondary:** `#e2e8f0` - Secondary text

### Typography
- **Font Family:** Inter, system-ui
- **Headings:** Bold, varied sizes (3rem - 1.25rem)
- **Body:** Regular, 1rem

## 📝 License

This project is created for educational purposes for Government College of Technology, Bhakkar.

---

**Government College of Technology, Bhakkar**  
*Excellence in Technical Education Since Establishment*

📍 Main Road, Bhakkar, Punjab, Pakistan  
📞 +92 453 123456  
✉️ info@gctbhakkar.edu.pk
