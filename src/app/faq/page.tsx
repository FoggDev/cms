import { NextPage } from 'next'

import { fetchFAQ } from '@/actions/faq'
import { fetchSiteConfig } from '@/actions/site-config'
import { FAQSection } from '@/components/faq-section'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const Page: NextPage = async () => {
  const siteConfig = await fetchSiteConfig()
  const faq = await fetchFAQ()

  return (
    <>
      <Header siteConfig={siteConfig} />
      <main className="min-h-screen bg-background">
        <div className="pt-16">
          <FAQSection faq={faq} />
        </div>
      </main>
      <Footer siteConfig={siteConfig} />
    </>
  )
}

export default Page
