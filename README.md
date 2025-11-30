# AI-Driven Protein Design Portfolio

A modern, elegant portfolio website showcasing AI-designed proteins and computational protein engineering projects.

## 🚀 Features

- **Modern Design**: Clean, minimalistic interface with soft animations
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Project Gallery**: Interactive cards with detailed modals
- **Research Pipeline**: Visual representation of the design workflow
- **Contact Section**: Easy ways to connect and collaborate

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Modern icon library

## 📦 Installation

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

## 🎨 Customization

### Update Personal Information
Edit `src/data/portfolioData.js` to customize:
- Your name and bio
- Project descriptions
- Tools and technologies
- Contact information

### Add Protein Images
Place your protein structure images in `public/assets/` and reference them in the project data.

### Modify Colors
Edit `tailwind.config.js` to change the color scheme.

## 📁 Project Structure

```
protein-design-portfolio/
├── public/
│   └── assets/          # Protein images and icons
├── src/
│   ├── components/      # React components
│   ├── data/           # Portfolio content data
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder
```

### Netlify
```bash
npm run build
# Drag and drop 'dist' folder to Netlify
```

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contact

For questions or collaboration opportunities, reach out via the contact form on the website.
