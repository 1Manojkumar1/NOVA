import {
  Hexagon,
  Layers,
  Navigation,
  Orbit,
  Triangle,
  Zap,
} from "lucide-react";
import { Container } from "../components/Container";

const companies = [
  { name: "Vertex", Icon: Triangle, wordmark: "font-bold tracking-tight" },
  { name: "Northstar", Icon: Navigation, wordmark: "font-medium tracking-[0.18em] uppercase text-[13px]" },
  { name: "Orbit", Icon: Orbit, wordmark: "font-semibold tracking-wide" },
  { name: "Flux", Icon: Zap, wordmark: "font-bold tracking-tight" },
  { name: "Arc Systems", Icon: Hexagon, wordmark: "font-medium tracking-wide" },
  { name: "Linear Labs", Icon: Layers, wordmark: "font-semibold tracking-tight" },
];

export function TrustedBy() {
  return (
    <section aria-label="Trusted by" className="border-t border-white/5">
      <Container className="py-12 sm:py-14">
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-mist-500 uppercase">
          Trusted by ambitious teams
        </p>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 sm:gap-x-12">
          {companies.map(({ name, Icon, wordmark }) => (
            <li key={name}>
              <span
                className={`flex items-center gap-2 text-[15px] text-mist-300 opacity-45 transition-opacity duration-200 hover:opacity-90 ${wordmark}`}
              >
                <Icon aria-hidden="true" className="size-4 shrink-0" />
                {name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
