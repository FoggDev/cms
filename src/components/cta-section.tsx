import { ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'

export function CTASection({ cta }: { cta: any }) {
  return (
    <section className="py-20 sm:py-32 bg-primary">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
            {cta.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80 text-pretty">
            {cta.description}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90"
            >
              {cta.primaryButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              {cta.secondaryButtonText}
            </Button>
          </div>
          <p className="mt-6 text-sm text-primary-foreground/60">
            {cta.description}
          </p>
        </div>
      </div>
    </section>
  )
}
