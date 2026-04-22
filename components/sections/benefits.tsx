import { Flame, Dumbbell, Clock, ClipboardList, Target } from "lucide-react"

const benefits = [
  {
    icon: Flame,
    title: "Fat Loss Optimization",
    description: "Targeted compounds for metabolic enhancement and body composition",
  },
  {
    icon: Dumbbell,
    title: "Muscle Recovery",
    description: "Accelerate tissue repair and reduce recovery time between sessions",
  },
  {
    icon: Clock,
    title: "Longevity Support",
    description: "Compounds researched for cellular health and healthy aging",
  },
  {
    icon: ClipboardList,
    title: "Clinical Protocols",
    description: "Evidence-based dosing guidelines with every product",
  },
  {
    icon: Target,
    title: "Precision Dosing",
    description: "Accurate measurements for consistent, reproducible results",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Research-grade compounds for serious results
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every peptide is selected for efficacy, purity, and research backing.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group flex flex-col items-center rounded-2xl border border-border/50 bg-secondary/30 p-6 text-center transition-all hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/20">
                <benefit.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
