import { navLinks } from "../data/navigation";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";

// Real sections own their anchors, so they are excluded here to avoid
// duplicate section IDs.
const ownedAnchors = ["#product", "#features", "#solutions", "#pricing"];
const stubLinks = navLinks.filter((link) => !ownedAnchors.includes(link.href));

export function SectionStubs() {
  return (
    <>
      {stubLinks.map((link) => (
        <section
          key={link.href}
          id={link.href.slice(1)}
          aria-label={link.label}
          className="border-t border-white/5"
        >
          <Container className="py-16 sm:py-20">
            <SectionHeading
              eyebrow="Coming soon"
              title={link.label}
              description={`The full ${link.label.toLowerCase()} section will be built in a later phase. This anchor keeps navigation functional.`}
            />
          </Container>
        </section>
      ))}
    </>
  );
}
