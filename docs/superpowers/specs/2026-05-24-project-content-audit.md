# Design Audit: Portfolio V2

## Inconsistencies & Issues
- **Typography Density:** Hero uses large fluid titles (`md:text-[60px]`), Blog uses `4xl-6xl`. Projects lack a defined scale for long-form content.
- **Visual Hierarchy:** Project descriptions in `constants` are short strings, currently rendering as "thrown on screen" without narrative flow.
- **Styling Tokens:** `globals.css` defines oklch variables but some components use hardcoded hex/tailwindcss colors.
- **Narrative Gap:** The Blog has a rich `prose` setup, while Projects currently lack depth and structured storytelling.

## Unification Strategy
1. **Adopt Blog Prose:** Reuse `prose prose-invert prose-lg` for project descriptions to ensure consistent typography and spacing.
2. **Standardized Sectioning:** Use `padding-x-lg` and `max-w-6xl` (matching Blog) for central content alignment.
3. **Hero Alignment:** Use `hero-badge` and `TitleHeader` patterns for project entry points.
4. **Interactive Accents:** Incorporate `GlowCard` and GSAP-driven entry animations (SplitText) to match the Landing Page's premium feel.

## Component Spec: ProjectContent.jsx
- **Path:** `/sections/projects/ProjectContent.jsx`
- **Structure:**
  - `Header`: Title (dominant), Badge (category/tech), Date/Role.
  - `HeroImage`: High-quality aspect-ratio optimized visual.
  - `Overview`: Multi-column layout for "Intent", "Problem Solved", and "Tech Stack".
  - `Narrative`: Long-form prose section for features and UX notes.
  - `NextProject`: Call to action at the bottom.
