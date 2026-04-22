import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Flame, Dumbbell, Clock } from "lucide-react"

const bundles = [
  {
    id: "fat-loss-stack",
    title: "Fat Loss Stack",
    description: "Retatrutide + AOD-9604 + BPC-157 for comprehensive fat loss support.",
    icon: Flame,
    highlight: "Most Popular",
    href: "/bundles/fat-loss",
    variant: "default" as const,
  },
  {
    id: "recovery-stack",
    title: "Recovery Stack",
    description: "BPC-157 + TB-500 for accelerated tissue repair and recovery.",
    icon: Dumbbell,
    highlight: "Best Value",
    href: "/bundles/recovery",
    variant: "outline" as const,
  },
  {
    id: "longevity-stack",
    title: "Longevity Stack",
    description: "CJC-1295/Ipamorelin + Epithalon for cellular health and anti-aging.",
    icon: Clock,
    highlight: "Research Grade",
    href: "/bundles/longevity",
    variant: "outline" as const,
  },
]

export function BundlesSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Featured Stacks
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Pre-configured stacks designed around common research goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:shadow-lg ${
                bundle.variant === "default"
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/50 bg-secondary/30 hover:border-primary/30"
              }`}
            >
              {/* Badge */}
              <Badge
                variant={bundle.variant === "default" ? "default" : "secondary"}
                className="absolute right-4 top-4"
              >
                {bundle.highlight}
              </Badge>

              {/* Icon */}
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                bundle.variant === "default" ? "bg-primary/20" : "bg-primary/10"
              }`}>
                <bundle.icon className="h-6 w-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {bundle.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">
                {bundle.description}
              </p>

              {/* CTA */}
              <Button
                asChild
                variant={bundle.variant}
                className="mt-6"
              >
                <Link href={bundle.href}>View Stack</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
