"use client";

import { experiences, profile, projects, skillGroups } from "@/data/profile";
import { useState } from "react";

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="pt-1">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-black sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

function WorkExperienceList() {
  const [expanded, setExpanded] = useState(false);
  const canToggle = experiences.length > 0;

  return (
    <div className="space-y-4">
      <div className="relative">
        <div
          className={`space-y-4 ${canToggle && !expanded ? "max-h-[24rem] overflow-hidden" : ""}`}
        >
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="w-full border border-black p-5"
            >
              <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{experience.role}</h3>
                  <p className="mt-1 text-base">{experience.company}</p>
                  <p className="mt-2 text-sm text-black/65">
                    {experience.period} · {experience.location}
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-base leading-7 text-black/80">{experience.summary}</p>
                  <ul className="space-y-2 text-sm leading-6 text-black/80">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-black pt-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-black/45">Skills</p>
                    <p className="mt-2 text-sm leading-6 text-black/70">
                      {experience.technologies.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {canToggle && !expanded ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        ) : null}
      </div>

      {canToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mx-auto inline-flex items-center gap-3 border border-black px-4 py-3 text-xs uppercase tracking-[0.35em] text-black transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="h-2 w-2 rounded-full bg-black" />
          {expanded ? "Collapse experiences" : "Click to expand"}
        </button>
      ) : null}
    </div>
  );
}

function ProjectList() {
  const [expanded, setExpanded] = useState(false);
  const canToggle = projects.length > 0;

  return (
    <div className="mt-4 space-y-4">
      <div className="relative">
        <div
          className={`space-y-4 ${canToggle && !expanded ? "max-h-[24rem] overflow-hidden" : ""}`}
        >
          {projects.map((project) => (
            <article key={project.name} className="w-full border border-black p-5">
              <div className="grid gap-4 lg:grid-cols-[0.7fr_1.3fr]">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-black/45">
                    {project.context}
                  </p>
                  <h4 className="mt-3 text-2xl font-semibold">{project.name}</h4>
                </div>
                <div className="space-y-4">
                  <p className="text-base leading-7 text-black/80">{project.summary}</p>
                  <ul className="space-y-2 text-sm leading-6 text-black/80">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-black pt-4">
                    <p className="text-xs uppercase tracking-[0.35em] text-black/45">Skills</p>
                    <p className="mt-2 text-sm leading-6 text-black/70">
                      {project.stack.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {canToggle && !expanded ? (
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" />
        ) : null}
      </div>

      {canToggle ? (
        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          aria-expanded={expanded}
          className="mx-auto inline-flex items-center gap-3 border border-black px-4 py-3 text-xs uppercase tracking-[0.35em] text-black transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="h-2 w-2 rounded-full bg-black" />
          {expanded ? "Collapse projects" : "Click to expand"}
        </button>
      ) : null}
    </div>
  );
}

export default function PortfolioMode() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-20 pt-20 sm:px-10 lg:px-12">
      <section className="grid gap-8 border-b border-black pb-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.45em] text-black/60">About me</p>
          <h1 className="max-w-3xl font-[family-name:var(--font-handwritten)] pb-2 text-5xl font-normal tracking-[0.01em] -rotate-1 sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-black/80 sm:text-xl">
            {profile.summary}
          </p>
        </div>

        <div className="grid gap-3 text-sm text-black/75">
          {profile.contact.map((contact) => (
            <div key={contact.label} className="grid grid-cols-[0.9fr_1.1fr] items-start gap-6">
              <span className="uppercase tracking-[0.22em] text-black/45">{contact.label}</span>
              {contact.href ? (
                <a className="text-right hover:underline" href={contact.href}>
                  {contact.value}
                </a>
              ) : (
                <span className="text-right">{contact.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Work Experience" />
        <WorkExperienceList />

        <div className="pt-4">
          <SectionHeading title="Projects" />
          <ProjectList />
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Education" />
        <article className="w-full border border-black p-5">
          <div className="grid gap-2 sm:grid-cols-[1.25fr_0.75fr] sm:items-baseline">
            <div>
              <p className="text-base font-semibold">{profile.education.school}</p>
              <p className="mt-1 text-sm text-black/70">{profile.education.degree}</p>
            </div>
            <div className="text-sm text-black/65 sm:text-right">
              <p>{profile.education.period}</p>
              <p>{profile.education.location}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Skills" />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article key={group.title} className="border border-black p-5">
              <p className="text-xs uppercase tracking-[0.35em] text-black/45">Skills</p>
              <h3 className="mt-3 text-sm uppercase tracking-[0.35em] text-black/75">
                {group.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-black/80">{group.items.join(", ")}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <SectionHeading title="Soft Skills" />
        <article className="w-full border border-black p-5">
          <p className="text-xs uppercase tracking-[0.35em] text-black/45">Skills</p>
          <div className="mt-4 divide-y divide-black">
            {profile.softSkills.map((item) => (
              <div key={item.title} className="grid gap-3 py-3 sm:grid-cols-[0.9fr_1.1fr]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-black">
                  {item.title}
                </p>
                <p className="text-sm leading-6 text-black/75">{item.description}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <footer className="px-6 py-8 text-center sm:px-10">
        <p className="text-m tracking-[0.08em] text-black/65">
          Glad seeing you here - Wie geht&apos;s?
        </p>
      </footer>
    </main>
  );
}
