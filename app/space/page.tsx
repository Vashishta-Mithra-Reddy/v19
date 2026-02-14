"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import Link from "next/link";
import { getWorkList } from "@/data/work";
import { useMemo, useState, useEffect } from "react";
import InfiniteScroll from "@/components/ui/infinite-scroll";

export default function SpacePage() {
  const allProjects = getWorkList();
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const visibleProjects = useMemo(
    () => allProjects.slice(0, visibleCount),
    [allProjects, visibleCount]
  );

  useEffect(() => {
    if (isLoading) {
      setIsLoading(false);
    }
  }, [visibleCount, isLoading]);

  const loadMore = () => {
    if (visibleCount >= allProjects.length) return;
    setIsLoading(true);
    setVisibleCount((count) => Math.min(count + 6, allProjects.length));
  };
  return (
    <section className="w-full min-h-screen bg-background text-foreground font-satoshi overflow-hidden wrapperx">
      {/* <PanZoomCanvas> */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center text-foreground/60">
            Agency Work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfiniteScroll
              isLoading={isLoading}
              hasMore={visibleCount < allProjects.length}
              next={loadMore}
              threshold={0.6}
            >
              {visibleProjects.map((project, index) => {
                const link = project.links?.site || `/work/${project.slug}`;
                const logo = Array.isArray(project.logo) ? project.logo[0] : project.logo;
                const logoData = typeof logo === "string" ? { src: logo } : logo;
                const fit = logoData?.fit ?? "contain";
                return (
                  <div key={project.slug || index}>
                    <FadeInWhenVisible>
                      <Link
                        href={link}
                        target={project.links?.site ? "_blank" : "_self"}
                        rel={project.links?.site ? "noopener noreferrer" : undefined}
                        className="flex flex-col items-start gap-4 transition group border-2 border-foreground/10 border-dotted rounded-2xl p-6"
                      >
                        {project.screenshot && (
                          <div className="relative w-full">
                            <Image
                              src={project.screenshot}
                              alt={`${project.title} background`}
                              width={460}
                              height={200}
                              className="absolute top-0 left-0 w-full h-full object-cover blur-xl opacity-10 dark:opacity-40 scale-[1.02] contrast-200 saturate-200 brightness-120 rounded-xl z-0"
                              aria-hidden="true"
                            />
                            <Image
                              src={project.screenshot}
                              alt={project.title}
                              width={460}
                              height={200}
                              className="relative z-10 object-cover group-hover:scale-[1.015] transition-all duration-500 rounded-xl mb-2"
                            />
                          </div>
                        )}
                        <div className="flex gap-1 w-full py-2.5 rounded-2xl px-2 border-2 border-foreground/10 border-dotted bg-foreground/[0.02]">
                          <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-foreground/5 mr-3.5">
                            <Image
                              src={logoData?.src || "/logos/v19.png"}
                              alt={project.title}
                              fill
                              className={`p-1 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ${
                                fit === "contain" ? "object-contain" : "object-cover"
                              }`}
                            />
                          </div>
                          <div className="flex flex-col justify-center">
                            <h3 className="text-sm font-semibold text-foreground/90">{project.title}</h3>
                            <p className="text-sm text-foreground/60">{project.summary || project.description}</p>
                          </div>
                        </div>
                      </Link>
                    </FadeInWhenVisible>
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        </div>
      {/* </PanZoomCanvas> */}
    </section>
  );
}
