import logo from '@image/book-shelter.svg';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';
import { filterListByCategories } from '@helpers/category';
import { Image } from '@components/Image/index';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import arrow from '@image/arrow-right.svg';
import { sortedBooklist } from '@helpers/sort';
import { BOOKS_MESSAGES } from '@constants/error-messages';
import { useDebounce } from '@hooks/use-debounce';
import { TIME_OUT } from '@constants/time-out';
import { Modal } from '@components/Modal';
import { getAPI, getCategories } from '@services/api-request';

const Book = () => {
  const [listBooks, setListBooks] = useState<IBook[]>([]);
  const [listBooksFilter, setListBooksFilter] = useState<IBook[]>([]);
  const [listCategories, setListCategories] = useState<ICategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const [displayOption, setDisplayOption] = useState({ grid: true, list: false });
  const [sortOption, setSortOption] = useState({ title: true, published: false });
  const [valueSearch, setValueSearch] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [bookSelected, setbookSelected] = useState<IBook>({
    id: '',
    title: '',
    categoryName: '',
    description: '',
    image: '',
    author: '',
    published: '',
    publishers: '',
  });
  const [isThemePage, setIsThemePage] = useState<boolean>(true);

  sortedBooklist(listBooksFilter, sortOption);

  /**
   * Get data from API and set to list books & list books filter
   */
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAPI();
      setListBooks(data);
      setListBooksFilter(data);
    };

    fetchData();
  }, []);

  /**
   * Get categories from API
   */
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getCategories();
      setListCategories(data);
    };

    fetchCategories();
  }, []);

  /**
   * Search product by name
   * @param {categoryName} string
   * @returns {list items} books
   */
  const handleFilterListByCategories = (categoryName: string) => {
    setSelectedCategory(categoryName);

    const newListByCategory = filterListByCategories(listBooks, categoryName);

    setListBooksFilter(newListByCategory);
    setIsOpenSideBar(false);
    setIsOpenFilter(false);

    console.log(newListByCategory);
  };

  /**
   * Search product by keyword
   * @param {function} handleSearchChange
   * @returns {list items} list books with keyword search
   */
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  const valueDebounced: string = useDebounce<string>(valueSearch.trim(), TIME_OUT.DEBOUNCE);

  useEffect(() => {
    const result = listBooks.filter(({ title, categoryName }) => {
      const keyword = valueDebounced.toLowerCase();
      const isMatchWithTitle = title.toLowerCase().includes(keyword);
      const isMatchWithCategory = categoryName.toLowerCase().includes(keyword);

      return isMatchWithTitle || isMatchWithCategory;
    });

    setListBooksFilter(result);
  }, [valueDebounced]);

  /**
   * Handle toggle the modal theme
   * @param {function} toggleThemePage
   */
  const toggleThemePage = (): void => {
    setIsThemePage(!isThemePage);
  };

  /**
   * Handle toggle the modal item
   * @param {function} toggleModal
   */
  const toggleModal = (item?: IBook): void => {
    setIsOpenModal(!isOpenModal);
    item && setbookSelected(item);
  };

  /**
   * Handle toggle show/hide filter box
   * @param {function} toggleFilter
   */
  const toggleFilter = (): void => {
    setIsOpenFilter(!isOpenFilter);
  };

  /**
   * Handle toggle show sidebar
   * @param {function} toggleSideBar
   */
  const toggleSideBar = (): void => {
    setIsOpenSideBar(!isOpenSideBar);
  };

  /**
   * Handle toggle hide sidebar
   * @param {function} handleCloseSideBar
   */
  const handleCloseSideBar = useCallback(() => {
    setIsOpenSideBar(!isOpenSideBar);
  }, [isOpenSideBar]);

  /**
   * Handle display option is grid or list
   * @param {function} handleDisplay
   */
  const handleDisplay = (): void => {
    setDisplayOption((prev) => {
      return {
        grid: !prev.grid,
        list: !prev.list,
      };
    });
    setIsOpenFilter(false);
  };

  /**
   * Handle sort option width title or published
   * @param {function} handleSort
   * @returns {list items} list books with sort keys
   */
  const handleSort = (): void => {
    setSortOption((prev) => {
      return {
        title: !prev.title,
        published: !prev.published,
      };
    });
    setIsOpenFilter(false);
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
          <input
            type="search"
            className="input input-search"
            placeholder="Search books"
            value={valueSearch}
            onChange={handleSearchChange}
          />
          <Button
            className={`${isThemePage ? 'btn btn-sunshine' : 'btn btn-sunshine dark'}`}
            label=""
            onClick={toggleThemePage}
          />
        </section>
      </header>
      <main className="main-site">
        <aside className="column-sidebar">
          <Button className="btn btn-close-menu" label="" onClick={handleCloseSideBar} />
          <div className="book-category-title">Categories</div>
          <div className="book-category-list">A curated list of every book ever written</div>
          <div className="book-category-wrapper">
            <ul className="book-category">
              {listCategories.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.categoryName === selectedCategory
                      ? 'book-category-item selected'
                      : 'book-category-item'
                  }
                  data-id={item.id}
                  onClick={() => handleFilterListByCategories(`${item.categoryName}`)}
                >
                  <span
                    className={[
                      'book-category-shorthand',
                      `book-category-${item.categoryName}`,
                    ].join(' ')}
                  >
                    {JSON.stringify(item.categoryName).slice(1, 3)}
                  </span>
                  {item.categoryName}
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <section className="column-content">
          <div className="book-toolbar-wrapper">
            <div className="book-title">
              <span className="book-title-text">{selectedCategory || 'All Books'}</span>
              <span className="book-title-arrow">
                <Image altText="arrow" height="8" imageSrc={arrow} loading="lazy" width="22" />
              </span>
              <span className="book-title-results">Showing {listBooksFilter.length} Result(s)</span>
            </div>
            <div className={`filter ${isOpenFilter ? 'open' : ''}`}>
              <Button className="btn btn-filter" label="Filter" onClick={toggleFilter} />
              <div className="filter-box">
                <div className="filter-display">
                  <div className="filter-title">Display Options</div>
                  <div className="filter-display-icons">
                    <Button
                      className={`btn btn-display-grid ${displayOption.grid ? 'selected' : ''}`}
                      label=""
                      onClick={handleDisplay}
                      text="Grid"
                    />
                    <Button
                      className={`btn btn-display-list ${displayOption.list ? 'selected' : ''}`}
                      label=""
                      onClick={handleDisplay}
                      text="List"
                    />
                  </div>
                </div>
                <div className="filter-sort">
                  <div className="filter-title">Sort By</div>
                  <div className="filter-sort-icons">
                    <Button
                      className={`btn btn-sort ${sortOption.title ? 'selected' : ''}`}
                      label="Alphabetical Order"
                      onClick={handleSort}
                    />
                    <Button
                      className={`btn btn-sort ${sortOption.published ? 'selected' : ''}`}
                      label="Release Year"
                      onClick={handleSort}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${isThemePage ? 'book-list-wrapper' : 'book-list-wrapper dark-theme'}`}>
            <ul className="book-list">
              {listBooksFilter.length === 0
                ? BOOKS_MESSAGES.NO_DATA
                : listBooksFilter.map((item) => (
                    <li key={item.id} className={`book-item ${displayOption.list ? 'list' : ''}`}>
                      <Card
                        loading="lazy"
                        width="200"
                        height="200"
                        book={item}
                        onClick={() => toggleModal(item)}
                      />
                    </li>
                  ))}
            </ul>
            <Modal
              showModal={isOpenModal}
              closeModal={toggleModal}
              loading="lazy"
              width="128"
              height="170"
              book={bookSelected}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Book;
