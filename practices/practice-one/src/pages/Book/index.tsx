import logo from '@image/book-shelter.svg';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';
import { filterListByCategories } from '@helpers/category';
import { Search } from '@helpers/search';
import { Image } from '@components/Image/index';
import { Button } from '@components/Button';
import arrow from '@image/arrow-right.svg';
import { sortedBooklist } from '@helpers/sort';
import { useDebounce } from '@hooks/use-debounce';
import { TIME_OUT } from '@constants/time-out';
import { Modal } from '@components/Modal';
import { getListBook, getCategories } from '@services/api-request';
import ListCategory from '@components/Category/list-category';
import { Input } from '@components/Input';
import ListBook from '@components/Book/list-book';

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
  const [bookSelected, setBookSelected] = useState<IBook>({
    id: '',
    title: '',
    categoryName: '',
    description: '',
    image: '',
    author: '',
    published: '',
    publishers: '',
  });
  const [isChangeDarkTheme, setIsChangeDarkTheme] = useState<boolean>(true);
  const [isThemeModal, setIsThemeModal] = useState<boolean>(true);

  sortedBooklist(listBooksFilter, sortOption);

  /**
   * Get data from API and set to list books & list books filter
   */
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListBook();
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
   * List books when click category name
   * @param {categoryName} string
   * @returns {list items} books
   */
  const handleFilterListByCategories = (categoryName: string) => {
    setSelectedCategory(categoryName);

    // Get list filter books with category name
    const newListByCategory = filterListByCategories(listBooks, categoryName);

    setListBooksFilter(newListByCategory);
    setIsOpenSideBar(false);
    setIsOpenFilter(false);
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
    setListBooksFilter(Search({ listBooks, valueSearch }));
  }, [valueDebounced]);

  /**
   * Handle toggle the modal theme
   * @param {function} toggleThemePage
   */
  const toggleThemePage = (): void => {
    setIsChangeDarkTheme(!isChangeDarkTheme);
  };

  /**
   * Handle toggle the modal item
   * @param {function} toggleModal
   */
  const toggleModal = (item?: IBook): void => {
    setIsOpenModal(!isOpenModal);
    item && setBookSelected(item);
    document.removeEventListener('keydown', handleKeyDown);
  };

  // Function to handle keydown events
  const handleKeyDown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      toggleModal();
    }
  };

  // Add event listener for keydown events when the modal is show
  if (isOpenModal) {
    document.addEventListener('keydown', handleKeyDown);
  }

  // Function to handle toggle the modal theme
  const toggleThemeModal = () => {
    setIsThemeModal(!isThemeModal);
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
          <Input
            type="search"
            className="input input-search"
            placeholder="Search books"
            value={valueSearch}
            onChange={handleSearchChange}
          />
          <Button
            className={`${isChangeDarkTheme ? 'btn btn-sunshine' : 'btn btn-sunshine dark'}`}
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
          <ListCategory
            categoryList={listCategories}
            categorySelected={selectedCategory}
            handleSelectCategory={handleFilterListByCategories}
          />
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
          <ListBook
            isDarkTheme={isChangeDarkTheme}
            listBook={listBooksFilter}
            display={displayOption}
            toggleModal={toggleModal}
          />
          <Modal
            showModal={isOpenModal}
            closeModal={toggleModal}
            toggleThemeModal={toggleThemeModal}
            isThemeModal={isThemeModal}
            loading="lazy"
            width="128"
            height="170"
            book={bookSelected}
          />
        </section>
      </main>
    </div>
  );
};

export default Book;
