# Matisse project page

A dependency-free, responsive project-page template for **Matisse: Evidence-Space Reasoning for Active 3D Reconstruction**.

## Preview locally

From this directory, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize before publishing

- Replace the “Code · coming soon” span in `index.html` with a link to the public repository.
- Update the author block and BibTeX if the final author list or venue changes.
- The paper buttons in `index.html` link to the arXiv abstract page.
- The page is fully static and can be deployed to GitHub Pages, Netlify, or any static host.

## Paper synchronization

The November 16, 2026 content update follows the revised public manuscript:

- The webpage shows all Stream3D-backend methods from the GSO30 table. Detailed YCB-V and Replica result tables remain in the paper.
- GSO30 runtime uses the unchanged Table 1 values, with population standard deviation over 30 objects.
- The keyframe-selection plot is rendered from the manuscript's `gso30_casual_hard_view_convergence.pdf`.

Keep the Paper buttons linked to arXiv; the site does not bundle the manuscript PDF.
