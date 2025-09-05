"use server";

import { api } from "@/lib/api";

export async function fetchSiteConfig() {
  try {
    const { data } = await api.fetch(
      "/configurations",
      {
        cache: "no-store",
      },
      {
        populate: {
          navigations: ["label", "url"],
          footerNavigation: ["label", "url"],
          socialNavigation: ["label", "url"],
          hero: ["*"],
        },
      }
    );

    let response = null;

    if (data) {
      response = data[0];
    }

    return response;
  } catch (error) {
    console.error("Error fetching homepage data:", error);
    return null;
  }
}
