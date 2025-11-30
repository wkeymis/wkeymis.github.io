# 🎨 Customization Guide

This guide will help you personalize your protein design portfolio website.

## 📝 Step 1: Update Personal Information

Edit `src/data/portfolioData.js`:

### Your Details
```javascript
export const personalInfo = {
  name: "Your Name",  // ← Change this
  title: "AI-Driven Protein Design Portfolio",
  tagline: "Your custom tagline here...",  // ← Change this
  bio: "Your background and experience...",  // ← Change this
  // ... rest of the fields
};
```

### Contact Information
```javascript
export const contactInfo = {
  email: "your.email@example.com",  // ← Change this
  linkedin: "https://linkedin.com/in/yourprofile",  // ← Change this
  github: "https://github.com/yourusername",  // ← Change this
  researchgate: "https://researchgate.net/profile/yourprofile",  // ← Change this
};
```

## 🧬 Step 2: Add Your Protein Projects

In `src/data/portfolioData.js`, modify the `projects` array:

```javascript
{
  id: 1,
  name: "Your Protein Name",
  shortDescription: "Brief description for the card",
  fullDescription: "Detailed description for the modal",
  image: "/assets/your-protein-image.png",  // ← Add your image
  tags: ["Tag1", "Tag2", "Tag3"],
  metrics: {
    "Metric Name": "Value",
    "Another Metric": "Value"
  },
  designGoal: "What you wanted to achieve",
  methods: ["Tool1", "Tool2", "Tool3"]
}
```

## 🖼️ Step 3: Add Protein Structure Images

1. Create high-quality renders of your protein structures using PyMOL, ChimeraX, or similar tools
2. Save images as PNG or JPG (recommended: 800x600px or similar)
3. Place images in `public/assets/` folder
4. Name them descriptively (e.g., `gfp-variant.png`, `nanobody-complex.png`)
5. Reference them in your project data: `/assets/your-image.png`

### PyMOL Example Commands
```python
# Load and style your protein
load your_protein.pdb
bg_color white
set ray_shadows, 0
color cyan, ss h
color magenta, ss s

# Render high-quality image
ray 1600, 1200
png /path/to/assets/your-protein.png
```

## 🎨 Step 4: Customize Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    // Change these hex values
    500: '#0ea5e9',  // Main blue
    600: '#0284c7',
    // ...
  },
  accent: {
    // Change these hex values
    500: '#d946ef',  // Main purple
    600: '#c026d3',
    // ...
  }
}
```

## 🔧 Step 5: Modify Research Pipeline

In `src/data/portfolioData.js`, update `pipelineSteps`:

```javascript
{
  title: "Your Step Name",
  description: "What happens in this step",
  icon: "Dna",  // Options: Dna, Atom, Zap, CheckCircle2
  tools: ["Tool1", "Tool2", "Tool3"]
}
```

## 📱 Step 6: Test Responsiveness

1. Open the website in your browser
2. Use browser dev tools (F12) to test different screen sizes
3. Check mobile view (375px width)
4. Check tablet view (768px width)
5. Check desktop view (1920px width)

## 🚀 Step 7: Deploy Your Website

### Option A: Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Option B: Netlify
1. Run `npm run build`
2. Drag and drop the `dist` folder to Netlify

### Option C: GitHub Pages
1. Run `npm run build`
2. Push the `dist` folder to your GitHub repo
3. Enable GitHub Pages in repo settings

## 💡 Tips

### Adding More Projects
Simply add more objects to the `projects` array in `portfolioData.js`. The grid will automatically adjust.

### Changing Fonts
Edit `tailwind.config.js` and update the Google Fonts link in `index.html`:
```javascript
fontFamily: {
  sans: ['YourFont', 'system-ui', 'sans-serif'],
  display: ['YourDisplayFont', 'system-ui', 'sans-serif'],
}
```

### Adding More Tools/Technologies
Add items to the `tools` array in `personalInfo`:
```javascript
{ name: "New Tool", category: "Category Name" }
```

### Modifying Animations
Edit the Framer Motion `variants` in each component file to adjust animation timing and effects.

## 🐛 Troubleshooting

### Images Not Showing
- Ensure images are in `public/assets/`
- Check file paths start with `/assets/` not `./assets/`
- Verify image file extensions match (case-sensitive)

### Styles Not Applying
- Run `npm run dev` to restart the dev server
- Clear browser cache (Ctrl+Shift+R)
- Check for CSS syntax errors

### Build Errors
- Run `npm install` to ensure all dependencies are installed
- Check console for specific error messages
- Ensure all imports are correct

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/icons/)

## 🎯 Next Steps

1. ✅ Update personal information
2. ✅ Add your protein projects
3. ✅ Upload protein structure images
4. ✅ Test on different devices
5. ✅ Deploy to production
6. ✅ Share with biotech companies!

---

**Need help?** Check the README.md or create an issue on GitHub.
