import { NextResponse } from "next/server"
import { mockData } from "@/lib/mock-data"

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    const whatsNextData = {
      data: {
        id: 1,
        attributes: {
          title: mockData.whatsNextPage.title,
          subtitle: mockData.whatsNextPage.subtitle,
          description: mockData.whatsNextPage.description,
          featureIds: mockData.whatsNextPage.features.map((feature) => feature.id),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
      meta: {
        totalFeatures: mockData.whatsNextPage.features.length,
      },
    }

    return NextResponse.json(whatsNextData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch whats-next data" }, { status: 500 })
  }
}
