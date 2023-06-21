import { IBook } from '@interface/book';

interface SearchProps {
  listBooks: IBook[];
  valueSearch: string;
}

export const Search = ({ listBooks, valueSearch }: SearchProps) => {
  const result = listBooks.filter(({ title, categoryName }) => {
    const keyword = valueSearch.toLowerCase();
    const isMatchWithTitle = title.toLowerCase().includes(keyword);
    const isMatchWithCategory = categoryName.toLowerCase().includes(keyword);

    return isMatchWithTitle || isMatchWithCategory;
  });

  return result;
};
