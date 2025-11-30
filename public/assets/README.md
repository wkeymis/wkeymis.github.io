# Assets Folder

Place your protein 3D model files here.

## 3D Model Guidelines

- **Format**: OBJ files (`.obj`)
- **Optional**: MTL files (`.mtl`) for materials/colors
- **Naming**: Use descriptive names (e.g., `gfp-variant.obj`, `enzyme-scaffold.obj`)
- **Optimization**: Keep polygon count reasonable (< 100k faces) for smooth web performance

## Placeholder Models

The portfolio currently uses `test.obj` as a placeholder. Replace these with your actual protein 3D models in `src/data/portfolioData.js`:

```javascript
objPath: "/assets/your-protein-name.obj"
```

Example project models:
- `protein1.obj` - Enhanced GFP Variant
- `protein2.obj` - De Novo Enzyme Scaffold
- `protein3.obj` - High-Affinity Nanobody
- `protein4.obj` - Thermostable Lipase
- `protein5.obj` - Protein-Protein Interface
- `protein6.obj` - Allosteric Biosensor

## Creating 3D Protein Models

### From PDB Files

You can convert PDB files to OBJ using various tools:

#### Option 1: Blender (Recommended for Custom Styling)

1. Install the **Molecular Nodes** add-on for Blender
2. Import your PDB file
3. Style the protein (cartoon, surface, ribbon, etc.)
4. Apply materials and colors
5. Export as OBJ: `File → Export → Wavefront (.obj)`

**Blender Export Settings:**
- ✅ Include: Selection Only (if needed)
- ✅ Apply Modifiers
- ✅ Write Materials (creates .mtl file)
- Scale: 1.0
- Forward: -Z Forward
- Up: Y Up

#### Option 2: PyMOL

```python
# Load structure
load your_protein.pdb

# Style the protein
hide everything
show cartoon

# Color by secondary structure
color cyan, ss h
color magenta, ss s
color yellow, ss l+

# Export as OBJ
save your_protein.obj
```

#### Option 3: ChimeraX

```bash
# Open PDB file
open your_protein.pdb

# Style
cartoon
color bychain

# Export
save your_protein.obj
```

### Optimization Tips

- **Reduce Polygon Count**: Use Blender's Decimate modifier if the model is too heavy
- **Remove Water/Ligands**: Clean up unnecessary atoms before export
- **Center the Model**: Ensure the protein is centered at the origin
- **Test File Size**: Keep OBJ files under 5MB for fast loading

## Interactive Features

The 3D viewer supports:
- ✅ **Rotation**: Click and drag to rotate the protein
- ❌ **Zoom**: Disabled (fixed camera distance)
- ✅ **Touch Support**: Works on mobile devices
- ✅ **Smooth Damping**: Continues rotating after mouse release

## Styling in Blender

For a professional scientific look:

1. **Cartoon Representation**: Use smooth cylinders for helices and arrows for sheets
2. **Surface Representation**: Apply smooth shading with subtle specular highlights
3. **Color Schemes**:
   - By secondary structure (helices = cyan, sheets = magenta)
   - By chain (different colors for each chain)
   - By domain or functional region
4. **Lighting**: Use 2-3 light sources for depth
5. **Materials**: Phong or Principled BSDF with low roughness

## File Structure

```
public/assets/
├── test.obj              # Placeholder model
├── protein1.obj          # Your protein models
├── protein2.obj
├── ...
└── README.md            # This file
```
