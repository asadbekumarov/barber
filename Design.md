# Gentleman's Blade Barbershop Website Design

## Overview
- **Motion Style**: "Cinematic Americana" - A blend of 50s barbershop heritage with modern editorial sophistication.
- **Animation Intensity**: Ultra-Dynamic
- **Technology Stack**: WebGL (Three.js/OGL), GSAP (ScrollTrigger, Flip), Lenis (Smooth Scroll), CSS Houdini

## Brand Foundation
- **Colors**: 
  - Primary: Red #E63946, Navy #1D3557, Beige #F1FAEE, Blue #457B9D
  - Secondary: Dark Blue #1D3557, Dark #0D0D0D, Light #F1FAEE, Blue #457B9D
  - Accents: Red #E63946, Yellow #F77F00, Blue #06B6D4
- **Typography**: 
  - Display: "National Park", "Londrina Solid"
  - Body: "Cutive Mono", "Inconsolata"
- **Core Message**: Precision, heritage, and modern confidence.
- **Font Family**: 
  - Primary: Londrina Solid (Display)
  - Secondary: National Park (Display)
  - Body: Inconsolata (Monospace)
  - Decorative: Cutive Mono (Monospace)

## Global Motion System

### Animation Timing
- **Easing Library**: 
  - *Razor Sharp*: `cubic-bezier(0.76, 0, 0.24, 1)` for UI elements
  - *Vintage Reveal*: `cubic-bezier(0.22, 1, 0.36, 1)` for layout transitions
- **Duration Scale**: 
  - Micro-interactions: 0.3s
  - Layout shifts: 0.8s
  - Page transitions: 1.2s
- **Stagger Patterns**: 0.05s per character for text, 0.15s per grid item

### Continuous Effects
- **Section-Specific Effects**: 
  - *Liquid Metal*: Subtle WebGL distortion on image hovers
  - *Film Grain*: Global noise overlay (opacity 0.03) to unify the vintage aesthetic
- **Purposeful Motion**: Elements float gently (sine wave y-axis) to mimic the "weightlessness" of a perfect haircut.
- **Living Textures**: The background colors (Red/Navy/Beige) breathe slowly (hue-rotate 5deg) to keep the page alive.

### Scroll Engine
- **Physics**: Momentum-based smooth scrolling (Lenis)
- **Parallax**: Multi-plane depth system (Background 0.1x, Content 1.0x, Floating Elements 1.5x)
- **Progress**: Scrollbars replaced by a custom "Razor" line that traces the edge of the screen.

## Section 1: Hero

### Layout
**The "Split Blade" Composition**
A revolutionary asymmetrical layout that defies the traditional 50/50 split. The text occupies the left third, breaking the grid with massive scale, while the right side features a 3D image cluster that reacts to cursor movement like a deck of cards.

#### Spatial Composition
- **Grid**: CSS Grid `1fr 1.5fr` with overlap zones.
- **Layering**: Text elements float *above* the image cluster using `mix-blend-mode: exclusion` where they overlap.
- **Z-Index**: Navigation (100), Hero Text (50), Image Cluster (10), Background Elements (1).

### Content
- **Subtitle**: "EXPERIENCE THE FINEST TRADITION OF MALE GROOMING."
- **Headline**: "GENTLEMAN'S BLADE" (Split into "GENTLEMAN'S" and "BLADE")
- **CTA**: "BOOK NOW"

### Images
**Hero Image 1 (Barbershop Interior)**
- **Resolution**: 960px width
- **Aspect Ratio**: 4:5
- **Transparent Background**: No
- **Visual Style**: Modern documentary, warm tungsten lighting
- **Subject**: Barber in fedora focusing on client's precision haircut
- **Color Palette**: Warm browns, golds, muted reds
- **Generation Prompt**: "Documentary-style barbershop photograph, medium close-up, barber wearing fedora and checkered shirt focusing intently on cutting client's hair with clippers, client in barber chair with towel around neck, dark hair falling on floor, warm tungsten lighting, shallow depth of field with soft background, wooden shelves with grooming products, vintage aesthetic, cozy intimate atmosphere, professional craftsmanship, warm brown and gold tones with muted reds, nostalgic mood, 4:5 aspect ratio"

**Hero Image 2 (Barbershop Exterior)**
- **Resolution**: 960px width
- **Aspect Ratio**: 4:5
- **Transparent Background**: No
- **Visual Style**: Candid documentary, retro vintage feel
- **Subject**: Elderly man in light suit receiving beard trim
- **Color Palette**: Warm neutrals, muted reds, greens
- **Generation Prompt**: "Candid documentary barbershop photograph, medium shot, elderly man in light-colored suit and glasses sitting in vintage barber chair receiving beard trim, barber's arm with clippers visible, dark striped barber pole in foreground left, cluttered counter with grooming products, large mirror reflecting shelves and products, warm tungsten overhead lighting, cozy nostalgic atmosphere, authentic vintage barbershop, warm neutral colors with muted reds and greens, soft focus background, 4:5 aspect ratio"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Hero Text | Split-Char Rise | y: 100% → 0% | 1.2s | 0.2s | Vintage Reveal |
| Image Cluster | 3D Card Deal | z: -500px → 0px, rot: 15deg → 0deg | 1.4s | 0.4s | Razor Sharp |
| Background | Curtain Wipe | clip-path: inset(0 100% 0 0) → inset(0) | 1.0s | 0.0s | Power3.inOut |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Image Cluster | Parallax Scatter | Top | Bottom | y: -100px to 100px (varied) |
| Scroll | Hero Text | Blur Fade | Top | 50% | blur: 0px → 10px, opacity: 1 → 0 |

#### Continuous Animations
- **Image Float**: The two hero images float in opposition (sine wave, different phases) to create dynamic tension.
- **Text Shimmer**: A subtle light sweep moves across the "GENTLEMAN'S BLADE" text every 5 seconds.

#### Interaction Effects
- **Magnetic Cluster**: On hover, the two images separate slightly (3D tilt) revealing depth.
- **Text Hover**: Hovering "BLADE" causes a quick "slice" animation (red line strike-through).

### Advanced Effects

#### 3D Elements
**Image Deck**
- The two images are positioned in 3D space (Z-axis offset: 50px).
- On mouse move, the entire container tilts (perspective: 1000px) to follow the cursor.

#### Shader Effects
**Liquid Hover**
- A WebGL displacement map is applied to the images on hover.
- The effect uses a "water ripple" distortion that settles like hair gel.

## Section 2: About

### Layout
**The "Blueprint" Layout**
Instead of a standard text block, the content is arranged along a diagonal axis. Typography acts as architectural structure. The "Details" list is reimagined as a vertical ticker.

#### Spatial Composition
- **Axis**: 15-degree diagonal rotation for the main container.
- **Structure**: Text is justified to both left and right edges (flush).
- **Background**: The Red #E63946 background features a subtle, animated cross-hatch pattern (SVG stroke animation) mimicking vintage blueprints.

### Content
- **Heading**: "A CUT ABOVE THE REST"
- **Description**: "Where tradition meets modern style..."
- **Details**: "Classic Cuts", "Straight Razor Shaves", "Beard Trimming", "Hot Towel Treatments"
- **CTA**: "VIEW SERVICES"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Heading | Line Draw | stroke-dashoffset: 100% → 0% | 1.0s | 0.0s | Linear |
| Description | Word Mask | y: 100% → 0% | 0.8s | 0.3s | Power2.out |
| Details Ticker | Slide In | x: 100% → 0% | 1.5s | 0.5s | Power3.out |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Diagonal Container | Rotation | Top | Bottom | rotate: 0deg → 5deg |
| Scroll | Ticker | Speed | Viewport Enter | Viewport Exit | speed: 1x → 3x |

#### Continuous Animations
- **Ticker Loop**: The "Details" items scroll infinitely vertically (Marquee effect) at varying speeds based on scroll velocity.

#### Interaction Effects
- **Hover Reveal**: Hovering the Description text reveals a hidden layer of "Thank You" messages from fake clients in the background.

## Section 3: Services

### Layout
**The "Accordion Deck"**
Services are not just a list; they are a physical stack of cards. As the user scrolls, the cards unstack and fan out horizontally. The "Vintage Menu" aesthetic is preserved but enhanced with 3D depth and physical lighting.

#### Spatial Composition
- **Perspective**: 2000px
- **Arrangement**: Stacked Z-axis initially, fanning out to a horizontal spread.
- **Typography**: Service titles are massive, running vertically along the side of each card.

### Content
- **Heading**: "OUR SERVICES"
- **Service 1**: "Classic Cut" ($40)
- **Service 2**: "The Gentleman's Grooming" ($65)
- **Service 3**: "Beard Trim" ($25)
- **Service 4**: "Hot Towel Shave" ($55)

### Images
**Service Image 1 (Classic Cut)**
- **Resolution**: 960px width
- **Aspect Ratio**: 4:3
- **Transparent Background**: No
- **Visual Style**: Candid documentary, intimate close-up
- **Subject**: Barber's hands using scissors to trim client's dark hair
- **Generation Prompt**: "Candid documentary barbershop photograph, close-up, barber's hands with gold ring using scissors to trim client's dark hair, client's ear and side profile visible, dark background with subtle highlights on hair and hands, soft diffused lighting, shallow depth of field, intimate and professional mood, warm neutral tones, clean sharp image, 4:3 aspect ratio"

**Service Image 2 (Beard Trim)**
- **Resolution**: 960px width
- **Aspect Ratio**: 4:3
- **Transparent Background**: No
- **Visual Style**: Hyper-realistic barbershop photography
- **Subject**: Man in barber chair receiving beard trim
- **Generation Prompt**: "Hyper-realistic barbershop photograph, medium shot from shoulders up, man sitting in vintage barber chair with dark leather upholstery and chrome armrest, wearing striped barber cape, focused upward expression, barber's hands with scissors visible near beard, dark wainscoted wall background with red metal cabinet and round mirror, modern wall-mounted faucet, soft diffused overhead lighting, warm muted color palette with deep reds and browns, professional and calm atmosphere, 4:3 aspect ratio"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Cards | Fan Out | rotateY: 0deg → 45deg, x: 0 → 100px | 1.2s | Stagger 0.2s | Back.out |
| Images | Zoom Out | scale: 1.5 → 1.0 | 1.5s | Stagger 0.2s | Power2.out |

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Card Stack | Expansion | Top | Center | gap: 0px → 40px |
| Scroll | Images | Parallax | Top | Bottom | y: -20% → 20% |

#### Interaction Effects
- **Card Lift**: Hovering a card lifts it (z-index increase, scale 1.05) and dims the others.
- **Image Wipe**: A "shutter" wipe effect reveals the service description on hover.

## Section 4: Barbers

### Layout
**The "Rogue's Gallery"**
A horizontal scroll section (pinning). The screen locks, and the barber profiles slide horizontally like mugshots or vintage baseball cards. The frames are 3D objects with thickness.

#### Spatial Composition
- **Container**: Sticky height (400vh scroll distance).
- **Track**: Horizontal flex container.
- **Frames**: Thick CSS borders with an inset shadow to simulate depth.

### Content
- **Heading**: "MEET THE ARTISTS"
- **Subheading**: "Our team of skilled barbers..."
- **Barber 1**: John Smith (Specialty: Classic Cuts)
- **Barber 2**: Mike Johnson (Specialty: Beard Design)
- **Barber 3**: Alex Green (Specialty: Modern Styles)

### Images
**Barber Portrait (John Smith)**
- **Resolution**: 960px width
- **Aspect Ratio**: 3:4
- **Transparent Background**: No
- **Visual Style**: Candid documentary, black and white
- **Subject**: Bearded man with shaved head in fedora
- **Generation Prompt**: "Candid black and white portrait photograph, medium close-up, bearded man with shaved head wearing dark fedora and dark buttoned-up shirt with white undershirt, seated leaning slightly forward, hands clasped, expressive face with raised eyebrows and slight smile, plain light gray wall background, soft diffused lighting from front-left, gentle shadows, relaxed and approachable mood, high contrast black and white, 3:4 portrait aspect ratio"

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Gallery Track | Horizontal Slide | Top | Bottom | x: 0% → -100% |
| Scroll | Portrait Frames | Rotation | Top | Bottom | rotateY: 0deg → 15deg |

#### Interaction Effects
- **Focus Mode**: Hovering a portrait blurs the others (filter: blur(5px)) and scales the active one up.
- **Name Reveal**: The Barber's name and specialty slide out from behind the frame on hover.

## Section 5: Testimonials

### Layout
**The "Vinyl Spin"**
Testimonials are presented as rotating vinyl records. The quote text wraps around the center label. The records spin slowly, and on interaction, the needle drops (visual indicator) and the text becomes fully opaque.

#### Spatial Composition
- **Arrangement**: Circular layout.
- **Typography**: Radial text layout (curved SVG text paths).
- **Background**: Dark #0D0D0D with a spotlight effect tracking the cursor.

### Content
- **Heading**: "VOICES OF STYLE"
- **Testimonial 1**: James Miller (Rating: 5 Stars)
- **Testimonial 2**: David Lee (Rating: 5 Stars)
- **Testimonial 3**: Chris Evans (Rating: 5 Stars)

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Records | Drop & Spin | y: -100vh → 0, rot: 720deg → 0 | 1.5s | Stagger 0.3s | Bounce.out |

#### Continuous Animations
- **Rotation**: Records rotate slowly (20s per revolution).
- **Float**: Entire group floats up and down (y: -10px to 10px).

#### Interaction Effects
- **Hover**: Hovering a record speeds up rotation and "flattens" the perspective (scale 1.1).

## Section 6: Contact

### Layout
**The "Neon Sign" Grid**
The form is broken into modular blocks that light up when active. The "Get In Touch" text is a giant neon sign that flickers to life. The layout uses a broken grid where input fields overlap slightly.

#### Spatial Composition
- **Grid**: Asymmetric masonry.
- **Inputs**: Minimalist lines that expand into boxes on focus.

### Content
- **Heading**: "GET IN TOUCH"
- **Fields**: Name, Email, Phone, Message
- **Button**: "SEND MESSAGE"

### Motion Choreography

#### Entrance Sequence
| Element | Animation | Values | Duration | Delay | Easing |
|---------|-----------|--------|----------|-------|--------|
| Heading | Neon Flicker | opacity: 0 → 1 (random) | 2.0s | 0.0s | SteppedEase |
| Form Lines | Draw | width: 0% → 100% | 0.8s | Stagger 0.1s | Power2.inOut |

#### Interaction Effects
- **Focus**: Clicking an input triggers a "current" line animation (electric blue) traveling through the border.
- **Submit**: The button transforms into a paper plane and flies out on click.

## Section 7: Footer

### Layout
**The "Curtain Call"**
A massive footer that reveals itself from *behind* the previous section (z-index -1). The previous section lifts up like a curtain to reveal the footer fixed at the bottom of the viewport.

#### Spatial Composition
- **Position**: Fixed (bottom: 0, left: 0, right: 0).
- **Z-Index**: -1.
- **Height**: 80vh.

### Content
- **Logo**: Gentleman's Blade (Large)
- **Links**: Navigation, Socials
- **Copyright**: © 2025

### Motion Choreography

#### Scroll Effects
| Trigger | Element | Effect | Start | End | Values |
|---------|---------|--------|-------|-----|--------|
| Scroll | Previous Section | Curtain Lift | Bottom of section | End | y: 0 → -80vh |

---

## Technical Implementation Notes

### Required Libraries
- **GSAP (GreenSock)**: Core animation engine (ScrollTrigger, Flip plugin).
- **Lenis**: For buttery smooth momentum scrolling (critical for the parallax effects).
- **Three.js**: For the Hero image distortion and 3D card effects.
- **SplitType**: For advanced text splitting (lines, words, chars).

### Critical Performance Rules
- ✅ **Compositor Only**: Animate `transform` and `opacity` only.
- ✅ **Will-Change**: Apply `will-change: transform` to the Hero images and Gallery track during animation.
- ✅ **Virtual Scroll**: If the gallery exceeds 10 items, implement virtualization.
- ✅ **Texture Optimization**: Use WebP/AVIF for all photographic assets.
- ❌ **No Layout Thrashing**: Do not animate `width`, `height`, or `margin`. Use `scale` instead.
- ❌ **Limit Filters**: Use backdrop-filter sparingly (only on the Nav).

### Browser Support
- **Progressive Enhancement**: Fallback to standard CSS Grid layouts if JS fails or `prefers-reduced-motion` is true.
- **Mobile**: Disable the "Curtain Call" footer on mobile; use standard static footer.

### Accessibility
- **Reduced Motion**: If detected, disable parallax, smooth scroll, and 3D tilts. Switch to simple fades.
- **Screen Readers**: Ensure text-splitting for animation does not break ARIA labels (use `aria-label` on parent).
