# Vyom Voyage - TCET Space Club Website

A modern, animated website for Vyom Voyage - the space enthusiasts club from Thakur College of Engineering and Technology, Mumbai.

## Features

- 🚀 **Scroll-based Navigation** - Smooth page transitions with scroll detection
- 🎨 **Framer Motion Animations** - Beautiful, fluid animations throughout
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎯 **Timeline Navigation** - Visual timeline on the left side for easy navigation
- 📄 **Scrapbook-style Containers** - Each page in a beautiful container with reflection effects
- 🍔 **Cool Hamburger Menu** - Animated menu icon with misaligned lines
- 🔍 **SEO Optimized** - Built with Next.js 14 and proper metadata
- ⚡ **Performance** - Industry-standard component rendering and optimization

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll detection

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
vyom-web/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout with SEO metadata
│   └── page.tsx          # Main page with all sections
├── components/
│   ├── Logo.tsx          # Logo component
│   ├── Navbar.tsx        # Hamburger menu navigation
│   ├── PageContainer.tsx # Scrapbook-style page container
│   └── Timeline.tsx      # Left-side timeline navigation
└── package.json
```

## Pages

1. **Home** - Introduction to Vyom Voyage
2. **About** - About the club
3. **Mission** - Club mission statement
4. **Projects** - CubeSat and space projects
5. **Team** - Team members (placeholder)
6. **Contact** - Contact information

## Customization

- **Colors**: Update colors in `tailwind.config.ts`
- **Content**: Modify page content in `app/page.tsx`
- **Animations**: Adjust animations in component files (`components/`)
- **Astronaut Image**: Replace the placeholder in the home page (around line 122-137 in `app/page.tsx`) with your actual image:
  ```tsx
  <img 
    src="/path-to-your-astronaut-image.jpg" 
    alt="Astronaut" 
    className="w-full h-full object-cover"
  />
  ```

## Features Implemented

✅ Scroll-based page navigation  
✅ Timeline navigation on the left  
✅ Scrapbook-style page containers with reflection effects  
✅ Cool hamburger menu with misaligned lines  
✅ Framer Motion animations throughout  
✅ SEO optimized with proper metadata  
✅ Responsive design for all devices  
✅ Industry-standard component structure

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

