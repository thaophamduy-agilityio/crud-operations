import axios from 'axios';
import endpoint from '@helpers/endpoints-config';
import { IBook } from '@interface/book';

/**
 * This is method get API from JSON server
 * @param {string} url
 * @returns Array
 */

export const getAPI = async () => {
  const url = `${process.env.API_ENDPOINT}/${endpoint.BooksBaseUrl}`;
  const res = await axios.get<IBook[]>(url);

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
