# GitHub CV Website Deployment Script
Write-Host "🚀 Deploying CV Website to GitHub Pages..." -ForegroundColor Green

# Check if git is configured
$gitUser = git config --global user.name
$gitEmail = git config --global user.email

Write-Host "Git configured as: $gitUser ($gitEmail)" -ForegroundColor Yellow

# Check current status
Write-Host "`n📋 Current Git Status:" -ForegroundColor Cyan
git status

Write-Host "`n📝 Instructions to deploy:" -ForegroundColor Green
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: cv-website" -ForegroundColor White
Write-Host "3. Description: Professional CV website with modern design and features" -ForegroundColor White
Write-Host "4. Make it PUBLIC (required for GitHub Pages)" -ForegroundColor White
Write-Host "5. Click 'Create repository'" -ForegroundColor White
Write-Host "6. Then run: git push -u origin main" -ForegroundColor White

Write-Host "`n🌐 After creating repository, your CV will be live at:" -ForegroundColor Green
Write-Host "https://hussainpatan9.github.io/cv-website" -ForegroundColor Cyan

Write-Host "`n⚙️ To enable GitHub Pages:" -ForegroundColor Yellow
Write-Host "1. Go to repository Settings > Pages" -ForegroundColor White
Write-Host "2. Source: Deploy from a branch" -ForegroundColor White
Write-Host "3. Branch: main, Folder: / (root)" -ForegroundColor White
Write-Host "4. Click Save" -ForegroundColor White

Write-Host "`n✅ Your CV website will be live in a few minutes!" -ForegroundColor Green 