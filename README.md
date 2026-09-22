# Eng Chin Hang website

React 18 website built with Vite and Tailwind CSS. It includes company information,
services, project records, partner logos, and an EmailJS enquiry form.

## Local development

Use Node.js 22 (the version selected in CI) and npm.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Checks and production preview

```sh
npm run lint
npm run build
npm run preview
```

The build writes to `dist/`. Preview serves that build locally; it does not publish it.
Before publishing, check Home, Services, all four project section links, Contact,
the mobile menu, carousel controls, and enquiry validation at phone and desktop widths.
Only submit a real enquiry when a live email test is intended.

## Content and components

- `src/constants/index.jsx`: navigation, project records, and partner logos.
- `src/components/Projects.jsx`: shared rendering for the four project categories.
- `src/components/HeroSection.jsx`, `Services.jsx`, and `Certification.jsx`: company information.
- `src/components/Contact.jsx`: contact details, map, enquiry fields, and EmailJS configuration.
- `src/components/ScrollToLocation.jsx`: route and section scrolling.
- `src/index.css`: font, focus outlines, reduced motion, and sticky-header scroll offset.

Keep asset imports exactly matched to the filename, including capitalization.
The deployment runner uses Linux, where case mismatches fail builds.

## Images

Original photos remain in `src/assets/`. The website uses resized WebP versions in
`src/assets/optimized/` for the carousel, track records, company image, and logo.
Carousel variants are 640, 1280, and 1920 pixels wide; the browser selects a size
using `srcSet` and `sizes`. Track-record variants are capped at 480 and 960 pixels.
Small originals are not enlarged. The WebP variants were encoded at quality 80
with EXIF orientation applied. `metadata.json` records actual dimensions and byte sizes.

When replacing a photo, regenerate the matching variants from the original, update
dimensions and descriptive alt text, and inspect the result at phone and desktop sizes.
Do not import the full-resolution carousel originals into the application.

## Enquiry form

The form sends through EmailJS using the service, template, and public identifier in
`Contact.jsx`. Template parameters are `name`, `email`, `phone`, `subject`, and
`message`. All fields are required; values are trimmed before sending.
Pending submissions lock the fields and submit button. Failures keep entered data
so visitors can retry. Delivery and any account-side restrictions are configured in
EmailJS, outside this repository.

## Deployment

`.github/workflows/deploy.yml` runs on pushes to `main` or a manual workflow dispatch.
It installs from the lockfile, lints, builds on Ubuntu, transfers the build using v4
artifact actions, and publishes `dist/` to the `gh-pages` branch.
GitHub Pages must be configured to serve that branch. Only the deploy job receives
repository write permission.

`npm run deploy` is a separate manual publishing command; it builds and publishes
through the local `gh-pages` package.

The current Vite configuration assumes hosting at a domain root, matching the
`engchinhang.com` metadata in `index.html`. For a repository subpath such as
`https://OngSamZQ.github.io/ECH/`, set Vite's `base` to `/ECH/` before building.
The `homepage` field in `package.json` does not set Vite's asset base.
The app uses hash routes, so project/contact navigation does not require server rewrites.
