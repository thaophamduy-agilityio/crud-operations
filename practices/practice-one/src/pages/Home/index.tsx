import Header from '@components/sessions/Header';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { IBook } from '@interface/book';
import { ICategory } from '@interface/category';
import { filterBooksByCategoryName, getCategoryWithTotalItem } from '@helpers/category';
import { Search } from '@helpers/book';
import { Button } from '@components/common/Button';
import { sortedBookList } from '@helpers/book';
import { useDebounce } from '@hooks/use-debounce';
import { TIME_OUT } from '@constants/time-out';
import { Modal } from '@components/sessions/Modal';
import { getListBook, getCategories } from '@services/api-request';
import ListCategory from '@components/sessions/ListCategories';
import ListBook from '@components/sessions/ListBooks';
import BreadCrumb from '@components/sessions/BreadCrumb';
import FilterDisplay from '@components/sessions/FilterDisplay';
import FilterSort from '@components/sessions/FilterSort';
import { DetailModal } from '@components/sessions/Modal/DetailModal';

const Home = () => {
  const [listBooks, setListBooks] = useState<IBook[] | undefined>([]);
  const [listBooksFilter, setListBooksFilter] = useState<IBook[] | undefined>([]);
  const [listCategories, setListCategories] = useState<ICategory[] | undefined>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const [isOpenSideBar, setIsOpenSideBar] = useState<boolean>(false);
  const [isDisplayGrid, setIsDisplayGrid] = useState<boolean>(false);
  const [sortOption, setSortOption] = useState({ title: true, published: false });
  const [valueSearch, setValueSearch] = useState<string>('');
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [bookSelected, setBookSelected] = useState<IBook>({} as IBook);
  const [isChangeDarkTheme, setIsChangeDarkTheme] = useState<boolean>(true);
  const [isThemeModal, setIsThemeModal] = useState<boolean>(true);

  /**
   * Get data from API and set to list books & list books filter
   *
   */
  const fetchBooks = async () => {
    const data = await getListBook();
    setListBooks(data);
    setListBooksFilter(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  /**
   * Get categories from API
   */
  const fetchCategory = async () => {
    const data = await getCategories();
    setListCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  /**
   * List books when click category name
   * @param {categoryName} string
   * @returns {list items} books
   */
  const handleFilterBooksByCategoryName = (categoryName: string) => {
    setSelectedCategory(categoryName);

    // Get list filter books with category name
    const newListByCategory = filterBooksByCategoryName(listBooks, categoryName);

    setListBooksFilter(newListByCategory);
    setIsOpenSideBar(false);
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
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    setIsDisplayGrid((prev) => !prev);
    setIsOpenFilter(false);
  };

  /**
   * Handle sort option width title or published
   * @param {function} handleSort
   * @returns {list items} list books with sort keys
   */
  const handleSort = (): void => {
    sortedBookList(listBooksFilter, sortOption);
    setSortOption((prev) => {
      return {
        title: !prev.title,
        published: !prev.published,
      };
    });
    setIsOpenFilter(false);
  };

  return (
    <div className={`${isChangeDarkTheme ? 'container' : 'container dark-theme'}`}>
      <Header
        isOpenSideBar={isOpenSideBar}
        onToggleSideBar={toggleSideBar}
        valueSearch={valueSearch}
        onSearchChange={handleSearchChange}
        isChangeDarkTheme={isChangeDarkTheme}
        onToggleThemePage={toggleThemePage}
      />
      <main className="main-site">
        <aside className="column-sidebar">
          <Button className="btn btn-close-menu" onClick={handleCloseSideBar} />
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
              <Button className="btn btn-filter" label="Filter" onClick={toggleFilter} />
              <div className="filter-box">
                <FilterDisplay onDisplay={handleDisplay} displayOption={isDisplayGrid} />
                <FilterSort onSort={handleSort} sortOption={sortOption} />
              </div>
            </div>
          </div>
          <ListBook
            listBook={listBooksFilter}
            displayOption={isDisplayGrid}
            onToggleModal={toggleModal}
          />
          <Modal
            showModal={isOpenModal}
            closeModal={toggleModal}
            onToggleThemeModal={toggleThemeModal}
            isThemeModal={isThemeModal}
            title={bookSelected.title}
          >
            <DetailModal loading="lazy" width="128" height="170" book={bookSelected} />
          </Modal>
        </section>
      </main>
    </div>
  );
};

export default Home;
