import { StrapiResponse, StrapiEntity } from "@/types/strapi";

const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:3000";

class StrapiAPI {
  private baseUrl: string;

  constructor(baseUrl: string = STRAPI_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/api${endpoint}`;

    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(
        `Strapi API error: ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }

  async find<T>(
    contentType: string,
    params?: Record<string, any>
  ): Promise<StrapiResponse<StrapiEntity<T>[]>> {
    const searchParams = new URLSearchParams(params);
    const endpoint = `/${contentType}?${searchParams.toString()}`;
    return this.request<StrapiResponse<StrapiEntity<T>[]>>(endpoint);
  }

  async findOne<T>(
    contentType: string,
    id: string | number,
    params?: Record<string, any>
  ): Promise<StrapiResponse<StrapiEntity<T>>> {
    const searchParams = new URLSearchParams(params);
    const endpoint = `/${contentType}/${id}?${searchParams.toString()}`;
    return this.request<StrapiResponse<StrapiEntity<T>>>(endpoint);
  }

  async create<T>(
    contentType: string,
    data: Partial<T>
  ): Promise<StrapiResponse<StrapiEntity<T>>> {
    return this.request<StrapiResponse<StrapiEntity<T>>>(`/${contentType}`, {
      method: "POST",
      body: JSON.stringify({ data }),
    });
  }

  async update<T>(
    contentType: string,
    id: string | number,
    data: Partial<T>
  ): Promise<StrapiResponse<StrapiEntity<T>>> {
    return this.request<StrapiResponse<StrapiEntity<T>>>(
      `/${contentType}/${id}`,
      {
        method: "PUT",
        body: JSON.stringify({ data }),
      }
    );
  }

  async delete(
    contentType: string,
    id: string | number
  ): Promise<StrapiResponse<StrapiEntity>> {
    return this.request<StrapiResponse<StrapiEntity>>(`/${contentType}/${id}`, {
      method: "DELETE",
    });
  }
}

export const strapi = new StrapiAPI();
