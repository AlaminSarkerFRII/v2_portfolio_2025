# Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Inspired by Brittany Chiang's portfolio design with smooth animations and a beautiful dark theme.

## Features

- 🎨 **Modern Design**: Dark theme with green accents inspired by Brittany Chiang's portfolio
- 🚀 **Next.js 15**: Built with the latest Next.js features including App Router
- 💅 **Tailwind CSS**: Styled with Tailwind CSS for rapid UI development
- ✨ **Animations**: Smooth animations powered by Framer Motion
- 📱 **Responsive**: Fully responsive design that works on all devices
- ♿ **Accessible**: Built with accessibility in mind
- 🎯 **TypeScript**: Full TypeScript support for type safety

## Sections

- **Hero**: Introduction section with animated text
- **About**: Personal information and skills
- **Experience**: Work experience with interactive tabs
- **Projects**: Showcase of projects with hover effects
- **Contact**: Contact information and call-to-action

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd v2_portfolio_2025
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. Edit `lib/data.ts` to update:
   - Navigation links
   - Social media links
   - Work experience
   - Projects
   - Skills

2. Update `components/sections/Hero.tsx` to change:
   - Your name
   - Introduction text
   - Call-to-action button

3. Update `components/layout/Footer.tsx` to change:
   - Footer text
   - Copyright information

### Colors

The color scheme is defined in `app/globals.css`. You can customize:
- `--background`: Main background color
- `--foreground`: Main text color
- `--green`: Accent color (green)
- `--slate`: Secondary text color

### Fonts

The project uses Geist Sans and Geist Mono fonts from Next.js. You can change them in `app/layout.tsx`.

## Project Structure

```
v2_portfolio_2025/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   ├── EmailSidebar.tsx
│   │   └── Footer.tsx
│   └── sections/         # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       └── Contact.tsx
├── lib/
│   ├── types.ts          # TypeScript types
│   └── data.ts           # Data for portfolio content
└── public/               # Static assets
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed!

### Other Platforms

You can also deploy to other platforms that support Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Any Node.js hosting platform

## Technologies Used

- **Next.js 15**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Beautiful icon library

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Design inspired by [Brittany Chiang's Portfolio](https://v4.brittanychiang.com/)

## Support

If you have any questions or need help, please open an issue on GitHub.
