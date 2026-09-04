import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, Minus, Plus } from "lucide-react";
import "../rarefound-vault.css";

const rarefoundLogo = "/images/rarefound-logo.webp";
const checkoutUrl = "https://shop.beacons.ai/rarefound/032671fb-9aca-4ff1-b167-450ba7c7f1c0";
const graphImage = "/images/vault/vault-graph.webp";
const dashboardImage = "/images/vault/vault-dashboard.webp";
const noteImage = "/images/vault/vault-note.webp";
const pdfImage = "/images/vault/vault-pdf.webp";
const followersProfile = "/images/proof/followers-profile.webp";
const salesAnalyticsAnnual = "/images/proof/sales-analytics-annual.webp";

const modules = [
  ["01", "Foundation", "Choose your direction"],
  ["02", "Build Your Brand", "Create a page people remember"],
  ["03", "Content", "Know what to post"],
  ["04", "AI", "Research and create faster"],
  ["05", "Reels", "Turn ideas into attention"],
  ["06", "Growth", "Build momentum"],
  ["07", "Social Proof", "Turn followers into believers"],
  ["08", "Monetization", "Turn attention into income"],
  ["09", "Automate & Scale", "Build repeatable systems"],
  ["10", "Long-Term Business", "Turn the page into an asset"],
];

const faqs = [
  ["What exactly is Rarefound?", "Rarefound is a complete faceless digital-product business system delivered inside an Obsidian vault. It combines lessons, workbooks, PDFs, resources, progress tracking and connected notes in one place."],
  ["Do I need to know Obsidian already?", "No. The vault is organized so you can open it and work through the dashboard and modules in order. You can learn the deeper Obsidian features as you go."],
  ["Do I need an audience to start?", "No. The system begins with positioning and brand foundations, then moves through content, Reels, growth, proof and monetization."],
  ["Is this only for faceless Instagram pages?", "That is the core implementation path, but the underlying lessons on content, AI, offers, audience growth and monetization can be adapted to other digital-product businesses."],
  ["What do I get with access?", "The 10-module vault, lesson notes, embedded course PDFs, workbook material, bonuses, templates, planning resources, AI prompts and supporting assets currently included in the Rarefound system."],
  ["Do I get lifetime access?", "Yes. It is sold as a one-time purchase rather than a recurring course subscription."],
  ["Can I use AI with the vault?", "Yes. Obsidian can be used alongside AI tools and plugins. The exact AI setup depends on the tools you choose, so third-party AI access is not bundled into the purchase unless explicitly stated at checkout."],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function CTA({ children = "Get the vault — $27" }: { children?: React.ReactNode }) {
  return <a className="vault-cta" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<ArrowRight size={16} /></a>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="site-shell vault-page">
      <header className="site-nav">
        <a href="#top" className="wordmark rarefound-wordmark" aria-label="Rarefound home"><span className="rarefound-logo-crop"><img src={rarefoundLogo} alt="" /></span><span>RAREFOUND</span></a>
        <nav className="nav-links" aria-label="Primary navigation"><a href="#inside">Inside the vault</a><a href="#modules">Modules</a><a href="#proof">Proof</a><a href="#faq">Questions</a></nav>
        <a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Get the vault <ArrowUpRight size={14} /></a>
        <a className="mobile-access" href={checkoutUrl} target="_blank" rel="noreferrer">Get the vault <ArrowUpRight size={13} /></a>
      </header>

      <main id="top">
        <section className="vault-section vault-hero">
          <div className="browser-chrome"><div><i /><i /><i /></div><span>rarefound / obsidian business vault</span><span /></div>
          <div className="vault-hero-shell">
            <div className="vault-hero-copy">
              <Eyebrow>The Obsidian business vault</Eyebrow>
              <h1>Stop doomscrolling.<br /><em>Start building.</em></h1>
              <p className="vault-lede">The complete faceless digital-product system, built inside Obsidian. Learn how to build your brand, create content, use AI, grow an audience and monetize it — from one connected vault.</p>
              <CTA />
              <p className="vault-micro">One payment · instant access · yours to keep</p>
            </div>
            <div className="vault-hero-visual"><img src={graphImage} alt="Rarefound Obsidian vault graph showing connected course lessons and modules" /><span className="vault-visual-tag">10 modules · one connected system</span></div>
          </div>
          <div className="vault-strip"><span>10 modules</span><span>Connected notes</span><span>Embedded PDFs</span><span>Workbooks + bonuses</span><span>Built in Obsidian</span></div>
        </section>

        <section id="inside" className="vault-section">
          <div className="vault-heading"><div><Eyebrow>Not another forgotten course tab</Eyebrow><h2>Your entire business education.<br /><em>Connected.</em></h2></div><p>Rarefound lives inside your own Obsidian vault. Lessons, workbooks, PDFs, resources and progress are organized in one place you can return to and build from.</p></div>
          <div className="vault-showcase"><div className="vault-showcase-media"><img src={dashboardImage} alt="Rarefound Obsidian course dashboard with module navigation and progress tracking" /></div><div className="vault-showcase-copy"><span className="vault-index">01 / DASHBOARD</span><h3>Open the vault.<br />Know exactly where to go.</h3><p>Your dashboard keeps the 10-module system, workbook, bonuses and progress in one place — so the course feels like an operating system rather than a pile of files.</p></div></div>
          <div className="vault-gallery">
            <article><img src={noteImage} alt="Rarefound lesson note inside Obsidian" /><div><strong>Learn inside connected notes</strong><small>Move through lessons without losing the context around them.</small></div></article>
            <article><img src={pdfImage} alt="Rarefound course PDF embedded inside Obsidian" /><div><strong>Read the full course inside the vault</strong><small>Embedded PDFs keep the polished course material next to your working notes.</small></div></article>
            <article><img src={graphImage} alt="Rarefound Obsidian graph view" /><div><strong>See how the system connects</strong><small>The graph turns modules and lessons into a visual knowledge system.</small></div></article>
          </div>
        </section>

        <section id="modules" className="vault-section">
          <div className="vault-heading"><div><Eyebrow>10-module operating system</Eyebrow><h2>From first idea to<br /><em>real digital asset.</em></h2></div><p>Each module moves you through one part of the business, from choosing a direction to building systems that can keep working after the first sale.</p></div>
          <div className="vault-modules">{modules.map(([no, name, outcome]) => <article className="vault-module" key={no}><span>{no}</span><b>{name}</b><small>{outcome}</small></article>)}</div>
        </section>

        <section className="vault-section">
          <div className="vault-heading"><div><Eyebrow>The Rarefound method</Eyebrow><h2>Turn consumption into<br /><em>something useful.</em></h2></div><p>The goal is not to collect more information. It is to move from learning to creating, then turn that creation into an audience and an offer.</p></div>
          <div className="vault-method">{[["01","Learn"],["02","Connect"],["03","Create"],["04","Grow"],["05","Monetize"]].map(([n,t]) => <div key={n}><span>{n}</span><b>{t}</b></div>)}</div>
        </section>

        <section id="proof" className="vault-section">
          <div className="vault-heading"><div><Eyebrow>Not theory</Eyebrow><h2>The system behind<br /><em>the numbers.</em></h2></div><p>Rarefound is built from practical lessons around content, audience growth and digital products — backed by the results already documented on the existing Rarefound channels.</p></div>
          <div className="vault-proof"><div><b>20.35M</b><span>views</span></div><div><b>30K</b><span>followers</span></div><div><b>339</b><span>orders</span></div><div><b>$6.5K+</b><span>generated</span></div></div>
          <div className="vault-gallery"><article><img src={followersProfile} alt="Rarefound Instagram profile and views proof" /><div><strong>Audience proof</strong><small>Documented growth and reach from Rarefound's own account.</small></div></article><article><img src={salesAnalyticsAnnual} alt="Rarefound annual sales analytics proof" /><div><strong>Sales proof</strong><small>Documented orders and earnings from the existing Rarefound funnel.</small></div></article><article><img src={graphImage} alt="Rarefound Obsidian graph" /><div><strong>The knowledge behind it</strong><small>The playbook is now organized as a vault you can actually work through.</small></div></article></div>
        </section>

        <section className="vault-section">
          <div className="vault-offer"><div className="vault-offer-copy"><Eyebrow>Everything in one place</Eyebrow><h2>The Rarefound<br /><em>Obsidian Business Vault</em></h2><ul className="vault-offer-list"><li><Check size={14} /> 10-module faceless digital-product system</li><li><Check size={14} /> Connected Obsidian lesson notes</li><li><Check size={14} /> Embedded course PDFs + workbook material</li><li><Check size={14} /> Bonuses, templates, planners and AI prompts</li><li><Check size={14} /> One organized dashboard for navigation and progress</li></ul></div><div className="vault-offer-price"><span className="vault-price">$27</span><span className="vault-price-note">One payment · instant access</span><CTA>Get the vault now</CTA></div></div>
        </section>

        <section id="faq" className="section-wrap faq-section" style={{paddingTop:"30px"}}><div className="faq-header"><Eyebrow>FAQ</Eyebrow><h2>Questions<span>.</span></h2><p>What to know before you open the vault.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="faq-number">{String(index + 1).padStart(2,"0")}</span><b>{question}</b>{openFaq === index ? <Minus /> : <Plus />}</button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></section>

        <section className="vault-section vault-final"><Eyebrow>Stop saving ideas</Eyebrow><h2>Start building something<br /><em>with them.</em></h2><p>Open the Rarefound vault and work the system.</p><CTA /></section>
      </main>

      <footer className="site-footer"><button onClick={scrollTop} className="footer-mark rarefound-logo-crop" aria-label="Back to top"><img src={rarefoundLogo} alt="" /></button><span>RAREFOUND (C) 2026</span><a href="mailto:support@example.com"><Mail size={14} /> Email</a><a href="#top">Back to top</a></footer>
    </div>
  );
}
