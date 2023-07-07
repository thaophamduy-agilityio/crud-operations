import axios from 'axios';

/**
 * This is method get API from JSON server
 * @param {string} url
 * @returns Array
 */

export const getData = async (url: string) => {
  const response = await axios.get(url);
  const res = await response.data;

  try {
    return res;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
