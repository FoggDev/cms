import { type NextRequest, NextResponse } from "next/server"
import { mockData } from "@/lib/mock-data"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const featureId = Number.parseInt(params.id)
    const feature = mockData.whatsNextPage.features.find((f) => f.id === featureId)

    if (!feature) {
      return NextResponse.json({ error: "Feature not found" }, { status: 404 })
    }

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    return NextResponse.json({
      data: feature,
      meta: {
        timestamp: new Date().toISOString(),
      },
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
