// Libs
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

// Common Components
import { LoadingIndicator } from '@components/common/LoadingIndicator';
import { Button } from '@components/common/Button';
import { Icon } from '@components/common/Icon';
import { Modal } from '@components/common/Modal';

// Session Components
import Header from '@components/Header';
import ListCategory from '@components/ListCategories';
import ListBook from '@components/ListBooks';
import BreadCrumb from '@components/BreadCrumb';
import FilterDisplay from '@components/FilterDisplay';
import FilterSort from '@components/FilterSort';
import { BookDetail } from '@components/BookDetail';

// Interface
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';

// Services
import { getCategories, getBooks } from '@services/api-request';

// Helpers
import { Search } from '@helpers/book';
import { filterBooksByCategoryName, getCategoryWithTotalItem } from '@helpers/category';
import { sortedBookList } from '@helpers/book';

// Hooks
import { useDebounce } from '@hooks/use-debounce';

// Constants
import { TIME_OUT } from '@constants/time-out';

const Home = (): JSX.Element => {
  const [listBooks, setListBooks] = useState<IBook[] | undefined>([]);
  const [listBooksFilter, setListBooksFilter] = useState<IBook[] | undefined>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [valueSearch, setValueSearch] = useState<string>('');
  const [listCategories, setListCategories] = useState<ICategory[] | undefined>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenCategoriesOnMobile, setIsOpenCategoriesOnMobile] = useState<boolean>(false);
  const [isDisplayGrid, setIsDisplayGrid] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState({ isSortByAlphabet: true, isSortByYear: false });
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [bookSelected, setBookSelected] = useState<IBook>({} as IBook);
  const [isChangeDarkTheme, setIsChangeDarkTheme] = useState<boolean>(true);
  const [isThemeModal, setIsThemeModal] = useState<boolean>(true);

  /**
   * Get data from API and set to list books & list books filter
   *
   */
  const fetchBooks = async (): Promise<void> => {
    setIsLoading(true);
    const data = await getBooks();
    setIsLoading(false);

    setListBooks(data);
    setListBooksFilter(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  /**
   * Get categories from API
   */
  const fetchCategories = async (): Promise<void> => {
    const data = await getCategories();
    setListCategories(data);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  /**
   * List books when click category name
   * @param {name} string
   * @returns {list items} books
   */
  const handleFilterBooksByCategoryName = (name: string): void => {
    setSelectedCategory(name);

    // Get list filter books with category name
    const newListByCategory = filterBooksByCategoryName(listBooks, name);

    setListBooksFilter(newListByCategory);
    setIsOpenCategoriesOnMobile(false);
    setIsOpenFilter(false);
  };

  /**
   * Map over two arrays of objects
   * @param {listCategories, listBooks} ICategory[], IBook[]
   * @returns {List categories with total item of category} ICategory[]
   */
  const categoriesFormated = getCategoryWithTotalItem(listCategories, listBooks);

  /**
   * Search product by keyword
   * @param {function} handleSearchChange
   * @returns {list items} list books with keyword search
   */
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setValueSearch(value);
    setSelectedCategory('All Books');
  };

  const valueDebounced: string = useDebounce<string>(valueSearch.trim(), TIME_OUT.DEBOUNCE);

  useEffect(() => {
    const search = Search(listBooks, valueDebounced);
    setListBooksFilter(search);
  }, [listBooks, valueDebounced]);

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
    event.key === 'Escape' && toggleModal();
  };

  // Add event listener for keydown events when the modal is show
  isOpenModal && document.addEventListener('keydown', handleKeyDown);

  // Function to handle toggle the modal theme
  const toggleThemeModal = (): void => {
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
   * Handle toggle show categories on mobile
   * @param {function} toggleCategoriesOnMobile
   */
  const toggleCategoriesOnMobile = (): void => {
    setIsOpenCategoriesOnMobile(!isOpenCategoriesOnMobile);
  };

  /**
   * Handle toggle hide categories on mobile
   * @param {function} handleCloseCategoriesOnMobile
   */
  const handleCloseCategoriesOnMobile = useCallback((): void => {
    setIsOpenCategoriesOnMobile(!isOpenCategoriesOnMobile);
  }, [isOpenCategoriesOnMobile]);

  /**
   * Handle display option is grid or list
   * @param {function} handleDisplayBooks
   */
  const handleDisplayBooks = (): void => {
    setIsDisplayGrid((prev) => !prev);
    setIsOpenFilter(false);
  };

  /**
   * Handle sort option width title or published
   * @param {function} handleSortBooks
   * @returns {list items} list books with sort keys
   */
  const handleSortBooks = (): void => {
    sortedBookList(listBooksFilter, sortOption);
    setSortOption((prev) => {
      return {
        isSortByAlphabet: !prev.isSortByAlphabet,
        isSortByYear: !prev.isSortByYear,
      };
    });
    setIsOpenFilter(false);
  };

  return (
    <div className={`container ${isChangeDarkTheme ? '' : 'dark-theme'}`}>
      <Header
        isOpenCategoriesOnMobile={isOpenCategoriesOnMobile}
        onToggleCategoriesOnMobile={toggleCategoriesOnMobile}
        valueSearch={valueSearch}
        onSearchChange={handleSearchChange}
        isChangeDarkTheme={isChangeDarkTheme}
        onToggleThemePage={toggleThemePage}
      />
      <main className="main-site">
        <aside className="column-sidebar">
          <Icon
            className="icon icon-close-menu"
            aria-label="Icon Close Menu"
            onClick={handleCloseCategoriesOnMobile}
          />
          <div className="book-category-title">Categories</div>
          <div className="book-category-list">A curated list of every book ever written</div>
          <ListCategory
            categoryList={categoriesFormated}
            categorySelected={selectedCategory}
            onSelectCategory={handleFilterBooksByCategoryName}
          />
        </aside>
        <section className="column-content">
          <div className="book-toolbar-wrapper">
            <BreadCrumb selectedCategory={selectedCategory} total={listBooksFilter?.length} />
            <div className={`filter ${isOpenFilter ? 'open' : ''}`}>
              <Button
                className="btn btn-filter"
                aria-label="Filter Button"
                label="Filter"
                onClick={toggleFilter}
              />
              <div className="filter-box">
                <FilterDisplay onDisplayBooks={handleDisplayBooks} isDisplayBooks={isDisplayGrid} />
                <FilterSort onSortBooks={handleSortBooks} sortOption={sortOption} />
              </div>
            </div>
          </div>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <ListBook
              listBook={listBooksFilter}
              isDisplayBooks={isDisplayGrid}
              onToggleModal={toggleModal}
            />
          )}
          <Modal
            isShowModal={isOpenModal}
            onCloseModal={toggleModal}
            onToggleThemeModal={toggleThemeModal}
            isThemeModal={isThemeModal}
            title={bookSelected.title}
          >
            <BookDetail loading="lazy" width={128} book={bookSelected} />
          </Modal>
        </section>
      </main>
    </div>
  );
};

export default Home;
