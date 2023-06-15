import { IBook } from '../interface/book';

interface sortOption {
  title: boolean;
  published: boolean;
}

/**
 * Sort list book by create at
 * @param {IBook[]} listBook: list book that have not been sorted
 * @param {SortAlphabet} { title }:  sort option alphabet
 * @param {SortYear} { published }:  sort option year
 * @returns {IBook[]} list book that have been sorted
 */
export const sortedBooklist = (listBook: IBook[], { title, published }: sortOption) => {
  if (title) {
    listBook.sort((preBook: IBook, nextBook: IBook) => (preBook.title > nextBook.title ? 1 : -1));
  }
  if (published) {
    listBook.sort((preBook: IBook, nextBook: IBook) =>
      preBook.published > nextBook.published ? 1 : -1
    );
  }
  return listBook;
};
