import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Users, Zap, Shield, Globe, Smartphone, Brain, Target } from "lucide-react"
import type { FeaturesSection as FeaturesSectionType } from "@/lib/mock-data"

const iconMap = {
  BarChart3,
  Users,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Brain,
  Target,
}

interface FeatureSectionProps {
  data: FeaturesSectionType
}

export function FeatureSection({ data }: FeatureSectionProps) {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{data.title}</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{data.subtitle}</p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data.features.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || BarChart3

            return (
              <Card key={feature.id} className="border-border bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground">{feature.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
