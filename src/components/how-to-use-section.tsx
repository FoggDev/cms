import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Upload, Target, Send, BarChart3 } from "lucide-react"

export function HowToUseSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Assets",
      description:
        "Import your music tracks, artist photos, and campaign materials directly into MIRA's secure platform.",
      details: "Support for all major audio formats, high-res images, and video content",
    },
    {
      icon: Target,
      title: "Define Your Audience",
      description:
        "Use our advanced targeting tools to reach the right fans across demographics, listening habits, and geographic regions.",
      details: "AI-powered audience insights based on Universal Music Group's extensive data",
    },
    {
      icon: Send,
      title: "Launch Campaigns",
      description:
        "Deploy multi-channel marketing campaigns across streaming platforms, social media, and digital channels.",
      details: "Automated scheduling and cross-platform synchronization",
    },
    {
      icon: BarChart3,
      title: "Track Performance",
      description: "Monitor real-time analytics, engagement metrics, and ROI across all your marketing initiatives.",
      details: "Comprehensive reporting with actionable insights and recommendations",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How to Use <span className="text-primary">MIRA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launch successful marketing campaigns for Universal Music Group artists in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-2xl font-bold text-primary/30">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                <p className="text-sm text-primary font-medium">{step.details}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-primary/30" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your First Campaign
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
