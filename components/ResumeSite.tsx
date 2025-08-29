import { Code, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

// Локальные Card и Button
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-sm">
      {children}
    </div>
  );
}
function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 border rounded-lg text-sm border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700"
    >
      {children}
    </button>
  );
}

export default function ResumeSite() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <h1 className="text-4xl font-bold">Nazar Shcherbyna</h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mt-2">
            Frontend Engineer
          </p>
          <div className="flex flex-wrap gap-4 mt-4 text-sm text-neutral-600 dark:text-neutral-300">
            {/* <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" /> (437) 223-4511
            </div> */}
            <a
              href="mailto:nazar.shcherbyna.own@gmail.com"
              className="flex items-center gap-1 hover:underline"
            >
              <Mail className="h-4 w-4" /> nazar.shcherbyna.own@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/nazar-shcherbyna"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/nazar-shcherbyna
            </a>
            <a
              href="https://github.com/nazar-shcherbyna"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Github className="h-4 w-4" /> github.com/nazar-shcherbyna
            </a>
            <a
              href="https://leetcode.com/u/nazar-own-dev/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:underline"
            >
              <Code className="h-4 w-4" /> leetcode.com/u/nazar-own-dev
            </a>
          </div>
          <div className="text-sm mt-2 text-neutral-500">Vancouver, BC</div>
        </header>

        <section className="mb-8">
          <h2 className="uppercase text-neutral-500 text-sm tracking-wider mb-2">
            Summary
          </h2>
          <p className="leading-7 text-neutral-800 dark:text-neutral-100">
            Frontend Engineer with over 4 years in web and mobile development.
            Experience delivering high-impact applications to over 250K users,
            leading teams, and managing error-free release cycles. Skilled in
            performance optimization, automated testing, and scalable UI
            architecture.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="uppercase text-neutral-500 text-sm tracking-wider mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent>
                <p>
                  <strong>Languages:</strong> JavaScript, TypeScript, SQL,
                  Python (basics), Java (basics), HTML5, CSS/Sass.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>
                  <strong>Frameworks & Libraries:</strong> React, Next.js, Ionic
                  (Capacitor), React Native, Redux, Apollo Client, GraphQL, REST
                  API, Zustand, Radix UI, TanStack Query, react-hook-form, Zod,
                  echarts, Ant Design.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>
                  <strong>Testing & QA:</strong> Vitest, Cypress, Jest, React
                  Testing Library, TDD.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>
                  <strong>Build & Tools:</strong> Git, GitHub, GitLab, Vercel,
                  Webpack, Rollup, Vite, pnpm, CI/CD pipelines, Storybook,
                  Axios.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>
                  <strong>Cloud & Services:</strong> AWS (S3, CloudFront),
                  Stripe, PayPal, AppsFlyer, Google Analytics, Meta Pixel.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <p>
                  <strong>Practices & Methodologies:</strong> Agile/Scrum, Git
                  Flow, Performance Optimization, Cross-Platform Development,
                  Responsive Design, SPA Development, Cross-Browser
                  Compatibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="uppercase text-neutral-500 text-sm tracking-wider mb-4">
            Experience
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">
                Senior Frontend Engineer — Pheon (Dialogue)
              </h3>
              <p className="text-sm text-neutral-500">
                San Francisco, USA (Remote) | Feb 2024 – Present
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>
                  Directed Android/web AI chatbot development, growing monthly
                  active users from 80K to over 250K.
                </li>
                <li>
                  Mentored and led 2 developers; implemented sprint planning and
                  QA processes, reducing release delays by 20%.
                </li>
                <li>
                  Integrated Stripe, PayPal, AppsFlyer, Meta Pixel, and Google
                  Analytics, enabling monetization and analytics.
                </li>
                <li>
                  Streamlined Android/web release pipeline, delivering
                  high-frequency deployments with 0 critical production bugs.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">
                Intermediate Frontend Engineer — Wezom
              </h3>
              <p className="text-sm text-neutral-500">
                New York, USA (Remote) | Aug 2022 – Jan 2024
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>
                  Developed CRM/Billing system for over 5K active users,
                  improving operational efficiency across 3 departments.
                </li>
                <li>
                  Built a reusable UI library adopted across multiple projects,
                  accelerating feature delivery by 30%.
                </li>
                <li>
                  Optimized GraphQL caching, cutting data fetch time by 40% and
                  achieving over 80% automated test coverage.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">
                Junior Frontend Engineer — Avice
              </h3>
              <p className="text-sm text-neutral-500">
                Kharkiv, Ukraine | Aug 2021 – Aug 2022
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>
                  Built responsive education platform for over 500 concurrent
                  users, reducing reported UI issues by 45%.
                </li>
                <li>
                  Refactored 60% of legacy code, improving maintainability and
                  raising test coverage up to 100%.
                </li>
                <li>
                  Implemented cross-platform responsive design, decreasing
                  user-reported compatibility issues by 30%.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">
                Trainee Frontend Engineer — Freelance
              </h3>
              <p className="text-sm text-neutral-500">
                Mariupol, Ukraine | Dec 2020 – Jul 2021
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>
                  Redesigned e-commerce platform pages targeting US market,
                  increasing user retention by 15%.
                </li>
                <li>
                  Enhanced UX with React and Next.js, reducing bounce rates by
                  20%.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="uppercase text-neutral-500 text-sm tracking-wider mb-4">
            Education
          </h2>
          <p>
            <strong>Pryazovskyi State Technical University</strong>, Mariupol,
            Ukraine — Bachelor of Science in Computer Science, 2024
          </p>
        </section>

        <section className="mb-8">
          <h2 className="uppercase text-neutral-500 text-sm tracking-wider mb-4">
            Courses
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            <li>Operating Systems (Google/Coursera, 2024)</li>
            <li>Computer Networking (Google/Coursera, 2022)</li>
          </ul>
        </section>

        <footer className="mt-12 text-sm text-neutral-500">
          <Button onClick={() => window.print()}>Download PDF</Button>
        </footer>
      </div>
    </div>
  );
}
