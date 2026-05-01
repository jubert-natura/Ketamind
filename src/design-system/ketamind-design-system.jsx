/* eslint-disable react/no-unescaped-entities */
/**
 * ketaMIND — Botanical OS · Design System Showcase · v7
 *
 * A React port of the original ketamind-design-system.html.
 * All tokens come from `src/styles/tokens.css`; component CSS lives
 * in `ketamind-design-system.css`. No Tailwind.
 */
import "../styles/tokens.css";
import "../components/ui/button.css";
import "./ketamind-design-system.css";
import { Button } from "../components/ui/button";

const HOLO_STOPS = [
  { name: "holo/lilac",      hex: "#DFB2FF", role: "Spectrum · 0%" },
  { name: "holo/violet",     hex: "#AC9CFF", role: "Spectrum · 17%" },
  { name: "holo/periwinkle", hex: "#8CA4FC", role: "Spectrum · 33%" },
  { name: "holo/sky",        hex: "#7EC4FF", role: "Spectrum · 50%" },
  { name: "holo/cyan",       hex: "#8CE2EF", role: "Spectrum · 67%" },
  { name: "holo/mint",       hex: "#8BD4B6", role: "Spectrum · 83%" },
  { name: "holo/lime",       hex: "#7ED576", role: "Spectrum · 100%" },
];

const SKY_TINTS = [
  { name: "sky/lavender",   hex: "#F0E5FB" },
  { name: "sky/periwinkle", hex: "#E5E8FC" },
  { name: "sky/cyan",       hex: "#E0F4F9" },
  { name: "sky/mint",       hex: "#E2F2EA" },
  { name: "sky/lime",       hex: "#E8F4D6" },
];

function Swatch({ hex, name, role, bordered = false }) {
  return (
    <div className="swatch">
      <div
        className="swatch-chip"
        style={{
          background: hex,
          boxShadow: bordered ? "inset 0 0 0 1px var(--border-hairline)" : undefined,
        }}
      />
      <div className="swatch-meta">
        <div className="name">{name}</div>
        <div className="hex">{hex}</div>
        {role && <div className="role">{role}</div>}
      </div>
    </div>
  );
}

function SectionHead({ kicker, title, italic, description }) {
  return (
    <div className="section-head">
      <p className="kicker">{kicker}</p>
      <h2 className="t-display t-h1">
        {title} {italic && <span className="t-italic-serif">{italic}</span>}
      </h2>
      {description && (
        <p className="t-body-soft" style={{ maxWidth: 560, marginTop: 18 }}>
          {description}
        </p>
      )}
    </div>
  );
}

export default function KetamindDesignSystem() {
  return (
    <>
      {/* ════════════ TOPNAV ════════════ */}
      <nav className="topnav">
        <div className="topnav-inner">
          <span className="wordmark">ketaMIND</span>
          <div className="topnav-links">
            <a href="#brand">Brand</a>
            <a href="#color">Color</a>
            <a href="#type">Type</a>
            <a href="#components">Components</a>
            <a href="#patterns">Patterns</a>
            <a href="#footer">Contact</a>
          </div>
        </div>
      </nav>

      {/* ════════════ HERO ════════════ */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <span className="dot" />
            Botanical OS · v7.0 · 2026
          </div>
          <h1>
            a 25-minute <span className="italic">reset</span>
            <br />
            for the always-on <span className="italic">brain.</span>
          </h1>
          <p>
            The ketaMIND design system — calm, clear, considered. Built on a
            botanical grammar of aura gradients, ticket-style precision, and
            lab-grade typography.
          </p>

          <div
            className="row gap-3 wrap justify-center"
            style={{ marginTop: 36 }}
          >
            <Button variant="primary" size="lg" trailingArrow>
              Explore the system
            </Button>
            <Button variant="outline" size="lg">
              View documentation
            </Button>
          </div>
        </div>
      </section>

      {/* ════════════ 01 · BRAND ════════════ */}
      <section className="section section-bg-white" id="brand">
        <div className="container">
          <SectionHead kicker="01 · Brand" title="Logo &" italic="lockups" />
          <div className="grid-2">
            <div
              className="bot-card"
              style={{ display: "grid", placeItems: "center", minHeight: 320 }}
            >
              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    fontSize: 80,
                    letterSpacing: "-0.03em",
                    lineHeight: 0.9,
                  }}
                >
                  ketaMIND
                </span>
                <span
                  style={{
                    background: "var(--holo-spectrum)",
                    borderRadius: "var(--r-pill)",
                    padding: "6px 18px",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--ink-primary)",
                  }}
                >
                  euphoric botanical blend
                </span>
              </div>
            </div>

            <div
              className="bot-card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 32,
                justifyContent: "center",
                minHeight: 320,
              }}
            >
              <div>
                <p className="t-eyebrow" style={{ marginBottom: 14 }}>
                  kM monogram
                </p>
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    fontSize: 120,
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                    background: "var(--holo-spectrum)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  kM
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid var(--border-hairline)",
                  paddingTop: 24,
                }}
              >
                <p className="t-eyebrow" style={{ marginBottom: 14 }}>
                  Nav lockup · 24px
                </p>
                <span
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 800,
                    fontSize: 24,
                    letterSpacing: "-0.03em",
                  }}
                >
                  ketaMIND
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 02 · COLOR ════════════ */}
      <section className="section section-bg-white" id="color">
        <div className="container">
          <SectionHead kicker="02 · Foundations" title="Color" italic="system" />

          <div className="spectrum-strip" />

          <h3 className="color-group-title">Ink &amp; Paper</h3>
          <div className="color-grid">
            <Swatch hex="#151518" name="ink/primary" role="Body, packaging, headlines" />
            <Swatch hex="#717182" name="ink/soft"    role="Subdued copy" />
            <Swatch hex="#FFFCF8" name="paper/cream" role="Page background" bordered />
            <Swatch hex="#FFFFFF" name="paper/white" role="Surface, packaging" bordered />
          </div>

          <h3 className="color-group-title">Holo Spectrum</h3>
          <div className="color-grid">
            {HOLO_STOPS.map((s) => (
              <Swatch key={s.name} {...s} />
            ))}
          </div>

          <h3 className="color-group-title">Sky · Atmospheric Tints</h3>
          <div className="color-grid">
            {SKY_TINTS.map((s) => (
              <Swatch key={s.name} {...s} role="Soft surface" />
            ))}
          </div>

          <h3 className="color-group-title">Accent</h3>
          <div className="color-grid">
            <Swatch hex="#D4F25C" name="accent/lime"     role="CTA accent" />
            <Swatch hex="#E5E5E9" name="border/hairline" role="1px dividers" />
          </div>
        </div>
      </section>

      {/* ════════════ 02 · AURA GRADIENTS ════════════ */}
      <section className="section section-bg-cream">
        <div className="container">
          <SectionHead
            kicker="02 · Foundations"
            title="Aura"
            italic="gradients"
            description="Two voices. The strong spectrum carries the brand. The hazy soft creates atmosphere — the calm field where the system breathes."
          />

          <div className="aura-grid">
            <div className="aura-tile aura-spectrum">
              <div className="name">holo/spectrum</div>
              <div className="desc">Strong · 90° linear · CTA, marquee</div>
            </div>
            <div className="aura-tile aura-diagonal">
              <div className="name">holo/diagonal</div>
              <div className="desc">Strong · 135° linear · packaging</div>
            </div>
            <div className="aura-tile aura-conic">
              <div className="name">holo/conic</div>
              <div className="desc">Conic · brand mark, foil disc</div>
            </div>
            <div className="aura-tile aura-soft">
              <div className="name">holo/soft</div>
              <div className="desc">Subtle · 135° hazy · surface fill</div>
            </div>
            <div className="aura-tile aura-soft-v">
              <div className="name">holo/soft-v</div>
              <div className="desc">Subtle · 180° vertical · sky wash</div>
            </div>
            <div className="aura-tile aura-radial-tile">
              <div className="name">holo/radial</div>
              <div className="desc">Subtle · radial · ambient halo</div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 02 · TYPOGRAPHY ════════════ */}
      <section className="section section-bg-white" id="type">
        <div className="container">
          <SectionHead
            kicker="02 · Foundations"
            title="Typography"
            italic="& voice"
          />

          <div className="type-table">
            <TypeRow label="display/hero" meta="Geist · 900 / 144·72 / -2% / lh 95%">
              <span style={{ fontFamily: "Geist", fontWeight: 900, fontSize: 96, letterSpacing: "-0.025em", lineHeight: 0.95 }}>
                a calmer reset.
              </span>
            </TypeRow>
            <TypeRow label="italic accent" meta="Geist 900 + DM Serif Display italic">
              <span style={{ fontFamily: "Geist", fontWeight: 900, fontSize: 64, letterSpacing: "-0.02em", lineHeight: 1 }}>
                the <span className="t-italic-serif">25-minute</span> reset
              </span>
            </TypeRow>
            <TypeRow label="h1" meta="Geist · 800 / 72·44">
              <span style={{ fontFamily: "Geist", fontWeight: 800, fontSize: 56, letterSpacing: "-0.015em", lineHeight: 1.05 }}>
                A clearer kind of clarity.
              </span>
            </TypeRow>
            <TypeRow label="h2" meta="Geist · 800 / 56·36">
              <span style={{ fontFamily: "Geist", fontWeight: 800, fontSize: 40, letterSpacing: "-0.01em", lineHeight: 1.1 }}>
                Built for steady minds.
              </span>
            </TypeRow>
            <TypeRow label="h4" meta="Inter · 700 / 24·20">
              <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 24, letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                Made from real botanicals.
              </span>
            </TypeRow>
            <TypeRow label="body/lg" meta="Inter · 400 / 17px">
              <span style={{ fontFamily: "Inter", fontWeight: 400, fontSize: 17, lineHeight: 1.55 }}>
                Three botanicals work together to slow the noise without dimming
                the day. Take it 25 minutes before you need to feel like
                yourself again.
              </span>
            </TypeRow>
            <TypeRow label="eyebrow" meta="Inter · 500 / 12 · +20% / UPPER">
              <span className="t-eyebrow" style={{ fontSize: 13 }}>
                euphoric botanical blend
              </span>
            </TypeRow>
            <TypeRow label="mono / data" meta="JetBrains Mono · 400 · 11–14">
              <span style={{ fontFamily: "JetBrains Mono", fontSize: 14, letterSpacing: "0.05em" }}>
                SKU-225-V7 · BATCH 042 · 0.67G/TAB
              </span>
            </TypeRow>
          </div>
        </div>
      </section>

      {/* ════════════ 03 · BUTTONS & PILLS ════════════ */}
      <section className="section section-bg-cream" id="components">
        <div className="container">
          <SectionHead
            kicker="03 · Components"
            title="Buttons"
            italic="& pills"
          />

          <p className="t-eyebrow mb-4">Primary actions</p>
          <div className="row gap-3 wrap items-center mb-12">
            <Button variant="primary" size="lg" trailingArrow>Take the reset</Button>
            <Button variant="holo"    size="lg" trailingArrow>Build my bundle</Button>
            <Button variant="lime"    size="lg" trailingArrow>Try ketaMIND</Button>
            <Button variant="outline" size="lg">Learn more</Button>
            <Button variant="ghost"   size="lg">Skip for now</Button>
          </div>

          <p className="t-eyebrow mb-4">Sizes</p>
          <div className="row gap-3 wrap items-center mb-12">
            <Button variant="primary" size="lg">Large · Take the reset</Button>
            <Button variant="primary" size="md">Medium · Take the reset</Button>
            <Button variant="primary" size="sm">Small · Reset</Button>
          </div>

          <p className="t-eyebrow mb-4">Pills · status &amp; metadata</p>
          <div className="row gap-3 wrap items-center">
            <span className="pill pill-outline">25-min reset</span>
            <span className="pill pill-lime">New · Limited drop</span>
            <span className="pill pill-holo">Editor's pick</span>
            <span className="pill pill-dark">Best seller</span>
            <span className="pill pill-soft">Rhizoma Corydalis</span>
          </div>
        </div>
      </section>

      {/* ════════════ 03 · BOTANICAL CARDS ════════════ */}
      <section className="section section-bg-white">
        <div className="container">
          <SectionHead
            kicker="03 · Components"
            title="Botanical"
            italic="cards"
          />

          <div className="grid-3">
            <BotCard
              title="Real botanicals"
              body="Three plant extracts, one steady signal. No synthetics, no compromise."
              icon={<path d="M11 20A7 7 0 0 1 4 13c0-2.5.4-4.6 6-9 6.6 2 9 5.5 9 11a7 7 0 0 1-7 7Z M2 21c4-3 6-7 9-12" />}
            />
            <BotCard
              title="Lab-verified"
              body="Third-party tested for potency and purity. Every batch documented and dated."
              icon={<path d="M9 3h6 M10 3v6.5L4.5 19a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9.5V3 M6.5 14h11" />}
            />
            <BotCard
              title="Non-habit forming"
              body="Designed for daily resets, not dependency. Calm without the cliff."
              icon={<path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />}
            />
          </div>
        </div>
      </section>

      {/* ════════════ 03 · TICKET ════════════ */}
      <section className="section section-bg-cream">
        <div className="container">
          <SectionHead
            kicker="03 · Components"
            title="Lab"
            italic="ticket"
            description="A boarding-pass pattern for orders, lab certificates, and batch reports. Functional, considered, and unmistakably ketaMIND."
          />

          <div style={{ display: "grid", placeItems: "center" }}>
            <div className="ticket">
              <div className="ticket-body">
                <div className="ticket-header">
                  <span className="brand">ketaMIND</span>
                  <span className="doc-id">Lab Pass · #042-225</span>
                </div>

                <div
                  className="ticket-row"
                  style={{ marginBottom: 20, paddingBottom: 20 }}
                >
                  <div>
                    <div className="field-label">Formula</div>
                    <div className="field-value-lg">Botanical Blend 03</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div className="field-label">Dose</div>
                    <div className="field-value-lg">675 mg</div>
                  </div>
                </div>

                <div
                  className="ticket-row"
                  style={{ border: 0, padding: 0, gap: 32 }}
                >
                  <div>
                    <div className="field-label">Boarding</div>
                    <div className="field-value">25-min reset</div>
                  </div>
                  <div>
                    <div className="field-label">Batch</div>
                    <div className="field-value">B-042-V7</div>
                  </div>
                  <div>
                    <div className="field-label">Tested</div>
                    <div className="field-value">04 / 26</div>
                  </div>
                </div>

                <div className="barcode" aria-hidden="true" />
              </div>

              <div className="ticket-stub">
                <div>
                  <div className="field-label">Pass No.</div>
                  <div className="field-value-lg" style={{ fontSize: 22 }}>
                    042
                  </div>
                </div>
                <div>
                  <div className="field-label">Take with</div>
                  <div className="field-value">Water · 25min</div>
                </div>
                <div>
                  <div className="field-label">Expires</div>
                  <div
                    className="field-value"
                    style={{ fontFamily: "JetBrains Mono, monospace" }}
                  >
                    12 / 27
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ 04 · SPACE / RADIUS / SHADOW ════════════ */}
      <section className="section section-bg-cream" id="patterns">
        <div className="container">
          <SectionHead
            kicker="04 · Foundations"
            title="Space, radius"
            italic="& elevation"
          />

          <p className="t-eyebrow mb-4">Spacing scale</p>
          <div className="spec-grid mb-12">
            {[
              { name: "space/1",  px: 4 },
              { name: "space/2",  px: 8 },
              { name: "space/4",  px: 16 },
              { name: "space/6",  px: 24 },
              { name: "space/8",  px: 32 },
              { name: "space/12", px: 48 },
              { name: "space/16", px: 64 },
            ].map((s) => (
              <div key={s.name} className="spec-tile">
                <div
                  className="demo solid"
                  style={{ width: s.px, height: 64, background: "var(--ink-primary)" }}
                />
                <div className="label">{s.name}</div>
                <div className="val">{s.px} px</div>
              </div>
            ))}
          </div>

          <p className="t-eyebrow mb-4">Radius scale</p>
          <div className="spec-grid mb-12">
            {[
              { name: "r/xs",   r: 6,    val: "6 px" },
              { name: "r/sm",   r: 12,   val: "12 px" },
              { name: "r/md",   r: 20,   val: "20 px" },
              { name: "r/lg",   r: 28,   val: "28 px" },
              { name: "r/xl",   r: 40,   val: "40 px" },
              { name: "r/pill", r: 999,  val: "∞" },
            ].map((r) => (
              <div key={r.name} className="spec-tile">
                <div className="demo" style={{ borderRadius: r.r }} />
                <div className="label">{r.name}</div>
                <div className="val">{r.val}</div>
              </div>
            ))}
          </div>

          <p className="t-eyebrow mb-4">Elevation</p>
          <div className="grid-3">
            {[
              { name: "shadow/xs",    shadow: "var(--shadow-xs)" },
              { name: "shadow/soft",  shadow: "var(--shadow-soft)" },
              { name: "shadow/float", shadow: "var(--shadow-float)" },
            ].map((sh) => (
              <div key={sh.name} className="shadow-tile" style={{ boxShadow: sh.shadow }}>
                <div className="t-mono" style={{ textAlign: "center" }}>
                  {sh.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ FOOTER ════════════ */}
      <footer className="footer" id="footer">
        <div className="footer-inner">
          <h3>
            a calmer <span className="it">reset</span>
            <br />
            is one tablet <span className="it">away.</span>
          </h3>

          <div className="footer-grid">
            <div className="col-flex">
              <span
                style={{
                  fontFamily: "Inter",
                  fontWeight: 800,
                  fontSize: 32,
                  letterSpacing: "-0.03em",
                  marginBottom: 14,
                  display: "inline-block",
                }}
              >
                ketaMIND
              </span>
              <p
                style={{
                  color: "rgba(255,252,248,0.6)",
                  fontSize: 14,
                  lineHeight: 1.55,
                  maxWidth: 320,
                  margin: 0,
                }}
              >
                A 25-minute reset for the always-on brain. Built on real
                botanicals, lab-verified, considered top to bottom.
              </p>
            </div>
            <FooterCol heading="Shop"   links={["Daily reset", "Bundles", "Subscribe & save"]} />
            <FooterCol heading="Learn"  links={["The science", "Botanical journal", "Lab passes"]} />
            <FooterCol heading="Company" links={["About", "Press", "Contact"]} />
          </div>

          <div className="footer-bar">
            <span>© 2026 ketaMIND · Botanical OS v7</span>
            <span>made with calm intent</span>
          </div>
        </div>
      </footer>
    </>
  );
}

/* ───── helper components ───── */

function TypeRow({ label, meta, children }) {
  return (
    <div className="type-row">
      <div className="label">{label}</div>
      <div className="specimen">{children}</div>
      <div className="meta">{meta}</div>
    </div>
  );
}

function BotCard({ icon, title, body }) {
  return (
    <div className="bot-card">
      <div className="icon-aura">
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {icon}
        </svg>
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function FooterCol({ heading, links }) {
  return (
    <div className="col-flex">
      <h5>{heading}</h5>
      {links.map((l) => (
        <a key={l} href="#">{l}</a>
      ))}
    </div>
  );
}
