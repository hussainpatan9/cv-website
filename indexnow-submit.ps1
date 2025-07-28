# IndexNow URL Submission Script for CV Website
# This script helps notify search engines about website updates

param(
    [string]$Url = "",
    [string]$Key = "f84655aaf6b9e",
    [string]$WebsiteHost = "hussainpatan9.github.io"
)

# Search engines supporting IndexNow
$searchEngines = @(
    "https://www.google.com/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow"
)

Write-Host "=== IndexNow URL Submission Script ===" -ForegroundColor Green
Write-Host "Website: https://$WebsiteHost/cv-website/" -ForegroundColor Cyan
Write-Host "Key: $Key" -ForegroundColor Cyan
Write-Host ""

if ($Url) {
    # Single URL submission
    Write-Host "Submitting single URL: $Url" -ForegroundColor Yellow
    Write-Host ""
    
    foreach ($engine in $searchEngines) {
        $engineName = ($engine -split "/")[2]
        $submitUrl = "$engine?url=$Url&key=$Key"
        
        try {
            $response = Invoke-WebRequest -Uri $submitUrl -Method GET -TimeoutSec 30
            $statusColor = if ($response.StatusCode -eq 200) { "Green" } else { "Yellow" }
            Write-Host "✓ $engineName - Status: $($response.StatusCode)" -ForegroundColor $statusColor
        }
        catch {
            Write-Host "✗ $engineName - Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
} else {
    # Multiple URLs submission
    Write-Host "Submitting all website pages..." -ForegroundColor Yellow
    Write-Host ""
    
    $urlList = @(
        "https://$WebsiteHost/cv-website/",
        "https://$WebsiteHost/cv-website/hero.html",
        "https://$WebsiteHost/cv-website/about.html",
        "https://$WebsiteHost/cv-website/services.html",
        "https://$WebsiteHost/cv-website/freelance.html",
        "https://$WebsiteHost/cv-website/testimonials.html",
        "https://$WebsiteHost/cv-website/experience.html",
        "https://$WebsiteHost/cv-website/skills.html",
        "https://$WebsiteHost/cv-website/education.html",
        "https://$WebsiteHost/cv-website/projects.html",
        "https://$WebsiteHost/cv-website/networks.html",
        "https://$WebsiteHost/cv-website/contact.html"
    )
    
    Write-Host "URLs to submit:" -ForegroundColor Cyan
    $urlList | ForEach-Object { Write-Host "  - $_" -ForegroundColor Gray }
    Write-Host ""
    
    $jsonBody = @{
        host = $WebsiteHost
        key = $Key
        urlList = $urlList
    } | ConvertTo-Json -Depth 3
    
    foreach ($engine in $searchEngines) {
        $engineName = ($engine -split "/")[2]
        
        try {
            $response = Invoke-WebRequest -Uri $engine -Method POST -Body $jsonBody -ContentType "application/json" -TimeoutSec 30
            $statusColor = if ($response.StatusCode -eq 200) { "Green" } else { "Yellow" }
            Write-Host "✓ $engineName - Status: $($response.StatusCode)" -ForegroundColor $statusColor
        }
        catch {
            Write-Host "✗ $engineName - Error: $($_.Exception.Message)" -ForegroundColor Red
        }
    }
}

Write-Host ""
Write-Host "=== Submission Complete ===" -ForegroundColor Green
Write-Host "Note: Response codes:" -ForegroundColor Cyan
Write-Host "  200: URL submitted successfully" -ForegroundColor Green
Write-Host "  202: URL received, key validation pending" -ForegroundColor Yellow
Write-Host "  400: Bad request - Invalid format" -ForegroundColor Red
Write-Host "  403: Forbidden - Key not valid" -ForegroundColor Red
Write-Host "  422: Unprocessable Entity - URLs don't belong to host" -ForegroundColor Red
Write-Host "  429: Too Many Requests - Rate limit exceeded" -ForegroundColor Red 