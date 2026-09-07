import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { scrollToHash } from "../hooks/useLenis";
import { footerColumns, legalLinks, socials } from "../data/footer";
import { site } from "../data/site";
import { Container } from "../components/Container";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const value = email.trim();
    if (!value) {
      setError("Email address is required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setDone(true);
  }

  if (done) {
    return (
      <p
        aria-live="polite"
        className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3.5 py-2.5 text-sm text-emerald-300"
      >
        <Check aria-hidden="true" className="size-4 shrink-0" />
        You&apos;re on the list — welcome aboard.
      </p>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="min-w-0">
      <label
        htmlFor="newsletter-email"
        className="text-xs font-semibold tracking-[0.14em] text-mist-300 uppercase"
      >
        Stay in the loop
      </label>
      <div className="mt-2 flex min-w-0 gap-2">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (error) setError("");
          }}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="h-10 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/5 px-3.5 text-sm text-white placeholder:text-mist-500 focus:border-brand-400/60 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Subscribe to the newsletter"
          className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white transition-all duration-200 hover:-translate-y-px hover:bg-brand-600 active:translate-y-0"
        >
          <ArrowRight aria-hidden="true" className="size-4" />
        </button>
      </div>
      {error && (
        <p id="newsletter-error" role="alert" className="mt-2 text-xs text-red-400">
          {error}
        </p>
      )}
    </form>
  );
}

export function Footer() {
  function handleNav(event, href) {
    event.preventDefault();
    if (scrollToHash(href)) {
      window.history.pushState(null, "", href);
    }
  }

  return (
    <footer className="border-t border-white/5">
      <Container className="py-14 sm:py-16">
        <div className="grid min-w-0 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div className="min-w-0">
            <span className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex size-8 items-center justify-center rounded-lg bg-ink-800 text-lg font-bold text-brand-400"
              >
                N
              </span>
              <span className="text-sm font-semibold tracking-[0.22em] text-white">
                {site.name}
              </span>
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-500">
              The AI-powered productivity platform for teams that ship.
              Build Better. Work Smarter.
            </p>
            <div className="mt-5 max-w-xs">
              <NewsletterForm />
            </div>
            <ul className="mt-5 flex items-center gap-2" aria-label="Social media">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-mist-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={`Footer — ${column.title}`} className="min-w-0">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-mist-300 uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(event) => handleNav(event, link.href)}
                      className="rounded text-sm text-mist-500 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-[13px] text-mist-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </p>
          <ul className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(event) => handleNav(event, link.href)}
                  className="rounded transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
