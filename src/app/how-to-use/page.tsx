import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HowToUseSection } from "@/components/how-to-use-section";
import { VideoTutorialsSection } from "@/components/video-tutorials-section";
import { fetchSiteConfig } from "@/actions/site-config";
import { NextPage } from "next";

import { fetchVideos } from "@/actions/videos";

const Page: NextPage = async () => {
  const siteConfig = await fetchSiteConfig();
  const videos = await fetchVideos();

  return (
    <>
      <Header siteConfig={siteConfig} />
      <main className="min-h-screen bg-background">
        <div className="pt-16">
          <HowToUseSection />
          <VideoTutorialsSection videos={videos} />
        </div>
      </main>
      <Footer siteConfig={siteConfig} />
    </>
  );
};

export default Page;
