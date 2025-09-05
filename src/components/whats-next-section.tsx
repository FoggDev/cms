import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Zap,
  Globe,
  Brain,
  type Icon as LucideIcon,
} from "lucide-react";

const icons = {
  Brain,
  Zap,
  Globe,
  Sparkles,
};

type IconName = keyof typeof icons;

type RoadmapItem = {
  icon?: IconName;
  title: string;
  description: string;
  isRecentUpdate?: boolean;
  whenComes: string;
};

export function WhatsNextSection({ whatsNext }: { whatsNext: RoadmapItem[] }) {
  const upcomingFeatures = (whatsNext ?? [])
    .filter((feature) => feature.isRecentUpdate === false)
    .map((feature) => ({
      icon: feature.icon,
      title: feature.title,
      description: feature.description,
      whenComes: feature.whenComes,
    }));

  const recentUpdates = (whatsNext ?? [])
    .filter((update) => update.isRecentUpdate === true)
    .map((update) => ({
      icon: update.icon,
      title: update.title,
      description: update.description,
      whenComes: update.whenComes,
    }));

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What's Next for <span className="text-primary">MIRA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're constantly evolving to give Universal Music Group the most
            advanced marketing tools in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Upcoming Features */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Sparkles className="w-6 h-6 text-primary mr-3" />
              Upcoming Features
            </h3>
            <div className="space-y-6">
              {upcomingFeatures.map((feature, index) => {
                const Icon = (feature.icon && icons[feature.icon]) || Globe;

                return (
                  <Card
                    key={`${feature.title}-${index}`}
                    className={`border-border/50 ${
                      feature.highlight ? "ring-2 ring-primary/20" : ""
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <CardTitle className="text-lg">
                            {feature.title}
                          </CardTitle>
                        </div>
                        <Badge
                          variant={feature.highlight ? "default" : "secondary"}
                          className="ml-2"
                        >
                          {feature.whenComes}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Recent Updates */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Recent Updates
            </h3>
            <Card className="border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentUpdates.map((update, index) => {
                    const Icon =
                      (update.icon && icons[update.icon]) || Sparkles;
                    return (
                      <div
                        key={`${update.title}-${index}`}
                        className="flex items-start"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <p className="font-medium text-foreground">
                              {update.title}
                            </p>
                            {update.status && (
                              <Badge variant="secondary" className="text-xs">
                                {update.status}
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {update.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Want to influence our roadmap? Share your feedback and
                    feature requests.
                  </p>
                  <Button variant="outline" size="sm">
                    Submit Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="text-lg font-semibold text-foreground mb-2">
                Stay Updated
              </h4>
              <p className="text-muted-foreground mb-4">
                Get notified about new features, updates, and Universal Music
                Group marketing insights.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
