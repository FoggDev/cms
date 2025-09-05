"use server";

import { api } from "@/lib/api";

export async function fetchFAQ() {
  try {
    const { data } = await api.fetch("/faqs", {
      cache: "no-store",
    });

    return data;
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return null;
  }
}
