'use client';

import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import { toast } from "sonner";
import Image from 'next/image'; 
import Link from "next/link";
import useSound from "use-sound";
import { motion } from "framer-motion";
import DarkVeil from "@/components/DarkVeil";
import { HugeiconsIcon } from "@hugeicons/react";
import { Calendar01Icon, Copy01Icon } from "@hugeicons/core-free-icons";



interface SocialMedia {
  name: string;
  url: string;
  icon: string;
  invert?: boolean;
}

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function Contact() {
  const email = "me@vashishtamithra.com";
  const [click] = useSound("/notification.wav", { volume: 0.20 });

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const socials: SocialMedia[] = [
    {
      name: "X (Twitter)",
      url: "https://x.com/v19tech",
      icon: "/socials/twitter.svg",
      invert: true,
    },
    {
      name: "GitHub",
      url: "https://github.com/Vashishta-Mithra-Reddy",
      icon: "/socials/github.svg",
      invert: true,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vashishta-mithra/",
      icon: "/socials/linkedin.svg",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/vashishta_mithra_reddy",
      icon: "/socials/instagram.svg",
    },
    {
      name: "Ishta",
      url: "https://ishta.v19.tech/vashishta",
      icon: "/socials/ishta.svg",
    },
  ];

  const handleCopyEmail = async () => {
    if (typeof window === "undefined" || !navigator?.clipboard?.writeText) {
      toast.error("Clipboard API is not supported in this environment.");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      toast.success("Email copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy email.");
    }
    click();
  };

  const headingWords = ["Get ", "in ", "touch;"];

  return (
    <>
      <style>
        {`
          ::-webkit-scrollbar {
            display: none !important;
          }
          html, body {
            scrollbar-width: none !important;
            -ms-overflow-style: none !important;
          }
        `}
      </style>
      <section className="w-full pb-16 text-foreground font-satoshi flex items-center justify-center pt-28 md:pt-24 md:pb-36">
      {/* <div className="w-full h-full absolute top-0 left-0 dark:block hidden">

        <DarkVeil />

      </div> */}
      <div className="max-w-7xl mx-auto z-30 md:pt-12">
        <div className="text-center mb-2">
          <h2 className="text-4xl font-bold text-foreground/60 text-center flex items-center justify-center">
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-2"
                initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: index * 0.2, type: "decay" }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        <FadeInWhenVisible> 
          <div className="flex flex-col items-center justify-center gap-6 p-8 py-6 rounded-xl">
            {/* <Mail className="w-16 h-16 text-muted-foreground" /> */}
            {/* <p className="text-lg text-foreground/60 text-center max-w-md text-balance">
              Feel free to reach out for collaborations, questions, or just to say hello!
            </p> */}
            <div className="relative">
              <Image
                src="/sea_stamp.webp"
                alt="Contact"
                width={800}
                height={200}
                className="w-[90vw] md:w-[27vw] h-auto"
              />
              <div className="absolute bottom-5 right-6">
                <span className="text-white font-bold font-satoshi text-xl tracking-wide">V19</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6">
              <button
              data-cal-namespace="30min"
              data-cal-link="vashishta/30min"
              data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
              className="py-3 rounded-xl bg-foreground/95 font-bricolage font-semibold dark:bg-foreground/90 text-background text-sm tracking-wide hover:bg-foreground/80 cursor-pointer dark:hover:bg-foreground/20 transition-colors flex items-center justify-center gap-2 px-6"
            >
              <HugeiconsIcon icon={Calendar01Icon} className="w-5 h-5" />
              <span>Book a call</span>
            </button>
            <div className="flex items-center justify-center gap-4">
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 rounded-xl font-satoshi bg-background text-foreground text-sm tracking-wide hover:bg-foreground/5 transition-colors border"
              >
                {email}
              </a>

              <button
                onClick={handleCopyEmail}
                className="rounded-xl flex items-center justify-center gap-4 border-dashed border-2 border-border hover:bg-foreground/5 py-2 px-4 cursor-pointer active:scale-95 transition-all duration-300"
              >
                <HugeiconsIcon icon={Copy01Icon} className="w-6 h-6 text-foreground/60" />
              </button>
            </div>
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <div className="flex justify-around py-1 rounded-xl bg-foreground/5 dark:bg-foreground/15 mx-4 md:mx-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 transition-all duration-300 group"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={28} 
                  height={28}
                  className={`group-hover:text-foreground/90 group-hover:scale-110 transition-all duration-300 ${social.invert ? 'dark:invert-75' : ''}`}
                />
              </Link>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
    </>
  );
}
