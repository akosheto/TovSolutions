# Tov Industrial Automation - Project Guide

## Overview

Tov Industrial Automation is a professional B2B website for an industrial automation company serving Ontario manufacturers. The site showcases 15+ years of expertise in PLC programming, Siemens integration, and Allen Bradley solutions. It features a marketing-focused front-end with service descriptions, case studies, industry highlights, and a contact form system.

**Tech Stack:**
- Frontend: React with TypeScript, Vite, Wouter (routing), TanStack Query
- UI: shadcn/ui components with Tailwind CSS
- Backend: Express.js with TypeScript
- Database: PostgreSQL via Neon serverless with Drizzle ORM
- Design: Professional industrial B2B aesthetic inspired by IBM Carbon, Siemens, ABB

**Purpose:** Generate leads and establish credibility for industrial automation services targeting small manufacturers, bakeries, and material handling operations across Ontario.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Component-Based React Application:**
- Page-level components in `client/src/pages/` (Home, About, Services, CaseStudies, Contact, NotFound)
- Reusable section components in `client/src/components/` (Hero, TrustBar, ServicesOverview, CaseStudiesSection, FeaturesSection, IndustriesSection, CTASection, Header, Footer)
- shadcn/ui component library in `client/src/components/ui/` for consistent design system
- Client-side routing via Wouter (lightweight alternative to React Router)

**Rationale:** Component-based architecture enables reusability and maintainability. Wouter provides simple routing with minimal bundle size. shadcn/ui provides professional, accessible components that match the B2B industrial aesthetic.

**State Management:**
- TanStack Query for server state and API calls
- React hooks (useState, useEffect) for local component state
- Context for theme toggle functionality

**Rationale:** TanStack Query handles caching, refetching, and optimistic updates automatically. Avoids complexity of Redux for a primarily static marketing site with minimal interactive state.

### Design System

**Tailwind CSS Configuration:**
- Custom color palette matching industrial B2B aesthetic (Deep Industrial Blue, Professional Navy, Technical Orange)
- HSL-based theming system with CSS variables for light/dark mode support
- Custom spacing primitives (4, 6, 8, 12, 16, 20, 24) for consistent rhythm
- shadcn/ui "new-york" style variant with custom border radius values

**Typography:**
- Inter font family for headings and body text (modern, technical, authoritative)
- JetBrains Mono for technical content and numbers
- Defined scale from text-sm to text-6xl with responsive variants

**Rationale:** HSL color system enables easy theme variations. CSS variables allow runtime theme switching. Inter provides professional readability across all sizes. Design guidelines documented in `design_guidelines.md` ensure consistency.

### Backend Architecture

**Express.js REST API:**
- Single-file server setup in `server/index.ts`
- Route registration in `server/routes.ts`
- Storage abstraction layer in `server/storage.ts`
- Database connection in `server/db.ts`

**Request Flow:**
1. Express middleware logs requests and response times
2. Routes validate incoming data using Zod schemas
3. Storage layer interacts with database via Drizzle ORM
4. Responses sent as JSON

**Rationale:** Simple REST architecture sufficient for basic CRUD operations. Storage abstraction enables easy testing and potential future database migrations. Middleware-based logging provides visibility without external dependencies.

**API Endpoints:**
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact submissions (admin)

### Data Storage

**PostgreSQL Database via Neon Serverless:**
- Schema defined in `shared/schema.ts` using Drizzle ORM
- Single table: `contact_submissions` with fields for name, company, email, phone, project type, and message
- UUID primary keys generated via PostgreSQL `gen_random_uuid()`
- Automatic timestamp tracking for `created_at`

**Schema Design:**
```typescript
contact_submissions:
  - id (varchar, primary key, auto-generated UUID)
  - name (text, required)
  - company (text, optional)
  - email (text, required)
  - phone (text, optional)
  - project_type (text, optional)
  - message (text, required)
  - created_at (timestamp, auto-generated)
```

**Rationale:** Simple schema matches contact form requirements. UUID primary keys avoid auto-increment issues in distributed systems. Neon serverless provides PostgreSQL compatibility with automatic scaling. Drizzle ORM offers type-safe queries and schema migrations.

**Validation:**
- Zod schemas derived from Drizzle schema using `drizzle-zod`
- Shared validation logic between frontend and backend
- Type inference ensures TypeScript types match database schema

### Build & Development

**Development Mode:**
- Vite dev server with HMR for frontend
- tsx for TypeScript execution without compilation
- Vite middleware mode integrates frontend dev server with Express

**Production Build:**
- Vite bundles React frontend to `dist/public`
- esbuild bundles Express backend to `dist/index.js`
- Single `npm start` command serves both frontend and backend

**Rationale:** Vite provides fast development experience with instant HMR. esbuild offers rapid backend bundling. Middleware mode eliminates CORS issues during development.

### Asset Management

**Static Assets:**
- Generated images stored in `attached_assets/generated_images/`
- Images imported directly in components via Vite aliases
- Images include: hero backgrounds, case study photos, service detail images
- Optimized for web (PNG format)

**Alias Configuration:**
- `@/` maps to `client/src/`
- `@shared/` maps to `shared/`
- `@assets/` maps to `attached_assets/`

**Rationale:** Direct imports enable Vite's asset optimization pipeline. Aliases prevent fragile relative path imports. Centralized asset folder simplifies asset management.

## External Dependencies

### Core Framework Dependencies
- **React** (v18+): UI framework for component-based frontend
- **Express**: Minimal Node.js web framework for backend API
- **Vite**: Build tool and dev server with fast HMR
- **TypeScript**: Type safety across frontend and backend

### Database & ORM
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **Drizzle ORM**: Type-safe SQL ORM with migration support
- **drizzle-kit**: CLI tool for schema migrations
- **drizzle-zod**: Automatic Zod schema generation from Drizzle schemas

### UI Component Library
- **shadcn/ui**: Collection of Radix UI-based components (accordion, alert-dialog, avatar, badge, button, calendar, card, carousel, checkbox, collapsible, command, context-menu, dialog, dropdown-menu, form, hover-card, input, label, menubar, navigation-menu, popover, progress, radio-group, select, separator, sheet, sidebar, slider, switch, tabs, textarea, toast, tooltip)
- **Radix UI Primitives**: Accessible, unstyled component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx** & **tailwind-merge**: Conditional classname utilities

### State & Data Fetching
- **@tanstack/react-query**: Async state management and data fetching
- **wouter**: Lightweight client-side routing (alternative to React Router)

### Form Handling
- **react-hook-form**: Performant form validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod**: TypeScript-first schema validation

### Icons & Fonts
- **lucide-react**: Icon library
- **react-icons**: Additional icon library (Simple Icons for LinkedIn)
- **Google Fonts**: Inter (headings/body), JetBrains Mono (technical text)

### Date Utilities
- **date-fns**: Date formatting and manipulation

### UI Enhancements
- **embla-carousel-react**: Carousel component
- **cmdk**: Command palette component
- **vaul**: Drawer component

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Runtime error overlay for Replit
- **@replit/vite-plugin-cartographer**: Project navigation for Replit
- **@replit/vite-plugin-dev-banner**: Development environment banner

### Build Tools
- **esbuild**: Fast JavaScript bundler for backend
- **tsx**: TypeScript execution engine for development
- **postcss** & **autoprefixer**: CSS processing

**Rationale for Key Choices:**
- Neon serverless chosen for PostgreSQL compatibility with serverless deployment on Replit
- Drizzle ORM selected for TypeScript-first approach and zero-runtime overhead
- shadcn/ui provides professional components without framework lock-in (components are copied into project)
- TanStack Query handles complex async state scenarios (caching, refetching, optimistic updates)
- Wouter chosen over React Router for smaller bundle size in simple routing scenarios
- Zod enables runtime validation with TypeScript type inference