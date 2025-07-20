# CV Website Deployment Guide

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

#### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Sign up for a free account

#### Step 2: Create Repository
1. Click "New repository"
2. Name it: `yourusername.github.io` (replace 'yourusername' with your actual username)
3. Make it public
4. Click "Create repository"

#### Step 3: Upload Files
1. Click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Click "Commit changes"

#### Step 4: Your Site is Live!
- Your CV will be available at: `https://yourusername.github.io`
- It may take a few minutes to appear

### Option 2: Netlify (Free - Drag & Drop)

#### Step 1: Prepare Files
1. Create a folder named `cv-website`
2. Put all files inside:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`

#### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag your `cv-website` folder to the upload area
3. Get instant live URL
4. Can customize URL later

### Option 3: Vercel (Free - GitHub Integration)

#### Step 1: Upload to GitHub
1. Follow GitHub Pages steps above
2. Or create any repository with your files

#### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click "New Project"
4. Import your repository
5. Click "Deploy"

## 💰 Paid Hosting Options

### Option 4: Namecheap (Domain + Hosting)

#### Step 1: Buy Domain
1. Go to [namecheap.com](https://namecheap.com)
2. Search for your domain (e.g., hussainkhuzema.com)
3. Add to cart and checkout

#### Step 2: Get Hosting
1. Choose a hosting plan (Shared Hosting is fine)
2. Complete purchase

#### Step 3: Upload Files
1. Access cPanel from hosting dashboard
2. Use File Manager to upload your files
3. Your site will be live at your domain

### Option 5: Hostinger (Very Affordable)

#### Step 1: Sign Up
1. Go to [hostinger.com](https://hostinger.com)
2. Choose a hosting plan (~$2-4/month)
3. Register domain or use existing

#### Step 2: Upload Files
1. Access hPanel
2. Use File Manager
3. Upload all files to public_html folder

## 🔧 Custom Domain Setup

### For GitHub Pages:
1. Go to repository Settings
2. Scroll to "Custom domain"
3. Enter your domain
4. Update DNS records at your domain registrar

### For Netlify/Vercel:
1. Go to site settings
2. Add custom domain
3. Update DNS records

## 📱 Performance Tips

### Before Deploying:
1. **Optimize images** (if you add any)
2. **Minimize CSS/JS** (optional)
3. **Test on mobile devices**
4. **Check loading speed**

### After Deploying:
1. **Test all links** work correctly
2. **Check contact form** functionality
3. **Test on different browsers**
4. **Verify mobile responsiveness**

## 🔍 SEO Optimization

### Add to your HTML head:
```html
<meta name="description" content="Hussain Khuzema - Software Test Analyst & QA Automation Engineer">
<meta name="keywords" content="QA Engineer, Software Testing, Automation, Selenium, Playwright">
<meta name="author" content="Hussain Khuzema">
```

### Google Analytics (Optional):
1. Create Google Analytics account
2. Add tracking code to your HTML
3. Monitor website traffic

## 🎯 Recommended Approach

### For Beginners:
1. **Start with GitHub Pages** (free, easy, professional)
2. **Use your name as repository**: `hussainkhuzema.github.io`
3. **Add custom domain later** if needed

### For Professionals:
1. **Buy a domain** (hussainkhuzema.com)
2. **Use Netlify or Vercel** for hosting
3. **Connect custom domain**
4. **Add Google Analytics**

## 📞 Support

### GitHub Pages Issues:
- Check repository is public
- Verify file names are correct
- Wait 5-10 minutes for first deployment

### Netlify/Vercel Issues:
- Check file structure is correct
- Verify index.html is in root folder
- Check deployment logs

## 🚀 Quick Start Commands

### If you have Git installed:
```bash
# Create repository
git init
git add .
git commit -m "Initial commit"

# Push to GitHub
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

Your CV website will be live in minutes! 🎉 