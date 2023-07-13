import axios, { AxiosResponse } from 'axios';
import endpoint from '@helpers/endpoints-config';
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';

/**
 * This is method get API from JSON server
 * @param {string} url
 * @returns Promise
 */

export const getData = <T>(url: string): Promise<AxiosResponse<T, string>> => axios.get<T>(url);

export const getBooks = async (): Promise<IBook[] | undefined> => {
  const res = await getData<IBook[]>(`${process.env.VITE_BASE_URL}/${endpoint.BooksBaseUrl}`);

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const getCategories = async (): Promise<ICategory[] | undefined> => {
  const res = await getData<ICategory[]>(
    `${process.env.VITE_BASE_URL}/${endpoint.CategoriesBaseUrl}`
  );

  try {
    return res.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
