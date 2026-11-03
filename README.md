# Lautaro Montoya — Game Designer Portfolio

Static bilingual portfolio (English / Spanish), ready for Netlify or any static host. No build step.

## Pages

- `index.html` — home: hero, featured project (Keep It Alive), about, project archive, principles and contact. The other projects open as case studies in a modal (`case-studies.js` holds their texts and images).
- `kia.html` — full case study for **Keep It Alive (KIA)**, the game in development: pillars, fatigue system (interactive), bosses, run structure, balance by simulation, production and concept-to-build.

## Editing texts

Every visible text exists twice in the HTML, one per language:

```html
<span data-lang="en">English text</span><span data-lang="es">Texto en español</span>
```

The CSS hides the language that is not active. The toggle remembers the choice; on a first visit the browser language decides.

## Images

All images are WebP under `assets/img/`. KIA screenshots (`assets/img/kia/`) come from the game's build, taken with its capture flags (`-kia-captura`, `-kia-grabar`). Keep new images at 1600 px wide or less.

## Deploy on Netlify

1. In Netlify, choose **Add new site → Import an existing project** and select this repository.
2. No build command and no publish directory: the site root is the folder that contains `index.html`.

Alternatively, drag this whole folder onto Netlify Drop.

## Contact details

The two CV links are included. Add your email / LinkedIn in the `#contact` section of `index.html` when you want them displayed publicly.
