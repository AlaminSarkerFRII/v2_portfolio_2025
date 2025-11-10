# Vercel Deployment Instructions

## Prerequisites
- ✅ GitHub/GitLab/Bitbucket account
- ✅ Vercel account (sign up at https://vercel.com)
- ✅ Project code pushed to a Git repository

## Step 1: Push Your Code to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio 2025"
   ```

2. **Create a new repository on GitHub**:
   - Go to https://github.com/new
   - Create a new repository (e.g., `v2-portfolio-2025`)
   - **Don't** initialize with README, .gitignore, or license

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/v2-portfolio-2025.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy to Vercel

### Method A: Via Vercel Dashboard (Easiest)

1. **Sign in to Vercel**:
   - Go to https://vercel.com
   - Sign in with your GitHub account (recommended)

2. **Import Project**:
   - Click "Add New..." → "Project"
   - Select your GitHub repository (`v2-portfolio-2025`)
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)

4. **Environment Variables** (if any):
   - Add any environment variables if needed
   - For this project, no environment variables are required

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)

6. **Access Your Site**:
   - Vercel will provide a URL like: `https://v2-portfolio-2025.vercel.app`
   - Your site is now live! 🎉

### Method B: Via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   # or
   pnpm add -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   - Follow the prompts:
     - Set up and deploy? **Yes**
     - Which scope? (Select your account)
     - Link to existing project? **No**
     - Project name? (Press Enter for default)
     - Directory? (Press Enter for `./`)
     - Override settings? **No**

4. **Deploy to Production**:
   ```bash
   vercel --prod
   ```

## Step 3: Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Step 4: Automatic Deployments

Vercel automatically deploys:
- ✅ Every push to `main` branch → Production
- ✅ Every push to other branches → Preview deployment
- ✅ Every pull request → Preview deployment with unique URL

## Important Notes

### ✅ What's Already Configured:
- Build script: `pnpm build` ✓
- Next.js configuration ✓
- All assets in `/public` folder ✓
- Resume PDF included ✓

### 📝 Project Details:
- **Framework**: Next.js 16.0.1
- **Package Manager**: pnpm
- **Build Output**: Static + Server Components
- **No Environment Variables Required**

### 🔧 Troubleshooting:

**If build fails:**
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version (Vercel auto-detects, but you can set it in settings)

**If images don't load:**
- All images should be in `/public` folder (already configured ✓)

**If resume PDF doesn't download:**
- Verify PDF exists in `/public` folder (already there ✓)

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify all images load correctly
- [ ] Test resume download
- [ ] Check mobile responsiveness
- [ ] Test contact form (if applicable)
- [ ] Verify all sections display correctly
- [ ] Check animations work properly

## Updating Your Site

Simply push changes to your GitHub repository:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically rebuild and deploy! 🚀

