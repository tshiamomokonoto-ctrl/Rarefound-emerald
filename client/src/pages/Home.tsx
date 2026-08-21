/**
 * Design philosophy: Rarefound proof-first editorial sales page.
 * Matte black surfaces, restrained emerald signals, serif display hierarchy,
 * and industrial browser-frame motifs are intentional and must remain cohesive.
 */
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDotDashed,
  CreditCard,
  ExternalLink,
  Layers3,
  Mail,
  Minus,
  Plus,
  ShieldCheck,
} from "lucide-react";

const heroImage = "/images/method-hero-grid.webp";
const rarefoundLogo = "/images/rarefound-logo.webp";
const checkoutUrl = "https://shop.beacons.ai/rarefound/032671fb-9aca-4ff1-b167-450ba7c7f1c0";
const facelessPageLaunchVisual = "/images/faceless-page-launch-system.webp";
const viewsSeptember = "/images/proof/views-september.webp";
const followersProfile = "/images/proof/followers-profile.webp";
const salesAnalyticsAnnual = "/images/proof/sales-analytics-annual.webp";
const salesAnalyticsMonth = "/images/proof/sales-analytics-month.webp";
const dmFirstClient = "/images/proof/dm-first-client.jpg";
const dmFirstSale = "/images/proof/dm-first-sale.jpg";
const dmViewsGrowth = "/images/proof/dm-views-growth.webp";
const firstSaleProof = "/images/proof/first-sale-22-20.webp";

const modules = [
  { no: "01", name: "Choose Your Profitable Direction", outcome: "Find the right niche", cover: "/images/modules/module-01.webp" },
  { no: "02", name: "Build a Brand People Remember", outcome: "Build the page", cover: "/images/modules/module-02.png" },
  { no: "03", name: "Content That Actually Grows", outcome: "Know what to post", cover: "/images/modules/module-03.webp" },
  { no: "04", name: "The AI Content Creation System", outcome: "Create content faster", cover: "/images/modules/module-04.webp" },
  { no: "05", name: "Editing Like a Viral Creator", outcome: "Turn ideas into compelling content", cover: "/images/modules/module-05.jpg" },
  { no: "06", name: "The Growth System", outcome: "Grow the audience", cover: "/images/modules/module-06.jpg" },
  { no: "07", name: "Build Trust & Authority", outcome: "Turn followers into believers", cover: "/images/modules/module-07.jpg" },
  { no: "08", name: "Monetize Your Audience", outcome: "Turn attention into income", cover: "/images/modules/module-08.jpg" },
  { no: "09", name: "Automate & Scale", outcome: "Build systems", cover: "/images/modules/module-09.jpg" },
  { no: "10", name: "Build a Real Business", outcome: "Turn the page into an asset", cover: "/images/modules/module-10.webp" },
];

const faqs = [
  [
    "Is there a refund policy?",
    "Do the work first. Apply the method to a real offer. If you put in the reps and it did not move, show the work and request a review.",
  ],
  [
    "What if I don't know what to sell?",
    "The opening module walks through choosing a niche with existing demand, then turns the useful knowledge you already have into a clear offer.",
  ],
  [
    "Do I need an audience to start?",
    "No. The method is built around creating attention and converting it, so audience growth becomes a byproduct of a consistent operating system.",
  ],
  [
    "What exactly do I get?",
    "A complete vault, positioning framework, offer build, funnel structure, and practical templates for shaping the page and delivery experience.",
  ],
  [
    "What does it actually cost to start?",
    "The course is designed to be a one-time purchase. Any optional third-party tools are chosen by you as your product and distribution setup grows.",
  ],
  [
    "Do I get lifetime access?",
    "Yes. One payment, no recurring course subscription, with the access terms clearly shown before checkout.",
  ],
  [
    "Is this just another guru course?",
    "The page is structured around mechanisms and implementation details rather than a vague promise. The goal is a system you can make your own.",
  ],
  [
    "How fast can I see a first sale?",
    "Timing varies by offer, market, and execution. The system focuses on reducing friction so you can test an offer consistently and learn from real demand.",
  ],
  [
    "Do I need my own product first?",
    "No. You build the offer while working through the vault, beginning with what you already know and packaging it into a useful outcome.",
  ],
];

function DotGrid({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`dot-grid ${className}`} />;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow"><span />{children}</p>;
}

function PrimaryButton({ children, href = checkoutUrl }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="primary-button" target="_blank" rel="noreferrer">{children}<ArrowRight size={16} strokeWidth={2.4} /></a>;
}

function ProofCard({ type, title, detail, tone = "emerald", image }: { type: string; title: string; detail: string; tone?: "emerald" | "muted"; image?: string }) {
  return (
    <article className={`proof-card ${tone} ${image ? "evidence" : ""}`}>
      <div className="proof-card__bar"><span>{type}</span><i /></div>
      <div className="proof-card__body">
        {image ? <img className="proof-card__image" src={image} alt="First-party Rarefound proof screenshot" /> : <div className="proof-pulse"><b /><b /><b /></div>}
        <strong>{title}</strong>
        <small>{detail}</small>
      </div>
      <div className="proof-card__footer"><span className="status-dot" /> connected source <ArrowUpRight size={13} /></div>
    </article>
  );
}

function OfferCard() {
  const items = [
    "10 PDF modules, each with a companion workbook",
    "ManyChat automation templates",
    "A 7-day weekly planner",
    "25+ AI prompt pack",
    "1,500+ HD done-for-you clips, ready to edit",
  ];

  return (
    <article className="offer-card featured solo-offer">
      <div className="course-offer-visual"><img src={facelessPageLaunchVisual} alt="Rarefound The Faceless Page Launch System course and bonus library" /></div>
      <div className="solo-offer__content"><div className="offer-card__topline"><span>One complete course</span><span className="live-tag">Instant access</span></div>
      <h3>The Faceless<br />Page Launch System</h3>
      <p className="offer-card__intro">A complete step-by-step system for building a faceless Instagram page, growing an audience, and turning that attention into money.</p>
      <div className="offer-divider" />
      <p className="bundle-label">Everything included</p>
      <ul className="offer-list">{items.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
      <PrimaryButton>Access now</PrimaryButton>
      <p className="checkout-note"><CreditCard size={14} /> Secure checkout via Beacons · instant access</p>
      <div className="guarantee"><ShieldCheck size={18} /><p><b>One complete system</b> Course modules, workbooks, templates, planning resources, AI prompts, and editable clip assets are all included with access.</p></div></div>
    </article>
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a href="#top" className="wordmark rarefound-wordmark" aria-label="Rarefound home"><span className="rarefound-logo-crop"><img src={rarefoundLogo} alt="" /></span><span>RAREFOUND</span></a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#proof">Proof</a>
          <a href={checkoutUrl} target="_blank" rel="noreferrer">Access</a>
          <a href="#modules">Inside the vault</a>
          <a href="#faq">Questions</a>
        </nav>
        <a className="nav-cta" href={checkoutUrl} target="_blank" rel="noreferrer">Access now <ArrowUpRight size={14} /></a>
        <a className="mobile-access" href={checkoutUrl} target="_blank" rel="noreferrer">Access now <ArrowUpRight size={13} /></a>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <img className="hero-grid-art" src={heroImage} alt="" aria-hidden="true" />
          <DotGrid className="hero-grid" />
          <div className="constellation constellation-a" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-browser">
            <div className="browser-chrome"><div><i /><i /><i /></div><span>rarefound</span><CircleDotDashed size={14} /></div>
            <div className="hero-browser__content">
              <div className="hero-copy">
                <Eyebrow>Digital product operating system</Eyebrow>
                <h1>Package what<br />you know. Sell<br /><em>while you sleep.</em></h1>
                <p>A complete step-by-step system for building a faceless Instagram page, growing an audience, and turning that attention into money.</p>
                <p className="hero-kicker">Build. Grow. Monetize. Scale.</p>
                <div className="hero-stats">
                  <div><b>339</b><span>orders</span></div><div><b>$6.5K</b><span>earned</span></div><div><b>20.35M</b><span>views</span></div><div><b>30K</b><span>followers</span></div>
                </div>
                <a className="proof-jump" href="#proof">See the proof <ArrowDown size={16} /></a>
              </div>
              <div className="hero-proof-panel analytics-proof">
                <img src={viewsSeptember} alt="Instagram views analytics showing 20,353,747 views" />
                <div className="hero-proof-panel__shade" />
                <div className="small-card"><div><span className="status-dot" /> INSTAGRAM</div><b>20.35M views</b></div>
                <a href="#proof" className="verify-link">See first-party proof <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="section-wrap proof-section" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="section-heading split-heading"><div><Eyebrow>First-party proof · Rarefound</Eyebrow><h2>Proof the system<br /><em>actually moves</em></h2></div><p>Views, follower growth, sales analytics, and customer messages from the channels and dashboards provided by Rarefound.</p></div>
          <div className="proof-lead">
            <div className="proof-lead__visual evidence-lead"><img className="proof-lead__image" src={salesAnalyticsAnnual} alt="Digital product analytics showing 339 orders, 14.9 percent conversion, and 6543.51 dollars in earnings" /><div className="proof-lead__veil" /><div className="proof-led"><span>BEACONS ANALYTICS</span><b>339 orders<br />$6,543.51 earned</b><small>first-party dashboard · last 365 days</small></div></div>
            <div className="proof-lead__copy"><Eyebrow>Documented results</Eyebrow><h3>Build the page.<br />Grow the audience.<br /><em>Monetize attention.</em></h3><a href={checkoutUrl} className="inline-arrow" target="_blank" rel="noreferrer">Access the system <ArrowRight size={17} /></a></div>
          </div>
          <div className="proof-grid">
            <ProofCard type="INSTAGRAM" title="30K followers" detail="23.6M views in the last 30 days" image={followersProfile} />
            <ProofCard type="BEACONS" title="129 orders" detail="16.3% conversion in the last 30 days" image={salesAnalyticsMonth} tone="muted" />
            <ProofCard type="CUSTOMER DM" title="First client signed" detail="a documented win after two days" image={dmFirstClient} tone="muted" />
            <ProofCard type="CUSTOMER DM" title="First sale confirmed" detail="customer-reported proof shared with Rarefound" image={dmFirstSale} />
          </div>
          <div className="metrics-strip"><div><b>20.35M</b><span>views · September</span></div><div><b>30K</b><span>followers</span></div><div><b>339</b><span>orders · last 365 days</span></div><div><b>$6.5K</b><span>earnings · last 365 days</span></div></div>
        </section>

        <section id="pricing" className="section-wrap pricing-section" style={{paddingBottom: '20px', paddingTop: '20px'}}>
          <div className="section-heading centered-heading"><Eyebrow>One complete system</Eyebrow><h2>Build a faceless page.<br /><em>Turn attention into income.</em></h2><p>The Faceless Page Launch System gives you the course, workbooks, and practical assets to move from setup to content to conversion.</p></div>
          <div className="offer-grid solo-offer-grid"><OfferCard /></div>
          <p className="licensing-note"><Layers3 size={17} /><span><b>Built for implementation.</b> One complete course, 10 PDF modules with workbooks, plus templates, planners, prompts, and ready-to-edit video assets.</span></p>
        </section>

        <section className="section-wrap claim-section">
          <div className="claim-copy"><Eyebrow>The part nobody says out loud</Eyebrow><h2>You already know<br /><em>attention converts.</em></h2><p>Every post can lead somewhere. The system is about building an audience that knows what to do next.</p><p>With the right operating system, building a faceless page and monetizing it becomes a process you can repeat.</p><PrimaryButton>Access the system</PrimaryButton></div>
          <div className="influence-stack">
            {[['01','The funnel is the product','Attention becomes an asset when it leads to a clear next step.'],['02','The lesson needs a system','The delivery has to be more than a folder of loose advice.'],['03','Ownership compounds','Build your own conversion and delivery infrastructure.']].map(([number,title,copy]) => <article className="influence-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={19} /></article>)}
          </div>
        </section>

        <section className="section-wrap founder-section" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="founder-rail"><span>From the founder</span><span>Personal note / 2026</span></div>
          <div className="founder-letter" style={{ paddingTop: "20px", paddingBottom: "80px" }}><h2>“I spent years procrastinating with every hype, and made nothing.”</h2><div className="letter-body"><p>Then it clicked: the people building faceless pages were quietly creating a real audience and turning the attention into a business.</p><p>When a clear system replaces scattered tactics, the page gets easier to build, easier to grow, and more useful to monetize.</p><p>If that is where you are trying to get, this was built to help.</p><a href={checkoutUrl} className="inline-arrow" target="_blank" rel="noreferrer">Access now <ArrowRight size={17} /></a></div></div>
        </section>

        <section className="section-wrap timeline-section" style={{paddingTop: '20px'}}>
          <div className="section-heading split-heading"><div><Eyebrow>In real time</Eyebrow><h2>This page is<br /><em>the proof.</em></h2></div><p>A faceless page growing an audience and turning attention into a documented commercial result. The system stays visible in the work itself.</p></div>
          <div className="timeline-layout"><div className="timeline"><article><span>01</span><time>June 20</time><h3>First video posted</h3><p>The account starts from zero.</p></article><article><span>02</span><time>June 27</time><h3>First signal</h3><p>The loop begins to find attention.</p></article><article><span>03</span><time>June 28</time><h3>First documented sale</h3><p>A $22.20 sale notification, captured from the order email.</p></article></div><div className="timeline-visual first-sale-timeline"><img className="first-sale-shot" src={firstSaleProof} alt="Documented first-sale order email showing a 22 dollar and 20 cent sale" /><div className="first-sale-timeline__shade" /><p>First documented sale.<br /><em>$22.20 / order received</em></p><div><b>$22.20</b><span>first sale</span><b>1</b><span>order</span></div></div></div>
        </section>

        <section id="modules" className="section-wrap vault-section" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          <div className="vault-intro"><Eyebrow>Inside the course</Eyebrow><h2>The Faceless Page<br /><em>Launch System.</em></h2><p>Ten PDF modules, each paired with a workbook, plus practical bonuses designed to help you build, grow, and monetize.</p></div>
          <div className="vault-visual course-vault-visual"><img src={facelessPageLaunchVisual} alt="The Faceless Page Launch System course and included bonuses" /><div className="vault-visual__overlay"><span>RAREFOUND / COURSE</span><b>10<br /><small>modules + workbooks</small></b></div></div>
          <div className="module-heading"><div><Eyebrow>Everything you get</Eyebrow><h2>10 modules.<br />10 workbooks.</h2></div><PrimaryButton>Access now</PrimaryButton></div>
          <div className="module-list course-library">{modules.map((module) => <article className="module-row course-module-card" key={module.no}><div className="module-cover">{module.cover ? <img src={module.cover} alt={`Cover for Module ${module.no}: ${module.name}`} /> : <div className="module-cover-placeholder"><span>Module {module.no}</span><b>Cover coming<br />soon</b><small>The AI Content<br />Creation System</small></div>}</div><div className="module-card-content"><span className="module-num">Module {module.no}</span><div className="module-main"><small>PDF module + workbook</small><h3>{module.name}</h3><p>{module.outcome}</p></div><span className="module-plan">Faceless Page Launch System</span></div></article>)}</div>
        </section>

        <section className="section-wrap contrast-section" style={{ paddingTop: "20px" }}><div className="contrast-title"><Eyebrow>Why this isn't another course</Eyebrow><h2>Not a promise.<br /><em>A mechanism.</em></h2></div><div className="contrast-list">{[["Not theory","a sellable vault"],["Not gurus hiding the method","the method out loud"],["Not a subscription","one payment, lifetime"],["Not stale screenshots","the funnel you are inside right now"],["Not 'make money' hype","the exact system"]].map(([a,b], i) => <div className="contrast-row" key={a}><span>0{i + 1}</span><b>{a}</b><ArrowRight size={18} /><strong>{b}</strong></div>)}</div><p className="contrast-footnote">If you want money while you do nothing, don’t buy this. It will not work. This is for the people willing to post, create, adjust, and build a useful thing.</p></section>

        <section id="faq" className="section-wrap faq-section" style={{ paddingTop: "20px", paddingBottom: "20px" }}><div className="faq-header"><Eyebrow>FAQ</Eyebrow><h2>Questions<span>.</span></h2><p>Everything you need to know before you take the method.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><b>{question}</b>{openFaq === index ? <Minus /> : <Plus />}</button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></section>

        <section id="final" className="section-wrap final-section"><DotGrid /><div className="final-content"><Eyebrow>Build the page</Eyebrow><h2>You already have<br />the <em>system.</em></h2><p>The only thing left is the decision to use it.</p><PrimaryButton>Access now</PrimaryButton><span>The page you just scrolled is the system in action.</span></div></section>
      </main>

      <footer className="site-footer"><button onClick={scrollTop} className="footer-mark rarefound-logo-crop" aria-label="Back to top"><img src={rarefoundLogo} alt="" /></button><span>RAREFOUND (C) 2026</span><a href="mailto:support@example.com"><Mail size={14} /> Email</a><a href="#top">Legal</a></footer>
    </div>
  );
}
