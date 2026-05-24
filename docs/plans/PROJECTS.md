# Implementation Plan - Project UI Polish

## Objective

Standardize the visual language of the Projects section (Index and Detail) to match the Landing and Blog pages. Improve hierarchy on the project detail page and fix hover behavior in `ProjectCard`.

## Key Files & Context

- `components/ProjectCard.jsx`: Fix hover image parallax issue.
- `app/(root)/projects/page.jsx`: Align hero with `BlogHero` design.
- `sections/projects/ProjectContent.jsx`: Redesign hierarchy and typography for project details.
- `globals.css`: Use existing `.hero-badge` and layout utilities.

## Proposed Changes

### 1. Project Card (`components/ProjectCard.jsx`)

- **Change:** Remove GSAP-based image parallax (`moveX`, `moveY`).
- **Rationale:** The image should feel anchored within the card. Parallax was making it feel detached.
- **Visuals:** Retain the smooth `scale-105` CSS transition for depth.

### 2. Projects Index Hero (`app/(root)/projects/page.jsx`)

- **Change:** Update hero layout to match `BlogHero`.
- **Rationale:** Consistency across site headers.
- **Specifics:**
  - Add `hero-badge` with "Selected Works".
  - Update title to `text-4xl md:text-5xl lg:text-6xl` (from `7xl`).
  - Update description to `text-lg md:text-xl text-white/60` (from `text-xl text-white/50`).
  - Center-align text to match the Blog section aesthetic.

### 3. Project Detail Hierarchy (`sections/projects/ProjectContent.jsx`)

- **Change:** Complete redesign of the hero and content block hierarchy.
- **Rationale:** Current page is "aggressive" and lacks storytelling flow.
- **Specifics:**
  - **Header:** Add `hero-badge` ("Project Case Study").
  - **Title:** Scale down to `text-4xl md:text-6xl lg:text-7xl` with `leading-[1]` and `tracking-tight`.
  - **Description:** Reduce to `text-lg md:text-xl` and cap width at `max-w-3xl` to support the title.
  - **Main Image:** Reduce hover scale to `scale-103` (very subtle) to keep it premium.
  - **Tech Tags:** Shrink padding/font (`px-6 py-3`, `text-base`) for a more refined look.
  - **Meta Info:** Reduce "About the project" text size to `text-base md:text-lg`.

## Verification & Testing

1. **Visual Check:** Verify that the project index hero looks identical in structure to the blog hero.
2. **Hierarchy Check:** Ensure the project title is the dominant element on the detail page, with the description clearly secondary.
3. **Hover Check:** Verify that hovering over `ProjectCard` scales the image without shifting it horizontally or vertically.
4. **Responsive Check:** Test all changes on mobile, tablet, and desktop viewports.
