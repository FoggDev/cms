export interface StrapiImage {
  id: number
  url: string
  alternativeText: string
  width: number
  height: number
}

export interface StrapiComponent {
  id: number
  __component: string
}

export interface HeroSection extends StrapiComponent {
  title: string
  subtitle: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  dashboardImage: StrapiImage
  demoVideoId: string
}

export interface FeatureCard {
  id: number
  title: string
  description: string
  icon: string
}

export interface FeaturesSection extends StrapiComponent {
  title: string
  subtitle: string
  features: FeatureCard[]
}

export interface DashboardShowcase {
  id: number
  title: string
  description: string
  image: StrapiImage
  reverse: boolean
}

export interface DashboardShowcaseSection extends StrapiComponent {
  showcases: DashboardShowcase[]
}

export interface CTASection extends StrapiComponent {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
}

export interface NavigationItem {
  id: number
  label: string
  href: string
}

export interface SiteConfig {
  id: number
  siteName: string
  logo: StrapiImage
  navigation: NavigationItem[]
  footer: {
    description: string
    links: NavigationItem[]
    socialLinks: {
      twitter: string
      linkedin: string
      github: string
    }
  }
}

export interface HowToUseStep {
  id: number
  stepNumber: number
  title: string
  description: string
  icon: string
}

export interface VideoTutorial {
  id: number
  title: string
  description: string
  duration: string
  category: string
  thumbnail: StrapiImage
  youtubeVideoId: string
}

export interface HowToUsePage {
  id: number
  title: string
  subtitle: string
  description: string
  steps: HowToUseStep[]
  videoTutorials: {
    title: string
    subtitle: string
    videos: VideoTutorial[]
  }
}

export interface FAQItem {
  id: number
  question: string
  answer: string
}

export interface FAQPage {
  id: number
  title: string
  subtitle: string
  description: string
  faqs: FAQItem[]
}

export interface WhatsNextFeature {
  id: number
  title: string
  description: string
  status: 'coming-soon' | 'in-development' | 'beta'
  icon: string
}

export interface WhatsNextPage {
  id: number
  title: string
  subtitle: string
  description: string
  features: WhatsNextFeature[]
}

export interface HomePage {
  id: number
  hero: HeroSection
  features: FeaturesSection
  dashboardShowcase: DashboardShowcaseSection
  cta: CTASection
}

// Mock Data
export const mockData: any = {
  homePage: {
    id: 1,
    hero: {
      id: 1,
      __component: 'sections.hero',
      title: 'Supercharge your analytics',
      subtitle: 'with MIRA',
      description:
        'Transform your Universal Music Group marketing campaigns with AI-powered insights, real-time analytics, and seamless multi-platform management.',
      primaryButtonText: 'Get Started',
      secondaryButtonText: 'Watch Demo',
      dashboardImage: {
        id: 2,
        url: '/modern-purple-analytics-dashboard-interface.jpg',
        alternativeText: 'MIRA Analytics Dashboard',
        width: 800,
        height: 600
      },
      demoVideoId: 'dQw4w9WgXcQ'
    },
    features: {
      id: 2,
      __component: 'sections.features',
      title: 'Everything you need',
      subtitle: 'Powerful tools for modern marketing',
      features: [
        {
          id: 1,
          title: 'Real-time Analytics',
          description:
            'Monitor campaign performance across all platforms with live data updates and comprehensive metrics.',
          icon: 'BarChart3'
        },
        {
          id: 2,
          title: 'AI-Powered Insights',
          description:
            'Leverage machine learning to optimize targeting, predict trends, and maximize campaign ROI.',
          icon: 'Brain'
        },
        {
          id: 3,
          title: 'Multi-Platform Management',
          description:
            'Manage campaigns across Spotify, Apple Music, YouTube, and social media from one dashboard.',
          icon: 'Globe'
        },
        {
          id: 4,
          title: 'Advanced Targeting',
          description:
            'Reach the right audience with sophisticated demographic and behavioral targeting tools.',
          icon: 'Target'
        },
        {
          id: 5,
          title: 'Automated Workflows',
          description:
            'Streamline repetitive tasks with intelligent automation and custom workflow builders.',
          icon: 'Zap'
        },
        {
          id: 6,
          title: 'Collaborative Tools',
          description:
            'Work seamlessly with your team using shared dashboards, comments, and approval workflows.',
          icon: 'Users'
        }
      ]
    },
    dashboardShowcase: {
      id: 3,
      __component: 'sections.dashboard-showcase',
      showcases: [
        {
          id: 1,
          title: 'Campaign Performance at a Glance',
          description:
            'Get instant insights into your marketing campaigns with our comprehensive analytics dashboard. Track engagement, reach, conversions, and ROI across all platforms in real-time.',
          image: {
            id: 3,
            url: '/campaign-analytics-dashboard-with-charts-and-metri.jpg',
            alternativeText: 'Campaign Analytics Dashboard',
            width: 600,
            height: 400
          },
          reverse: false
        },
        {
          id: 2,
          title: 'Audience Intelligence & Targeting',
          description:
            'Understand your audience like never before with detailed demographic insights, listening habits, and engagement patterns. Create precise targeting strategies that resonate with your fans.',
          image: {
            id: 4,
            url: '/audience-targeting-analytics-dashboard.jpg',
            alternativeText: 'Audience Analytics Interface',
            width: 600,
            height: 400
          },
          reverse: true
        },
        {
          id: 3,
          title: 'Multi-Platform Campaign Management',
          description:
            'Orchestrate campaigns across Spotify, Apple Music, YouTube, Instagram, and TikTok from a single interface. Schedule releases, coordinate promotions, and track performance seamlessly.',
          image: {
            id: 5,
            url: '/multi-platform-campaign-interface.jpg',
            alternativeText: 'Multi-Platform Campaign Interface',
            width: 600,
            height: 400
          },
          reverse: false
        }
      ]
    },
    cta: {
      id: 4,
      __component: 'sections.cta',
      title: 'Ready to transform your marketing?',
      description:
        'Join Universal Music Group teams already using MIRA to drive better campaign results and deeper fan engagement.',
      primaryButtonText: 'Start Free Trial',
      secondaryButtonText: 'Schedule Demo'
    }
  } as HomePage,

  howToUsePage: {
    id: 1,
    title: 'How to Use MIRA',
    subtitle: 'Master your marketing campaigns in 4 simple steps',
    description:
      "Learn how to leverage MIRA's powerful features to create, manage, and optimize your Universal Music Group marketing campaigns.",
    steps: [
      {
        id: 1,
        stepNumber: 1,
        title: 'Connect Your Platforms',
        description:
          'Link your Spotify, Apple Music, YouTube, and social media accounts to MIRA for unified campaign management.',
        icon: 'Link'
      },
      {
        id: 2,
        stepNumber: 2,
        title: 'Create Your Campaign',
        description:
          'Use our intuitive campaign builder to set objectives, define target audiences, and schedule content across platforms.',
        icon: 'PlusCircle'
      },
      {
        id: 3,
        stepNumber: 3,
        title: 'Launch & Monitor',
        description:
          'Deploy your campaigns with one click and track real-time performance metrics through our comprehensive dashboard.',
        icon: 'Rocket'
      },
      {
        id: 4,
        stepNumber: 4,
        title: 'Optimize & Scale',
        description:
          'Use AI-powered insights to refine targeting, adjust budgets, and scale successful campaigns for maximum impact.',
        icon: 'TrendingUp'
      }
    ]
  }
}
