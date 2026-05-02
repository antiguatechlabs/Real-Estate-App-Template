import { useTranslations } from "next-intl";

import type { TestimonialData } from "../types";

type TestimonialsProps = {
  testimonials: TestimonialData[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const t = useTranslations("marketingStarterLanding.testimonials");

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 overflow-hidden bg-[#F7F3EC] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#2C7DA0]">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#12344D] sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Testimonios con una lectura cálida, de confianza y sin ruido visual.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-5 rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_rgba(18,52,77,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(18,52,77,0.12)]"
            >
              <div className="h-1 w-14 rounded-full bg-[#D4A373]" aria-hidden="true" />

              <div className="flex gap-0.5" aria-label={t("ratingLabel")}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#D4A373"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-[#1F2937] sm:text-[15px]">
                &ldquo;{t(`quotes.${testimonial.key}`)}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-[#E5E7EB] pt-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#12344D] to-[#2C7DA0] text-sm font-semibold text-white ring-4 ring-[#F7F3EC]">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#12344D]">{testimonial.name}</p>
                  <p className="text-xs text-[#4B5563]">
                    {t(`roles.${testimonial.roleKey}`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
