import { siteConfig } from "@/lib/siteConfig";

const services = [
  ["⌘", "Software Development", "Web platforms, internal tools and reliable custom systems that move your business forward."],
  ["◫", "Web Experiences", "Fast, clear and conversion-focused websites built for every screen and every customer."],
  ["▣", "Mobile Applications", "Useful, polished mobile products for iOS and Android—from first idea to launch."],
  ["☁", "Cloud & Infrastructure", "Secure cloud foundations, APIs and scalable deployments that are easy to maintain."],
  ["✦", "UI/UX & Product Design", "Thoughtful product strategy and interface design shaped around real user needs."],
  ["◌", "Creative & Growth", "Campaigns, visual content and digital strategy that help your brand get noticed."],
];

const reasons = [
  ["01", "Built around your goals", "We start with the outcome you need, then make practical technology choices to get there."],
  ["02", "Clear collaboration", "Straightforward communication, visible progress and a process that keeps you in the loop."],
  ["03", "Quality that scales", "Well-crafted digital products designed to work beautifully today and grow with you tomorrow."],
  ["04", "A partner beyond launch", "From improvements to ongoing support, we stay invested in your digital growth."],
];

export default function Home() {
  return <main>
    <div className="topline"><div className="container"><span>DIGITAL TECHNOLOGY · CREATIVE SOLUTIONS · GLOBAL DELIVERY</span><span>Worldwide delivery · Local & international clients</span></div></div>
    <header className="main-nav"><div className="container nav-inner">
      <a className="brand" href="#home" aria-label={`${siteConfig.shortName} home`}><i className="brand-mark"><b/><b/><b/></i><strong>{siteConfig.shortName}<small>{siteConfig.subtitle}</small></strong></a>
      <nav className="nav-links" aria-label="Main navigation"><a href="#services">Services</a><a href="#about">About</a><a href="#process">Process</a><a href="#work">Work</a><a href="#contact">Contact</a></nav>
      <div className="nav-contact"><a href={`mailto:${siteConfig.email}`}>✉ {siteConfig.email}</a><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>◉ {siteConfig.phone}</a></div>
    </div></header>

    <section id="home" className="hero"><div className="hero-dots"/><div className="container hero-grid"><div className="hero-copy">
      <p className="eyebrow">DIGITAL PARTNER FOR AMBITIOUS BUSINESSES</p><h1>We Turn Ideas Into <em>Digital Products</em> That Grow</h1>
      <p className="hero-lede">Strategy, design, software engineering and creative expertise for businesses around the world.</p>
      <div className="actions"><a className="button primary" href="#contact">Start Your Project <span>→</span></a><a className="button ghost" href="#services">Explore Services</a></div>
      <p className="hero-note"><b>Worldwide delivery</b> · Flexible MVR and USD payment options</p>
    </div><div className="hero-visual" aria-hidden="true"><div className="orb"/><div className="code-window"><div className="window-top"><span>● ● ●</span><b>WakeUpGLOBAL Studio</b><small>● Live Build</small></div><div className="code-content"><div className="code-lines"><span><i>01</i>&lt;<b>Product</b> idea=<em>"yours"</em>&gt;</span><span><i>02</i> &nbsp;&lt;<b>Design</b> human /&gt;</span><span><i>03</i> &nbsp;&lt;<b>Build</b> scalable /&gt;</span><span><i>04</i> &nbsp;&lt;<b>Launch</b> global /&gt;</span><span><i>05</i>&lt;/Product&gt;</span><span><i>06</i><em>Build · Test · Grow</em></span></div><div className="mini-browser"><div/><b/><p><i/><i/><i/></p><p><i/><i/></p></div></div><div className="stack"><span>React</span><span>Cloud</span><span>API</span><span>AI</span></div></div><div className="phone-mock"><div className="phone-notch"/><small>My Product</small><div><span>Welcome back</span><b>Your digital<br/>experience</b></div><i/><i className="short"/><p><b/><b/></p></div><div className="float-card card-one"><b>98%</b><span>Client satisfaction</span></div><div className="float-card card-two"><b>Global</b><span>Ready to grow</span></div></div></div></section>

    <section className="stats"><div className="container stats-grid">{siteConfig.stats.map(({ value, label }) => <div key={label}><b>{value}</b><span>{label}</span></div>)}</div></section>

    <section id="services" className="section pale"><div className="container"><header className="section-head"><p className="eyebrow">WHAT WE DO</p><h2>Everything You Need to <em>Move Digital</em></h2><p>One thoughtful partner for the strategy, technology and creative work behind your next big move.</p></header><div className="service-grid">{services.map(([icon,title,text])=><article className="service-card" key={title}><span className="service-icon">{icon}</span><h3>{title}</h3><p>{text}</p><a href="#contact">Let&apos;s talk <span>→</span></a></article>)}</div></div></section>

    <section id="about" className="section"><div className="container split"><div className="global-card"><div className="globe-line"/><i className="pin one"/><i className="pin two"/><i className="pin three"/><i className="pin four"/><div><small>FROM MALDIVES TO THE WORLD</small><b>Local understanding.<br/>Global capability.</b></div></div><div className="copy-block"><p className="eyebrow">YOUR DIGITAL PARTNER</p><h2>Big ideas deserve a <em>strong digital home.</em></h2><p>Whether you are starting fresh or evolving an established business, WakeUpGLOBAL brings the right mix of creative thinking and technical care to every project.</p><div className="ticks"><span>Product strategy</span><span>Clear project process</span><span>Modern technology</span><span>Ongoing partnership</span></div><a className="text-link" href="#contact">Meet WakeUpGLOBAL <span>→</span></a></div></div></section>

    <section className="section dark-section"><div className="container"><header className="section-head"><p className="eyebrow">WHY WAKEUPGLOBAL</p><h2>Built for a Better <em>Way of Working</em></h2><p>Good work is about more than the final screen. It is how we get there together.</p></header><div className="reason-grid">{reasons.map(([number,title,text])=><article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="process" className="section pale"><div className="container"><header className="section-head"><p className="eyebrow">HOW WE WORK</p><h2>From First Conversation to <em>Confident Launch</em></h2></header><div className="process-grid">{[["01","Discover","We learn about the people, challenge and opportunity."],["02","Define","We shape a focused plan, priorities and project direction."],["03","Design","We turn the strategy into a clear, memorable experience."],["04","Build","We create, test and refine with quality at every step."],["05","Grow","We launch with confidence and support what comes next."]].map(([n,t,d])=><article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section id="work" className="section"><div className="container"><header className="section-head"><p className="eyebrow">WHAT WE CAN CREATE</p><h2>Digital Experiences Made to <em>Stand Out</em></h2></header><div className="work-grid"><article><div className="work-art blue"><span>PRODUCT</span><div><b/><b/><b/></div></div><section><small>WEB PLATFORM</small><h3>Clear, useful business tools</h3><p>Custom products that make complex work feel simple.</p></section></article><article><div className="work-art violet"><span>BRAND</span><div><b/><b/><b/></div></div><section><small>CREATIVE CAMPAIGN</small><h3>Content with real momentum</h3><p>Thoughtful visuals and digital stories that connect.</p></section></article><article><div className="work-art teal"><span>GROW</span><div><b/><b/><b/></div></div><section><small>MOBILE EXPERIENCE</small><h3>Designed for everyday use</h3><p>Mobile-first ideas with a polished, human touch.</p></section></article></div></div></section>

    <section className="cta" id="contact"><div className="container"><p className="eyebrow">LET&apos;S BUILD SOMETHING GREAT</p><h2>Ready to Take Your Business <em>Digital?</em></h2><p>Tell us what you want to build. We&apos;ll turn the idea into a practical roadmap and a product made to grow.</p><a className="button primary" href={`mailto:${siteConfig.email}`}>Start a Conversation <span>→</span></a><div className="contact-row"><a href={`mailto:${siteConfig.email}`}>✉ {siteConfig.email}</a><a href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`}>◉ {siteConfig.phone}</a><span>◎ {siteConfig.location} · Worldwide</span></div></div></section>

    <footer><div className="container footer-grid"><div><a className="brand" href="#home"><i className="brand-mark"><b/><b/><b/></i><strong>{siteConfig.shortName}<small>{siteConfig.subtitle}</small></strong></a><p>Digital technology and creative solutions for businesses ready to grow.</p></div><div><h3>Services</h3><a href="#services">Software & web development</a><a href="#services">Creative & digital services</a><a href="#services">Cloud & product strategy</a></div><div><h3>Company</h3><a href="#about">About WakeUpGLOBAL</a><a href="#process">Our process</a><a href="#work">Our work</a></div><div><h3>Contact</h3><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href="#contact">{siteConfig.phone}</a><a href="#contact">Worldwide delivery</a></div></div><div className="container copyright"><span>© 2026 {siteConfig.shortName}. All rights reserved.</span><span>Technology · Creativity · Growth</span></div></footer>
  </main>;
}
