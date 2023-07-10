import axios from 'axios';
import endpoint from '@helpers/endpoints-config';
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';

/**
 * This is method get API from JSON server
 * @param {string} url
 * @returns Promise
 */

export const getData = <T>(url: string) => axios.get<T>(url);

export const getListBook = async (): Promise<IBook[] | undefined> => {
  const res = await getData<IBook[]>(`${process.env.API_ENDPOINT}/${endpoint.BooksBaseUrl}`);

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getCategories = async (): Promise<ICategory[] | undefined> => {
  const res = await getData<ICategory[]>(
    `${process.env.API_ENDPOINT}/${endpoint.CategoriesBaseUrl}`
  );

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
