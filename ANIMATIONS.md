# Premium Animations Added to AMK Website

## Animation Framework (globals.css)

### Keyframe Animations
- **fadeIn**: Smooth opacity transition from 0 to 1
- **fadeInDown**: Fade in from top with 20px downward movement
- **fadeInUp**: Fade in from bottom with 20px upward movement
- **slideInLeft**: Slide in from left with 30px horizontal movement
- **slideInRight**: Slide in from right with 30px horizontal movement
- **scaleIn**: Scale up from 0.95 to 1 with fade in

### Animation Utility Classes
- `animate-fade-in`: Basic fade-in animation (0.6s)
- `animate-fade-in-down`: Fade in from top (0.8s)
- `animate-fade-in-up`: Fade in from bottom (0.8s)
- `animate-slide-in-left`: Slide in from left (0.8s)
- `animate-slide-in-right`: Slide in from right (0.8s)
- `animate-scale-in`: Scale in with fade (0.6s)

### Delay Classes
- `animate-delay-100`: 100ms delay
- `animate-delay-200`: 200ms delay
- `animate-delay-300`: 300ms delay
- `animate-delay-400`: 400ms delay
- `animate-delay-500`: 500ms delay

### Hover Effects
- `hover-lift`: Subtle -2px translateY on hover with shadow enhancement
- `hover-scale`: Scale to 1.05 on hover (for images)
- `transition-smooth`: All properties transition with 300ms ease-in-out

## Page-by-Page Implementation

### Layout (Root)
- Main container: `page-enter` class for smooth page transitions
- Header: `animate-fade-in-down` for entrance

### Home Page (`page.tsx`)
- **Services Section**: 
  - Image: `animate-slide-in-left`, `hover-scale`
  - Content: `animate-slide-in-right`, `animate-delay-200`
  - Button: `hover-lift`

- **Products Section**:
  - Content: `animate-slide-in-left`, `animate-delay-200`
  - Image: `animate-slide-in-right`, `hover-scale`
  - Button: `hover-lift`

- **Brands Section**:
  - Heading: `animate-fade-in-down`
  - Each logo: `animate-scale-in` with staggered delays (100-500ms)
  - Cards: `hover-lift`, `hover:shadow-xl`

### Services Page (`services/page.tsx`)
- Hero image: `animate-fade-in`, `hover-scale`
- Heading: `animate-fade-in-down`
- Description: `animate-fade-in-up`, `animate-delay-100`
- Service cards: `animate-fade-in-up` with staggered delays (100-500ms)
  - Each card: `hover-lift`, `hover:shadow-xl`
  - Images: `hover-scale`
  - Buttons: `hover-lift`

### Products Page (`products/page.tsx`)
- Hero image: `animate-fade-in`, `hover-scale`
- Intro text: `animate-fade-in-down`

### Projects Page (`our-projects/page.tsx`)
- Heading: `animate-fade-in-down`
- Description: `animate-fade-in-up`, `animate-delay-100`
- Project cards: `animate-fade-in-up` with staggered delays (100-500ms)
  - Each card: `hover-lift`, `hover:shadow-xl`
  - Images: `hover-scale`

### About Us Page (`about-us/page.tsx`)
- Heading: `animate-fade-in-down`
- Description: `animate-fade-in-up`, `animate-delay-100`
- Image: `animate-slide-in-left`, `hover-scale`
- Content: `animate-slide-in-right`, `animate-delay-200`
- Expertise items: `animate-fade-in-up` with staggered delays (300-500ms)
- Button: `hover-lift`
- Chairman's message heading: `animate-fade-in-down`
- Chairman's message content: `animate-fade-in-up`, `animate-delay-100`

### Contact Page (`contact-us/page.tsx`)
- Heading: `animate-fade-in-down`
- Description: `animate-fade-in-up`, `animate-delay-100`
- Contact info cards: `animate-fade-in-up` with staggered delays (100-300ms)
- Map: `animate-slide-in-left`
- Form section: `animate-slide-in-right`, `animate-delay-200`
- Submit button: `hover-lift`
- Email/phone links: `transition-smooth` on hover

### Header (`components/layout/header.tsx`)
- Header container: `animate-fade-in-down`
- Mobile menu button: `hover-lift`
- Navigation links: `transition-smooth`, `hover-lift`

## Animation Timing Summary
- **Fast animations**: 0.6s (fade-in, scale-in)
- **Standard animations**: 0.8s (slide, fade with direction)
- **Delays**: Staggered 100-500ms for sequential reveals
- **Hover transitions**: 300ms ease-in-out

## Best Practices Applied
1. **Staggered delays** for grid items to create cascade effect
2. **Hover effects** on interactive elements (buttons, cards, images)
3. **Directional animations** (slide-in-left/right) for content blocks
4. **Scale animations** for images to add depth
5. **Consistent timing** across all animations for cohesive feel
6. **Subtle transforms** (2px lift, 1.05 scale) to avoid overwhelming users

## Performance Considerations
- All animations use CSS transforms and opacity (GPU-accelerated)
- No JavaScript-based animations for smooth 60fps performance
- Animations set to `forwards` fill-mode to maintain final state
- Single `page-enter` class on layout for smooth page transitions
