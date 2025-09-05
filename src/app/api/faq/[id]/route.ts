import { type NextRequest, NextResponse } from "next/server"
import { mockData } from "@/lib/mock-data"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const faqId = Number.parseInt(params.id)
    const faq = mockData.faqPage.faqs.find((f) => f.id === faqId)

    if (!faq) {
      return NextResponse.json({ error: "FAQ not found" }, { status: 404 })
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json({
      data: faq,
      meta: {
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
