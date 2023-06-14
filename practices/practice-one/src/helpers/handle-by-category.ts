import { IBook } from '../interface/book';
import { CATEGORIES } from '@constants/categories';

export const handleListByCategory = (listBooks: IBook[], value?: string) => {
  switch (value) {
    case CATEGORIES.ALL_BOOKS:
      return listBooks;
    case CATEGORIES.ADVENTURE:
    case CATEGORIES.CONTEMPORARY:
    case CATEGORIES.ROMANCE:
    case CATEGORIES.FANTASY:
    case CATEGORIES.DYSTOPIAN:
    case CATEGORIES.MYSTERY:
    case CATEGORIES.HORROR:
    case CATEGORIES.THRILLER:
    case CATEGORIES.PARANORMAL:
    case CATEGORIES.HISTORICAL_FI:
    case CATEGORIES.SCIFI:
    case CATEGORIES.MEMOIR:
    case CATEGORIES.SPORTS:
      return listBooks.filter((item) => item.category?.toLowerCase().includes(value.toLowerCase()));
    default:
      return [];
  }
};
