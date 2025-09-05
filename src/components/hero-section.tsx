"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";

export function HeroSection({ hero }: any) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-background py-20 sm:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
              {hero.title}{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {hero.subtitle}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty max-w-2xl mx-auto">
              {hero.description}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {hero.primaryButtonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border bg-transparent hover:bg-primary hover:text-primary-foreground hover:border-primary"
                onClick={() => setIsDemoModalOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                {hero.secondaryButtonText}
              </Button>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          <div className="mt-16 flow-root sm:mt-24">
            <div className="relative -m-2 rounded-xl bg-muted/50 p-2 ring-1 ring-border lg:-m-4 lg:rounded-2xl lg:p-4">
              <div className="rounded-md bg-card shadow-2xl ring-1 ring-border overflow-hidden">
                <img
                  src={
                    `http://localhost:4000${hero.heroImage.url}` ||
                    "/placeholder.svg"
                  }
                  alt={hero.heroImage.alternativeText}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        videoId={hero.videoId}
        title="MIRA Platform Demo"
      />
    </>
  );
}
