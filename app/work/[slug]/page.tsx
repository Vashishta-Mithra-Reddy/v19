import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkBySlug, getAllWorkSlugs } from "@/data/work";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { Slider } from "@/components/Slider";
import { ArrowUpRight, Github, Calendar, Layers, Code, CheckCircle2 } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return { title: "Work Not Found" };
  const title = `${item.title} | ${item.summary} | ${item.description}`;
  const description = item.description || item.summary || "Work detail";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/work/${item.slug}`,
      images: item.screenshot ? [{ url: item.screenshot }] : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function generateStaticParams(): { slug: string }[] {
  return getAllWorkSlugs().map(slug => ({ slug }));
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) return notFound();

  // Use gallery if provided; fallback to single screenshot
  const gallery = item.gallery?.length
    ? item.gallery
    : item.screenshot
      ? [item.screenshot]
      : [];

  return (
    <main className="min-h-screen bg-background text-foreground font-satoshi selection:bg-foreground/10">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] lg:h-[50vh] flex items-end justify-start overflow-hidden">
        {/* Background Blur */}
        <div className="absolute inset-0 z-0">
          {item.screenshot && (
            <Image
              src={item.screenshot}
              alt="Background"
              fill
              className="object-cover opacity-20 blur-3xl scale-110"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-4">
          <FadeInWhenVisible>
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="w-fit px-4 py-1.5 rounded-full bg-foreground/5 border border-foreground/10 text-xs font-medium text-foreground/60 hover:bg-foreground/10 transition-colors mb-4 backdrop-blur-sm"
              >
                ← Back to Projects
              </Link>
              <div className="flex items-center gap-4 lg:gap-6">
                {item.logo && (
                  <div className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border-2 border-border border-dotted">
                    <Image
                      src={
                        Array.isArray(item.logo)
                          ? typeof item.logo[0] === "string"
                            ? item.logo[0]
                            : item.logo[0]?.src
                          : typeof item.logo === "string"
                            ? item.logo
                            : item.logo?.src
                      }
                      alt={`${item.title} logo`}
                      fill
                      style={
                        Array.isArray(item.logo)
                          ? typeof item.logo[0] === "string"
                            ? undefined
                            : item.logo[0]?.zoom
                              ? { transform: `scale(${item.logo[0]?.zoom})` }
                              : undefined
                          : typeof item.logo === "string"
                            ? undefined
                            : item.logo?.zoom
                              ? { transform: `scale(${item.logo?.zoom})` }
                              : undefined
                      }
                      className={`p-3 rounded-2xl ${
                        Array.isArray(item.logo)
                          ? typeof item.logo[0] === "string"
                            ? "object-contain"
                            : item.logo[0]?.fit === "cover"
                              ? "object-cover"
                              : "object-contain"
                          : typeof item.logo === "string"
                            ? "object-contain"
                            : item.logo?.fit === "cover"
                              ? "object-cover"
                              : "object-contain"
                      }`}
                    />
                  </div>
                )}
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold font-jakarta tracking-tight text-foreground">
                    {item.title}
                  </h1>
                  {item.summary && (
                    <p className="text-lg lg:text-xl text-foreground/60 mt-2 font-medium font-bricolage">
                      {item.summary}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Content */}
        <div className="lg:col-span-8 space-y-16">
          {/* Description */}
          <FadeInWhenVisible>
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-2xl font-bold font-jakarta mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-foreground/20 rounded-full"></span>
                Overview
              </h2>
              <p className="text-xl leading-relaxed text-foreground/80 font-bricolage">
                {item.description}
              </p>
            </div>
          </FadeInWhenVisible>

          {/* Gallery */}
          {gallery.length > 0 && (
            <FadeInWhenVisible>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-jakarta mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-foreground/20 rounded-full"></span>
                  Gallery
                </h2>
                <div className="grid grid-cols-1 gap-8">
                  {gallery.map((src, idx) => (
                    <div
                      key={idx}
                      className="relative w-full aspect-video rounded-2xl overflow-hidden border border-foreground/10 shadow-2xl bg-foreground/5 group"
                    >
                      <Image
                        src={src}
                        alt={`${item.title} screenshot ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <FadeInWhenVisible>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold font-jakarta mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-foreground/20 rounded-full"></span>
                  Key Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {item.highlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-foreground/5 border border-foreground/10 flex items-start gap-3 hover:bg-foreground/10 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-foreground/80 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInWhenVisible>
          )}
        </div>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-32 space-y-8">
            {/* Actions */}
            <div className="flex flex-col gap-3">
              {item.links?.site && (
                <Link
                  href={item.links.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-4 px-6 rounded-xl bg-foreground text-background font-bold text-center flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-foreground/20"
                >
                  Visit Website
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              )}
              {item.links?.repo && (
                <Link
                  href={item.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full py-4 px-6 rounded-xl bg-foreground/5 border border-foreground/10 text-foreground font-bold text-center flex items-center justify-center gap-2 hover:bg-foreground/10 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </Link>
              )}
            </div>

            {/* Project Details Card */}
            <div className="p-6 rounded-2xl bg-foreground/5 border border-foreground/10 backdrop-blur-sm space-y-6">
              {/* Status */}
              {item.status && (
                <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
                  <span className="text-foreground/60 font-medium flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Status
                  </span>
                  <span className="font-semibold">{item.status}</span>
                </div>
              )}

              {/* Date */}
              {item.date && (
                <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
                  <span className="text-foreground/60 font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Date
                  </span>
                  <span className="font-semibold">{item.date}</span>
                </div>
              )}

              {/* Platform */}
              {item.platform && (
                <div className="flex items-center justify-between pb-4 border-b border-foreground/10">
                  <span className="text-foreground/60 font-medium flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    Platform
                  </span>
                  <span className="font-semibold">{item.platform}</span>
                </div>
              )}

              {/* Roles */}
              {item.roles && item.roles.length > 0 && (
                <div className="space-y-3">
                  <span className="text-foreground/60 font-medium block">Roles</span>
                  <div className="flex flex-wrap gap-2">
                    {item.roles.map((role, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-foreground/10 text-foreground/80 border border-foreground/5">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Tech Stack */}
            {item.tech && item.tech.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold font-jakarta flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm font-medium rounded-lg bg-foreground/5 border border-foreground/10 text-foreground hover:bg-foreground/10 transition-colors cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* More Projects Slider */}
      <section className="w-full py-20 border-t border-foreground/10 bg-foreground/[0.02]">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold font-jakarta">More Projects</h2>
          <p className="text-foreground/60 mt-2">Explore more agency work</p>
        </div>
        <div className="w-full">
          <Slider filterType={item.type} />
        </div>
      </section>
    </main>
  );
}
