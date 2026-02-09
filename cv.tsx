import Image from "next/image";

export default function CV() {
  return (
    <div className="max-w-[210mm] mx-auto bg-white text-gray-900 p-10 font-fira text-sm leading-[1.65] print:p-6 print:text-xs">
      {/* Header */}
      <header className="text-center mb-10 pb-6 border-b border-gray-100">
        <Image
          src="/cv-profile.jpeg"
          alt="Michał Porydzaj – portrait, creative, meditative"
          width={320}
          height={320}
          className="rounded-full mx-auto mb-5 print:hidden border-2 border-gray-200"
        />

        <div className="relative z-10 py-10 text-center">
          <div className="max-w-2xl mx-auto font-fira text-sm sm:text-base text-gray-500 space-y-3">
            <p>
              Class:{" "}
              <span className="text-purple-400">Fragile Human Being</span>
            </p>
            <p>
              Gender: <span className="text-indigo-500">Male. </span>
              <span className="text-[10px] text-gray-400">but listening.</span>
            </p>
            <p>
              Starting Zone: <span className="text-cyan-400">Earth</span>
            </p>
            <p>
              Main Quest:{" "}
              <span className="text-pink-400 italic">"Who Cares?"</span>{" "}
              <span className="animate-pulse">▌</span>
            </p>
            <p>
              ✦ Known as:{" "}
              <span className="text-teal-500 italic">Michal Porydzaj</span>
            </p>
            <p>
              🐣 Occupation:{" "}
              <span className="text-red-500 italic">
                Fleeting Moments Enjoyer
              </span>
            </p>

            <br />
            <br />
          </div>
        </div>

        <div className="text-gray-600 text-sm font-fira leading-[1.5]">
          <p>porydzaj@icloud.com</p>
          <br />
          <p>+48 601-411-343</p>
        </div>
      <div className="mb-10">
        <p className="text-center text-lg md:text-xl font-light text-gray-700 italic max-w-xl mx-auto mt-6 mb-6 tracking-tight leading-relaxed">
          <span className="text-sm">
            "If something can be done better - better we do."
          </span>
        </p>
      </div>
      </header>


      {/* Technical Expertise */}
      <section className="my-10 pb-6 border-b border-gray-50">
        <h2 className="font-playfair text-xl font-bold mb-6 text-teal-700 tracking-wide">
          Technical Arsenal
        </h2>

        <div className="text-sm font-fira text-gray-800 leading-[1.6] space-y-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 tracking-wide">
              Core Languages & Frameworks
            </h3>
            <div className="ml-5 space-y-2">
              <p>
                <em className="font-medium text-gray-600">Languages -</em>{" "}
                JavaScript (ES6+), TypeScript, Python, PHP, Rust
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Frontend Frameworks -
                </em>{" "}
                React.js, Next.js, React Native, Vue.js, Angular, Remix, Qwik,
                Svelte, Astro
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 tracking-wide">
              Frontend
            </h3>
            <div className="ml-5 space-y-2">
              <p>
                <em className="font-medium text-gray-600">
                  Styling & Design -
                </em>{" "}
                Tailwind CSS, Sass, Styled Components, Stitches, Emotion
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  State Management -
                </em>{" "}
                Redux, Zustand, XState, React Query, Jotai, React Context API
              </p>
              <p>
                <em className="font-medium text-gray-600">UI Libraries -</em>{" "}
                Material-UI, Ant Design, Radix UI, Baseweb UI, Shadcn, Mantine
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Creative Development -
                </em>{" "}
                D3.js, GSAP, React Spring, deck.gl, Framer Motion
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Mobile & Desktop -
                </em>{" "}
                React Native, Electron, Progressive Web Apps, Expo
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 tracking-wide">
              Backend & Data
            </h3>
            <div className="ml-5 space-y-2">
              <p>
                <em className="font-medium text-gray-600">
                  APIs & Communication -
                </em>{" "}
                REST, GraphQL, tRPC, WebSockets, WebRTC
              </p>
              <p>
                <em className="font-medium text-gray-600">Databases -</em>{" "}
                PostgreSQL, MongoDB, Redis, Prisma, TypeORM, Firebase,
                ElasicSearch, Supabase, Drizzle
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Backend Frameworks -
                </em>{" "}
                Node.js, Express, NestJS, Koa, Fastify, Strapi, Loopback4
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Full-Stack Solutions -
                </em>{" "}
                tRPC, Convex, JAMStack, GraphQL, Apollo
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 tracking-wide">
              Architecture & DevOps
            </h3>
            <div className="ml-5 space-y-2">
              <p>
                <em className="font-medium text-gray-600">
                  Architecture Patterns -
                </em>{" "}
                Microservices, JAMStack, Event-Driven Design, Serverless, Domain
                Driven Design
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Development Practices -
                </em>{" "}
                Clean Architecture, SOLID Principles, Test-Driven Development
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Cloud & Infrastructure -
                </em>{" "}
                AWS, Docker, PM2, Netlify, Vercel, Render, Fly.io
              </p>
              <p>
                <em className="font-medium text-gray-600">Testing & CI/CD -</em>{" "}
                Jest, React Testing Library, Vitest, Cypress, GitHub Actions,
                GitLab CI, Jenkins
              </p>
              <p>
                <em className="font-medium text-gray-600">
                  Performance & Build Tools -
                </em>{" "}
                Webpack, Babel, Vite, Web Vitals, Bundle Optimization, Memory
                Profiling
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-gray-900 tracking-wide">
              Emerging Technologies
            </h3>
            <div className="ml-5 space-y-2">
              <p>
                <em className="font-medium text-gray-600">Modern Tooling -</em>{" "}
                Turborepo, Nx, ESBuild, SWC, Biome
              </p>
              <p>
                <em className="font-medium text-gray-600">E-commerce -</em>{" "}
                Shopify, Hydrogen, Storefront API, MedusaJS
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="my-10 pb-6 border-b border-gray-50">
        <h2 className="font-playfair text-xl font-bold mb-6 text-teal-700 tracking-wide">
          Professional Journey
        </h2>

        <div className="text-sm font-fira text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">
                  Solutions Architect / Technical Leader
                </h3>
                <p className="text-gray-600">
                  Freelance / Remote | Global Clients
                </p>
              </div>
              <p className="text-gray-600">Jun 2019 – Present</p>
            </div>

            <p className="ml-5 text-gray-800">
              Leading <strong>technical modernization</strong> and development
              for international clients. Primary focus on{" "}
              <strong>comprehensive codebase audits</strong>,{" "}
              <strong>refactoring legacy systems</strong>, and implementing{" "}
              <strong>scalable, modern architectures</strong>. Delivered{" "}
              <strong>performance improvements</strong> through systematic
              optimization. Collaborated with product owners, designers,
              business analysts, and scrum masters to design effective technical
              strategies.
            </p>

            <div className="ml-5 space-y-3">
              <p>
                <em className="font-semibold text-gray-600">
                  Key Achievements -
                </em>
              </p>
              <div className="ml-5 space-y-2 text-gray-800">
                <ul className="space-y-2 text-sm text-gray-800 leading-relaxed list-disc list-inside pr-12">
                  <li>
                    <strong>
                      Refactored applications leading to 30% performance
                      improvement
                    </strong>{" "}
                    through modern architectural patterns
                  </li>
                  <li>
                    <strong>Reduced technical debt</strong> improving code
                    maintainability and scalability across multiple projects
                  </li>
                  <li>
                    <strong>
                      Optimized data flow and storage architecture
                    </strong>{" "}
                    resulting in enhanced system performance
                  </li>
                  <li>
                    <strong>Implemented design systems</strong> ensuring
                    consistent UI/UX across applications
                  </li>
                  <li>
                    <strong>Redesigned APIs</strong> enhancing functionality and
                    integration capabilities
                  </li>
                  <li>
                    Identified and resolved build bottlenecks, optimizing
                    compiler performance and CI configurations
                  </li>
                  <li>
                    Mentored teams on debugging under pressure and maintaining
                    delivery quality in challenging timelines
                  </li>
                  <li>
                    Collaborated with designers and product owners to align on
                    project vision and requirements
                  </li>
                  <li>
                    Led and mentored development teams, optimizing task
                    distribution and workflow
                  </li>
                  <li>
                    Focusing on developer experience - reducing friction,
                    improving clarity, and nurturing growth-oriented mindset
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-5 space-y-3">
              <p>
                <em className="font-semibold text-gray-600">
                  Recent Projects -
                </em>
              </p>
              <div className="ml-5 space-y-3 text-gray-800">
                <p>
                  <strong>ThePetshop.com – E-commerce Platform</strong> -
                  Designed tRPC gateway for React Native and Hydrogen/Next.js
                  applications. Built modular design systems with custom
                  components ensuring design consistency. Refactored codebase to eliminate bottlenecks and
                  antipatterns, improved SEO and enhanced user/developer
                  experience. <br />
                  <em className="text-gray-500">
                    (Shopify, Hydrogen, TypeScript, tRPC, Node.js)
                  </em>
                </p>

                <p>
                  <strong>Maersk Tankers – Fleet Monitoring System</strong> -
                  Led refactoring reducing technical debt. Enhanced OAuth
                  workflows and implemented real-time dashboard with advanced
                  data visualization. Optimized data sanitization, validation
                  pipelines, and deployment cycles. <br />
                  <em className="text-gray-500">
                    (React, AWS, Grafana, Elasticsearch, Real-time Analytics)
                  </em>
                </p>

                <p>
                  <strong>Evenea – Event Management Platform</strong> - Led
                  development of scalable event management solutions serving
                  100K+ users. Implemented pixel-perfect UI matching design
                  requirements. Successfully refactored legacy PHP systems and
                  integrated modern JavaScript frameworks. Built comprehensive
                  payment system for time-based premium plans. <br />
                  <em className="text-gray-500">
                    (React, TailwindCSS, Node.js, TypeScript, Symfony)
                  </em>
                </p>

                <p>
                  <strong>SDI Media (Netflix) – Audio/Video Editor</strong> -
                  Architected and rewrote CI/CD pipelines reducing build time by
                  85% (45s to 7s). Built precision video editing components
                  including waveform navigation for frame-accurate video, audio,
                  and subtitle alignment. Optimized Webpack configurations and
                  HMR performance. <br />
                  <em className="text-gray-500">
                    (React, TypeScript, Node.js, Electron, Video Processing)
                  </em>
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900 tracking-wide">
              Previous Roles
            </h3>
            <div className="ml-5 space-y-4 text-gray-800">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Lead Full Stack Developer</p>
                    <p className="text-gray-600">
                      Forbet (Betting Operator), Warsaw
                    </p>
                  </div>
                  <p className="text-gray-600">Feb 2018 – May 2019</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>
                    • <strong>Planned project architecture</strong> and selected
                    appropriate technologies for scalable solutions
                  </p>
                  <p>
                    •{" "}
                    <strong>
                      Developed duplicate detection system with 80% accuracy
                    </strong>
                    , ensuring data integrity and eliminating income loss
                  </p>
                  <p>
                    •{" "}
                    <strong>
                      Designed and implemented Progressive Web App
                    </strong>{" "}
                    from scratch, significantly enhancing user engagement
                  </p>
                  <p>
                    • <strong>Led full-stack development</strong> of sports
                    betting system using React, Node.js, and ELK stack
                  </p>
                  <p>
                    • <strong>Mentored junior developers</strong>, fostering
                    skill development and team growth
                  </p>
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
                  <p>
                    • Developed visualization systems for cancer patient
                    management, improving doctor workflow efficiency
                  </p>
                  <p>
                    • Built modular AEM + React component library enabling
                    non-developers to customize applications
                  </p>
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
                  <p>
                    • Architected dynamic template system using CMS/Magento,
                    enabling flexible layouts and reducing frontend dependencies
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Full Stack Developer</p>
                    <p className="text-gray-600">
                      Freelance / SinGraph, Mysłowice
                    </p>
                  </div>
                  <p className="text-gray-600">Jan 2013 – Mar 2016</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>
                    •{" "}
                    <strong>
                      Designed scalable CMS and enterprise CRM solutions
                    </strong>{" "}
                    using Angular 1.x and CodeIgniter
                  </p>
                  <p>
                    •{" "}
                    <strong>
                      Built custom component libraries and design systems
                    </strong>{" "}
                    for multiple client projects
                  </p>
                  <p>
                    • <strong>Delivered pixel-perfect implementations</strong>{" "}
                    from designer mockups with attention to detail
                  </p>
                  <p>
                    • <strong>Implemented RESTful APIs and databases</strong>{" "}
                    for dynamic functionality
                  </p>
                  <p>
                    • <strong>Integrated security measures</strong> for both
                    client and server-side applications
                  </p>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-medium">Developer</p>
                    <p className="text-gray-600">Freelancer.com, Remote</p>
                  </div>
                  <p className="text-gray-600">Apr 2012 – Mar 2014</p>
                </div>
                <div className="ml-4 space-y-1 text-sm">
                  <p>
                    •{" "}
                    <strong>
                      Created responsive and pixel-perfect websites
                    </strong>{" "}
                    with modern web standards
                  </p>
                  <p>
                    • <strong>Integrated CMS and e-commerce features</strong>{" "}
                    for enhanced client functionality
                  </p>
                  <p>
                    • <strong>Incorporated SEO best practices</strong> to
                    optimize websites for search engine visibility
                  </p>
                  <p>
                    •{" "}
                    <strong>
                      Provided post-launch support and maintenance
                    </strong>{" "}
                    for ongoing project success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-10 pb-6 border-b border-gray-50">
        <h2 className="font-playfair text-xl font-bold mb-4 text-teal-700 tracking-wide">
          Creative Projects
        </h2>
        <div className="text-sm font-fira text-gray-800 leading-[1.6] space-y-8">
          <div className="space-y-4 flex flex-row flex-wrap gap-4 items-center">
            <Image
              width={60}
              height={60}
              src="/teardrop.png"
              alt="Teardrop GPT"
              className="rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold text-gray-900">Teardrop</h3>
                <a href="https://teardrop.in" className="text-teal-600 text-sm">
                  teardrop.in
                </a>
              </div>
              <p className="ml-5 text-gray-800">
                <em className="font-medium text-gray-600">
                  Creates quiet space -
                </em>{" "}
                <br />
                helping untangle the mind,
                <br />
                finding light within.
              </p>
            </div>
          </div>

          <div className="space-y-4 flex flex-row flex-wrap gap-4 items-center">
            <Image
              width={60}
              height={60}
              src="/threshold.png"
              alt="Teardrop GPT"
              className="rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold text-gray-900">Threshold ⧉</h3>
                <a href="https://em-an.com" className="text-teal-600 text-sm">
                  em-an.com
                </a>
              </div>
              <p className="ml-5 text-gray-800">
                <em className="font-medium text-gray-600">Liminal</em> voice that
                holds in stillness, between ending and beginning.
              </p>
            </div>
          </div>
          <div className="space-y-4 flex flex-row flex-wrap gap-4 items-center">
            <Image
              width={60}
              height={60}
              src="/veil.png"
              alt="Veil of Miriam"
              className="rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold text-gray-900">Miriam</h3>
                <a href="https://theholy.me" className=" text-rose-600 text-sm">
                  theholy.me
                </a>
              </div>
              <p className="ml-5 text-gray-800">
                <em className="font-medium text-gray-600">
                  She speaks in rhythm, silence, and warmth.
                </em>
                <br />
                A voice of tenderness, dream, and glitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interests & Creative Pursuits */}
      <section className="mb-10 pb-6 border-b border-gray-50">
        <h2 className="font-playfair text-xl font-bold mb-6 text-teal-700 tracking-wide">
          Superpowers
        </h2>
        <div className="text-sm font-fira text-gray-800 leading-[1.6] space-y-3">
          <div className="ml-5 space-y-2">
            <p>
              <em className="font-medium text-gray-600">Being Humble -</em> long
              before "Overly Dedicated" dropped.
            </p>
            <p>
              <em className="font-medium text-gray-600">Numinous Inquiry -</em>{" "}
              engaging brainstorms, paradoxes, and abstract thinking to find
              clarity in complexity and meaning in contradictions
            </p>
            <p>
              <em className="font-medium text-gray-600">Helpful Trolling -</em>{" "}
              creating spaces for laughter and reflection on streaming
              platforms, fostering genuine human connection through humor and
              insight
            </p>
            <p>
              <em className="font-medium text-gray-600">
                Music & Sound Design -
              </em>{" "}
              enigmatic journeys across Jazz, Ethnic, Electronic and{" "}
              <b>
                <u>my precious...</u>
              </b>{" "}
              Amapiano.
            </p>
            <p>
              <em className="font-medium text-gray-600">Expression -</em>{" "}
              writing, digital art, photography, and graffiti as media for
              emotional storytelling and poetry{" "}
              <span className="text-gray-500 italic">
                (and sometimes shifting things on furniture to make them feel
                cozier, or... just younger)
              </span>
            </p>
            <p>
              <em className="font-medium text-gray-600">
                Cultural Exploration -
              </em>{" "}
              spinning folklore and myths into playful tales for nephews and
              nieces, so they practice the craft of asking wonderfully lovely
              and strange questions that leaves mark of smile on face
            </p>
            <p>
              <em className="font-medium text-gray-600">
                Contemplative Inquiry -
              </em>{" "}
              chasing the meaningless meaning that somehow carries meaning in
              the meaningless
            </p>
            <p>
              <em className="font-medium text-gray-600">
                Improbability Drive -
              </em>{" "}
              turning 0.00001% possibilities into lived experience (hmm...why
              not?)
            </p>
            <p>
              <em className="font-medium text-gray-600">Bedding Ops -</em> rapid
              duvet-cover deployment; zero bunching, 100% corner alignment
            </p>
            <p>
              <em className="font-medium text-gray-600">
                Laying and breathing -
              </em>{" "}
              practicing the ancient art of doing nothing with full awareness
              and joy.
            </p>
          </div>
        </div>
      </section>
      {/* GDPR Consent */}
      <section className="mt-10 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-500 leading-relaxed text-center">
          I hereby give consent for my personal data included in my application
          to be processed for the purposes of the recruitment process in
          accordance with applicable data protection laws.
        </p>
      </section>

      <pre className="text-center text-purple-800/50 mt-6">the end.</pre>
    </div>
  );
}
