"use client";
import Link  from "next/link";
import Image from "next/image";
import Beams from "../Beams";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
// import { Calendar } from "lucide-react";


export default function Footer() {
  const email = "me@vashishtamithra.com";
  const x = "{}";
  const y = "{/**/}";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const socials = [
    { name: "X (Twitter)", url: "https://x.com/v19tech", icon: "/socials/twitter.svg", invert:true },
    { name: "GitHub", url: "https://github.com/Vashishta-Mithra-Reddy", icon: "/socials/github.svg", invert:true },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vashishta-mithra/", icon: "/socials/linkedin.svg" },
    { name: "Instagram", url: "https://instagram.com/vashishta_mithra_reddy", icon: "/socials/instagram.svg" },
    { name: "Ishta", url: "https://ishta.v19.tech/vashishta", icon: "/socials/ishta.svg" },
  ];

  return (
    <footer className="w-full mb-12 md:mb-0">
      <div className="w-full mx-auto backdrop-blur-3xl md:px-16 pb-8 border-none md:border-t-2 border-foreground/10 dark:md:border-none md:border-dotted bg-background/60">
        <div className="absolute inset-0 -z-10 rounded-xl hidden dark:block">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={0}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 md:py-10 md:px-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-3xl font-bold font-satoshi mb-3 text-foreground">V19</Link>
            <p className="font-bricolage text-foreground/80">{x[0]+`Vashishta Mithra Reddy`+x[1]}</p>
            <p className="font-bricolage text-foreground/50 italic">{` Human, `+`Dev, `+`Designer,`}</p>
            <p className="font-bricolage text-foreground/40 italic">& A Freelancer.</p>
            <p className="font-bricolage text-foreground/30 italic">{x[0]+"21, Male"+x[1]}</p>
          </div>


          {/* Contact */}
          <div className="flex flex-col md:items-end items-center gap-3">
            <div className="text-sm text-foreground/25 font-bricolage">
              {y.slice(0, 3)}<span className="text-foreground/90">Connect</span>{y.slice(3)}
            </div>

            <div className="flex items-center gap-3">
              <button
                data-cal-namespace="30min"
                data-cal-link="vashishta/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                className="px-4 py-2 rounded-xl bg-foreground font-medium font-bricolage text-background text-sm tracking-wide hover:bg-foreground/90 transition-colors flex items-center gap-2"
              >
                
                {/* <Calendar className="w-4 h-4" /> */}
                <span>Book a call with us</span>
              </button>
              {/* <ThemeSwitcher /> */}
            </div>
            <div className="flex gap-3 mt-1">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-xl hover:bg-foreground/10 transition ${social.invert ? "dark:invert-100" : ""}`}
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="items-center justify-between border-t-2 border-foreground/10 border-dotted px-8 md:px-10 py-4 md:flex hidden">
          <span className="text-xs text-foreground/50">
            © {new Date().getFullYear()} Vashishta Mithra Reddy. All rights reserved?
          </span>
          <span className="text-xs text-foreground/40">Cause I love building stuff</span>
        </div>
      </div>
    </footer>
  );
}
