import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Mail, Minus, Plus } from "lucide-react";
import "../rarefound-vault.css";

const rarefoundLogo = "/images/rarefound-logo.webp";
const checkoutUrl = "https://shop.beacons.ai/rarefound/032671fb-9aca-4ff1-b167-450ba7c7f1c0";
const productImage = "/images/Vault/obsidian vault emerald green .png";
const graphImage = "/images/Vault/website v1 .png";
const researchImage = "/images/Vault/website V2 .png";
const monetizationImage = "/images/Vault/website V3 .png";
const moduleImage = "/images/Vault/website V4 .png";
const dashboardImage = "/images/Vault/website V5.png";
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

const obsidianBenefits = [
  ["01", "Own your files", "Keep the vault as a folder you control instead of another course login you eventually forget."],
  ["02", "Connect ideas", "Link lessons, frameworks, exercises, resources and examples so the knowledge works as one system."],
  ["03", "Build structure", "Dashboards, modules, workbooks, PDFs and resources live together instead of across scattered apps."],
  ["04", "See the bigger picture", "Graph view makes the relationships between lessons visible and turns the course into a knowledge map."],
  ["05", "Build inside the system", "Rarefound is designed to become a working business vault, not just something you read once."],
];

const faqs = [
  ["What exactly is Rarefound?", "Rarefound is a complete faceless digital-product business system delivered inside an Obsidian vault. It combines lessons, workbooks, PDFs, resources, progress tracking and connected notes in one place."],
  ["Do I need to know Obsidian already?", "No. The vault is organized so you can open it and work through the dashboard and modules in order. You can learn the deeper Obsidian features as you go."],
  ["Do I need an audience to start?", "No. The system begins with positioning and brand foundations, then moves through content, Reels, growth, proof and monetization."],
  ["Is this only for faceless Instagram pages?", "That is the core implementation path, but the underlying lessons on content, AI, offers, audience growth and monetization can be adapted to other digital-product businesses."],
  ["What do I get with access?", "The 10-module vault, connected lesson notes, embedded course PDFs, workbook material, bonuses, templates, planning resources, AI prompts and supporting assets currently included in the Rarefound system."],
  ["Do I get lifetime access?", "Yes. Rarefound is sold as a one-time purchase rather than a recurring course subscription."],
  ["Can I use AI with the vault?", "Yes. Obsidian can be used alongside AI tools and plugins. The exact AI setup depends on the tools you choose, so third-party AI access is not bundled into the purchase unless explicitly stated at checkout."],
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function CTA({ children = "Get founding access — $27" }: { children?: React.ReactNode }) {
  return <a className="vault-cta" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<ArrowRight size={16} /></a>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="site-shell vault-page">
      <header className="site-nav">
        <a href="#top" className="wordmark rarefound-wordmark" aria-label="Rarefound home"><span className="rarefound-logo-crop"><img src={rarefoundLogo} alt="" /></span><span>RAREFOUND</span></a>
        <nav className="nav-links" aria-label="Primary navigation"><a href="#inside">Inside the vault</a><a href="#why-obsidian">Why Obsidian</a><a href="#modules">Modules</a><a href="#proof">Proof</a></nav>
        <a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Founding access <ArrowUpRight size={14} /></a>
        <a className="mobile-access" href={checkoutUrl} target="_blank" rel="noreferrer">Get the vault <ArrowUpRight size={13} /></a>
      </header>

      <main id="top">
        <section className="vault-section vault-hero">
          <div className="browser-chrome"><div><i /><i /><i /></div><span>rarefound / the obsidian business vault</span><span /></div>
          <div className="vault-hero-shell">
            <div className="vault-hero-copy">
              <div className="vault-founding-badge">Founding access · $27</div>
              <Eyebrow>The Obsidian Business Vault</Eyebrow>
              <h1>Stop doomscrolling.<br /><em>Start building.</em></h1>
              <p className="vault-lede">A complete faceless digital-product business system built inside Obsidian. Learn the brand, content, AI, growth and monetization system — then use the same vault as the place you build from.</p>
              <CTA />
              <p className="vault-micro">One payment · instant access · lifetime access to the vault you purchase</p>
            </div>
            <div className="vault-hero-visual vault-product-hero"><img src={productImage} alt="Rarefound Obsidian Business Vault product system showing modules, dashboards, AI prompts, templates and connected lessons" /><span className="vault-visual-tag">10 modules · AI workflows · templates · lifetime access</span></div>
          </div>
          <div className="vault-strip"><span>10 business modules</span><span>Connected lessons</span><span>Course PDFs</span><span>Workbooks + bonuses</span><span>Built in Obsidian</span></div>
        </section>

        <section id="inside" className="vault-section">
          <div className="vault-heading"><div><Eyebrow>More than another course login</Eyebrow><h2>Your business education.<br /><em>Built as a system.</em></h2></div><p>Rarefound brings the course, workbooks, PDFs, resources and progress into one connected Obsidian vault — so you can learn and build in the same place.</p></div>
          <div className="vault-showcase"><div className="vault-showcase-media"><img src={dashboardImage} alt="Rarefound Obsidian HQ with roadmap and module navigation" /></div><div className="vault-showcase-copy"><span className="vault-index">01 / RAREFOUND HQ</span><h3>Open the vault.<br />Know what comes next.</h3><p>The dashboard gives you one starting point for the 10-module roadmap, workbook, bonuses and progress. No hunting through downloads. No forgotten course tab.</p></div></div>
          <div className="vault-gallery">
            <article><img src={moduleImage} alt="Rarefound Module 01 Foundation home inside Obsidian" /><div><strong>Follow a structured module path</strong><small>Each module gives you a clear outcome, lessons, workbook and build sequence inside the same vault.</small></div></article>
            <article><img src={researchImage} alt="Rarefound Market Research Board inside Obsidian" /><div><strong>Build inside practical tools</strong><small>Use connected boards, checklists and working notes instead of passively consuming lessons.</small></div></article>
            <article><img src={monetizationImage} alt="Rarefound Monetization Map inside Obsidian" /><div><strong>Turn research into decisions</strong><small>Map offers, pricing, problems and commercial signals inside the same operating system.</small></div></article>
          </div>
        </section>

        <section id="why-obsidian" className="vault-section vault-why-section">
          <div className="vault-heading"><div><Eyebrow>Why Obsidian?</Eyebrow><h2>Don't collect more files.<br /><em>Build a system you own.</em></h2></div><p>Obsidian is the mechanism that makes Rarefound different. The goal is not to make a normal course look technical — it is to give the knowledge structure, connections and a place to become useful.</p></div>
          <div className="vault-why-grid">
            <div className="vault-why-visual"><img src={graphImage} alt="Rarefound connected Obsidian knowledge graph" /><div className="vault-why-overlay"><span>Knowledge → systems → action</span><strong>Your course becomes a working vault.</strong></div></div>
            <div className="vault-benefits">{obsidianBenefits.map(([no, title, copy]) => <article key={no}><span>{no}</span><div><b>{title}</b><p>{copy}</p></div></article>)}</div>
          </div>
          <p className="vault-why-quote">“Don't build a folder of information. Build a system someone can move through.”</p>
        </section>

        <section id="modules" className="vault-section">
          <div className="vault-heading"><div><Eyebrow>10-module operating system</Eyebrow><h2>From first idea to<br /><em>real digital asset.</em></h2></div><p>The curriculum follows the actual business journey: choose a direction, build the brand, create attention, earn trust, monetize and then build systems around what works.</p></div>
          <div className="vault-modules">{modules.map(([no, name, outcome]) => <article className="vault-module" key={no}><span>{no}</span><b>{name}</b><small>{outcome}</small></article>)}</div>
        </section>

        <section className="vault-section">
          <div className="vault-heading"><div><Eyebrow>The Rarefound method</Eyebrow><h2>Turn consumption into<br /><em>something useful.</em></h2></div><p>The point of the vault is not to make you consume more. It is to move from learning to creating, then turn that creation into attention, trust and an offer.</p></div>
          <div className="vault-method">{[["01","Learn"],["02","Connect"],["03","Create"],["04","Grow"],["05","Monetize"]].map(([n,t]) => <div key={n}><span>{n}</span><b>{t}</b></div>)}</div>
        </section>

        <section id="proof" className="vault-section">
          <div className="vault-heading"><div><Eyebrow>Built from execution</Eyebrow><h2>The system behind<br /><em>the numbers.</em></h2></div><p>The vault packages lessons around content, audience growth and digital products that came from actually building Rarefound channels and funnels — not from inventing a theory after the fact.</p></div>
          <div className="vault-proof"><div><b>20.35M</b><span>views</span></div><div><b>30K</b><span>followers</span></div><div><b>339</b><span>orders</span></div><div><b>$6.5K+</b><span>generated</span></div></div>
          <div className="vault-gallery"><article><img src={followersProfile} alt="Rarefound Instagram profile and views proof" /><div><strong>Audience proof</strong><small>Documented growth and reach from Rarefound's own account.</small></div></article><article><img src={salesAnalyticsAnnual} alt="Rarefound annual sales analytics proof" /><div><strong>Sales proof</strong><small>Documented orders and earnings from the existing Rarefound funnel.</small></div></article><article><img src={graphImage} alt="Rarefound Obsidian graph" /><div><strong>The knowledge behind it</strong><small>The lessons and frameworks are now organized into a vault you can actually work through.</small></div></article></div>
        </section>

        <section className="vault-section">
          <div className="vault-offer vault-offer-founding"><div className="vault-offer-copy"><div className="vault-founding-badge">Founding access</div><Eyebrow>Everything in one place</Eyebrow><h2>Rarefound<br /><em>The Obsidian Business Vault</em></h2><p className="vault-offer-intro">The PDFs are not the cheaper version of Rarefound. They're included. The vault is the product — the course, tools and resources live inside it.</p><ul className="vault-offer-list"><li><Check size={14} /> 10-module faceless digital-product business system</li><li><Check size={14} /> Connected Obsidian lesson notes</li><li><Check size={14} /> Full designed course PDFs + workbook material</li><li><Check size={14} /> AI prompts, templates, planning tools and bonuses</li><li><Check size={14} /> Dashboard for navigation and progress</li><li><Check size={14} /> One payment · no recurring course subscription</li></ul></div><div className="vault-offer-price"><span className="vault-price-label">FOUNDING PRICE</span><span className="vault-price">$27</span><span className="vault-price-note">Get the complete vault at the founding price while Rarefound is in its first public version.</span><CTA>Open the Rarefound vault</CTA><small className="vault-price-small">Price can increase as the product expands. No fake countdown.</small></div></div>
        </section>

        <section id="faq" className="section-wrap faq-section" style={{paddingTop:"30px"}}><div className="faq-header"><Eyebrow>FAQ</Eyebrow><h2>Questions<span>.</span></h2><p>What to know before you open the vault.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="faq-number">{String(index + 1).padStart(2,"0")}</span><b>{question}</b>{openFaq === index ? <Minus /> : <Plus />}</button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></section>

        <section className="vault-section vault-final"><Eyebrow>Stop saving ideas</Eyebrow><h2>Start building something<br /><em>with them.</em></h2><p>The system is ready. Open the vault and start with Module 01.</p><CTA /></section>
      </main>

      <footer className="site-footer"><button onClick={scrollTop} className="footer-mark rarefound-logo-crop" aria-label="Back to top"><img src={rarefoundLogo} alt="" /></button><span>RAREFOUND (C) 2026</span><a href="mailto:support@example.com"><Mail size={14} /> Email</a><a href="#top">Back to top</a></footer>
    </div>
  );
}
