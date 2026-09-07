import { ArrowRight } from "lucide-react";
import { scrollToHash } from "../hooks/useLenis";
import { Reveal } from "../motion/Reveal";
import { Button } from "../components/Button";
import { Container } from "../components/Container";

export function FinalCta() {
  // Temporary target until the signup/contact phase lands.
  function handleCta(event) {
    event.preventDefault();
    if (scrollToHash("#pricing")) {
      window.history.pushState(null, "", "#pricing");
    }
  }

  return (
    <section aria-label="Get started with NOVA" className="border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:52px_52px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_40%,black_20%,transparent_75%)]" />
            <div className="absolute -top-40 left-1/2 h-80 w-[min(720px,130vw)] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(124,92,255,0.18),transparent)]" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-h1 text-balance text-white">
              Your team&apos;s next breakthrough starts here.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lead text-pretty text-mist-500">
              Stop managing work across disconnected tools. Bring everything
              together with NOVA.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                href="#pricing"
                onClick={handleCta}
                aria-label="Start free — see plans"
                className="w-full sm:w-auto"
              >
                Start Free
                <ArrowRight aria-hidden="true" className="size-4" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="#pricing"
                onClick={handleCta}
                aria-label="Talk to sales — see the Business plan"
                className="w-full sm:w-auto"
              >
                Talk to Sales
              </Button>
            </div>
            <p className="mt-5 text-[13px] text-mist-500">
              Free 14-day Pro trial · No credit card required
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
