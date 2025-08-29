# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager.

- `pnpm dev`: Start development server with Turbopack for faster builds
- `pnpm build`: Build the application for production
- `pnpm start`: Start the production server
- `pnpm lint`: Run ESLint to check for code issues
- `pnpm update`: Update all dependencies to their latest compatible versions

## Architecture Overview

This is a personal portfolio website built with Next.js 15 using the App Router architecture. The site uses a modern stack focused on performance and maintainability.

### Key Technologies
- **Next.js 15.5.2** with App Router for routing and server-side rendering
- **React 19.1.1** for UI components
- **Tailwind CSS v4.1.12** for styling with PostCSS integration
- **EB Garamond** Google Font for typography
- **ESLint** with Next.js core web vitals configuration
- **pnpm** for fast, disk space efficient package management

### Maintenance Instructions
**IMPORTANT**: When dependencies are added, updated, or changed, always update the version numbers in the "Key Technologies" section above to reflect the current versions in package.json. This ensures the documentation stays accurate and up-to-date.

### Project Structure
- `app/`: Contains the main application code using App Router
  - `layout.js`: Root layout with font configuration and metadata
  - `page.js`: Main homepage with portfolio content
  - `components/`: Reusable UI components
    - `NavLink.js`: Navigation link component with hover states
    - `SectionHeader.js`: Styled section headers
    - `TimelineEntry.js`: Timeline/experience entry component
  - `globals.css`: Global styles and Tailwind CSS imports
- `public/`: Static assets including resume PDF

### Design System Patterns
- Components follow a consistent pattern with className prop merging
- Typography uses a mix of sans-serif (font-sans) and serif (font-serif) fonts
- Color scheme uses gray variants with blue accent colors
- Responsive design with mobile-first approach using Tailwind breakpoints
- Consistent spacing using Tailwind's space-y and gap utilities

### Layout Architecture
The homepage uses a two-column layout:
- Left sidebar: Fixed navigation with personal info and links
- Right content area: Scrollable sections (About, Experience, Projects, Writing, Now)
- Navigation uses anchor links for section scrolling

### Component Architecture
Components are functional React components with:
- Props destructuring with default values
- Conditional rendering for optional props
- Consistent className patterns for styling flexibility
- Semantic HTML structure for accessibility