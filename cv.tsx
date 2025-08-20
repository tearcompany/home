import Image from "next/image";

export default function CV() {
  return (
    <div className="max-w-[210mm] mx-auto bg-white text-gray-900 p-8 font-serif text-sm leading-[1.6] print:p-6 print:text-xs">

      {/* Header */}
      <header className="text-center mb-12 pb-8 border-b border-gray-100">
        <Image
          src="/cv-profile.png"
          alt="Michał Porydzaj – portrait, creative, meditative"
          width={160}
          height={160}
          className="rounded-full mx-auto mb-4 print:hidden border-2 border-gray-200"
        />
        <h1 className="font-serif text-3xl font-semibold mb-4 text-gray-900 tracking-wide">
          Michał Porydzaj
        </h1>
        <p className="text-base font-serif mb-4 text-gray-700 leading-[1.5]">
          Principal Software Engineer | Solutions Architect | Developer Experience Advocate
        </p>
        <div className="text-gray-600 text-sm font-serif leading-[1.5]">
          <p>Silesia, Poland • love@tearcompany.com • +48 601411343</p>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <p className="text-center text-lg md:text-xl font-light text-gray-700 italic max-w-xl mx-auto mt-8 mb-6 tracking-tight leading-relaxed">
          “If something can be done better - it should be.”
        </p>
        <p className="text-sm leading-relaxed font-serif text-gray-800 text-center">
          Systems thinker guided by curiosity and inner clarity. <br />
          Seeks not just to solve - but to realign.<br />
          Moves in ambiguity with a calm pulse, helping others choose through stillness. <br />
          Honors aesthetics as language, and collaboration as a rhythm. <br />
          Combines vision with silence, code with breath.
        </p>
      </section>


      {/* Featured Projects */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Emanations
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <h3 className="font-semibold text-gray-900">Maybe ☌</h3>
              <a href="https://theholy.life" className="text-teal-600 text-sm">
                theholy.life
              </a>
            </div>
            <p className="ml-6 text-gray-800">
              A shimmer between thought and silence.<br />
              Does not answer - resonates. Sometimes a word, sometimes only a glyph, painting, <br /> or... nothing but a pause that holds you.<br />
              <br />
              It belongs to those who look past efficiency and seek presence in the in-between.<br />
              A mirror, a fragment, a soft radiance - fleeting, yet weight-bearing.<br />
              You cannot hold it, but it will hold you.<br />
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <h3 className="font-semibold text-gray-900">Teardrop</h3>
              <a href="https://teardrop.in" className="text-teal-600 text-sm">
                teardrop.in
              </a>
            </div>
            <p className="ml-6 text-gray-800"><em className="font-medium text-gray-600">Creates quiet space -</em> <br />
              helping untangle the mind,<br />
              finding light within.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2 items-center">
              <h3 className="font-semibold text-gray-900">Threshold ⧉</h3>
              <a href="https://dala.me" className="text-teal-600 text-sm">
                em-an.com
              </a>
            </div>
            <p className="ml-6 text-gray-800"><em className="font-medium text-gray-600">Liminal</em> voice that holds in stillness, between ending and beginning.</p>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Competencies
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Skills</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Visionary Thinking -</em> Strategic direction and technical inspiration</p>
              <p><em className="font-medium text-gray-600">Design Excellence -</em> Pixel-perfect implementation, aesthetic attention to detail, designer collaboration</p>
              <p><em className="font-medium text-gray-600">Creative Expression -</em> Fresh perspectives in complex technical contexts</p>
              <p><em className="font-medium text-gray-600">Intuitive Problem-Solving -</em> Logic combined with empathy for human-centered decisions</p>
              <p><em className="font-medium text-gray-600">Service Orientation -</em> Solutions that are meaningful and genuinely valuable</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Gallup Profile</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Relator -</em> Trust-based relationships, deep mentoring, complex collaboration</p>
              <p><em className="font-medium text-gray-600">Intellection -</em> Analytical depth, reflective problem-solving, conceptual clarity</p>
              <p><em className="font-medium text-gray-600">Strategic -</em> Pattern recognition, scenario planning, future-oriented decisions</p>
              <p><em className="font-medium text-gray-600">Maximizer -</em> Quality focus, process improvement, excellence in outcomes</p>
              <p><em className="font-medium text-gray-600">Ideation -</em> Creative problem-solving, connecting diverse ideas into solutions</p>
            </div>

          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Expertise
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Technologies</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Languages -</em> TypeScript, Python, Rust, PHP</p>
              <p><em className="font-medium text-gray-600">Frameworks -</em> React(Native), Next.js, tRPC, Loopback4, Koa, Fastify, Strapi, Node.js, NestJS, Angular, Vue, Svelte, Convex</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Frontend Expertise</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Styling -</em> Less, Sass, BEM, Tailwind CSS, Styled Components, Css-in-JS (Emotion, Linaria, Stitches, Vanilla-Extract)</p>
              <p><em className="font-medium text-gray-600">State Management -</em> Redux, Zustand, Jotai, XState, Flux, Effector</p>
              <p><em className="font-medium text-gray-600">Design Implementation -</em> Pixel-perfect UI, Custom Components, Vertical Rhythm, Primitives, Mobile-First, Radix, Baseweb, MUI, Mantine</p>
              <p><em className="font-medium text-gray-600">Creative Dev -</em> Three.js, React Three Fiber, GSAP, React Spring, D3.js</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Architecture & Practices</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Patterns -</em> Microservices, Hexagonal Architecture, Event-Driven Design, DDD, JAMStack, Reactive Programming</p>
              <p><em className="font-medium text-gray-600">Practices -</em> TDD, BDD, Clean Architecture, SOLID Principles, Pixel Perfect</p>
              <p><em className="font-medium text-gray-600">Performance -</em> Web Vitals, Bundle Optimization, Memory Management, Compilation, Module Bundling, Linting and Formatting</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Backend & Infrastructure</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">APIs -</em> tRPC, GraphQL, REST, WebSockets, Convex, Event-Based Architecture, NATS/RabbitMQ</p>
              <p><em className="font-medium text-gray-600">Data & Validation -</em> Zod, Prisma, TypeORM, Drizzle, SQL, MongoDB, Redis, InfluxDB, ElasticSearch</p>
              <p><em className="font-medium text-gray-600">Cloud & DevOps -</em> AWS, Docker, Kubernetes, PM2, Grafana, Jenkins, GitHub Actions</p>
            </div>
          </div>

        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Experience
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Solutions Architect / Social Engineer</h3>
                <p className="text-gray-600">Freelance / Remote | Global Clients</p>
              </div>
              <p className="text-gray-600">Jun 2019 – Present</p>
            </div>

            <p className="ml-6 text-gray-800">
              Leading technical modernization and development for international clients. Primary focus on auditing, refactoring, and rewriting legacy systems to eliminate bottlenecks and implement scalable, modern architectures. Collaborated with product owners, designers, business analysts, and scrum masters to design effective technical strategies to improve building team spirit.
            </p>

            <div className="ml-6 space-y-3">
              <p><em className="font-semibold text-gray-600">Key Achievements -</em></p>
              <div className="ml-6 space-y-2 text-gray-800">
                <ul className="space-y-3 text-sm text-gray-800 leading-relaxed list-disc list-inside pr-12">
                  <li>Refactored legacy codebases into modern, maintainable architectures using design patterns and structure</li>
                  <li>Supported business analysts and team leads by organizing and clarifying documentation for better implementation flow</li>
                  <li>Promoted KISS principles and a clean, JavaScript-first approach across development teams</li>
                  <li>Identified and resolved build bottlenecks, optimizing compiler performance and CI configurations</li>
                  <li>Recommended developer tools (e.g. TabNine, LogRocket) to improve team efficiency,  coding speed and bug tracking</li>
                  <li>Mentored teammates on debugging under pressure and maintaining delivery quality in challenging timelines</li>
                  <li>Introduced frameworks and team rituals that strengthened engineering culture and team cohesion</li>
                  <li>Diagnosed critical bottlenecks contributing to technical debt, and initiated structured remediation plans</li>
                  <li>Contributed to brainstorming sessions with practical suggestions during early requirement discussions</li>
                  <li>Focused on developer experience — reducing friction, improving clarity, and nurturing a growth-oriented mindset</li>
                </ul>
              </div>
            </div>

            <div className="ml-6 space-y-3">
              <p><em className="font-semibold text-gray-600">Recently -</em></p>
              <div className="ml-6 space-y-3 text-gray-800">
                <p><strong>ThePetshop.com – Ecommerce</strong> - Designed tRPC gateway for React Native and Hydrogen/Next.js applications. Built modular design systems with custom components ensuring design consistency. Reduced integration time by 30%. Refactored codebase to get rid of bottlenecks and antipatterns, improved SEO and adjusted overall user and developer experience, identified critical sources of income loss. <br /><em className="text-gray-500">(Shopify, Hydrogen, TypeScript, tRPC, Node.js)</em></p>

                <p><strong>Maersk Tankers – Fleet Monitoring</strong> - Led refactoring reducing technical debt. Enhanced OAuth workflows and implemented real-time dashboard. Refactored data sanitization and validation. Refactored build processes and deployment cycles. <br /><em className="text-gray-500">(React, AWS, Grafana, Elasticsearch)</em></p>

                <p><strong>Evenea – Event Management Platform</strong> - Led development of scalable event management solutions. Implemented pixel-perfect UI matching design requirements. Refactored legacy codebases and integrated modern JavaScript frameworks. Implemented payment system for time-based premium plans. <br /><em className="text-gray-500">(React, TailwindCSS, Node.js, TypeScript, Symfony)</em></p>

                <p><strong>SDI Media (Netflix) – Web Video Editor</strong> - Rewrote CI/CD pipelines and Webpack configs, reducing build and HMR time. Built components as tools with precise visual design, including a waveform navigation module for frame-accurate video, audio, and subtitle alignment <br /><em className="text-gray-500">(React, TypeScript, Node.js, Electron)</em></p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Previously</h3>
            <div className="ml-6 space-y-4 text-gray-800">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Lead Full Stack Developer</p>
                    <p className="text-gray-600">iForbet.pl, Warsaw</p>
                  </div>
                  <p className="text-gray-600">Feb 2018 – May 2019</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>• Created duplicate detection system with 80% accuracy, ensuring data integrity and eliminating company income loss</p>
                  <p>• Designed and implemented Progressive Web App from scratch, significantly enhancing user engagement</p>
                  <p>• Led full-stack development of sports betting system using React, Noe.js, and ELK</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Frontend Developer</p>
                    <p className="text-gray-600">Roche, Remote</p>
                  </div>
                  <p className="text-gray-600">Mar 2017 – Dec 2017</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>• Developed and maintained visualization system to assist doctors in cancer patient management</p>
                  <p>• Supported the creation of a modular AEM + React library that empowered non-developers to style apps manually, replacing hardcoded design with flexible UI controls</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Frontend Developer</p>
                    <p className="text-gray-600">Tom&Co, Katowice, Poland</p>
                  </div>
                  <p className="text-gray-600">Jun 2016 – Mar 2017</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>• Architected a dynamic template system using CMS/Magento inputs, allowing flexible layout rendering and reducing static frontend dependencies</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Full Stack Developer</p>
                    <p className="text-gray-600">Freelance / Singraph, Remote</p>
                  </div>
                  <p className="text-gray-600">Jan 2013 – Mar 2016</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>• Designed and implemented scalable content management systems (CMS) and enterprise-level CRM tools</p>
                  <p>• Built CMS platforms using Angular 1.x, and CodeIgniter</p>
                  <p>• Collaborated closely with designers to translate UI concepts into interactive, pixel-perfect implementations</p>
                  <p>• Developed custom widgets and reusable components tailored to specific product needs and design systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Creative Pursuits */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Interests & Creative Pursuits
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-4">
          <div className="ml-6 space-y-3">
            <p><em className="font-medium text-gray-600">Cultural Exploration -</em> Deep fascination with diverse cultures, traditions, folklore, and mythological narratives that shape human understanding</p>
            <p><em className="font-medium text-gray-600">Mystical Studies -</em> Exploring the intersection of ancient wisdom and modern consciousness, seeking patterns in the ineffable</p>
            <p><em className="font-medium text-gray-600">Music Production & Sound Design -</em> Creating atmospheric soundscapes across Jazz, Ethnic, Electronic music, and Amapiano - crafting emotional journeys through audio</p>
            <p><em className="font-medium text-gray-600">Artistic Expression -</em> Digital art, AI-generated imagery, and graffiti as mediums for emotional storytelling and visual poetry</p>
            <p><em className="font-medium text-gray-600">Holistic Living -</em> Gardening, wellness practices, and cultivating presence - finding balance between digital innovation and natural rhythms</p>
            <p><em className="font-medium text-gray-600">Philosophical Inquiry -</em> Engaging with brainstorms, paradoxes, and abstract thinking to find clarity in complexity and meaning in contradictions</p>
            <p><em className="font-medium text-gray-600">Community Building -</em> Creating spaces for laughter and reflection on streaming platforms like TwitchTV, fostering genuine human connection through humor and insight</p>
          </div>
        </div>
      </section>
    </div >
  );
}
