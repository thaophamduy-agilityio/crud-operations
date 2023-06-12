import { IBook } from '../interface/book';

export const handleListByCategory = (listBooks: IBook[], value: string) => {
  switch (value) {
    case 'all':
      return listBooks;
    case 'Adventure':
    case 'Contemporary':
    case 'Romance':
    case 'Fantasy':
    case 'Dystopian':
    case 'Mystery':
    case 'Horror':
    case 'Thriller':
    case 'Paranormal':
    case 'Historical Fi':
    case 'Scifi':
    case 'Memoir':
    case 'Sports':
      return listBooks.filter((item) => item.category?.toLowerCase().includes(value.toLowerCase()));
    default:
      return [];
  }
};
