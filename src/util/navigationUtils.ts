/**
 * Utility functions for navigation and section handling
 */

/**
 * Extracts the section ID from a hash URL
 * @param url - URL with hash (e.g., "#home")
 * @returns Section ID without hash (e.g., "home")
 */
export const extractSectionId = (url: string): string => {
  return url.replace("#", "");
};

/**
 * Extracts section IDs from an array of URLs
 * @param urls - Array of URLs with hashes
 * @returns Array of section IDs without hashes
 */
export const extractSectionIds = (urls: string[]): string[] => {
  return urls.map(extractSectionId);
};

/**
 * Checks if a URL is a hash link
 * @param url - URL to check
 * @returns True if URL starts with #
 */
export const isHashLink = (url: string): boolean => {
  return url.startsWith("#");
};
