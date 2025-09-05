import { NextResponse } from "next/server";
import { mockData } from "@/lib/mock-data";
import { api } from "@/lib/api";

export async function GET() {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 50));

    const siteConfigData = await api.fetch(
      "/configurations",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
      {
        populate: {
          navigations: {
            populate: "*",
          },
          footerNavigation: {
            populate: "*",
          },
          socialNavigation: {
            populate: "*",
          },
        },
      }
    );

    return NextResponse.json(siteConfigData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch site config" },
      { status: 500 }
    );
  }
}
