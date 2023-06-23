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
export const sortedBookList = (listBook: IBook[], { title, published }: sortOption) => {
  if (title) {
    listBook.sort((preBook: IBook, nextBook: IBook) => (nextBook.title > preBook.title ? 1 : -1));
  }

  if (published) {
    listBook.sort((preBook: IBook, nextBook: IBook) =>
      nextBook.published > preBook.published ? 1 : -1
    );
  }

  return listBook;
};

/**
 * Search list book
 * @param {IBook[]} listBook: list books that have not search
 * @param {valueSearch} { keyword }: value search
 * @returns {IBook[]} list books that have been searched
 */
export const Search = (listBooks: IBook[], valueSearch: string) => {
  const result = listBooks.filter(({ title, categoryName }) => {
    const keyword = valueSearch.toLowerCase();
    const isMatchWithTitle = title.toLowerCase().includes(keyword);
    const isMatchWithCategory = categoryName.toLowerCase().includes(keyword);

    return isMatchWithTitle || isMatchWithCategory;
  });

  return result;
};
