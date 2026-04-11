import { useTranslations } from "next-intl";

import type { TestimonialData } from "../types";

type TestimonialsProps = {
  testimonials: TestimonialData[];
};

export function Testimonials({ testimonials }: TestimonialsProps) {
  const t = useTranslations("marketingStarterLanding.testimonials");

  return (
    <section id="testimonials" className="scroll-mt-24 bg-slate-900/30 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-sky-400">
            {t("eyebrow")}
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t("title")}</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/20"
            >
              <div className="flex gap-0.5" aria-label={t("ratingLabel")}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg
                    key={index}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#0ea5e9"
                    aria-hidden="true"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <p className="flex-1 text-sm leading-relaxed text-slate-300">
                &ldquo;{t(`quotes.${testimonial.key}`)}&rdquo;
              </p>

              <div className="flex items-center gap-3 border-t border-white/[0.06] pt-2">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sky-600 to-blue-700 text-sm font-semibold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-white">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">
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
