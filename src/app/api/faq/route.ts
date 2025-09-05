import { NextResponse } from "next/server"
import { mockData } from "@/lib/mock-data"

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    const faqData = {
      data: {
        id: 1,
        attributes: {
          title: mockData.faqPage.title,
          subtitle: mockData.faqPage.subtitle,
          description: mockData.faqPage.description,
          faqIds: mockData.faqPage.faqs.map((faq) => faq.id),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
      meta: {
        totalFaqs: mockData.faqPage.faqs.length,
      },
    }

    return NextResponse.json(faqData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch FAQ data" }, { status: 500 })
  }
}
