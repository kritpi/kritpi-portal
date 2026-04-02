"use client";

import { experiences, profile, projects, skillGroups } from "@/data/profile";

export default function CvMode() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-14 text-[16px] leading-[1.28] tracking-[0.01em] sm:px-10 lg:px-12">
      <header className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-black/70">Curriculum Vitae</p>
        <h1 className="text-4xl font-semibold leading-none tracking-[-0.04em] text-black sm:text-5xl">
          {profile.name}
        </h1>
        <p className="text-[15px] font-medium tracking-[0.16em] text-black/80 uppercase">
          {profile.title}
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-0 text-[15px] text-black/85">
          {profile.contact.map((contact) => (
            <span key={contact.label}>
              {contact.label}:{" "}
              {contact.href ? (
                <a className="hover:underline" href={contact.href}>
                  {contact.value}
                </a>
              ) : (
                contact.value
              )}
            </span>
          ))}
          <span>{profile.location}</span>
        </div>
      </header>

      <section className="pt-[1.1rem]">
        <h2 className="mb-[0.55rem] border-b border-black pb-1 text-[0.95rem] font-bold uppercase tracking-[0.12em]">
          Profile
        </h2>
        <p className="leading-5 text-black">{profile.summary}</p>
      </section>

      <section className="pt-[1.1rem]">
        <h2 className="mb-[0.55rem] border-b border-black pb-1 text-[0.95rem] font-bold uppercase tracking-[0.12em]">
          Education
        </h2>
        <article className="space-y-0.5 leading-5">
          <div className="grid gap-1 sm:grid-cols-[1.25fr_0.75fr] sm:items-baseline">
            <div>
              <p className="font-semibold">{profile.education.school}</p>
              <p>{profile.education.degree}</p>
            </div>
            <div className="text-left sm:text-right">
              <p>{profile.education.period}</p>
              <p>{profile.education.location}</p>
            </div>
          </div>
        </article>
      </section>

      <section className="pt-[1.1rem]">
        <h2 className="mb-[1rem] border-b border-black pb-1 text-[0.95rem] font-bold uppercase tracking-[0.12em]">
          Experience
        </h2>
        <div className="space-y-7">
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="space-y-1.5 leading-5"
            >
              <div className="mb-[1rem] flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <p className="font-semibold">{experience.company}</p>
                  <p className="italic">{experience.role}</p>
                </div>
                <div>
                  <p>{experience.period}</p>
                  <p>{experience.location}</p>
                </div>
              </div>
              <p>{experience.summary}</p>
              <ul className="list-disc space-y-0 pl-5">
                {experience.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p>
                <span className="font-semibold">Technologies:</span>{" "}
                {experience.technologies.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-[1.1rem]">
        <h2 className="mb-[1rem] border-b border-black pb-1 text-[0.95rem] font-bold uppercase tracking-[0.12em]">
          Projects
        </h2>
        <div className="space-y-7">
          {projects.map((project) => (
            <article key={project.name} className="space-y-1.5 leading-5">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <p className="font-semibold">{project.name}</p>
                <p>{project.context}</p>
              </div>
              <p>{project.summary}</p>
              <ul className="list-disc space-y-0 pl-5">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <p>
                <span className="font-semibold">Stack:</span> {project.stack.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pt-[1.1rem]">
        <h2 className="mb-[1rem] border-b border-black pb-1 text-[0.95rem] font-bold uppercase tracking-[0.12em]">
          Technical Skills
        </h2>
        <div className="space-y-2 leading-5">
          {skillGroups.map((group) => (
            <p key={group.title}>
              <span className="font-semibold">{group.title}:</span> {group.items.join(", ")}
            </p>
          ))}
        </div>
      </section>
    </main>
  );
}
