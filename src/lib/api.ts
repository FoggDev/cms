export const buildPopulateQuery = (populate: Record<string, any>): string => {
  return Object.entries(populate)
    .map(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        return Object.entries(value)
          .map(
            ([subKey, subValue]) =>
              `populate[${subKey}][${
                Array.isArray(subValue) && subValue[0] === '*'
                  ? 'populate'
                  : 'fields'
              }]=${Array.isArray(subValue) ? subValue.join(',') : subValue}`
          )
          .join('&')
      }
      return `populate[${key}]=${value}`
    })
    .join('&')
}

// Update fetch to use buildPopulateQuery
export const api = {
  fetch: async (
    endpoint: string,
    options: RequestInit = {},
    populate: Record<string, any> | null = null
  ) => {
    const apiUrl = process.env.API_URL || 'http://localhost:4000/api'

    if (populate) {
      const populateQuery = buildPopulateQuery(populate)
      endpoint = `${endpoint}?${populateQuery}`
    }

    const url = `${apiUrl}${
      endpoint.startsWith('/') ? endpoint : `/${endpoint}`
    }`

    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await fetch(url, {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`)
    }

    return response.json()
  }
}
