# Hussain Khuzema - Professional CV Website

A modern, accessible, and SEO-optimized CV website showcasing professional experience, skills, and achievements. Built with HTML5, CSS3, and vanilla JavaScript. Features modularized pages, downloadable PDF CV, custom 404 page, and advanced contact form.

## 🌐 Live Demo
**[View Live CV Website](https://hussainpatan9.github.io/cv-website/)**

## Website and business-software projects

I also run [ScopeMotive](https://scopemotive.com/?utm_source=github&utm_medium=referral&utm_campaign=professional_profile&utm_content=cv_readme), a studio for e-commerce stores, B2B catalogue websites and custom ERP systems. Explore the studio's website for project examples and service details.

## 🌟 Features

### **Professional Sections**
- **Hero Section** – Eye-catching intro with animated stats
- **About** – Personal background and key achievements
- **Freelance Success** – Fiverr profile integration (metrics, reviews)
- **Experience** – Interactive timeline of work history
- **Skills** – Categorized technical and soft skills
- **Education** – Academic background and certifications
- **Projects** – Portfolio of technical projects
- **Testimonials** – Real client reviews and feedback
- **Professional Networks** – LinkedIn, GitHub, Fiverr
- **Contact** – Advanced contact form (EmailJS, mailto fallback, validation)
- **Downloadable PDF CV** – Print/download ready
- **Custom 404 Page** – User-friendly error handling

### **Technical Features**
- **Modularized Pages** – Separate HTML files for each section (hero.html, about.html, services.html, etc.)
- **Responsive Design** – Works perfectly on all devices
- **Accessibility** – WCAG compliant: skip link, ARIA, color contrast, keyboard navigation, focus indicators
- **SEO Optimized** – Meta tags, Open Graph, Twitter Cards, JSON-LD, sitemap.xml, robots.txt
- **Progressive Web App** – PWA manifest.json, installable
- **Print-Friendly** – Optimized for CV download/printing
- **Smooth Animations** – AOS-like section reveals, animated counters
- **Back-to-Top** – Button and footer link
- **Form Validation** – Inline feedback, notifications, ARIA live region
- **Custom 404 Page** – Branded, with navigation options
- **IndexNow Integration** – Fast search engine indexing with automated URL submission

### **Performance Optimizations**
- **Lazy Loading** – Efficient content loading
- **Debounced Events** – Optimized scroll/resize handlers
- **Minified Assets** – Production-ready code
- **CDN Resources** – Fast loading external libraries

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/hussainpatan9/cv-website.git
   cd cv-website
   ```
2. **Open in browser**
   ```bash
   # Open index.html in your browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```
3. **Deploy to GitHub Pages**
   - Push to GitHub repository
   - Enable GitHub Pages in repository settings
   - Your CV will be live at `https://yourusername.github.io/repository-name`
   - See [QUICK-DEPLOY.md](QUICK-DEPLOY.md) and [deploy-guide.md](deploy-guide.md) for full instructions

## 📁 File Structure

```
cv-website/
├── index.html                # Complete CV (all sections)
├── hero.html                 # Home page
├── about.html                # About section
├── services.html             # Services section
├── freelance.html            # Freelance section
├── testimonials.html         # Testimonials section
├── experience.html           # Experience section
├── skills.html               # Skills section
├── education.html            # Education section
├── projects.html             # Projects section
├── networks.html             # Networks section
├── contact.html              # Contact section
├── styles.css                # All CSS styles
├── script.js                 # JavaScript functionality
├── sitemap.xml               # SEO sitemap (for search engines)
├── robots.txt                # Search engine directives
├── manifest.json             # PWA manifest
├── 404.html                  # Custom error page
├── og-image.svg              # Open Graph/social image
├── Hussain_Khuzema_Resume.pdf # Downloadable PDF CV
├── security.txt              # Security contact info
├── f84655aaf6b9e.txt        # IndexNow key file
├── indexnow-submit.ps1       # IndexNow submission script
├── indexnow-setup.md         # IndexNow implementation guide
├── LICENSE                   # MIT License
├── README.md                 # This file
├── CONTACT-FORM-SETUP.md     # Contact form configuration
├── SEO-REPORT.md             # SEO audit and recommendations
├── DEPLOYMENT-CHECKLIST.md   # Pre/post deployment checklist
├── QUICK-DEPLOY.md           # Quick deployment guide
├── deploy-guide.md           # Full deployment instructions
└── .gitignore
```

## 🎨 Customization

### **Personal Information**
Edit the HTML files to update:
- Name, title, and contact info
- Professional summary
- Work experience, education, skills, projects, testimonials
- Social and freelance links

### **Styling**
Modify `styles.css` to customize:
- Color scheme (primary colors)
- Typography and fonts
- Layout, spacing, and animations

### **Content**
- Add/edit testimonials, projects, and services in respective HTML files
- Update Fiverr/LinkedIn/GitHub links as needed
- Update PDF CV (`Hussain_Khuzema_Resume.pdf`)

### **Contact Form**
- Fully functional with EmailJS (recommended) or mailto fallback
- See [CONTACT-FORM-SETUP.md](CONTACT-FORM-SETUP.md) for setup and configuration

### **IndexNow Setup**
- Automated search engine indexing
- See [indexnow-setup.md](indexnow-setup.md) for implementation details
- Use `indexnow-submit.ps1` to notify search engines of updates

## ♿ Accessibility Features
- **Skip Link** – Jump directly to main content
- **ARIA Labels** – Screen reader support
- **Keyboard Navigation** – All interactive elements accessible
- **Color Contrast** – Meets WCAG AA
- **Focus Indicators** – Clear and visible
- **Semantic HTML** – Proper heading order, sectioning

## 🔍 SEO & Analytics
- **Meta Tags** – Description, keywords, robots, canonical, Open Graph, Twitter Cards
- **Structured Data** – JSON-LD for Person, Organization, Website, FAQ
- **Sitemap** – `sitemap.xml` (submit to Google Search Console)
- **robots.txt** – Allows all search engines, references sitemap
- **IndexNow** – Fast search engine indexing with automated URL submission
- **Analytics** – Add Google Analytics in `<head>`:
  ```html
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
  ```
- See [SEO-REPORT.md](SEO-REPORT.md) for full SEO audit and recommendations

## 📄 Print & PDF Optimization
- Print-specific styles for clean, professional CV download
- Downloadable PDF: `Hussain_Khuzema_Resume.pdf`

## 🚀 Deployment
- **GitHub Pages** (recommended, free):
  - See [QUICK-DEPLOY.md](QUICK-DEPLOY.md) and [deploy-guide.md](deploy-guide.md)
- **Netlify/Vercel**: Drag-and-drop or Git-based deployment
- **Custom Domain**: Supported (see deployment guides)

## 🛠️ Troubleshooting & Support
- See [DEPLOYMENT-CHECKLIST.md](DEPLOYMENT-CHECKLIST.md) for pre/post deployment steps and common issues
- For contact form help, see [CONTACT-FORM-SETUP.md](CONTACT-FORM-SETUP.md)
- For IndexNow setup, see [indexnow-setup.md](indexnow-setup.md)

## 📞 Contact
- **LinkedIn**: [Hussain Khuzema](https://linkedin.com/in/hussainkhuzema)
- **GitHub**: [hussainpatan9](https://github.com/hussainpatan9)
- **Fiverr**: [hussainpatan](https://www.fiverr.com/hussainpatan)
- **Email**: [hussainkhuzema99@gmail.com](mailto:hussainkhuzema99@gmail.com)

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

⭐ **Star this repository if you found it helpful!** 