import Logo from "./Logo.jsx";
import { navItems, authButtons } from "../data.js";

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
      <path
        d="M2 3.5l3 3 3-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a href="/" className="navbar-logo" aria-label="PayPal home">
            <Logo />
          </a>
          <nav className="navbar-links">
            {navItems.map((item) => (
              <button key={item.id} type="button" className="nav-link">
                <span>{item.label}</span>
                <Chevron />
              </button>
            ))}
          </nav>
        </div>
        <div className="navbar-right">
          <button type="button" className="btn btn-light btn-sm">
            {authButtons.login}
          </button>
          <button type="button" className="btn btn-dark btn-sm">
            {authButtons.signUp}
          </button>
        </div>
      </div>
    </header>
  );
}
