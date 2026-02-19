"use client";
import ThemeSwitcher from "../theme-switcher";
// import Navigation from "./navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";


export default function Header() {
    const { resolvedTheme } = useTheme();
    const thingy = resolvedTheme === "dark" ? "{Turn on the lights?} ->" : "{Turn off the lights?} -> ";
    const thingyx = resolvedTheme === "dark" ? "" : "{Lights Out?}";
    const [hoverCar, setHoverCar] = useState(false);
    return (
        <motion.nav
          className="w-full max-w-6xl flex items-center justify-center h-20 backdrop-blur-3xl fixed top-0 md:top-8 left-1/2 transform -translate-x-1/2 rounded-none md:rounded-xl px-6 md:px-4 z-40"
          initial={{ opacity: 0, y: -10, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ type: "spring", stiffness: 60, damping: 10, bounce: 0.45, visualDuration: 4 }}
        >
          <div className="w-full max-w-7xl flex justify-between items-center p-3 px-2 md:px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"} className="relative text-3xl md:pl-4 font-bold font-satoshi">
                <motion.span
                  className="relative inline-flex items-center z-10 overflow-hidden"
                  style={{ width: 80, height: 36, willChange: "transform, filter" }}
                  onHoverStart={() => setHoverCar(true)}
                  onHoverEnd={() => setHoverCar(false)}
                >
                  <AnimatePresence initial={false} mode="sync">
                    {!hoverCar ? (
                      <motion.span
                        key="logo-v19"
                        className="absolute inset-0 flex items-center md:pl-2"
                        initial={{ x: 60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 60, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 180, damping: 20 }}
                      >
                        V19
                      </motion.span>
                    ) : (
                      <motion.div
                        key="logo-car"
                        className="absolute inset-0 flex items-center w-full md:pl-4"
                        initial={{ x: -60, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -60, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 180, damping: 20 }}
                      >
                        <Image
                          src="/f1_icon.svg"
                          alt="Race car"
                          width={56}
                          height={56}
                          priority
                          className="relative z-10"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.span>

                {/* Bleeding red gradient backdrop (outside overflow-hidden) */}
                <AnimatePresence initial={false}>
                  {hoverCar && (
                    <motion.div
                      key="car-glow"
                      className="absolute inset-x-2 top-1/2 -translate-y-1/2 translate-x-3.5 h-16 rounded-full bg-gradient-to-r from-red-500/25 via-red-500/12 to-transparent blur-lg mix-blend-screen pointer-events-none"
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ type: "spring", stiffness: 160, damping: 18 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
              {/* <Link href={"/"} className="text-xl font-bold px-0 md:px-10">
              <Image src="/v19.png" width={60} height={60} priority alt="V19 Logo" className="rounded-full"/>
              </Link> */}
            </div>
            {/* <Navigation /> */}
            <div className="flex flex-row items-center">
              <p className="hidden md:block font-bricolage font-bold text-foreground/20 pr-0.5">{thingy}</p>
              <p className="md:hidden block font-bricolage font-bold text-foreground/20 pr-0.5">{thingyx}</p>
              <div className="flex flex-row items-center gap-4">
              <ThemeSwitcher/>
              {/* <Link
                href="/store" 
                className="hidden md:block px-6 py-3 rounded-xl font-satoshi bg-foreground/10 text-foreground text-sm tracking-wide hover:bg-foreground/15"
              >
                Store
              </Link> */}
              <Link
                href="/contact" 
                className="px-6 py-3 rounded-xl font-satoshi bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90"
              >
                <p className="md:block hidden">Let's get you started</p>
                <p className="md:hidden block">Contact</p>
              </Link>
              </div>
            </div>
          </div>
        </motion.nav>
    );
}
