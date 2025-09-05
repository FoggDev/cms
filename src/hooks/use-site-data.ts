"use client";

import { useEffect, useState } from "react";
import type {
  SiteConfig,
  HomePage,
  HowToUsePage,
  FAQPage,
  WhatsNextPage,
} from "@/lib/mock-data";

const fetchFromAPI = async (endpoint: string) => {
  const response = await fetch(`/api/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  const result = await response.json();

  return result.data.attributes;
};

const fetchIndividualEntry = async (endpoint: string, id: number) => {
  const response = await fetch(`/api/${endpoint}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}/${id}`);
  }
  const result = await response.json();
  return result.data;
};

export const useSiteConfig = () => {
  const [data, setData] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const siteConfig = await fetchFromAPI("site-config");
        setData(siteConfig);
      } catch (err) {
        setError("Failed to load site configuration");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

export const useHomePage = () => {
  const [data, setData] = useState<HomePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const homePage = await fetchFromAPI("homepage");

        setData(homePage);
      } catch (err) {
        setError("Failed to load home page data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

export const useHowToUsePage = () => {
  const [data, setData] = useState<HowToUsePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const howToUsePage = await fetchFromAPI("how-to-use");
        setData(howToUsePage);
      } catch (err) {
        setError("Failed to load how-to-use page data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

export const useFAQPage = () => {
  const [data, setData] = useState<FAQPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const faqPageData = await fetchFromAPI("faq");

        // Fetch individual FAQ entries
        const faqPromises = faqPageData.faqIds.map((id: number) =>
          fetchIndividualEntry("faq", id)
        );
        const faqs = await Promise.all(faqPromises);

        const completeFAQPage: FAQPage = {
          id: faqPageData.id || 1,
          title: faqPageData.title,
          subtitle: faqPageData.subtitle,
          description: faqPageData.description,
          faqs: faqs,
        };

        setData(completeFAQPage);
      } catch (err) {
        setError("Failed to load FAQ page data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

export const useWhatsNextPage = () => {
  const [data, setData] = useState<WhatsNextPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const whatsNextPageData = await fetchFromAPI("whats-next");

        // Fetch individual feature entries
        const featurePromises = whatsNextPageData.featureIds.map((id: number) =>
          fetchIndividualEntry("whats-next", id)
        );
        const features = await Promise.all(featurePromises);

        const completeWhatsNextPage: WhatsNextPage = {
          id: whatsNextPageData.id || 1,
          title: whatsNextPageData.title,
          subtitle: whatsNextPageData.subtitle,
          description: whatsNextPageData.description,
          features: features,
        };

        setData(completeWhatsNextPage);
      } catch (err) {
        setError("Failed to load what's next page data");
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};
