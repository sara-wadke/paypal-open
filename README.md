# PayPal Open

A single-page React application that recreates the **PayPal Open** landing screen. All content is static, so no backend or API is needed.

Built as a frontend assignment using React and Vite.

## Preview

The page includes:

- A top navigation bar with the PayPal logo, menu items (Personal, Business, Partners, Useful Info), and **Log In** and **Sign Up** buttons
- A **Personal / Business** toggle switch
- A hero section with the heading, subtitle, short description, and **Sign Up** and **Contact Sales** buttons

## Features

- Pixel-focused recreation of the PayPal Open landing page
- Working Personal / Business toggle that switches the hero content
- Static data stored separately from the components in `src/data.js`
- Reusable components: `Navbar`, `Hero`, and `Logo`
- Responsive layout that adapts to smaller screens
- Keyboard-friendly buttons with visible focus styles

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 18 | UI components and state |
| Vite 5 | Development server and build tool |
| CSS | Styling and responsive layout |

## Project Structure

```
paypal-open/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css
    ├── data.js
    └── components/
        ├── Logo.jsx
        ├── Navbar.jsx
        └── Hero.jsx
```

### Run in development

```bash
npm run dev
```

Then open http://localhost:5173 in your browser.

### Build for production

```bash
npm run build
npm run preview
```

## How It Works

- `src/data.js` holds all text, menu items, and button labels.
- `Navbar.jsx` renders the header from that data.
- `Hero.jsx` keeps the active tab in state and shows the matching content.
- `App.jsx` combines the two components into one page.

## Author

**Sara Wadke**
GitHub: https://github.com/sara-wadke/paypal-open.git
