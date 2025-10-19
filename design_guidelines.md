# Tov Industrial Automation - Design Guidelines

## Design Approach
**Hybrid Approach**: Professional corporate design drawing from IBM Carbon Design System principles with industrial B2B aesthetics inspired by Siemens, ABB, and Rockwell Automation corporate sites. Focus on credibility, technical expertise, and trust-building through clean, authoritative design.

**Key Principles**:
- Professional credibility over flashy design
- Technical authority through structured information hierarchy
- Trust-building through authentic imagery and detailed case studies
- Ontario-focused geographic authenticity

## Color Palette

**Primary Colors**:
- Deep Industrial Blue: 210 70% 35% (headers, primary CTAs, navigation)
- Professional Navy: 215 60% 25% (accents, secondary elements)

**Neutral Palette**:
- Charcoal: 220 15% 20% (body text, dark mode primary)
- Slate Gray: 215 20% 45% (secondary text, borders)
- Light Gray: 210 15% 95% (backgrounds, cards)
- Pure White: 0 0% 100% (content backgrounds)

**Accent Colors**:
- Technical Orange: 25 85% 55% (sparingly for CTAs, highlights - evokes industrial safety/precision)
- Success Green: 145 60% 45% (status indicators, checkmarks)

**Implementation**: Use light mode as default with subtle gray backgrounds. Maintain high contrast for professional readability.

## Typography

**Font Stack** (Google Fonts):
- **Headings**: Inter (weights: 600, 700) - modern, technical, authoritative
- **Body**: Inter (weights: 400, 500) - consistent, highly readable
- **Technical/Numbers**: JetBrains Mono (weight: 500) - for specifications, years of experience

**Scale**:
- Hero H1: text-5xl md:text-6xl font-bold
- Section H2: text-3xl md:text-4xl font-semibold
- Card H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg leading-relaxed
- Captions: text-sm text-slate-600

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-16 md:py-24
- Component spacing: space-y-8 md:space-y-12
- Card padding: p-6 md:p-8
- Grid gaps: gap-6 md:gap-8

**Container Strategy**:
- Max width: max-w-7xl mx-auto
- Content sections: px-4 md:px-6 lg:px-8
- Reading content: max-w-4xl for case studies

## Component Library

**Navigation**:
- Fixed header with white background, subtle shadow
- Logo left, horizontal menu right (Home, Services, Case Studies, About, Contact)
- Mobile: hamburger menu with slide-in drawer
- CTA button in navigation: "Request Consultation" (orange accent)

**Hero Section**:
- Large industrial facility/automation equipment image (authentic Ontario manufacturing setting)
- H1: "Industrial Automation Excellence Across Ontario"
- Subheading highlighting 15 years, PLC expertise, Siemens/Allen Bradley
- Two CTAs: Primary "View Our Work", Secondary "Contact Mark"
- Height: 85vh with gradient overlay (dark blue to transparent)
- Blur background for outline buttons

**Homepage Sections**:
1. **Trust Bar**: Single row stats - "15+ Years Experience | 100+ Projects | Ontario-Based | PLC Experts"
2. **Services Overview**: 3-column grid (PLC Programming, Siemens Integration, Allen Bradley Solutions) with icons, descriptions, "Learn More" links
3. **Featured Case Studies**: 2-column grid showcasing 2-3 recent projects with images, client type, solution summary
4. **Why Choose Tov**: 4-column features (Expertise, Local Service, Proven Results, Technical Support) with subtle icons
5. **Industries Served**: Visual grid with images - Small Manufacturing, Food Processing/Bakeries, Material Handling
6. **CTA Section**: "Ready to Automate Your Operations?" with contact form preview

**Case Studies Page**:
- Filterable grid (by industry, solution type)
- Each card: Project image, client industry (anonymized), challenge, solution, results
- Detailed view: Full-width hero image, problem statement, technical approach, equipment used (Siemens/Allen Bradley details), outcomes with metrics
- 2-column layout for detailed case studies: left content, right sidebar with project specs

**Services Page**:
- Hero with technical equipment image
- Detailed service cards with expandable sections
- Technical specifications tables for PLC capabilities
- "Technology Partners" section showcasing Siemens, Allen Bradley, Rockwell logos

**About Page**:
- Mark's professional headshot with Ontario industrial background
- Timeline of 15-year history (horizontal on desktop, vertical on mobile)
- Certifications and expertise badges
- Team photo if applicable (workshop/on-site)
- Values section: Reliability, Technical Excellence, Local Partnership

**Contact Page**:
- 2-column layout: Left - contact form (Name, Company, Email, Phone, Project Type dropdown, Message), Right - contact info, office hours, service area map highlighting Ontario
- Form fields with professional styling, validation states
- Response time indicator: "We respond within 24 hours"

**Footer**:
- 4-column layout: Company (quick links), Services (list), Contact Info, Service Area
- Newsletter signup: "Industry Automation Insights" (optional value-add)
- Social links (LinkedIn for B2B credibility)
- Copyright, credentials/certifications

## Images Strategy

**Critical Images**:
1. **Hero**: Large, high-quality industrial automation scene - PLCs, control panels, or Ontario manufacturing facility (authentic, not stock if possible)
2. **Case Study Cards**: Project-specific images showing installations, control panels, before/after
3. **About Page**: Professional headshot of Mark, possibly on-site or in workshop
4. **Services**: Technical equipment closeups (Siemens PLCs, Allen Bradley controllers)
5. **Industries**: Representative images of bakeries, small manufacturing facilities
6. **Background elements**: Subtle circuit board or automation patterns for section dividers

**Image Treatment**: Professional photography style, slightly desaturated for industrial feel, consistent aspect ratios (16:9 for heroes, 4:3 for cards)

## Interactions & Animations

**Minimal, Professional**:
- Smooth scroll behavior
- Hover states: subtle scale (1.02) and shadow elevation on cards
- Button transitions: 150ms background color changes
- Page transitions: simple fade-ins
- NO heavy animations, parallax, or distracting effects
- Focus on fast, responsive interactions

## Accessibility & Performance

- WCAG AA contrast ratios minimum
- Semantic HTML throughout
- Alt text for all project images
- Fast loading: optimize images, lazy load below fold
- Mobile-first responsive design
- Keyboard navigation support

This creates a trustworthy, professional B2B website that positions Tov Industrial Automation as Ontario's credible industrial automation expert while showcasing Mark's 15 years of proven experience.