# Premium Developer Portfolio Website

A stunning, modern, and fully responsive developer portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Beautiful glassmorphism effects
- Smooth animations and transitions
- Animated gradient backgrounds
- Custom cursor effects
- Responsive design for all devices

🚀 **Performance**
- Optimized for fast loading
- Lazy loading support
- Smooth scrolling
- Efficient animations

📱 **Sections Included**
- Hero Section with typing animation
- About Section with statistics
- Skills Section with progress indicators
- Projects Showcase with modal
- Experience Timeline
- Services Section
- Testimonials Slider
- Tech Stack Grid
- Contact Form
- Footer

## Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **React Scroll** - Smooth scrolling
- **React Type Animation** - Typing effect

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── CursorGlow.jsx
│   ├── ScrollToTop.jsx
│   ├── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Skills.jsx
│       ├── Projects.jsx
│       ├── Experience.jsx
│       ├── Services.jsx
│       ├── Testimonials.jsx
│       ├── TechStack.jsx
│       └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Customization

### Color Palette

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  dark: {
    bg: '#030712',
    bg2: '#111827'
  },
  accent: {
    primary: '#3B82F6',
    secondary: '#8B5CF6',
    highlight: '#06B6D4'
  }
}
```

### Content

Update the content in each component section with your own information.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
