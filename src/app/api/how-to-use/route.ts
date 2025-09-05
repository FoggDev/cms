import { NextResponse } from "next/server"
import { mockData } from "@/lib/mock-data"

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    const howToUseData = {
      data: {
        id: 1,
        attributes: {
          ...mockData.howToUse,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      },
      meta: {},
    }

    return NextResponse.json(howToUseData)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch how-to-use data" }, { status: 500 })
  }
}
