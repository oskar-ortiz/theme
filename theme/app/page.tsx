import type { ReactNode } from "react";

type ThemeOptionProps = {
  title: string;
  variant: "auto" | "light" | "dark";
  active?: boolean;
};

type SwitchRowProps = {
  label: string;
  icon: ReactNode;
  enabled: boolean;
  disabled?: boolean;
};

const colorDots = ["#fb7e72", "#f4bd63", "#95d96f", "#6fd7a8", "#6456de", "#e477d9"];

const SunIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <circle cx="10" cy="10" r="3" />
    <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M4.3 15.7l1.4-1.4M14.3 5.7l1.4-1.4" />
  </svg>
);

const PlayIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M7 5.8v8.4l7-4.2-7-4.2z" />
  </svg>
);

const PhotoIcon = (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <rect x="4" y="5" width="12" height="10" rx="2" />
    <path d="M7 11.5l2-2 2.3 2.3 1.6-1.6L15 12.5" />
    <circle cx="8" cy="8" r="1" />
  </svg>
);

function ThemeOption({ title, variant, active = false }: ThemeOptionProps) {
  return (
    <button type="button" className="theme-option" aria-pressed={active}>
      <span className={`theme-preview theme-preview-${variant} ${active ? "theme-preview-active" : ""}`}>
        <span className="preview-sidebar" />
        <span className="preview-line preview-line-a" />
        <span className="preview-line preview-line-b" />
        <span className="preview-line preview-line-c" />
        {active ? <span className="preview-check" /> : null}
      </span>
      <span className={`theme-label ${active ? "theme-label-active" : ""}`}>{title}</span>
    </button>
  );
}

function SwitchRow({ label, icon, enabled, disabled = false }: SwitchRowProps) {
  return (
    <div className="switch-row">
      <div className="switch-left">
        <span className="switch-icon">{icon}</span>
        <span>{label}</span>
      </div>
      <button
        type="button"
        className={`switch ${enabled ? "switch-on" : "switch-off"} ${disabled ? "switch-disabled" : ""}`}
        aria-pressed={enabled}
      >
        <span className="switch-thumb" />
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <div className="appearance-page">
      <main className="appearance-card">
        <header className="appearance-header">
          <h1>Appearance</h1>
          <p>Set or customize your preferences for the system</p>
        </header>

        <section className="section-row split-row">
          <div>
            <h2>Language</h2>
            <p>Select the language of the platform</p>
          </div>
          <button type="button" className="select-box" aria-label="Language">
            <span>English</span>
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m6 8 4 4 4-4" />
            </svg>
          </button>
        </section>

        <section className="section-row">
          <h2>Interface theme</h2>
          <p>Customize your application appearance</p>
          <div className="theme-grid">
            <ThemeOption title="Auto" variant="auto" />
            <ThemeOption title="Light" variant="light" active />
            <ThemeOption title="Dark" variant="dark" />
          </div>
        </section>

        <section className="section-row split-row">
          <div>
            <h2>Accent color</h2>
            <p>Pick your platform&apos;s main color</p>
          </div>
          <div className="color-row" aria-label="Accent colors">
            {colorDots.map((color) => (
              <span key={color} className="color-dot" style={{ backgroundColor: color }} />
            ))}
          </div>
        </section>

        <section className="switch-group" aria-label="Settings">
          <SwitchRow label="Reduce motion" icon={SunIcon} enabled />
          <SwitchRow label="Auto play" icon={PlayIcon} enabled />
          <SwitchRow label="High quality photo" icon={PhotoIcon} enabled={false} disabled />
        </section>

        <footer className="card-footer">
          <button type="button" className="text-button">
            Reset to default
          </button>
          <div className="footer-actions">
            <button type="button" className="ghost-button">
              Cancel
            </button>
            <button type="button" className="primary-button">
              Save Preferences
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
