"use server";

import { api } from "@/lib/api";

export async function fetchWhatsNext() {
  try {
    const { data } = await api.fetch("/what-is-nexts", {
      cache: "no-store",
    });

    return data;
  } catch (error) {
    console.error("Error fetching Whats Next data:", error);
    return null;
  }
}
