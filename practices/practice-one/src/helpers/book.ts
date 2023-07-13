import { IBook } from '@interface/book';

interface sortOption {
  isSortByAlphabet: boolean;
  isSortByYear: boolean;
}

/**
 * Sort list book by create at
 * @param {IBook[]} listBook: list book that have not been sorted
 * @param {SortAlphabet} { title }:  sort option alphabet
 * @param {SortYear} { published }:  sort option year
 * @returns {IBook[]} list book that have been sorted
 */
export const sortedBookList = (
  listBook: IBook[] | undefined,
  { isSortByAlphabet, isSortByYear }: sortOption
): IBook[] | undefined => {
  if (isSortByAlphabet) {
    listBook?.sort((preBook: IBook, nextBook: IBook) => (nextBook.title > preBook.title ? 1 : -1));
  }

  if (isSortByYear) {
    listBook?.sort((preBook: IBook, nextBook: IBook) =>
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
export const Search = (
  listBooks: IBook[] | undefined,
  valueSearch: string
): IBook[] | undefined => {
  const result = listBooks?.filter(({ title, category }) => {
    const keyword = valueSearch.toLowerCase();
    const isMatchWithTitle = title.toLowerCase().includes(keyword);
    const isMatchWithCategory = category.toLowerCase().includes(keyword);

    return isMatchWithTitle || isMatchWithCategory;
  });

  return result;
};
