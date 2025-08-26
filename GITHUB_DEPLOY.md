# 🚀 GitHub Deployment Guide

## Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "New repository" (green button)
3. Repository name: `resume-chatbot` or `mujjamil-ai-assistant`
4. Make it **Public** (important for GitHub Pages)
5. Don't initialize with README (we already have files)
6. Click "Create repository"

## Step 2: Connect Your Local Files to GitHub
Run these commands in your terminal:

```bash
# Add GitHub as remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/resume-chatbot.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch
6. Click "Save"

## Step 4: Get Your Live URL
- Your chatbot will be available at: `https://YOUR_USERNAME.github.io/resume-chatbot/`
- This URL will work with QR codes!

## Step 5: Test QR Code
1. Open your live URL
2. Click the QR code button
3. QR code will now work properly and link to your live chatbot!

## 🎯 Quick Commands (Replace YOUR_USERNAME):
```bash
git remote add origin https://github.com/YOUR_USERNAME/resume-chatbot.git
git branch -M main
git push -u origin main
```

**After deployment, your QR code will work perfectly! 🎉**

