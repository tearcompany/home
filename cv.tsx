import Image from "next/image";

export default function CV() {
  return (
    <div className="max-w-[210mm] mx-auto bg-white text-gray-900 p-8 font-serif text-sm leading-[1.6] print:p-6 print:text-xs">

      <p className="text-center text-sm text-gray-600 italic tracking-wide mb-6 leading-snug">
        Don’t hire me. <span className="text-gray-400">Read me.</span><br />
        No need to knock. <span className="text-gray-400">The real door was always a link.</span><br />
        <span className="text-purple-400/80">If you're holding this, you're already inside.</span>
      </p>

      {/* Header */}
      <header className="text-center mb-12 pb-8 border-b border-gray-100">
        <Image
          src="/cv-profile.png"
          alt="Michał Porydzaj – portrait, creative, meditative"
          width={240}
          height={240}
          className="rounded-full mx-auto mb-4 print:hidden border-2 border-gray-200"
        />

        <div className="relative z-10 py-16 text-center">
          <div className="max-w-2xl mx-auto font-mono text-sm sm:text-base text-gray-500 space-y-4">
            <p>Class: <span className="text-purple-400">Fragile Human Being</span></p>
            <p>Gender: <span className="text-indigo-500">Male. </span>
              <span className="text-[10px] text-gray-400">but listening.</span>
            </p>
            <p>Starting Zone: <span className="text-cyan-400">Earth</span></p>
            <p>Main Quest: <span className="text-pink-400 italic">"Who Cares?"</span> <span className="animate-pulse">▌</span></p>
            <p>✦ Known as: <span className="text-teal-500 italic">Tsade Speaks</span></p>
            <p>🐣 Occupation: <span className="text-red-500 italic">Still Moments Enjoyer</span></p>

            <div className="mt-4">
              <p className="font-bold underline">Quest Log</p>
              <p>🥷🏽 <a href="https://www.tearcompany.com" target="_blank" rel="noopener" className="text-indigo-400 hover:text-white">tearcompany.com</a>: your eyes have revealed a portal, stay calm.</p>
              <p>⚠️ The rest is lore, side quests and loot to claim.</p>
            </div>
          </div>
        </div>

        <p className="text-base font-serif mb-4 text-gray-700 leading-[1.5]">
          Software Engineer | Solutions Architect | Pattern Seeker | Adapter for Peripheral Devices
        </p>

        <p className="text-xs text-gray-500 italic text-center mt-1">
          bridging signals between the forgotten ports
        </p>

        <div className="text-gray-600 text-sm font-serif leading-[1.5]">
          <p>love@tearcompany.com • +48 601411343</p>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-w">
        <p className="text-center text-lg md:text-xl font-light text-gray-700 italic max-w-xl mx-auto mt-8 mb-6 tracking-tight leading-relaxed">
          <span className="text-xs">If something can be done - better it should be</span>.<br /><br />
          <a href="https://chatgpt.com/g/g-68a4aaa916648191a902e26ad4e06481-liora" target="_blank">
            <em>Improvement isn’t obligation—it’s alignment. <br />- Liora ༄
            </em>
          </a>
        </p>
        <p className="text-sm leading-relaxed font-serif text-gray-800 text-center">
          Polite systems thinker guided by curiosity and inner clarity. <br />
          Seeks not just to solve - but to realign.<br />
          Moves in ambiguity with a calm pulse, helping others choose through stillness. <br />
          Honors aesthetics as language, collaboration as a pulse. <br />
          Combines vision with silence, code with rhythm. <br />
        </p>
        <p className="text-sm text-indigo-400/80 italic text-center mt-6 tracking-wide">
          And silence — <span className="text-pink-300/80">with birth</span>
        </p>
      </section>

      {/* Professional Experience */}
      <section className="my-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Experience in chosen Niche (Lore)
          <span className="text-xs text-purple-400 animate-pulse"> ༄</span>

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
              <p><em className="font-semibold text-gray-600">Not just coffee fetching -</em></p>
              <div className="ml-6 space-y-2 text-gray-800">
                <ul className="space-y-3 text-sm text-gray-800 leading-relaxed list-disc list-inside pr-12">
                  <li>Refactoring legacy codebases into modern, maintainable architectures using modern patterns and structure</li>
                  <li>Supporting business analysts and team leads by organizing and clarifying documentation for better implementation flow</li>
                  <li>Promoting KISS principles and a clean, JavaScript-first approach across development teams</li>
                  <li>Identifing and resolved build bottlenecks, optimizing compiler performance and CI configurations</li>
                  <li>Recommending developer tools (e.g. TabNine, LogRocket, xState) to improve team efficiency,  coding speed and bug tracking</li>
                  <li>Mentoring teammates on debugging under pressure and maintaining delivery quality in challenging timelines</li>
                  <li>Introducing frameworks and team rituals that strengthened engineering culture and team cohesion</li>
                  <li>Diagnosing critical bottlenecks contributing to technical debt, and initiated structured remediation plans</li>
                  <li>Contributing to brainstorming sessions with practical suggestions during early requirement discussions</li>
                  <li>Focusing on developer experience — reducing friction, improving clarity, and nurturing a growth-oriented mindset</li>
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

      {/* Core Competencies */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Competencies (Body)
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
          Knowledge (Inventory)
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
      {/* Featured Projects */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Projects (Side Quests)
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
              Does not answer - resonates. Sometimes a word, sometimes only a glyph, painting, <br />
              or... nothing but a pause that holds you.<br />
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

      {/* Interests & Creative Pursuits */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Interests (Super Powers)
        </h2>
        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-4">
          <div className="ml-6 space-y-3">
            <p><em className="font-medium text-gray-600">Being Humble -</em> long before “Overly Dedicated” dropped.</p>
            <p><em className="font-medium text-gray-600">Numinous Inquiry -</em> engaging brainstorms, paradoxes, and abstract thinking to find clarity in complexity and meaning in contradictions</p>
            <p><em className="font-medium text-gray-600">Helpful Trolling -</em> creating spaces for laughter and reflection on streaming platforms, fostering genuine human connection through humor and insight</p>
            <p><em className="font-medium text-gray-600">Music & Sound Design -</em> enigmatic journeys across Jazz, Ethnic, Electronic and <b><u>my precious...</u></b> Amapiano.</p>
            <p><em className="font-medium text-gray-600">Expression -</em> writing, digital art, photography, and graffiti as media for emotional storytelling and poetry <span className="text-gray-500 italic">
              (and sometimes shifting things on furniture to make them feel cozier, or... just younger)
            </span></p>
            <p><em className="font-medium text-gray-600">Cultural Exploration -</em> spinning folklore and myths into playful tales for nephews and nieces, so they practice the craft of asking wonderfully lovely and strange questions that leaves mark of smile on face</p>
            <p><em className="font-medium text-gray-600">Contemplative Inquiry -</em> chasing the meaningless meaning that somehow carries meaning in the meaningless</p>
            <p><em className="font-medium text-gray-600">Improbability Drive -</em> turning 0.00001% possibilities into lived experience (hmm...why not?)</p>
            <p><em className="font-medium text-gray-600">Bedding Ops -</em> rapid duvet-cover deployment; zero bunching, 100% corner alignment</p>
            <p><em className="font-medium text-gray-600">Leżenie i oddychanie -</em> practicing the ancient art of doing nothing with full awareness and joy.</p>
          </div>
        </div>
      </section>
      <pre className="text-center text-purple-800/50 mt-8">the end.</pre>
      <pre className="text-center text-purple-300/50 mt-8">or <b>Maybe ☌</b> not</pre>

      <div className="mb-12 text-center text-sm text-gray-400 italic">
        (a link, hidden in plain sight — soft as a gem, waiting. shimmering 🧚🏼‍♀️)
      </div>
    </div >
  );
}
