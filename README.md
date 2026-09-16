# 🚀 AIYOOO Startup — Digital Studio & Creative Agency

A modern, high-impact landing page crafted for **AIYOOO Startup**, showcasing digital agency services including custom websites, developer/artist portfolios, ATS-ready resumes, next-generation AI media, and end-to-end startup MVP projects.

The website features smooth 3D card-stacking scroll animations, interactive elastic hover buttons, looping video showcase backgrounds, and a vertical headline ticker.

---

## ✨ Features & Highlights

- **3D Card Stacking on Scroll**: Powered by **GSAP** & **ScrollTrigger**, service cards smoothly pin, rotate in 3D perspective (`rotationX`, `rotationZ`, `scale`), and fade as the user scrolls through the showcase.
- **Dynamic Vertical Ticker**: An automated headline ticker in the hero section that cycles through service offerings with fluid easing.
- **Interactive "Color Swoosh" Buttons**: Custom CSS physics with elastic easing (`--elastic-ease-out`), 3D rotational tilt, and layered background color transitions on hover.
- **Embedded HTML5 Video Showcase**: High-definition looping video backgrounds embedded directly in service cards for an engaging visual experience.
- **Fluid Adaptive Scaling**: Responsive sizing system powered by CSS `clamp()` and container query math for seamless presentation across desktop, tablet, and mobile displays.
- **Floating Navigation Pill**: Smooth-scroll anchored navigation menu with responsive mobile drawer support.

---

## 🛠️ Core Services Showcase

| Section | Service | Description | Media Preview |
|---|---|---|---|
| `#portfolio` | **Digital Identity** | High-performance custom portfolios showcasing creative and technical work. | `Media/Luca.mp4` |
| `#resume` | **Career Boost** | ATS-friendly and visually compelling resumes tailored for career growth. | `Media/panda.mp4` |
| `#ai-works` | **Next Gen Media** | AI-generated visuals, dynamic promotional videos, and creative media. | `Media/frozen.webm` |
| `#websites` | **Online Presence** | High-speed, responsive, and SEO-optimized custom web applications. | `Media/THIS_IS_4K_KUNG_FU_PANDA.mp4` |
| `#projects` | **Startup Projects** | Full-cycle MVP development, SaaS architecture, and product launch support. | `Media/Luca.mp4` |
| `#contact` | **Contact & Inquiries** | Call-to-action section with direct email contact. | — |

---

## 📁 Project Structure

```
Aiyooo/
├── index.html       # Single-page application markup, embedded styles, and GSAP scripts
├── Media/           # Local video and image assets
│   ├── Luca.mp4
│   ├── THIS_IS_4K_KUNG_FU_PANDA.mp4
│   ├── frozen.webm
│   ├── panda.mp4
│   └── Photo_1643970312407.jpg
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### 1. Direct Browser Launch
Simply double-click [`index.html`](./index.html) or right-click and select **Open with** > **Google Chrome** / **Microsoft Edge** / **Firefox**.

### 2. Local Development Server
To serve media files and scripts via a local web server:

**Using Python:**
```bash
cd "Aiyooo"
python -m http.server 8080
```
Then visit `http://localhost:8080` in your web browser.

**Using VS Code:**
- Install the **Live Server** extension.
- Right-click [`index.html`](./index.html) and choose **Open with Live Server**.

---

## ⚙️ Customization Guide

### Changing Hero Ticker Speed & Items
In [`index.html`](./index.html), locate the ticker script (around line 587):
```javascript
const intervalTime = 1500; // Change interval duration in milliseconds
```

### Modifying Card Scroll Animation (GSAP)
In [`index.html`](./index.html), find the ScrollTrigger script (around line 638):
```javascript
gsap.to(content, {
    rotationZ: (Math.random() - 0.5) * 10,
    scale: 0.7,
    rotationX: 40,
    ease: 'power1.in',
    scrollTrigger: {
        pin: contentWrapper,
        trigger: slide,
        start: 'top top',
        end: '+=' + window.innerHeight,
        scrub: true
    }
});
```
You can tweak `scale`, `rotationX`, and `end` values to adjust the 3D perspective effect.

### Updating Contact Email
In the `#contact` section, locate the CTA button and update the `href`:
```html
<a href="mailto:hello@aiyooo.com" class="button-default w-inline-block">
```

---

## 🧰 Tech Stack

- **Markup & Styling**: HTML5, CSS3 (CSS Custom Properties, 3D Transforms, Responsive clamp scaling)
- **Animation Engine**: [GSAP (GreenSock)](https://greensock.com/) 3.13.0 + **ScrollTrigger**
- **Media**: HTML5 Video (`<video>` autoplay, muted, looping WebM/MP4)
