import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Finally found a supplier I can trust. The purity is exactly as stated, and the protocols make dosing straightforward.",
    author: "Dr. Michael R.",
    role: "Research Scientist",
    rating: 5,
  },
  {
    quote: "Been using their BPC-157 for my research projects. Consistent quality across multiple batches. COAs are always on point.",
    author: "Sarah K.",
    role: "Lab Researcher",
    rating: 5,
  },
  {
    quote: "The peptide finder helped me narrow down exactly what I needed. Fast shipping and excellent customer support.",
    author: "James T.",
    role: "Verified Buyer",
    rating: 5,
  },
]

export function SocialProofSection() {
  return (
    <section className="border-t border-border/50 bg-secondary/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by 25,000+ customers worldwide
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Researchers and professionals choose Pure Amino Peptides for quality they can verify.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl border border-border/50 bg-background p-6"
            >
              {/* Rating */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 border-t border-border/50 pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-foreground">4.9</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm">Average Rating</span>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-sm">
            <span className="font-bold text-foreground">99.2%</span> Positive Reviews
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="text-sm">
            <span className="font-bold text-foreground">48hr</span> Avg. Ship Time
          </div>
        </div>
      </div>
    </section>
  )
}
