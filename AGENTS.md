# BlueRide — Static Website

## Overview
A static HTML/CSS/JS website (Hebrew, RTL) for a Sea of Galilee boating company. No build system, no backend, no database.

## Running
```bash
docker compose -f docker-compose.base44.yml up -d
```
Serves all static files via nginx:alpine on port 3000.

## Case-Sensitivity Fix
Files on disk use UPPERCASE names (HOME.CSS, ORDER.HTML, etc.) but HTML links reference lowercase (home.css, order.html). Lowercase symlinks were created to bridge this on Linux:
- `HOME.html → home.html`, `order.html → ORDER.HTML`, `about.html → ABOUT.HTML`, `testimonials.html → testimonials.HTML`
- `home.css → HOME.CSS`, `order.css → ORDER.CSS`, `about.css → ABOUT.CSS`, `wheel.css → WHEEL.CSS`, `testimonials.css → testimonials.CSS`
- `wheel.js → WHEEL.JS`, `testimonials.js → testimonials.JS`

## Pages
- `home.html` — Homepage (entry point at `/`)
- `ORDER.HTML` — Activity ordering page (JS cart in order.js)
- `WHEEL.HTML` — Prize wheel (wheel.js / WHEEL1.JS)
- `testimonials.HTML` — Customer testimonials
- `ABOUT.HTML` — About page

## Verification
```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/  # should be 200
```
