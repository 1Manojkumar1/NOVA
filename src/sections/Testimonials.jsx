import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { cn } from "../utils/cn";
import { Reveal } from "../motion/Reveal";
import { fadeUpCard, viewportCard } from "../motion/variants";
import { Container } from "../components/Container";
import { SectionHeading } from "../components/SectionHeading";
import { Avatar } from "./dashboard/DashboardWidgets";

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, star) => (
        <Star
          key={star}
          aria-hidden="true"
          className={cn(
            "size-4",
            star < rating ? "fill-amber-400 text-amber-400" : "text-white/20",
          )}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <figure className="flex h-full min-w-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Stars rating={testimonial.rating} />
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-mist-100">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 flex min-w-0 items-center gap-3 border-t border-white/5 pt-4">
        <Avatar
          initials={testimonial.initials}
          tone={testimonial.tone}
          className="size-10 text-xs"
        />
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-white">
            {testimonial.name}
          </span>
          <span className="block truncate text-xs text-mist-500">
            {testimonial.role} · {testimonial.company}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

const slide = {
  enter: (direction) => ({ opacity: 0, x: direction >= 0 ? 48 : -48 }),
  center: { opacity: 1, x: 0 },
  exit: (direction) => ({ opacity: 0, x: direction >= 0 ? -48 : 48 }),
};

function Carousel() {
  const [[index, direction], setState] = useState([0, 0]);
  const count = testimonials.length;

  function paginate(step) {
    setState(([current]) => [(current + step + count) % count, step]);
  }

  function goTo(next) {
    setState(([current]) => [
      next,
      next === current ? 0 : next > current ? 1 : -1,
    ]);
  }

  const testimonial = testimonials[index];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      className="mx-auto mt-12 w-full max-w-xl lg:hidden"
    >
      <div aria-live="polite" aria-atomic="true" className="min-h-[320px]">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={index}
            custom={direction}
            variants={slide}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="h-full"
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <div className="flex items-center gap-2">
          {testimonials.map((entry, dot) => (
            <button
              key={entry.name}
              type="button"
              onClick={() => goTo(dot)}
              aria-label={`Show testimonial from ${entry.name}`}
              aria-current={dot === index}
              className={cn(
                "h-2.5 rounded-full transition-all duration-200",
                dot === index
                  ? "w-6 bg-brand-400"
                  : "w-2.5 bg-white/15 hover:bg-white/30",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next testimonial"
          className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="border-t border-white/5">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="Loved by teams that ship"
            description="Real results from teams that replaced the busywork with NOVA."
          />
        </Reveal>

        <div className="mt-12 hidden min-w-0 grid-cols-3 gap-4 lg:grid">
          {testimonials.map((testimonial, card) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUpCard}
              custom={card * 0.1}
              initial="hidden"
              whileInView="show"
              viewport={viewportCard}
              whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
              className="min-w-0"
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        <Carousel />
      </Container>
    </section>
  );
}
