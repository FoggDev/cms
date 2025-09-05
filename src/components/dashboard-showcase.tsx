import type { DashboardShowcaseSection as DashboardShowcaseSectionType } from '@/lib/mock-data'

interface DashboardShowcaseProps {
  data: DashboardShowcaseSectionType
}

export function DashboardShowcase({ showcases }: any) {
  return (
    <section id="dashboard" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        {showcases.map((showcase: any, index: number) => (
          <div
            key={showcase.id}
            className={`grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center ${
              index < showcases.length - 1 ? 'mb-32' : ''
            }`}
          >
            <div className={showcase.reverse ? 'order-2 lg:order-1' : ''}>
              {showcase.reverse ? (
                <div className="relative">
                  <div className="rounded-xl bg-muted/50 p-4 ring-1 ring-border">
                    <img
                      src={showcase.image.url || '/placeholder.svg'}
                      alt={showcase.image.alternativeText}
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                    {showcase.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                    {showcase.description}
                  </p>
                  {index === 0 && (
                    <ul className="mt-8 space-y-4">
                      <li className="flex items-start gap-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Real-time campaign performance tracking
                        </span>
                      </li>
                      <li className="flex items-start gap-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Cross-platform analytics integration
                        </span>
                      </li>
                      <li className="flex items-start gap-x-3">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 mt-0.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Advanced ROI measurement tools
                        </span>
                      </li>
                    </ul>
                  )}
                  {index === 1 && (
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-card p-4 border border-border">
                        <div className="text-2xl font-bold text-primary">
                          98%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Targeting Accuracy
                        </div>
                      </div>
                      <div className="rounded-lg bg-card p-4 border border-border">
                        <div className="text-2xl font-bold text-primary">
                          2.5x
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Engagement Boost
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center gap-x-3 p-4 rounded-lg bg-primary/5 border border-primary/20">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                          <span className="text-xs font-bold text-primary-foreground">
                            AI
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            Predictive Campaign Analytics
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Forecast campaign performance and optimize timing
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-3 p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                          <span className="text-xs font-bold text-secondary-foreground">
                            ML
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">
                            Smart Audience Recommendations
                          </div>
                          <div className="text-xs text-muted-foreground">
                            AI-powered targeting suggestions for UMG artists
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            <div
              className={showcase.reverse ? 'order-1 lg:order-2' : 'relative'}
            >
              {showcase.reverse ? (
                <>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                    {showcase.title}
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
                    {showcase.description}
                  </p>
                  {index === 1 && (
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="rounded-lg bg-card p-4 border border-border">
                        <div className="text-2xl font-bold text-primary">
                          98%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Targeting Accuracy
                        </div>
                      </div>
                      <div className="rounded-lg bg-card p-4 border border-border">
                        <div className="text-2xl font-bold text-primary">
                          2.5x
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Engagement Boost
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-xl bg-muted/50 p-4 ring-1 ring-border">
                  <img
                    src={showcase.image.url || '/placeholder.svg'}
                    alt={showcase.image.alternativeText}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
