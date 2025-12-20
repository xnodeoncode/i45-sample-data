/**
 * Generic data manipulation utilities for working with datasets
 * These methods work with any array data, not just sample data
 */
export class DataHelpers {
  /**
   * Filter items by property value
   * @param dataset - Array to filter
   * @param key - Property key to filter by
   * @param value - Value to match
   * @returns Filtered array
   */
  static filterBy<T>(dataset: T[], key: keyof T, value: any): T[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return dataset.filter((item) => item[key] === value);
  }

  /**
   * Search across multiple string properties
   * @param dataset - Array to search
   * @param query - Search query
   * @param fields - Property keys to search within
   * @returns Items matching the search query
   */
  static search<T extends Record<string, any>>(
    dataset: T[],
    query: string,
    fields: (keyof T)[]
  ): T[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    if (!query || typeof query !== "string") {
      throw new Error("Query must be a non-empty string");
    }
    const lowerQuery = query.toLowerCase();
    return dataset.filter((item) =>
      fields.some((field) => {
        const value = item[field];
        return (
          typeof value === "string" && value.toLowerCase().includes(lowerQuery)
        );
      })
    );
  }

  /**
   * Filter by custom predicate function
   * @param dataset - Array to filter
   * @param predicate - Filter function
   * @returns Filtered array
   */
  static filterWhere<T>(dataset: T[], predicate: (item: T) => boolean): T[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return dataset.filter(predicate);
  }

  /**
   * Group items by property value
   * @param dataset - Array to group
   * @param key - Property key to group by
   * @returns Object with groups
   */
  static groupBy<T>(dataset: T[], key: keyof T): Record<string, T[]> {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return dataset.reduce((groups, item) => {
      const groupKey = String(item[key]);
      if (!groups[groupKey]) groups[groupKey] = [];
      groups[groupKey].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  }

  /**
   * Count items by property value
   * @param dataset - Array to count
   * @param key - Property key to count by
   * @returns Object with counts
   */
  static countBy<T>(dataset: T[], key: keyof T): Record<string, number> {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return dataset.reduce((counts, item) => {
      const countKey = String(item[key]);
      counts[countKey] = (counts[countKey] || 0) + 1;
      return counts;
    }, {} as Record<string, number>);
  }

  /**
   * Sort array by property
   * @param dataset - Array to sort
   * @param key - Property key to sort by
   * @param direction - Sort direction ('asc' or 'desc')
   * @returns New sorted array
   */
  static sortBy<T>(
    dataset: T[],
    key: keyof T,
    direction: "asc" | "desc" = "asc"
  ): T[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return [...dataset].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];
      const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0;
      return direction === "asc" ? comparison : -comparison;
    });
  }

  /**
   * Paginate array data
   * @param dataset - Array to paginate
   * @param page - Page number (1-based)
   * @param pageSize - Items per page
   * @returns Pagination result with metadata
   */
  static paginate<T>(
    dataset: T[],
    page: number,
    pageSize: number
  ): {
    data: T[];
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  } {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    if (page < 1) {
      throw new Error("Page must be at least 1");
    }
    if (pageSize < 1) {
      throw new Error("Page size must be at least 1");
    }

    const total = dataset.length;
    const totalPages = Math.ceil(total / pageSize);
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return {
      data: dataset.slice(start, end),
      page,
      pageSize,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    };
  }

  /**
   * Get unique values for a property
   * @param dataset - Array to extract from
   * @param key - Property key to extract
   * @returns Array of unique values
   */
  static unique<T>(dataset: T[], key: keyof T): any[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return [...new Set(dataset.map((item) => item[key]))];
  }

  /**
   * Pluck specific properties from objects
   * @param dataset - Array to pluck from
   * @param keys - Property keys to extract
   * @returns Array of objects with only specified properties
   */
  static pluck<T, K extends keyof T>(dataset: T[], ...keys: K[]): Pick<T, K>[] {
    if (!Array.isArray(dataset)) {
      throw new Error("Dataset must be an array");
    }
    return dataset.map((item) => {
      const plucked = {} as Pick<T, K>;
      keys.forEach((key) => {
        plucked[key] = item[key];
      });
      return plucked;
    });
  }
}
