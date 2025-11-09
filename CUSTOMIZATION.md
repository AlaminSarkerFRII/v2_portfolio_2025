# Customization Guide

This guide will help you customize the portfolio to match your personal information and preferences.

## Quick Start Customization

### 1. Update Personal Information

#### Hero Section
Edit `components/sections/Hero.tsx`:
- Line 33: Change "Your Name" to your actual name
- Line 42: Update the tagline "I build things for the web"
- Line 49-53: Update the introduction paragraph

#### About Section
Edit `components/sections/About.tsx`:
- Line 38-46: Update the about me paragraphs
- Line 58: Update the skills list

#### Contact Section
Edit `components/sections/Contact.tsx`:
- Line 38: Update the email address
- Line 55: Update the email in the mailto link

### 2. Update Work Experience

Edit `lib/data.ts`:
- Update the `experiences` array with your work history
- Each experience should have:
  - `company`: Company name
  - `position`: Your job title
  - `location`: Work location
  - `range`: Employment period
  - `url`: Company website
  - `descriptions`: Array of job responsibilities/achievements

### 3. Update Projects

Edit `lib/data.ts`:
- Update the `projects` array with your projects
- Each project should have:
  - `title`: Project name
  - `description`: Project description
  - `tech`: Array of technologies used
  - `github`: GitHub repository URL (optional)
  - `external`: Live project URL (optional)

### 4. Update Social Links

Edit `lib/data.ts`:
- Update the `socialLinks` array with your social media profiles
- Supported icons: `github`, `linkedin`, `twitter`, `mail`
- Update the URLs to point to your profiles

### 5. Update Navigation

Edit `lib/data.ts`:
- The `navLinks` array controls the navigation menu
- You can add, remove, or reorder sections

### 6. Update Footer

Edit `components/layout/Footer.tsx`:
- Line 18: Update "Designed & Built by Your Name" to your name
- The copyright year updates automatically

### 7. Update Logo/Branding

Edit `components/layout/Navbar.tsx`:
- Line 23: Change the logo text `{'<Portfolio />'}` to your preferred branding

### 8. Update Resume Link

Edit `components/layout/Navbar.tsx`:
- Line 66: Update the resume PDF path
- Make sure to add your resume PDF to the `public` folder

## Color Customization

### Primary Colors
Edit `app/globals.css`:
- `--background`: Main background color (default: #0a192f)
- `--foreground`: Main text color (default: #ccd6f6)
- `--green`: Accent color (default: #64ffda)
- `--slate`: Secondary text color (default: #8892b0)

### Example: Change to Blue Theme
```css
:root {
  --green: #4fc3f7; /* Change green to blue */
  --green-tint: rgba(79, 195, 247, 0.1);
}
```

## Font Customization

Edit `app/layout.tsx`:
- Change the Google Fonts imports
- Update the font variables in the className

Example:
```typescript
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});
```

## Animation Customization

### Adjust Animation Speed
Edit individual section components:
- Change `duration` values in motion components
- Adjust `delay` values for staggered animations

### Disable Animations
Remove or comment out Framer Motion imports and motion wrappers if you prefer no animations.

## Adding New Sections

1. Create a new component in `components/sections/`
2. Add the section to `app/page.tsx`
3. Add a navigation link in `lib/data.ts`
4. Update the section counter in the new component (e.g., "04.", "05.")

## Image Optimization

1. Add images to the `public` folder
2. Use Next.js `Image` component for optimized images
3. Update project components to display actual project images

## SEO Optimization

Edit `app/layout.tsx`:
- Update `metadata.title` with your name
- Update `metadata.description` with your description
- Add Open Graph tags for social media sharing
- Add Twitter card metadata

## Deployment

1. **Vercel** (Recommended):
   - Push to GitHub
   - Import in Vercel
   - Automatic deployment

2. **Other Platforms**:
   - Build: `pnpm run build`
   - Start: `pnpm start`
   - Deploy the `.next` folder and dependencies

## Tips

- Test on mobile devices for responsiveness
- Optimize images before adding them
- Keep descriptions concise and impactful
- Use consistent language and tone throughout
- Regularly update projects and experience
- Test all external links

## Need Help?

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Check the [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Check the [Framer Motion Documentation](https://www.framer.com/motion/)

