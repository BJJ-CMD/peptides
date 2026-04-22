import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="border-t border-border/50 bg-gradient-to-b from-secondary/50 to-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Clinical-grade peptides. Clear protocols. Fast access.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of researchers who trust Pure Amino Peptides for verified purity and consistent quality.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="px-8 text-base">
              <Link href="/products">Shop Peptides</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
