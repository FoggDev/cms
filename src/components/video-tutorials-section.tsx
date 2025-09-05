"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";
import { VideoModal } from "./video-modal";
import { VideoTutorial } from "@/lib/mock-data";

export function VideoTutorialsSection({ videos }: { videos: VideoTutorial[] }) {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const tutorials = videos ?? [];

  const handleVideoClick = (tutorial: (typeof tutorials)[0]) => {
    setSelectedVideo({ id: tutorial.youtubeVideoId, title: tutorial.title });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Video <span className="text-primary">Tutorials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master MIRA with our comprehensive video guides designed
            specifically for Universal Music Group campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tutorials.map((tutorial, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-border/50 overflow-hidden"
              onClick={() => handleVideoClick(tutorial)}
            >
              <div className="relative">
                <img
                  src={
                    `http://localhost:4000${tutorial.thumbnail.url}` ||
                    "/placeholder.svg"
                  }
                  alt={tutorial.thumbnail.alternativeText}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-white px-2 py-1 rounded text-sm font-medium">
                    {tutorial.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tutorial.duration}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {tutorial.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {tutorial.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoId={selectedVideo?.id || ""}
        title={selectedVideo?.title || ""}
      />
    </section>
  );
}
