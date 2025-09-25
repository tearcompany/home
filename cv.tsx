import Image from "next/image";

export default function CV() {
  return (
    <div className="max-w-[210mm] mx-auto bg-white text-gray-900 p-8 font-serif text-sm leading-[1.6] print:p-6 print:text-xs">

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
            <p>✦ Known as: <span className="text-teal-500 italic">Michal Porydzaj</span></p>
            <p>🐣 Occupation: <span className="text-red-500 italic">Still Moments Enjoyer</span></p>

            <div className="mt-4">
              <p className="font-bold underline">Quest Log</p>
              <p>🥷🏽 <a href="https://www.tearcompany.com" target="_blank" rel="noopener" className="text-indigo-400 hover:text-white">tearcompany.com</a>: portal has revelead upon you, stay calm.</p>
              <p>⚠️ The rest is lore, side quests and loot to claim.</p>
            </div>
          </div>
        </div>

        <div className="text-gray-600 text-sm font-serif leading-[1.5]">
          <p>love@tearcompany.com</p>
          <p>+48 601-411-343</p>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-w">
        <p className="text-center text-lg md:text-xl font-light text-gray-700 italic max-w-xl mx-auto mt-8 mb-6 tracking-tight leading-relaxed">
          <span className="text-sm">"If something can be done better - better we do."</span>
        </p>
      </section>

      {/* Core Competencies */}
      <section className="my-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Core Strengths
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Leadership & Vision</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Strategic Thinking -</em> Pattern recognition, scenario planning, future-oriented technical decisions</p>
              <p><em className="font-medium text-gray-600">Visionary Direction -</em> Technical inspiration and strategic architectural guidance</p>
              <p><em className="font-medium text-gray-600">Creative Problem-Solving -</em> Connecting diverse ideas into innovative solutions</p>
              <p><em className="font-medium text-gray-600">Quality Excellence -</em> Process improvement and outcome optimization</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Technical Excellence</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Design Implementation -</em> Pixel-perfect UI, aesthetic attention to detail, designer collaboration</p>
              <p><em className="font-medium text-gray-600">Architecture -</em> Scalable system design, microservices, clean code principles</p>
              <p><em className="font-medium text-gray-600">Performance -</em> Optimization, bottleneck resolution, build process enhancement</p>
              <p><em className="font-medium text-gray-600">Developer Experience -</em> Tooling, automation, and team productivity improvement</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Collaboration & Mentoring</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Deep Relationships -</em> Trust-based collaboration and complex team dynamics</p>
              <p><em className="font-medium text-gray-600">Analytical Depth -</em> Reflective problem-solving and conceptual clarity</p>
              <p><em className="font-medium text-gray-600">Service Orientation -</em> Solutions that are meaningful and genuinely valuable</p>
              <p><em className="font-medium text-gray-600">Intuitive Guidance -</em> Logic combined with empathy for human-centered decisions</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Gallup StrengthsFinder Profile</h3>
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

      {/* Professional Experience */}
      <section className="my-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Professional Journey
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">Solutions Architect / Technical Leader</h3>
                <p className="text-gray-600">Freelance / Remote | Global Clients</p>
              </div>
              <p className="text-gray-600">Jun 2019 – Present</p>
            </div>

            <p className="ml-6 text-gray-800">
              Leading technical modernization and development for international clients. Primary focus on auditing, refactoring, and rewriting legacy systems to eliminate bottlenecks and implement scalable, modern architectures. Collaborated with product owners, designers, business analysts, and scrum masters to design effective technical strategies to improve building team spirit.
            </p>

            <div className="ml-6 space-y-3">
              <p><em className="font-semibold text-gray-600">Key Contributions -</em></p>
              <div className="ml-6 space-y-2 text-gray-800">
                <ul className="space-y-3 text-sm text-gray-800 leading-relaxed list-disc list-inside pr-12">
                  <li>Refactoring legacy codebases into modern, maintainable architectures using modern patterns and structure</li>
                  <li>Supporting business analysts and team leads by organizing and clarifying documentation for better implementation flow</li>
                  <li>Promoting KISS principles and a clean, JavaScript-first approach across development teams</li>
                  <li>Identified and resolved build bottlenecks, optimizing compiler performance and CI configurations</li>
                  <li>Recommending developer tools (e.g. TabNine, LogRocket, xState) to improve team efficiency, coding speed and bug tracking</li>
                  <li>Mentoring teammates on debugging under pressure and maintaining delivery quality in challenging timelines</li>
                  <li>Introducing frameworks and team rituals that strengthened engineering culture and team cohesion</li>
                  <li>Diagnosing critical bottlenecks contributing to technical debt, and initiated structured remediation plans</li>
                  <li>Contributing to brainstorming sessions with practical suggestions during early requirement discussions</li>
                  <li>Focusing on developer experience - reducing friction, improving clarity, and nurturing a growth-oriented mindset</li>
                </ul>
              </div>
            </div>

            <div className="ml-6 space-y-3">
              <p><em className="font-semibold text-gray-600">Recent Projects -</em></p>
              <div className="ml-6 space-y-3 text-gray-800">
                <p><strong>ThePetshop.com – E-commerce Platform</strong> - Designed tRPC gateway for React Native and Hydrogen/Next.js applications. Built modular design systems with custom components ensuring design consistency. Reduced integration time by 30%. Refactored codebase to eliminate bottlenecks and antipatterns, improved SEO and enhanced user/developer experience. <br /><em className="text-gray-500">(Shopify, Hydrogen, TypeScript, tRPC, Node.js)</em></p>

                <p><strong>Maersk Tankers – Fleet Monitoring System</strong> - Led refactoring reducing technical debt by 40%. Enhanced OAuth workflows and implemented real-time dashboard with advanced data visualization. Optimized data sanitization, validation pipelines, and deployment cycles. <br /><em className="text-gray-500">(React, AWS, Grafana, Elasticsearch, Real-time Analytics)</em></p>

                <p><strong>Evenea – Event Management Platform</strong> - Led development of scalable event management solutions serving 100K+ users. Implemented pixel-perfect UI matching design requirements. Successfully refactored legacy PHP systems and integrated modern JavaScript frameworks. Built comprehensive payment system for time-based premium plans. <br /><em className="text-gray-500">(React, TailwindCSS, Node.js, TypeScript, Symfony)</em></p>

                <p><strong>SDI Media (Netflix) – Video Editor</strong> - Architected and rewrote CI/CD pipelines reducing build time by 60%. Built precision video editing components including waveform navigation for frame-accurate video, audio, and subtitle alignment. Optimized Webpack configurations and HMR performance. <br /><em className="text-gray-500">(React, TypeScript, Node.js, Electron, Video Processing)</em></p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Previous Roles</h3>
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
                  <p>• Led full-stack development of sports betting system using React, Node.js, and ELK stack</p>
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
                  <p>• Developed visualization systems for cancer patient management, improving doctor workflow efficiency</p>
                  <p>• Built modular AEM + React component library enabling non-developers to customize applications</p>
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
                  <p>• Architected dynamic template system using CMS/Magento, enabling flexible layouts and reducing frontend dependencies</p>
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
                  <p>• Designed scalable CMS and enterprise CRM solutions using Angular 1.x and CodeIgniter</p>
                  <p>• Built custom component libraries and design systems for multiple client projects</p>
                  <p>• Delivered pixel-perfect implementations from designer mockups with attention to detail</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise */}
      <section className="my-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Technical Arsenal
        </h2>

        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-8">

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Core Languages & Frameworks</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Languages -</em> TypeScript, Python, Rust, PHP, JavaScript (ES6+)</p>
              <p><em className="font-medium text-gray-600">Frontend Frameworks -</em> React, React Native, Next.js, Vue.js, Angular, Svelte</p>
              <p><em className="font-medium text-gray-600">Backend Frameworks -</em> Node.js, NestJS, Koa, Fastify, Loopback4, Strapi</p>
              <p><em className="font-medium text-gray-600">Full-Stack Solutions -</em> tRPC, Convex, T3 Stack</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Frontend Specialization</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Styling & Design -</em> Tailwind CSS, Styled Components, Sass, Less, BEM, CSS-in-JS (Emotion, Stitches, Vanilla-Extract)</p>
              <p><em className="font-medium text-gray-600">State Management -</em> Redux, Zustand, Jotai, XState, Effector, React Query</p>
              <p><em className="font-medium text-gray-600">UI Libraries -</em> Radix, Material-UI, Mantine, Baseweb, Custom Design Systems</p>
              <p><em className="font-medium text-gray-600">Creative Development -</em> Three.js, React Three Fiber, GSAP, React Spring, D3.js</p>
              <p><em className="font-medium text-gray-600">Mobile -</em> React Native, Expo, Progressive Web Apps</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Backend & Data</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">APIs & Communication -</em> GraphQL, REST, tRPC, WebSockets, Event-Driven Architecture</p>
              <p><em className="font-medium text-gray-600">Databases -</em> PostgreSQL, MongoDB, Redis, InfluxDB, Elasticsearch, Prisma, TypeORM, Drizzle</p>
              <p><em className="font-medium text-gray-600">Message Queues -</em> NATS, RabbitMQ, Redis Pub/Sub</p>
              <p><em className="font-medium text-gray-600">Validation & Types -</em> Zod, Yup, JSON Schema, TypeScript strict mode</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">Architecture & DevOps</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">Architecture Patterns -</em> Microservices, Hexagonal Architecture, Event-Driven Design, DDD, JAMStack</p>
              <p><em className="font-medium text-gray-600">Development Practices -</em> TDD, BDD, Clean Architecture, SOLID Principles, Reactive Programming</p>
              <p><em className="font-medium text-gray-600">Cloud & Infrastructure -</em> AWS, Docker, Kubernetes, PM2, Serverless</p>
              <p><em className="font-medium text-gray-600">CI/CD & Monitoring -</em> GitHub Actions, Jenkins, Grafana, LogRocket, Sentry</p>
              <p><em className="font-medium text-gray-600">Performance -</em> Web Vitals, Bundle Optimization, Webpack, Vite, Memory Profiling</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">AI & Emerging Technologies</h3>
            <div className="ml-6 space-y-3">
              <p><em className="font-medium text-gray-600">AI Integration -</em> OpenAI GPT APIs, Custom AI Workflows, Prompt Engineering</p>
              <p><em className="font-medium text-gray-600">Modern Tooling -</em> Turborepo, Nx, ESBuild, SWC, Biome</p>
              <p><em className="font-medium text-gray-600">E-commerce -</em> Shopify, Hydrogen, Storefront API</p>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-12 pb-8 border-b border-gray-50">
        <h2 className="font-serif text-xl font-bold mb-8 text-teal-700 tracking-wide">
          Creative Projects
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
          Personal Pursuits
        </h2>
        <div className="text-sm font-serif text-gray-800 leading-[1.6] space-y-4">
          <div className="ml-6 space-y-3">
            <p><em className="font-medium text-gray-600">Being Humble -</em> long before "Overly Dedicated" dropped.</p>
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
    </div >
  );
}
