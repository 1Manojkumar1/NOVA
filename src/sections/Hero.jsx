import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Check, Play } from "lucide-react";
import { scrollToHash } from "../hooks/useLenis";
import { getStartedHref } from "../data/navigation";
import { staggerContainer, staggerItem } from "../motion/variants";
import { Badge } from "../components/Badge";
import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { Dashboard } from "./dashboard/Dashboard";

const supporting = ["No credit card required", "Free for 14 days"];

export function Hero({ onWatchDemo }) {
  const reduceMotion = useReducedMotion();

  function handleCta(event, href) {
    event.preventDefault();
    if (scrollToHash(href)) {
      window.history.pushState(null, "", href);
    }
  }

  return (
    <section
      id="product"
      aria-labelledby="hero-heading"
      className="relative overflow-clip"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_38%,black_25%,transparent_75%)]" />
        <motion.div
          animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0.8, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-48 left-1/2 h-105 w-[min(860px,120vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(124,92,255,0.15),transparent)]"
        />
        <div className="absolute top-1/3 -right-40 h-95 w-95 bg-[radial-gradient(closest-side,rgba(34,211,238,0.07),transparent)]" />
      </div>

      <Container className="relative py-14 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-16">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            animate="show"
            className="min-w-0 text-center lg:text-left"
          >
            <motion.div variants={staggerItem}>
              <Badge className="uppercase">AI productivity platform</Badge>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={staggerItem}
              className="mt-5 text-hero text-balance text-white"
            >
              Build Better.
              <br />
              <span className="text-brand-300">Work Smarter.</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="mx-auto mt-5 max-w-md text-lead text-pretty text-mist-500 lg:mx-0"
            >
              NOVA brings your projects, workflows, knowledge, and team
              collaboration into one intelligent workspace.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                href={getStartedHref}
                onClick={(event) => handleCta(event, getStartedHref)}
                className="w-full sm:w-auto"
              >
                Start Free
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={onWatchDemo}
                className="w-full sm:w-auto"
              >
                <Play aria-hidden="true" className="size-4 fill-current" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.ul
              variants={staggerItem}
              className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[13px] text-mist-500 lg:justify-start"
            >
              {supporting.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <Check
                    aria-hidden="true"
                    className="size-3.5 shrink-0 text-accent-400"
                  />
                  {point}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <div className="min-w-0">
            <Dashboard />
          </div>
        </div>
      </Container>
    </section>
  );
}
