import Link from "next/link";
import FadeInWhenVisible from "./animations/FadeInWhenVisible";
import { InfiniteSlider } from "./ui/infinite-slider";

const SKILLS_1 = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js",
  "Python", "Solidity", "Web3", "AI/ML", "RAG", "Fast API"
];

const SKILLS_2 = [
  "Framer Motion", "PostgreSQL", "Supabase", "Drizzle", "Docker",
  "AWS", "GCP", "Cloudflare", "Arduino", "IoT"
];

export default function Me() {
  return (
    <section className="w-full pb-12 lg:pb-16 overflow-hidden relative">
      {/* Background Gradients */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] -z-10" /> */}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-12">

          {/* Hero Text - Commented out as requested */}
          {/* <FadeInWhenVisible>
            <div className="space-y-6 max-w-4xl">
              <h2 className="text-sm font-bold tracking-widest text-foreground/60 uppercase font-jakarta">
                Hello, I Am
              </h2>
              <h1 className="text-5xl lg:text-7xl font-bold font-jakarta tracking-tight text-foreground">
                Vashishta Mithra <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/40">
                  Reddy Vundyala
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-foreground/60 font-bricolage max-w-2xl mx-auto leading-relaxed">
                Co-founder of <span className="text-foreground font-bold">Soulmegle</span>.
                Full Stack Developer, Designer, and AI Engineer building the future of digital interaction.
              </p>
            </div>
          </FadeInWhenVisible> */}

          {/* Socials - Commented out as requested */}
          {/* <FadeInWhenVisible>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/Vashishta-Mithra-Reddy"
                target="_blank"
                className="px-8 py-4 rounded-full bg-foreground text-background font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-foreground/10"
              >
                <Github className="w-5 h-5" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/vashishta-mithra-reddy-vundyala/"
                target="_blank"
                className="px-8 py-4 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-bold flex items-center gap-3 hover:bg-foreground/10 transition-colors backdrop-blur-sm"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
              <Link
                href="mailto:vashishtamithra@gmail.com"
                className="px-8 py-4 rounded-full bg-foreground/5 border border-foreground/10 text-foreground font-bold flex items-center gap-3 hover:bg-foreground/10 transition-colors backdrop-blur-sm"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </FadeInWhenVisible> */}

          {/* Skills Marquee */}
          <div className="w-full pt-12 space-y-8">
            <FadeInWhenVisible>
              <div className="flex flex-col items-center gap-4 mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold font-jakarta tracking-tight">
                  We Build With
                </h2>
                {/* <div className="w-20 h-1.5 bg-foreground/10 rounded-full" /> */}
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible>
              <div className="relative w-full overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

                {/* Row 1 - Left to Right */}
                <InfiniteSlider gap={24} speedOnHover={10} direction="horizontal">
                  {SKILLS_1.map((skill) => (
                    <div key={skill} className="px-6 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground font-bold font-jakarta text-lg whitespace-nowrap hover:bg-foreground/10 transition-all cursor-default mb-4">
                      {skill}
                    </div>
                  ))}
                </InfiniteSlider>

                {/* Row 2 - Right to Left (simulated by reverse order or just another slider) */}
                <InfiniteSlider gap={24} speedOnHover={10} direction="horizontal" reverse>
                  {SKILLS_2.map((skill) => (
                    <div key={skill} className="px-6 py-3 rounded-2xl bg-foreground/5 border border-foreground/10 text-foreground font-bold font-jakarta text-lg whitespace-nowrap hover:bg-foreground/10 transition-all cursor-default mb-4">
                      {skill}
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </FadeInWhenVisible>
          </div>

        </div>
      </div>
    </section>
  );
}
