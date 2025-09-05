import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { DashboardShowcase } from "@/components/dashboard-showcase";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { NextPage } from "next";
import { fetchSiteConfig } from "@/actions/site-config";
import { mockData } from "@/lib/mock-data";

const Page: NextPage = async () => {
  const siteConfig = await fetchSiteConfig();
  const showCases = mockData.homePage.dashboardShowcase;

  return (
    <main className="min-h-screen bg-background">
      <Header siteConfig={siteConfig} />
      <HeroSection hero={siteConfig.hero} />
      <FeatureSection data={mockData.homePage.features} />
      <DashboardShowcase showcases={showCases.showcases} />
      <CTASection cta={mockData.homePage.cta} />
      <Footer siteConfig={siteConfig} />
    </main>
  );
};

export default Page;
