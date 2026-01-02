# CVM Portfolio - Nguyễn Huy Hoàng

A modern, minimal personal website showcasing Core Values, Mission, Vision, and Roadmap. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional layout
- **Responsive**: Mobile-first design that works on all devices
- **Multi-language**: Support for English and Vietnamese with language toggle
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Navigation**: Sticky navbar with smooth scrolling and active section highlighting
- **SEO Optimized**: Proper metadata, OpenGraph, and semantic HTML
- **Accessible**: WCAG compliant with proper focus states and semantic markup
- **Fast**: Optimized for performance with Next.js static export

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
CVM/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── CoreValues.tsx
│   │   ├── Mission.tsx
│   │   ├── Vision.tsx
│   │   ├── Roadmap.tsx
│   │   └── ReviewSystem.tsx
│   ├── ui/               # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── TimelineItem.tsx
│   ├── Navigation.tsx    # Navigation with dark mode
│   └── Footer.tsx        # Footer component
├── content/              # Content management
│   ├── profile.ts        # Legacy content (kept for reference)
│   └── translations.ts   # Multi-language translations (EN/VI)
├── lib/                  # Utilities
│   └── i18n.ts          # Internationalization utilities
├── public/               # Static assets
└── ...config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   ```bash
   cd CVM
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Editing Content

All content is now managed through translations for multi-language support:

**`content/translations.ts`** - Edit this file to update:
- Personal information (name, role, tagline)
- About section bullet points
- Core values (title, meaning, practices)
- Mission statement and principles
- Vision description and success metrics
- Roadmap phases (goals, actions, metrics)
- Review system questions
- Contact information and social links

### Example: Adding a new core value

```typescript
// In content/profile.ts
coreValues: {
  values: [
    // ... existing values
    {
      title: "New Value",
      meaning: "What this value means to me",
      practices: [
        "How I practice this value - point 1",
        "How I practice this value - point 2",
        "How I practice this value - point 3"
      ]
    }
  ]
}
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the accent color:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        // Change these values to your preferred color
        500: '#0ea5e9', // Primary accent
        600: '#0284c7', // Darker shade
        // ... other shades
      }
    }
  }
}
```

### Typography
The site uses Inter font by default. To change it, update `app/layout.tsx`:

```typescript
import { YourFont } from 'next/font/google';

const yourFont = YourFont({ subsets: ['latin'] });
```

### Layout
- Modify section spacing in `components/ui/Section.tsx`
- Adjust container max-widths in `components/ui/Container.tsx`
- Update responsive breakpoints in individual components

## 📱 Responsive Design

The site is built mobile-first with these breakpoints:
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (≥ 640px)
- **Desktop**: `md:` (≥ 768px)
- **Large Desktop**: `lg:` (≥ 1024px)

## 🌙 Dark Mode

Dark mode is implemented with:
- Tailwind CSS `dark:` classes
- Local storage persistence
- System preference detection
- Smooth transitions

Users can toggle between light/dark modes using the button in the navigation.

## ♿ Accessibility

The site includes:
- Semantic HTML structure
- Proper heading hierarchy
- Focus states for keyboard navigation
- ARIA labels where needed
- High contrast ratios
- Screen reader friendly content

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy with Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain (Optional)**
   - In Vercel dashboard, go to your project
   - Navigate to "Settings" → "Domains"
   - Add your custom domain

### Alternative: Static Export

The project is configured for static export. To build static files:

```bash
npm run build
```

This creates an `out/` folder with static files that can be deployed to any static hosting service (Netlify, GitHub Pages, etc.).

### Environment Variables

For production, you may want to set:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GOOGLE_ANALYTICS=your-ga-id
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance

The site is optimized for performance:
- Static generation with Next.js
- Optimized images and fonts
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind (purged in production)
- Lazy loading where appropriate

## 🐛 Troubleshooting

### Common Issues

1. **Build errors**: Make sure all dependencies are installed
2. **Styling issues**: Check if Tailwind CSS is properly configured
3. **Dark mode not working**: Verify localStorage is available in your environment

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are in the correct locations
3. Ensure Node.js version is 18+
4. Try deleting `node_modules` and reinstalling

## 📄 License

This project is for personal use. Feel free to use it as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions and improvements are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

**Built with ❤️ by Nguyễn Huy Hoàng**
