import './App.scss';
import logo from '@image/book-shelter.svg';
import sunshine from '@image/sunshine.svg';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IBook } from '@interface/book';
import endpoint from '@helpers/endpoints-config';
import { filterListByCategory } from '@helpers/filter-categories';
import axios from 'axios';
import { Image } from '@components/Image/index';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { CategoryProps, categoryList } from '@constants/list-categories';
import arrow from '@image/arrow-right.svg';
import { sortedBooklist } from '@helpers/sort-book';
import { BOOKS_MESSAGES } from '@constants/error-messages';
import { useDebounce } from './hooks/use-debounce';
import { TIME_OUT } from '@constants/time-out';

const App = () => {
  const [listBooks, setListBooks] = useState<IBook[]>([]);
  const [listBooksFilter, setListBooksFilter] = useState<IBook[]>([]);
  const [listCategory, setListCategory] = useState(categoryList);
  const [listBooksDebounce, setListBooksDebounce] = useState<IBook[]>([]);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const [isDisplayGrid, setIsDisplayGrid] = useState<boolean>(false);
  const [isDisplayList, setIsDisplayList] = useState<boolean>(false);
  const [isSortAlphabet, setIsSortAlphabet] = useState({ title: false });
  const [isSortYear, setIsSortYear] = useState({ published: false });
  const [valueSearch, setValueSearch] = useState<string>('');

  const valueDebounced: string = useDebounce<string>(valueSearch.trim(), TIME_OUT.DEBOUNCE);

  sortedBooklist(listBooksFilter, isSortAlphabet, isSortYear);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<IBook[]>(
          `${process.env.API_ENDPOINT}/${endpoint.BooksBaseUrl}`
        );
        setListBooks(data);
        setListBooksFilter(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  useEffect(() => {
    const result = listBooksFilter.filter(({ title, category }) => {
      const keyword = valueDebounced.toLowerCase();
      const isMatchWithTitle = title?.toLowerCase().includes(keyword);
      const isMatchWithCategory = category.toLowerCase().includes(keyword);

      return isMatchWithTitle || isMatchWithCategory;
    });

    setListBooksDebounce(result);
  }, [valueDebounced]);

  const toggleFilter = (): void => {
    setIsOpenFilter(!isOpenFilter);
  };

  const toggleSideBar = (): void => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  const handleCloseSideBar = useCallback(() => {
    setIsOpenSideBar(!isOpenSideBar);
  }, [isOpenSideBar]);

  const handleDisplayGrid = (): void => {
    setIsDisplayGrid(true);
    setIsDisplayList(false);
    setIsOpenFilter(false);
  };

  const handleDisplayList = (): void => {
    setIsDisplayList(true);
    setIsDisplayGrid(false);
    setIsOpenFilter(false);
  };

  const handleSortAlphabet = () => {
    setIsSortAlphabet({ title: true });
    setIsSortYear({ published: false });
    setIsOpenFilter(false);
  };

  const handleSortYear = () => {
    setIsSortAlphabet({ title: false });
    setIsSortYear({ published: true });
    setIsOpenFilter(false);
  };

  const handleCategoryListBook = (item: CategoryProps) => {
    const index = categoryList.findIndex((category) => category.id === item.id);
    const updateCategories = categoryList[index].category;
    categoryList[index].isFilter = true;

    const newListByCategory = filterListByCategory(listBooks, `${updateCategories}`);

    setListBooksFilter(newListByCategory);
    setIsOpenSideBar(false);
    setIsOpenFilter(false);

    console.log(updateCategories);
  };

  return (
    <div className="container">
      <header className={`header-site ${isOpenSideBar ? 'open' : ''}`}>
        <section className="header-left">
          <span className="header-toogle">
            <Button className="btn btn-hamburger" label="" onClick={toggleSideBar} />
          </span>
          <a className="header-logo" href="./" title="Book Shelter">
            <Image
              altText="Book Shelter"
              height="44"
              imageSrc={logo}
              loading="lazy"
              width="54"
              text="BookShelter"
            />
          </a>
        </section>
        <section className="header-right">
          {/* <Input className="input input-search" placeholder="Search books" type="text" value="" /> */}
          <input
            type="search"
            className="input input-search"
            placeholder="Search books"
            value={valueSearch}
            onChange={handleSearchChange}
          />
          <Image altText="Sunshine" height="23" imageSrc={sunshine} loading="lazy" width="23" />
        </section>
      </header>
      <main className="main-site">
        <aside className="column-sidebar">
          <Button className="btn btn-close" label="" onClick={handleCloseSideBar} />
          <div className="book-category-title">Categories</div>
          <div className="book-category-list">A curated list of every book ever written</div>
          <div className="book-category-wrapper">
            <ul className="book-category">
              {categoryList.map((item) => (
                <li
                  key={item.id}
                  className={item.isFilter ? 'book-category-item selected' : 'book-category-item'}
                  data-id={item.id}
                  onClick={() => handleCategoryListBook(item)}
                >
                  <span
                    className={['book-category-shorthand', `book-category-${item.category}`].join(
                      ' '
                    )}
                  >
                    {JSON.stringify(item.category).slice(1, 3)}
                  </span>
                  {item.category}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <section className="column-content">
          <div className="book-toolbar-wrapper">
            <div className="book-title">
              <span className="book-title-text">Romance</span>
              <span className="book-title-arrow">
                <Image altText="arrow" height="8" imageSrc={arrow} loading="lazy" width="22" />
              </span>
              <span className="book-title-results">Showing 18 Result(s)</span>
            </div>
            <div className={`filter ${isOpenFilter ? 'open' : ''}`}>
              <Button className="btn btn-filter" label="Filter" onClick={toggleFilter} />
              <div className="filter-box">
                <div className="filter-display">
                  <div className="filter-title">Display Options</div>
                  <div className="filter-display-icons">
                    <Button
                      className={`btn btn-display-grid ${isDisplayGrid ? 'selected' : ''}`}
                      label=""
                      onClick={handleDisplayGrid}
                      text="Grid"
                    />
                    <Button
                      className={`btn btn-display-list ${isDisplayList ? 'selected' : ''}`}
                      label=""
                      onClick={handleDisplayList}
                      text="List"
                    />
                  </div>
                </div>
                <div className="filter-sort">
                  <div className="filter-title">Sort By</div>
                  <div className="filter-sort-icons">
                    <Button
                      className={`btn btn-sort ${isSortAlphabet.title ? 'selected' : ''}`}
                      label="Alphabetical Order"
                      onClick={handleSortAlphabet}
                    />
                    <Button
                      className={`btn btn-sort ${isSortYear.published ? 'selected' : ''}`}
                      label="Release Year"
                      onClick={handleSortYear}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="book-list-wrapper">
            <ul className="book-list">
              {(valueDebounced.length > 0 && listBooksDebounce.length <= 0) ||
              listBooksFilter.length === 0
                ? BOOKS_MESSAGES.NO_DATA
                : valueDebounced.length > 0 && listBooksDebounce.length > 0
                ? listBooksDebounce.map((item) => (
                    <li key={item.id} className={`book-item ${isDisplayList ? 'list' : ''}`}>
                      <Card
                        loading="lazy"
                        width="200"
                        height="200"
                        book={item}
                        onClick={() => {
                          ('');
                        }}
                      />
                    </li>
                  ))
                : listBooksFilter.map((item) => (
                    <li key={item.id} className={`book-item ${isDisplayList ? 'list' : ''}`}>
                      <Card
                        loading="lazy"
                        width="200"
                        height="200"
                        book={item}
                        onClick={() => {
                          ('');
                        }}
                      />
                    </li>
                  ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
