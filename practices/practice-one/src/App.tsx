import './App.scss';
import Header from '@components/Header';
import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import { IBook } from './interface/book';
import endpoint from './helpers/endpoints-config';
import { handleListByCategory } from './helpers/handle-by-category';
import axios from 'axios';
import { Image } from '@components/Image/index';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import { buttonCategory } from '@components/Category';
import arrow from '@image/arrow-right.svg';
import { useDebounce } from '@components/Search/use-debounce';

const App = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [listDebounce, setListDebounce] = useState<IBook[]>([]);
  const [listByCategory, setListByCategory] = useState<IBook[]>([]);
  const [valueSearch, setValueSearch] = useState<string>('');

  const valueDebounced = useDebounce<string>(valueSearch.trim(), 800);
  const max = books.reduce((acc, book) => (acc = acc > book.id ? acc : book.id), 0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get<IBook[]>(
        `${process.env.API_ENDPOINT}/${endpoint.BooksBaseUrl}`
      );
      setBooks(data);
      setListByCategory(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  const handleCategoryBook = (e: SyntheticEvent, valueFilter: string) => {
    const target = e.target as Element;
    const allFilter = target.closest('ul')?.querySelectorAll('.book-category-item');

    allFilter?.forEach((filter) => {
      const dataId = filter.getAttribute('data-id');
      const valueElement = filter.innerHTML;

      if (dataId === valueFilter) {
        filter.classList.add('selected');

        const newListByCategory = handleListByCategory(listByCategory, valueElement);
        console.log(newListByCategory);
        setListByCategory(newListByCategory);
      } else {
        filter.classList.remove('selected');
      }
    });
  };

  return (
    <div className="container">
      <Header />
      <main className="main-site">
        <aside className="column-sidebar">
          <div className="book-category-title">Categories</div>
          <div className="book-category-list">A curated list of every book ever written</div>
          <div className="book-category-wrapper">
            <ul className="book-category">
              {buttonCategory.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.category === 'Adventure'
                      ? 'book-category-item selected'
                      : 'book-category-item'
                  }
                  data-id={item.id}
                  onClick={(e) => handleCategoryBook(e, `${item.id}`)}
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
            <div className="filter">
              <Button
                className="btn btn-filter"
                label="Filter"
                onClick={() => {
                  ('');
                }}
              />
              <div className="filter-box">
                <div className="filter-display">
                  <div className="filter-title">Display Options</div>
                  <div className="filter-display-icons">
                    <Button
                      className="btn btn-display-grid selected"
                      label=""
                      onClick={() => {
                        ('');
                      }}
                      text="Grid"
                    />
                    <Button
                      className="btn btn-display-list"
                      label=""
                      onClick={() => {
                        ('');
                      }}
                      text="List"
                    />
                  </div>
                </div>
                <div className="filter-sort">
                  <div className="filter-title">Sort By</div>
                  <div className="filter-sort-icons">
                    <Button
                      className="btn btn-sort selected"
                      label="Alphabetical Order"
                      onClick={() => {
                        ('');
                      }}
                    />
                    <Button
                      className="btn btn-sort"
                      label="Release Year"
                      onClick={() => {
                        ('');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="book-list-wrapper">
            <ul className="book-list">
              {valueDebounced.length > 0 && listDebounce.length > 0
                ? listDebounce.map((item) => (
                    <li className="book-item" key={item.id}>
                      <Card
                        loading="lazy"
                        width="200"
                        height="200"
                        book={item}
                        onClick={() => {
                          /* Handle pop up action */
                        }}
                      />
                    </li>
                  ))
                : (valueDebounced.length > 0 && listDebounce.length <= 0) ||
                  listByCategory.length === 0
                ? 'Not found data!'
                : listByCategory.map((item) => (
                    <li className="book-item" key={item.id}>
                      <Card
                        loading="lazy"
                        width="200"
                        height="200"
                        book={item}
                        onClick={() => {
                          /* Handle pop up action */
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
