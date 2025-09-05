"use server";

import { api } from "@/lib/api";

export async function fetchVideos() {
  try {
    const { data } = await api.fetch(
      "/videos",
      {
        cache: "no-store",
      },
      {
        populate: {
          thumbnail: ["*"],
        },
      }
    );

    return data;
  } catch (error) {
    console.error("Error fetching videos data:", error);
    return null;
  }
}
