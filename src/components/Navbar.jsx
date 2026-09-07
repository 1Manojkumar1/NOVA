import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { Menu, X } from "lucide-react";
import { getLenis, scrollToHash } from "../hooks/useLenis";
import { getStartedHref, loginHref, navLinks } from "../data/navigation";
import { site } from "../data/site";
import { cn } from "../utils/cn";
import { Button } from "./Button";
import { Container } from "./Container";

const desktopLinkStyles =
  "rounded-lg px-3 py-2 text-sm font-medium text-mist-300 transition-colors duration-200 hover:bg-white/5 hover:text-white";

const mobileLinkStyles =
  "block rounded-xl px-3 py-3 text-base font-medium text-mist-100 transition-colors duration-200 hover:bg-white/5 hover:text-white";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  useEffect(() => {
    let ticking = false;

    function update() {
      ticking = false;
      setScrolled(window.scrollY > 8);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open ]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");

    function onChange(event) {
      if (event.matches) setOpen(false);
    }

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!open) return;

    getLenis()?.stop();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      getLenis()?.start();
      document.body.style.overflow = previousOverflow;
    };
  }, [open ]);

  function handleNavClick(event, href) {
    event.preventDefault();
    if (open) {
      setOpen(false);
      getLenis()?.start();
      document.body.style.overflow = "";
    }
    if (scrollToHash(href)) {
      window.history.pushState(null, "", href);
    }
  }

  const panelTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.22, ease: "easeOut" };
  const itemTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: "easeOut" };

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: reduceMotion ? scrollYProgress : smoothProgress }}
        className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-brand-500"
      />

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300",
          scrolled || open
            ? "border-b border-white/10 bg-ink-950/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            onClick={(event) => handleNavClick(event, "#top")}
            aria-label="NOVA — back to top"
            className="flex items-center gap-2.5 rounded-lg"
          >
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-lg bg-ink-800 text-lg font-bold text-brand-400"
            >
              N
            </span>
            <span className="text-sm font-semibold tracking-[0.22em] text-white">
              {site.name}
            </span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleNavClick(event, link.href)}
                    className={desktopLinkStyles}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Button
              variant="ghost"
              size="sm"
              href={loginHref}
              onClick={(event) => handleNavClick(event, loginHref)}
            >
              Log in
            </Button>
            <Button
              variant="primary"
              size="sm"
              href={getStartedHref}
              onClick={(event) => handleNavClick(event, getStartedHref)}
            >
              Get started
            </Button>
          </div>

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-mist-100 transition-colors duration-200 hover:bg-white/10 hover:text-white md:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
          </button>
        </Container>

        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
              transition={panelTransition}
              className="absolute inset-x-0 top-full md:hidden"
            >
              <nav
                aria-label="Mobile"
                className="border-b border-white/10 bg-ink-950/95 shadow-card backdrop-blur-xl"
              >
                <Container className="py-4">
                  <motion.ul
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        transition: {
                          staggerChildren: reduceMotion ? 0 : 0.05,
                          delayChildren: reduceMotion ? 0 : 0.05,
                        },
                      },
                    }}
                    className="flex flex-col gap-1"
                  >
                    {navLinks.map((link) => (
                      <motion.li
                        key={link.href}
                        variants={{
                          closed: { opacity: 0, y: reduceMotion ? 0 : -8 },
                          open: { opacity: 1, y: 0, transition: itemTransition },
                        }}
                      >
                        <a
                          href={link.href}
                          onClick={(event) =>
                            handleNavClick(event, link.href)
                          }
                          className={mobileLinkStyles}
                        >
                          {link.label}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <div className="mt-3 flex flex-col gap-2 border-t border-white/10 pt-4">
                    <Button
                      variant="secondary"
                      href={loginHref}
                      onClick={(event) => handleNavClick(event, loginHref)}
                      className="w-full"
                    >
                      Log in
                    </Button>
                    <Button
                      variant="primary"
                      href={getStartedHref}
                      onClick={(event) =>
                        handleNavClick(event, getStartedHref)
                      }
                      className="w-full"
                    >
                      Get started
                    </Button>
                  </div>
                </Container>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
