/** @format */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaArrowRight, FaCheck, FaCode, FaBullhorn, FaRobot, FaStore } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode />,
    title: 'Websites & web apps',
    text: 'Fast, professional sites and custom web applications built around how your business actually works.',
  },
  {
    icon: <FaStore />,
    title: 'Ordering & business systems',
    text: 'Ordering flows, customer portals, internal dashboards, appointment systems and operational tools.',
  },
  {
    icon: <FaBullhorn />,
    title: 'Local growth & marketing',
    text: 'Google Ads, landing pages, conversion improvements, content systems and practical local marketing support.',
  },
  {
    icon: <FaRobot />,
    title: 'Automation & AI',
    text: 'Automate repetitive work, connect existing tools and build useful AI into workflows where it saves real time.',
  },
];

const work = [
  {
    name: 'True Shine Wash',
    type: 'Service business platform',
    text: 'A complete customer-facing website for a service business, including service presentation, lead capture and consultation scheduling.',
    href: 'https://www.trueshinewash.com',
  },
  {
    name: 'EuroGrill',
    type: 'Restaurant digital presence',
    text: 'Restaurant-focused web work designed around menus, local discovery, brand presentation and a clearer customer path.',
  },
  {
    name: 'BHLive',
    type: 'Media platform',
    text: 'An owned media project spanning publishing, social content, audience growth and the systems behind digital distribution.',
  },
  {
    name: 'IVAM Construction',
    type: 'Construction website',
    text: 'A professional web presence built to make a local construction company easier to understand, trust and contact.',
  },
];

const HomePage = () => {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'TMN Media LLC',
    url: 'https://www.tmn-media.com',
    email: 'contact@tmn-media.com',
    areaServed: 'San Francisco Bay Area',
    description:
      'TMN Media builds websites, business software, automation and practical marketing systems for growing businesses.',
  };

  return (
    <div className="bg-slate-950 text-white">
      <Helmet>
        <title>TMN Media | Websites, Software, Automation & Growth</title>
        <meta
          name="description"
          content="TMN Media builds websites, business software, automation and practical marketing systems for growing businesses in the Bay Area and beyond."
        />
        <link rel="canonical" href="https://www.tmn-media.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tmn-media.com/" />
        <meta property="og:title" content="TMN Media | Build the system your business actually needs" />
        <meta
          property="og:description"
          content="Websites, software, automation and growth systems built around the real bottlenecks in your business."
        />
        <script type="application/ld+json">{JSON.stringify(organizationData)}</script>
      </Helmet>

      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-300" />
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-secondary-100/10 blur-3xl" />
        <div className="container mx-auto px-5 md:px-8 relative z-10 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <p className="text-secondary-100 font-semibold tracking-[0.2em] uppercase mb-6">
                Bay Area · Software · Marketing · Automation
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.98] mb-8">
                Build the system your business actually needs.
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed mb-10">
                TMN Media works directly with business owners to fix the digital side of the business — from the website customers see to the software, automation and marketing behind it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#Contact" className="inline-flex items-center justify-center bg-secondary-100 text-slate-950 font-bold px-7 py-4 rounded-lg hover:bg-secondary-200 transition">
                  Tell us what is slowing you down <FaArrowRight className="ml-3" />
                </a>
                <a href="#Work" className="inline-flex items-center justify-center border border-white/20 bg-white/5 px-7 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                  See selected work
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl p-7 shadow-2xl">
                <p className="text-sm text-slate-400 uppercase tracking-widest mb-6">One partner, fewer handoffs</p>
                {['Website & brand presence', 'Custom software & dashboards', 'Ordering & appointment systems', 'Google Ads & conversion', 'AI & workflow automation', 'Ongoing technical support'].map(item => (
                  <div key={item} className="flex items-center py-3 border-b border-white/10 last:border-0">
                    <FaCheck className="text-secondary-100 mr-3 text-sm" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="About" className="py-24 bg-white text-slate-950">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-primary-100 font-bold uppercase tracking-widest mb-4">How we work</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Start with the bottleneck, not a package.</h2>
          </div>
          <div className="text-lg text-slate-600 leading-relaxed space-y-5">
            <p>Most small businesses do not need another agency selling a fixed bundle. They need someone who can understand the problem and then build the right solution.</p>
            <p>That might be a better website. It might be an ordering system, a customer dashboard, Google Ads, an automated follow-up flow, or several of those pieces working together.</p>
            <p className="font-semibold text-slate-900">TMN Media is structured to move between marketing and software instead of forcing every problem into one category.</p>
          </div>
        </div>
      </section>

      <section id="OfferedServices" className="py-24 bg-slate-100 text-slate-950">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl">
          <div className="max-w-3xl mb-14">
            <p className="text-primary-100 font-bold uppercase tracking-widest mb-4">Capabilities</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">From customer acquisition to the software underneath it.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {services.map(service => (
              <div key={service.title} className="bg-white border border-slate-200 rounded-2xl p-8 md:p-10">
                <div className="text-3xl text-primary-100 mb-8">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Work" className="py-24 bg-slate-950">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
            <div className="max-w-3xl">
              <p className="text-secondary-100 font-bold uppercase tracking-widest mb-4">Selected work</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Built for real businesses, not agency theater.</h2>
            </div>
            <p className="text-slate-400 max-w-md">A sample of business, media and service-industry work across web development and digital operations.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {work.map(project => (
              <div key={project.name} className="border border-white/10 rounded-2xl p-8 bg-white/[0.03] hover:bg-white/[0.06] transition">
                <p className="text-secondary-100 text-sm font-semibold uppercase tracking-widest mb-3">{project.type}</p>
                <h3 className="text-3xl font-bold mb-4">{project.name}</h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-6">{project.text}</p>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center font-semibold text-white hover:text-secondary-100">
                    View live project <FaArrowRight className="ml-2" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="Consulting" className="py-24 bg-secondary-100 text-slate-950">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <p className="font-bold uppercase tracking-widest mb-4">The operating model</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Your on-demand software and digital growth partner.</h2>
            <p className="text-xl max-w-3xl leading-relaxed">Instead of coordinating a web developer, marketer, designer and automation freelancer separately, use one technical partner who can see the whole system and work on the highest-leverage problem first.</p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a href="#Contact" className="inline-flex items-center bg-slate-950 text-white font-bold px-7 py-4 rounded-lg">
              Start a conversation <FaArrowRight className="ml-3" />
            </a>
          </div>
        </div>
      </section>

      <section id="Team" className="py-20 bg-white text-slate-950">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl">
          <div className="border-l-4 border-primary-100 pl-7 max-w-4xl">
            <p className="text-primary-100 font-bold uppercase tracking-widest mb-3">TMN Media LLC</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5">Small enough to work directly. Technical enough to build beyond a brochure site.</h2>
            <p className="text-lg text-slate-600 leading-relaxed">Based in the San Francisco Bay Area and built around hands-on software, web and marketing execution. We work with local businesses as well as projects that need a practical technical partner.</p>
          </div>
        </div>
      </section>

      <section id="Contact" className="py-24 bg-primary-300 text-white">
        <div className="container mx-auto px-5 md:px-8 max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-secondary-100 font-bold uppercase tracking-widest mb-4">Contact</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">What is the part of your business you wish just worked better?</h2>
            <p className="text-xl text-slate-200 leading-relaxed mb-8">Send us the problem in plain English. You do not need to know which software, platform or marketing service you need first.</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:contact@tmn-media.com?subject=TMN%20Media%20Project%20Inquiry" className="bg-secondary-100 text-slate-950 font-bold px-7 py-4 rounded-lg">contact@tmn-media.com</a>
              <a href="tel:+14082902660" className="border border-white/20 font-bold px-7 py-4 rounded-lg">(408) 290-2660</a>
            </div>
          </div>
          <div className="bg-white/10 border border-white/15 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-6">Good starting points</h3>
            {['“My website makes us look smaller than we are.”', '“Customers should be able to order or book directly.”', '“We are paying too much to third-party platforms.”', '“I keep doing the same admin work manually.”', '“I need more local customers but do not know what to run.”'].map(item => (
              <p key={item} className="py-4 border-b border-white/10 last:border-0 text-slate-200">{item}</p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
