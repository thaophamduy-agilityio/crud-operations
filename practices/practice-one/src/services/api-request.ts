import { ERROR_MESSAGES } from '@constants/error-messages';

/**
 * This is method get API from JSON server
 * @param {string} url
 * @returns Array
 */
export const getAPI = async (url: string) => {
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  }

  throw new Error(ERROR_MESSAGES.NOT_FOUND);
};
