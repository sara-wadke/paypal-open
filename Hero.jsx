import { useState } from "react";
import { tabs, heroContent } from "../data.js";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("business");
  const content = heroContent[activeTab];

  return (
    <section className="hero">
      <div className="tab-switch" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            className={activeTab === tab.id ? "tab active" : "tab"}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <h1 className="hero-title">{content.title}</h1>
      <h2 className="hero-subtitle">{content.subtitle}</h2>
      <p className="hero-description">{content.description}</p>

      <div className="hero-actions">
        <button type="button" className="btn btn-dark">
          {content.primaryCta}
        </button>
        <button type="button" className="btn btn-light">
          {content.secondaryCta}
        </button>
      </div>
    </section>
  );
}
