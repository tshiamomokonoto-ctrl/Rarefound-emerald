/**
 * Design philosophy: reference-led proof-first editorial sales page.
 * Matte black surfaces, restrained emerald signals, serif display hierarchy,
 * and industrial browser-frame motifs are intentional and must remain cohesive.
 */
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDotDashed,
  CreditCard,
  ExternalLink,
  Layers3,
  Mail,
  Menu,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const heroImage = "/manus-storage/method-hero-grid_e95423d3.png";
const proofImage = "/manus-storage/method-proof-silhouette_37a5eea6.png";
const vaultImage = "/manus-storage/method-vault-graph_c189bc11.png";
const symbolImage = "/manus-storage/method-symbol_8aae80ab.png";

const modules = [
  {
    no: "01",
    lessons: "5 lessons",
    name: "Mindset",
    plan: "Included in The Method",
    copy: "The meta, the identity, the 2-day window, and the first win. Why course selling is the actual business.",
  },
  {
    no: "02",
    lessons: "9 lessons",
    name: "Operations",
    plan: "Included in The Method",
    copy: "The funnel, DMs, objection handling, payments, delivery, and the full backend setup.",
  },
  {
    no: "03",
    lessons: "5 lessons",
    name: "Marketing",
    plan: "Included in The Method",
    copy: "Positioning, visual hooks, consistency, the content formula, and comments that pull reach.",
  },
  {
    no: "04",
    lessons: "5 lessons",
    name: "Pricing",
    plan: "Included in The Method",
    copy: "The price ladder, hidden tiers, locked-file upsells, and pricing your proof with intent.",
  },
  {
    no: "05",
    lessons: "5 lessons",
    name: "The AI Engine",
    plan: "Included in The AI Engine",
    copy: "Use AI to build the vault, the page, and the tools that get the digital product out into the world.",
  },
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

function PrimaryButton({ children, href = "#pricing" }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="primary-button">{children}<ArrowRight size={16} strokeWidth={2.4} /></a>;
}

function ProofCard({ type, title, detail, tone = "emerald" }: { type: string; title: string; detail: string; tone?: "emerald" | "muted" }) {
  return (
    <article className={`proof-card ${tone}`}>
      <div className="proof-card__bar"><span>{type}</span><i /></div>
      <div className="proof-card__body">
        <div className="proof-pulse"><b /><b /><b /></div>
        <strong>{title}</strong>
        <small>{detail}</small>
      </div>
      <div className="proof-card__footer"><span className="status-dot" /> connected source <ArrowUpRight size={13} /></div>
    </article>
  );
}

function OfferCard({ engine = false }: { engine?: boolean }) {
  const [showMore, setShowMore] = useState(false);
  const items = engine
    ? ["Everything in The Method", "The site template and visual system", "A delivery-system outline", "AI build prompts and setup guide", "The complete video walkthrough"]
    : ["The full vault: 4 modules, 24 lessons", "Swipe files for DMs, hooks, and sales copy", "A funnel implementation outline", "Lifetime updates and direct support"];

  return (
    <article className={`offer-card ${engine ? "featured" : ""}`}>
      {engine && <div className="popular-flag">Most popular</div>}
      <div className="offer-card__topline"><span>Level 0{engine ? "2" : "1"}</span><span className="live-tag">Founder pricing live</span></div>
      <h3>{engine ? "The AI Engine" : "The Method"}</h3>
      <p className="offer-card__intro">
        {engine ? "Use AI to shape your vault and your page, then make the infrastructure your own." : "Package what you know into a vault people can buy, without building an audience first."}
      </p>
      <div className="price-line"><strong>${engine ? "97" : "47"}</strong><del>${engine ? "179" : "99"}</del></div>
      <p className="price-note">Prices rise with the next cohort</p>
      <div className="offer-divider" />
      <ul className="offer-list">
        {items.slice(0, showMore ? items.length : 3).map((item) => <li key={item}><Check size={15} />{item}</li>)}
      </ul>
      {items.length > 3 && <button className="text-button" onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "See full module breakdown"}<ChevronDown size={14} className={showMore ? "flip" : ""} /></button>}
      {engine && <div className="value-stack"><p>What this replaces</p><div><span>Custom site & delivery framework</span><b>$500+</b></div><div><span>A productized funnel outline</span><b>$150+</b></div><div><span>Membership subscription overhead</span><b>annual</b></div></div>}
      <p className="profit-note">One sale of your own course can cover this. Everything after is yours to keep.</p>
      <PrimaryButton href="#final">{engine ? "Get instant access" : "Get the method"}</PrimaryButton>
      <p className="checkout-note"><CreditCard size={14} /> Secure checkout · instant access</p>
      <div className="guarantee"><ShieldCheck size={18} /><p><b>14-day action-based guarantee</b> Complete the modules, launch a real offer, and post consistently. If the process has not served you, show the work.</p></div>
    </article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a href="#top" className="wordmark" aria-label="Sell The Method home"><img src={symbolImage} alt="" /> <span>SELLTHEMETHOD</span></a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Primary navigation">
          <a href="#proof" onClick={() => setMenuOpen(false)}>Proof</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Access</a>
          <a href="#modules" onClick={() => setMenuOpen(false)}>Inside the vault</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Questions</a>
        </nav>
        <a className="nav-cta" href="#pricing">Get the method <ArrowUpRight size={14} /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <img className="hero-grid-art" src={heroImage} alt="" aria-hidden="true" />
          <DotGrid className="hero-grid" />
          <div className="constellation constellation-a" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
          <div className="hero-browser">
            <div className="browser-chrome"><div><i /><i /><i /></div><span>sellthemethod</span><CircleDotDashed size={14} /></div>
            <div className="hero-browser__content">
              <div className="hero-copy">
                <Eyebrow>Digital product operating system</Eyebrow>
                <h1>Selling The<br />Method Is The<br /><em>Method</em></h1>
                <p>Every influencer got rich selling courses, not from the thing they teach. You already knew that.</p>
                <p className="hero-kicker">Make F*** U Money Selling Courses.</p>
                <div className="hero-stats">
                  <div><b>12+</b><span>students selling</span></div><div><b>$23k+</b><span>made by students</span></div><div><b>10M+</b><span>views with the method</span></div><div><b>100%</b><span>faceless</span></div>
                </div>
                <a className="proof-jump" href="#proof">See the proof <ArrowDown size={16} /></a>
              </div>
              <div className="hero-proof-panel">
                <img src={proofImage} alt="An anonymous creator working in a low-key workspace" />
                <div className="hero-proof-panel__shade" />
                <div className="small-card"><div><span className="status-dot" /> STRIPE</div><b>real sales</b></div>
                <a href="#proof" className="verify-link">Verify the sales live <ExternalLink size={14} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="proof" className="section-wrap proof-section">
          <div className="section-heading split-heading"><div><Eyebrow>The case study · DeployVault</Eyebrow><h2>Proof the method<br /><em>actually moves</em></h2></div><p>DeployVault is the product built and sold with this exact method. It is presented here as a living course of action, not a slide deck.</p></div>
          <div className="proof-lead">
            <div className="proof-lead__visual"><div className="scanline" /><div className="proof-led"><span>LIVE</span><b>Evidence<br />in motion</b><small>connected / source-driven</small></div></div>
            <div className="proof-lead__copy"><Eyebrow>Verified patterns</Eyebrow><h3>Build the product.<br />Build the proof.<br /><em>Then tell the story.</em></h3><a href="#pricing" className="inline-arrow">See the full process <ArrowRight size={17} /></a></div>
          </div>
          <div className="proof-grid">
            <ProofCard type="STRIPE" title="Sales signal" detail="a live proof frame" />
            <ProofCard type="STRIPE" title="System working" detail="momentum, not theatre" tone="muted" />
            <ProofCard type="INSTAGRAM" title="The page" detail="content → demand" tone="muted" />
            <ProofCard type="INSTAGRAM" title="Attention layer" detail="a repeatable visual hook" />
          </div>
          <div className="metrics-strip"><div><b>16+</b><span>members inside</span></div><div><b>$20k+</b><span>sales signal this month</span></div><div><b>75</b><span>customers in week one</span></div><div><b>2 days</b><span>to first client</span></div></div>
        </section>

        <section id="pricing" className="section-wrap pricing-section">
          <div className="section-heading centered-heading"><Eyebrow>Choose your path</Eyebrow><h2>Package what you know.<br /><em>Sell it faceless.</em></h2><p>No camera, no audience. Watchers keep watching. Sellers sell the method.</p></div>
          <div className="offer-grid"><OfferCard /><OfferCard engine /></div>
          <p className="licensing-note"><Layers3 size={17} /><span><b>Don't have a niche yet?</b> Licensed vaults are available to members: complete, tested product frameworks you can rebrand and make your own.</span></p>
        </section>

        <section className="section-wrap claim-section">
          <div className="claim-copy"><Eyebrow>The part nobody says out loud</Eyebrow><h2>You already know<br /><em>selling courses prints.</em></h2><p>What do all of these creators have in common? Every post leads somewhere. Every point of attention becomes a funnel to an offer.</p><p>With an operating system and assisted production, building the thing that teaches people is much more direct than it used to be.</p><PrimaryButton>Start selling the method</PrimaryButton></div>
          <div className="influence-stack">
            {[['01','The funnel is the product','Attention becomes an asset when it leads to a clear next step.'],['02','The lesson needs a system','The delivery has to be more than a folder of loose advice.'],['03','Ownership compounds','Build your own conversion and delivery infrastructure.']].map(([number,title,copy]) => <article className="influence-card" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight size={19} /></article>)}
          </div>
        </section>

        <section className="section-wrap founder-section">
          <div className="founder-rail"><span>From the founder</span><span>Personal note / 2026</span></div>
          <div className="founder-letter"><h2>“I spent years procrastinating with every hype, and made nothing.”</h2><div className="letter-body"><p>Then it clicked: the people selling courses on dropshipping and trading were quietly making more than the people actually doing it.</p><p>When a clear system finally replaces scattered tactics, the first product gets easier to build, easier to communicate, and more honest to sell.</p><p>In a gold rush, the people selling shovels make the most. A course is the shovel.</p><p>If that is where you are trying to get, this was built to help.</p><a href="#pricing" className="inline-arrow">Start now <ArrowRight size={17} /></a></div></div>
        </section>

        <section className="section-wrap timeline-section">
          <div className="section-heading split-heading"><div><Eyebrow>In real time</Eyebrow><h2>This account is<br /><em>the proof.</em></h2></div><p>A course about selling courses, already selling, faceless, from a standing start. The method stays visible in the work itself.</p></div>
          <div className="timeline-layout"><div className="timeline"><article><span>01</span><time>June 20</time><h3>First video posted</h3><p>The account starts from zero.</p></article><article><span>02</span><time>June 27</time><h3>First signal</h3><p>The loop begins to find attention.</p></article><article><span>03</span><time>June 28</time><h3>First sale</h3><p>Real action, not an abstract plan.</p></article></div><div className="timeline-visual"><div className="timeline-visual__orb" /><p>Operate in public.<br /><em>Let the process prove itself.</em></p><div><b>12</b><span>posts</span><b>8 days</b><span>to first sale</span></div></div></div>
        </section>

        <section id="modules" className="section-wrap vault-section">
          <div className="vault-intro"><Eyebrow>Inside the vault</Eyebrow><h2>The whole system<br /><em>in one place.</em></h2><p>The method, the offer, and everything you need to sell it.</p></div>
          <div className="vault-visual"><img src={vaultImage} alt="A visual knowledge graph for the digital course vault" /><div className="vault-visual__overlay"><span>SELLTHEMETHOD / VAULT</span><b>29<br /><small>linked lessons</small></b></div></div>
          <div className="module-heading"><div><Eyebrow>Everything you get</Eyebrow><h2>5 modules.<br />29 lessons.</h2></div><PrimaryButton href="#pricing">Get access</PrimaryButton></div>
          <div className="module-list">{modules.map((module) => <article className="module-row" key={module.no}><span className="module-num">{module.no}</span><div className="module-main"><small>{module.lessons}</small><h3>{module.name}</h3><p>{module.copy}</p></div><span className="module-plan">{module.plan}</span><ArrowUpRight size={18} /></article>)}</div>
        </section>

        <section className="section-wrap contrast-section"><div className="contrast-title"><Eyebrow>Why this isn't another course</Eyebrow><h2>Not a promise.<br /><em>A mechanism.</em></h2></div><div className="contrast-list">{[["Not theory","a sellable vault"],["Not gurus hiding the method","the method out loud"],["Not a subscription","one payment, lifetime"],["Not stale screenshots","the funnel you are inside right now"],["Not 'make money' hype","the exact system"]].map(([a,b], i) => <div className="contrast-row" key={a}><span>0{i + 1}</span><b>{a}</b><ArrowRight size={18} /><strong>{b}</strong></div>)}</div><p className="contrast-footnote">If you want money while you do nothing, don’t buy this. It will not work. This is for the people willing to post, create, adjust, and build a useful thing.</p></section>

        <section id="faq" className="section-wrap faq-section"><div className="faq-header"><Eyebrow>FAQ</Eyebrow><h2>Questions<span>.</span></h2><p>Everything you need to know before you take the method.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? "faq-item active" : "faq-item"} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} aria-expanded={openFaq === index}><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><b>{question}</b>{openFaq === index ? <Minus /> : <Plus />}</button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></section>

        <section id="final" className="section-wrap final-section"><DotGrid /><div className="final-content"><Eyebrow>Sell the shovels</Eyebrow><h2>You already have<br />the <em>method.</em></h2><p>The only thing left is the decision to use it.</p><PrimaryButton href="#pricing">Get the method</PrimaryButton><span>The funnel you just scrolled is the method in action.</span></div></section>
      </main>

      <footer className="site-footer"><button onClick={scrollTop} className="footer-mark" aria-label="Back to top"><img src={symbolImage} alt="" /></button><span>SELLTHEMETHOD (C) 2026</span><a href="mailto:support@example.com"><Mail size={14} /> Email</a><a href="#top">Legal</a></footer>
    </div>
  );
}
