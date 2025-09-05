import { NextPage } from 'next'

import { fetchSiteConfig } from '@/actions/site-config'
import { fetchVideos } from '@/actions/videos'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { HowToUseSection } from '@/components/how-to-use-section'
import { VideoTutorialsSection } from '@/components/video-tutorials-section'

const Page: NextPage = async () => {
  const siteConfig = await fetchSiteConfig()
  const videos = await fetchVideos()

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
  )
}

export default Page
