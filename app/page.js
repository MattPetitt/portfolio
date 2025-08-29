import React from "react";
import SectionHeader from "./components/SectionHeader";
import TimelineEntry from "./components/TimelineEntry";
import NavLink from "./components/NavLink";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 flex flex-row gap-6">
      {/* Sidebar */}
      <div className="w-24 md:w-48 flex-shrink-0">
        <div className="flex flex-col sticky top-0 py-6 md:py-12 h-screen">
          <h1 className="text-4xl font-bold font-sans mb-2 scale-y-120">
            Matt Petitt
          </h1>
          <div className="text-gray-600 italic mb-4 font-serif">
            Engineering Manager
          </div>

          {/* Navigation */}
          <nav className="flex flex-col">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            {/* <NavLink href="#projects">Projects</NavLink> */}
            {/* <NavLink href="#writing">Writing</NavLink> */}
            <NavLink href="#now">Now</NavLink>
          </nav>

          {/* Links */}
          <div className="mt-auto flex flex-col space-x-4 md:space-x-0 md:space-y-1 mb-4 md:mb-0">
            <NavLink href="mailto:matt@mattpetitt.com">Email</NavLink>
            <NavLink href="https://linkedin.com/in/mattpetitt" target="_blank">
              LinkedIn
            </NavLink>
            <NavLink href="https://github.com/mattpetitt" target="_blank">
              GitHub
            </NavLink>
            <NavLink href="https://twitter.com/mattpetitt" target="_blank">
              Twitter
            </NavLink>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-2xl">
        <section id="about" className="pt-6 sm:pt-12">
          <p className="font-serif text-md sm:text-lg mb-6 leading-relaxed">
            I'm an Engineering Manager with 15+ years of experience bridging the
            gap between design, development, and business. I've worked at
            scrappy three-person startups and global mega-corporations and
            learned the best from both worlds. I specialize in shipping complex
            UIs, design systems, and developer tools that empower organizations
            to build and scale high-quality experiences efficiently. I stay
            hands-on where it matters, balancing technical excellence with
            business priorities.
          </p>

          <p className="font-serif text-md sm:text-lg leading-relaxed">
            Currently an Engineering Manager in Dayforce's AI Platform org
            leading the Design Systems and Accessibility Engineering teams,
            where I focus on modernizing frontend infrastructure and fostering
            developer productivity.
          </p>
        </section>

        <section id="experience" className="pt-12">
          <SectionHeader className="mb-6">Experience</SectionHeader>

          <div className="space-y-6">
            <TimelineEntry
              title="Sr. Engineering Manager, AI Platform"
              subtitle="Dayforce"
              date="2025 - Present"
              description="Expanded scope to include oversight of the accessibility engineering practice alongside Design System development."
            />

            <TimelineEntry
              title="Engineering Manager, Design Systems"
              subtitle="Dayforce"
              date="2021 - 2025"
              description="Founded and scaled the Design System engineering team to 13 developers. Led modernization of 100k+ LOC C#/dojo monolith to React-based UI stack. 4 years post-launch, our design system is used by 130+ projects. Built and support a thriving UI development community with over 500 active users. Reduced feature development time by 33% through improved tooling and processes."
            />

            <TimelineEntry
              title="Senior Frontend Engineer"
              subtitle="Amazon AWS"
              date="2020 - 2021"
              description="Architected large-scale service health visualization platform processing 100M+ monthly data points. Designed efficient data delivery patterns optimizing UI performance at scale. Led collaboration with backend teams to optimize API patterns and caching strategies. Established performance benchmarks and monitoring systems."
            />

            <TimelineEntry
              title="Lead Frontend Engineer"
              subtitle="Cvent"
              date="2018 - 2020"
              description="Led a frontend platform team focused on design systems and UI libraries. Established technical standards and review processes. Led organization-wide adoption of modern frontend practices with an emphasis on accessibility. Streamlined design-to-development workflow through Figma/Framer/Storybook tooling."
            />

            <TimelineEntry
              title="Lead Frontend Developer"
              subtitle="Extensia"
              date="2017 - 2018"
              description="Architected and developed Canvas-based WYSIWYG card template editor supporting complex customization. Built a headless renderer for printing and a mobile capture application. Launched a complete enterprise ID card management suite within one year."
            />

            <TimelineEntry
              title="Lead UX/UI Developer"
              subtitle="CuriosityStream"
              date="2014 - 2017"
              description="Architected a comprehensive video streaming platform for desktop and mobile web. Launched three major web applications within six months: video-on-demand streaming, marketing site, and content management system. Optimized conversions, retention, and promotional campaigns."
            />
          </div>

          <a
            href="/MattPetittResume.pdf"
            target="_blank"
            className="mt-6 inline-block text-lg font-sans font-semibold text-blue-700 hover:underline"
          >
            View full experience →
          </a>
        </section>

        {/* <section id="projects" className="pt-12">
          <SectionHeader className="mb-6">Projects</SectionHeader>

          <div className="space-y-6">
            <TimelineEntry
              title="Design System Platform"
              subtitle="Dayforce"
              date="2022 - 2023"
              description="Built a comprehensive design system platform including component library, documentation site, and developer tooling. Reduced feature development time by 33% through improved tooling and processes."
            />

            <TimelineEntry
              title="Service Health Visualization"
              subtitle="Amazon AWS"
              date="2020 - 2021"
              description="Created interactive dashboards for visualizing service health metrics across AWS infrastructure. Implemented efficient data loading patterns to handle millions of data points while maintaining responsive UI."
            />
          </div>
        </section> */}

        {/* <section id="writing" className="pt-12">
          <SectionHeader className="mb-6">Writing</SectionHeader>

          <div className="space-y-6">
            <TimelineEntry
              title="Measuring the Impact of Design Systems"
              date="December 2023"
              description="An exploration of quantitative and qualitative metrics for measuring design system effectiveness and ROI."
              link="/writing/measuring-design-systems"
            />

            <TimelineEntry
              title="Frontend Architecture for Scale"
              date="August 2023"
              description="Strategies for building frontend architecture that scales with organizational growth and complexity."
              link="/writing/frontend-architecture"
            />
          </div>
        </section> */}

        <section id="now" className="py-12">
          <SectionHeader className="mb-6">Current Focus</SectionHeader>
          <ul className="list-none text-md sm:text-md font-serif text-lg space-y-2 leading-relaxed">
            <li>Growing and mentoring engineering teams</li>
            <li>
              Completing my degree in Business Administration with a focus on IT
              Management
            </li>
            <li>
              Exploring AI-assisted development workflows, generative UI's, and
              patterns for AI powered UX
            </li>
            <li>
              <a
                className="text-blue-700 hover:underline"
                href="https://letterboxd.com/MattPetitt/"
                target="_blank"
              >
                Watching movies
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
