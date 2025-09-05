import { NextPage } from 'next'

import { fetchSiteConfig } from '@/actions/site-config'
import { fetchWhatsNext } from '@/actions/what-is-next'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { WhatsNextSection } from '@/components/whats-next-section'

const Page: NextPage = async () => {
  const siteConfig = await fetchSiteConfig()
  const whatsNext = await fetchWhatsNext()

  if (!whatsNext) {
    return <div>No updates found</div>
  }

  if (!siteConfig) {
    return <div>No site config found</div>
  }

  return (
    <>
      <Header siteConfig={siteConfig} />
      <main className="min-h-screen bg-background">
        <div className="pt-16">
          <WhatsNextSection whatsNext={whatsNext} />
        </div>
      </main>
      <Footer siteConfig={siteConfig} />
    </>
  )
}

export default Page
