"use client";
import Image from "next/image";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import Link from "next/link";
import { motion } from "framer-motion";
import { getWorkList } from "@/data/work";
import { ExternalLink } from "lucide-react";

const thingy = ["Stuff ", "I ", "have ", "built."];
const thingyx = ["Experiences", "We", "Have", "Built"]

export default function Projects() {
  const allWorks = getWorkList();
  // Filter out 'agency' type and 'Archive' status for personal projects
  const personalProjects = allWorks.filter(
    (w) => w.type !== "agency" && w.status !== "Archive"
  );
  // Filter only 'agency' type
  const agencyProjects = allWorks.filter((w) => w.type === "agency");

  return (
    <section className="w-full min-h-screen text-foreground font-satoshi wrapperx">
      <div className="max-w-4xl mx-auto">

        {/* Agency Projects Section */}

        <motion.h2
          className="text-4xl font-bold mb-20 mt-4 text-center text-foreground/60 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {thingyx.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "decay" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {agencyProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {agencyProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}

              {personalProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
        )}

        {/* Personal Projects Header */}
        {/* <motion.h2
          className="text-4xl font-bold pt-12 mb-20 text-center text-foreground/60 flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          {thingy.map((word, index) => (
            <motion.span
              key={index}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" }
              }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "decay" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h2> */}

        {/* Personal Projects Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div> */}

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const siteUrl = project.links?.site;
  const linkUrl = `/work/${project.slug}`;
  const logoItems = Array.isArray(project.logo)
    ? project.logo.filter(Boolean)
    : project.logo
      ? [project.logo]
      : [];

  return (
    <FadeInWhenVisible>
      {/* Removed overflow-hidden from the main card so the blur can bleed even more freely if needed */}
      <div className="flex flex-col items-start gap-4 transition group border-2 border-foreground/10 border-dotted rounded-2xl p-6 h-full relative">
        {project.screenshot && (
          // FIX: Removed 'rounded-xl overflow-hidden' from this wrapper.
          // This allows the blur image (which is scaled up) to bleed out into the padding.
          <div className="relative w-full group/image">
            <Link
              href={siteUrl || linkUrl}
              target={siteUrl ? "_blank" : "_self"}
              className="block relative w-full"
            >
              {/* Blurred Background Screenshot */}
              <Image
                src={project.screenshot}
                alt={`${project.title} background`}
                width={460}
                height={200}
                className="absolute top-0 left-0 w-full h-full object-cover blur-xl opacity-10 dark:opacity-40 scale-[1.04] contrast-200 saturate-200 brightness-120 rounded-xl z-0"
                aria-hidden="true"
              />

              {/* Main Screenshot */}
              <Image
                src={project.screenshot}
                alt={project.title}
                width={460}
                height={200}
                className="relative z-10 object-cover group-hover:scale-[1.015] transition-all duration-500 rounded-xl mb-2"
              />
            </Link>

            {/* Status Pill (Bottom Left) */}
            {project.status && (
              <div className="absolute bottom-5 left-2 z-20 pointer-events-none">
                <span className="px-2.5 py-1 text-xs rounded-full bg-white/10 text-white border-2 border-white/5 backdrop-blur-sm">
                  {project.status}
                </span>
              </div>
            )}

            {/* Platform Pill (Bottom Right - Slides Left on Hover) */}
            {project.platform && (
              <div
                className={`absolute bottom-5 right-2 z-20 pointer-events-none transition-transform duration-500 ease-out ${
                  siteUrl ? "group-hover/image:-translate-x-24" : ""
                }`}
              >
                <span className="px-2.5 py-1 font-bricolage font-semibold text-xs rounded-full bg-blue-500/30 text-white border-2 border-blue-500/30 backdrop-blur-sm transition-all duration-300">
                  {project.platform}
                </span>
              </div>
            )}

            {/* Launch Button (Bottom Right - Fades In on Hover) */}
            {siteUrl && (
              <a
                href={siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-2 z-30 opacity-0 translate-y-2 group-hover/image:translate-y-0 group-hover/image:opacity-100 transition-all duration-500 ease-out"
              >
                <button className="flex items-center gap-2 px-2.5 py-1 bg-white/90 dark:bg-black/80 text-foreground text-xs font-bold rounded-full shadow-lg backdrop-blur-md hover:bg-white dark:hover:bg-black transition-all duration-500 border-2 border-foreground/10 cursor-pointer">
                  <ExternalLink size={14} />
                  <span>Launch</span>
                </button>
              </a>
            )}
          </div>
        )}

        <Link
          href={linkUrl}
          className="flex gap-1 w-full py-2.5 rounded-2xl px-2 border-2 border-foreground/10 border-dotted mt-auto hover:bg-foreground/5 transition-colors"
        >
          {logoItems.length > 0 && (
            <div className="flex items-center gap-2 mr-3.5 shrink-0">
              {logoItems.map((logo: any, index: number) => {
                const logoData = typeof logo === "string" ? { src: logo } : logo;
                const fit = logoData?.fit ?? (logoItems.length > 1 ? "contain" : "cover");
                const zoom = logoData?.zoom;
                return (
                <div
                  key={`${project.slug}-logo-${index}`}
                  className="w-12 h-12 relative rounded-xl overflow-hidden bg-white"
                >
                  <Image
                    src={logoData?.src}
                    alt={project.title}
                    fill
                    style={zoom ? { transform: `scale(${zoom})` } : undefined}
                    className={`p-1 grayscale group-hover:grayscale-0 transition-all duration-500 ${
                      fit === "contain" ? "object-contain" : "object-cover"
                    } ${zoom ? "" : "group-hover:scale-105"}`}
                  />
                </div>
              )})}
            </div>
          )}
          <div className="flex flex-col justify-center">
            <h3 className="text-sm font-semibold text-foreground/90">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/60 line-clamp-2">
              {project.summary}
            </p>
          </div>
        </Link>
      </div>
    </FadeInWhenVisible>
  );
}
