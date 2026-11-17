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

- GSO30 and Replica show all Stream3D-backend methods from their respective paper tables.
- YCB-V shows every Table 2 method, with runtime reported as mean ± population standard deviation over 60 scene runs (12 scenes × 5 initial views).
- GSO30 runtime uses the unchanged Table 1 values, with population standard deviation over 30 objects.
- The keyframe-selection plot is rendered from the manuscript's `gso30_casual_hard_view_convergence.pdf`.
- The method details distinguish observation time from denoising time and report the Gaussian parameters, exploration penalty λ = 0.5, and prior pseudo-evidence α = 1.

Keep the Paper buttons linked to arXiv; the site does not bundle the manuscript PDF.
