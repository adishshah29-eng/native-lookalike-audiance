a. PROJECT OVERVIEW
(from raw prompt only)
A conversion-focused single-page landing website built exclusively to convert paid ad traffic into leads. The sole business goal is lead generation — every section, every pixel, every CTA exists to push the visitor toward one action: submitting contact details or clicking a WhatsApp/call button.
Structure: 6 sections — Hero → How It Works (3 steps) → Benefits/Features → Pricing → Testimonials → Contact Form
Form: Visual-only, FormSubmit placeholder
Responsiveness: Fully responsive, mobile-first
Security: No exposed keys, sanitized inputs, no trackers

b. VISUAL LANGUAGE
(extracted from screenshots only)
Aesthetic Mood: Clean editorial light theme. Mostly white with a dramatic dark hero. Premium agency feel — not corporate, not startup-generic. Sharp sans-serif type, generous whitespace, rounded cards, one warm amber accent.
Background System:

Hero section ONLY: #1C1C1C deep charcoal (near-black, NOT pure black)
All other sections: #FFFFFF pure white
Footer: #F0F0F0 light gray
FAQ / feature section bg: #F7F7F7 off-white

Accent Color: #F5A623 — warm amber/orange. Used ONLY for icon container circles and small highlights. No neon, no lime.
Text Colors:

On dark hero: #FFFFFF headings, #CCCCCC subtext
On white sections: #111111 headings, #555555 body, #999999 labels
Eyebrow labels: #888888, 11px, ALL CAPS, letter-spacing 2px
CTA button text on dark pill: #111111

Typography:

Font: Inter (Google Fonts) — geometric sans-serif, used throughout
H1 Hero: 52px mobile / 72px desktop / weight 800 / line-height 1.1
H2 Section: 36px mobile / 48px desktop / weight 700 / line-height 1.2
"WHAT WE DO" style all-caps display: 40px / weight 900 / tracking 1px
Body: 15px / weight 400 / line-height 1.7 / color #555555
Eyebrow: 11px / weight 600 / ALL CAPS / letter-spacing 2px
Button: 14px / weight 600

Navbar:

Background: #FFFFFF, floating above hero with slight box-shadow 0 1px 0 rgba(0,0,0,0.08)
Logo: left-aligned, black double-square icon (●●) + wordmark
Right: WhatsApp icon (green #25D366) + hamburger menu icon
Height: 56px, border-radius 999px pill shape on mobile (floats over hero)
Nav is a floating pill: background: #FFFFFF, border-radius: 40px, padding: 10px 20px, centered horizontally

Hero Section:

Background: #1C1C1C charcoal, fills 100vh
Badge pill: background: rgba(255,255,255,0.12), border: 1px solid rgba(255,255,255,0.2), border-radius: 999px, contains "CF" icon + "We make things go viral" text in white
H1: white, centered, bold
Subtitle: #BBBBBB, centered, 16px
CTA button: background: #FFFFFF, color: #111111, border-radius: 999px (full pill), padding: 12px 28px, no border, no shadow
Transition zone: hero fades into white via a large dark-to-light gradient blob at bottom

Partnership Cards (Horizontal Scroll):

Dark image cards, border-radius: 16px, overflow: hidden
Person name + role in top-left white text overlay
View count in bottom-left large white bold text
Cards scroll horizontally on mobile

Stats Row:

White background, 3 stats side by side
Number: 48px / weight 800 / #111111
Label: 11px / ALL CAPS / #888888 / letter-spacing 2px

Feature/Info Cards:

background: #FFFFFF
border: 1px solid #E8E8E8
border-radius: 16px
box-shadow: 0 2px 12px rgba(0,0,0,0.05)
padding: 24px
Icon container: 44px circle, background: #F5A623, border-radius: 50%, white icon SVG inside
Title: 17px / weight 600 / #111111
Body: 14px / #666666

Tab Pills (How It Works):

background: #FFFFFF
border: 1px solid #DDDDDD
border-radius: 8px
padding: 10px 16px
Icon + ALL CAPS label in #444444
Active tab: background: #F0F0F0

FAQ Accordion:

Each item: white card, border: 1px solid #EBEBEB, border-radius: 12px, padding: 18px 20px, margin-bottom: 8px
+ icon right-aligned, color: #111111
Expanded: × icon, answer in #666666 below
Left column: eyebrow label + bold H2 + "Can't find your answer?" card with solid black pill button

"Contact us" / Primary Dark Button:

background: #111111
color: #FFFFFF
border-radius: 999px
padding: 12px 24px
font-weight: 600

Footer:

background: #F0F0F0
Logo + tagline left
3-column links grid: Services / Pages / Support
Bottom bar: "CLIPPING FARM" all-caps left + Instagram / LinkedIn / X icons right
All text: #444444


c. PAGE-BY-PAGE UI PLAN

SECTION 1 — NAVBAR (Floating Pill)

Centered pill navbar floating over hero, NOT full-width bar
background: #FFFFFF, border-radius: 40px, padding: 10px 20px, box-shadow: 0 2px 12px rgba(0,0,0,0.15)
Left: ●● logo icon (black)
Right: WhatsApp icon (green) + hamburger icon (black)
Position: fixed top: 16px, centered, width: 90%, max-width: 420px, z-index: 100
Mobile hamburger expands to full-screen overlay nav


SECTION 2 — HERO

background: #1C1C1C, min-height: 100vh
Center-aligned content vertically and horizontally
Badge pill with "CF" + "We make things go viral"
H1 white bold heading (2 lines)
Subtitle #BBBBBB
White pill CTA button "Book a Call"
Below: embedded video card (white rounded frame on dark bg) — use a placeholder gray box with play icon
Fade transition at bottom: background: linear-gradient(to bottom, #1C1C1C 60%, #FFFFFF 100%)


SECTION 3 — PARTNERSHIP CARDS (Horizontal Scroll)

background: #FFFFFF
"Partnerships" heading left-aligned, black, 28px bold
Horizontal scroll row of 5 dark image cards — border-radius: 16px, width: 160px, height: 240px
Each card: dark overlay gradient, name/role top-left in white 12px, views count bottom-left in white 24px bold
overflow-x: auto, scroll-snap-type: x mandatory, hide scrollbar


SECTION 4 — STATS BAR

background: #FFFFFF, padding: 40px 24px
3-column flex row
Each stat: large number bold + small ALL-CAPS label below
Dividers between stats: 1px solid #E8E8E8


SECTION 5 — WHAT WE DO + HOW IT WORKS

Background #FFFFFF
"WHAT WE DO" — centered, 900 weight, 40px, #111111, all-caps display heading
Body paragraph below: centered, 15px, #555555
Below: "HOW CAN CLIPPING HELP YOU" — same large all-caps style
Second paragraph below it
Then: "How It Works" eyebrow + H2 heading
3 horizontal tab pills beneath heading
Large dark rounded image/video card below tabs (content panel)


SECTION 6 — FEATURES (Performance Cards)

Background #F7F7F7
Eyebrow: "CLIPPING CAMPAIGN BASICS" in #888888
H2: "How we think about performance-based distribution."
2-column grid of 3 white rounded cards with amber icon circles
Cards: Performance-first / Founder-led / Built for scale


SECTION 7 — PRICING

Background #FFFFFF
Eyebrow + H2 centered
3-column card grid: Starter / Growth / Enterprise
Middle card: border: 2px solid #111111 to highlight
Feature list with ✓ in #F5A623
CTA button bottom of each card


SECTION 8 — TESTIMONIALS

Background #F7F7F7
3 white cards, border-radius: 16px, quote + name + role + ★★★★★ in #F5A623


SECTION 9 — CONTACT / LEAD FORM

Background #FFFFFF
50/50 split: left = heading + WhatsApp CTA; right = form
Inputs: background: #F7F7F7, border: 1px solid #E0E0E0, border-radius: 10px, padding: 14px
Focus: border-color: #111111
Submit: dark pill button full-width


SECTION 10 — FAQ

Background #F7F7F7
Left column: eyebrow + H2 + "Can't find your answer?" card + black pill "Contact us" button
Right column: 8 accordion cards


SECTION 11 — FOOTER

Background #F0F0F0
Logo + tagline top-left
Optional search/query input bar (gray pill)
3 link columns: Services / Pages / Support
Bottom: "CLIPPING FARM" left + social icons right


d. COMPONENT SPECS
Color Tokens:
--color-bg-hero:       #1C1C1C
--color-bg-white:      #FFFFFF
--color-bg-light:      #F7F7F7
--color-bg-footer:     #F0F0F0
--color-text-primary:  #111111
--color-text-body:     #555555
--color-text-muted:    #888888
--color-text-hero:     #FFFFFF
--color-text-hero-sub: #BBBBBB
--color-accent-amber:  #F5A623
--color-border:        #E8E8E8
--color-whatsapp:      #25D366
--color-btn-dark-bg:   #111111
--color-btn-dark-text: #FFFFFF
--color-btn-light-bg:  #FFFFFF
--color-btn-light-text:#111111
Typography Scale:
--text-hero:     52px / 800 / lh 1.1
--text-h2:       36px / 700 / lh 1.2
--text-display:  40px / 900 / ALL CAPS / ls 1px
--text-h3:       18px / 600
--text-body:     15px / 400 / lh 1.7
--text-sm:       13px / 400
--text-eyebrow:  11px / 600 / ALL CAPS / ls 2px
--text-btn:      14px / 600
Spacing:
--space-xs:   8px
--space-sm:   16px
--space-md:   24px
--space-lg:   48px
--space-xl:   80px
Border Radius:
--radius-pill: 999px  (buttons, badges, navbar)
--radius-card: 16px   (all cards)
--radius-tab:  8px    (tab pills)
--radius-input:10px   (form inputs)

e. BUILD INSTRUCTIONS FOR STITCH

Init: Single index.html, embed <style> + <script>. Import Inter from Google Fonts.
Base reset: box-sizing: border-box, body { background: #FFFFFF; font-family: 'Inter', sans-serif; color: #111111; margin: 0; }, html { scroll-behavior: smooth; }
Navbar first: Fixed pill, centered, top: 16px, white bg, border-radius: 40px, logo + whatsapp icon + hamburger. Hamburger toggles full overlay menu.
Hero: #1C1C1C full-height, badge pill, H1, subtitle, white pill CTA, video placeholder card, bottom gradient fade to white.
Partnership horizontal scroll: CSS scroll snap, hide scrollbar with ::-webkit-scrollbar { display: none }, dark image cards.
Stats bar: 3-column flex, bold numbers, ALL-CAPS labels, border-right: 1px solid #E8E8E8 as divider.
What We Do: Large all-caps display headings, centered, body text, then How It Works with 3 tab pills using JS classList.toggle('active').
Feature cards: 2-col CSS grid, white cards, amber icon circles (CSS circle, background: #F5A623, 44px), title + body.
Pricing: 3-col grid, middle card border: 2px solid #111111, feature list ✓ in amber.
Testimonials: 3-col grid, white cards, amber ★ stars.
Contact form: 50/50 flex. action="https://formsubmit.co/PLACEHOLDER". Focus ring via :focus { border-color: #111111; outline: none; }.
FAQ accordion: JS addEventListener('click') toggles max-height from 0 to 500px with transition: max-height 0.3s ease. + rotates to ×.
Footer: #F0F0F0 bg, 3-col links grid, bottom flex row with brand name + social icons.
Responsive breakpoints at 768px and 480px: hero H1 to 40px, grids to single column, stats stack vertically, horizontal scroll cards stay horizontal.
Final QA: Confirm all sections on white except hero. Check amber #F5A623 only on icon circles and checkmarks. Verify floating pill navbar stays centered on all widths.