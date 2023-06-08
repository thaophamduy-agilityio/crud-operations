import './App.scss';
import Header from '@components/Header';
import { useCallback, useEffect, useState } from 'react';
import { IBook } from './interface/book';
import endpoint from './helpers/endpoints-config';
import axios from 'axios';
import { Image } from '@components/Image/index';
import { Card } from '@components/Card';
import { Button } from '@components/Button';
import arrow from '@image/arrow-right.svg';

const App = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await axios.get<IBook[]>(
        `${process.env.API_ENDPOINT}/${endpoint.BooksBaseUrl}`
      );
      setBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <main className="main-site">
        <aside className="column-sidebar">
          <div className="book-category-title">Categories</div>
          <div className="book-category-list">A curated list of every book ever written</div>
          <div className="book-category-wrapper">
            <ul className="book-category">
              {books.length > 0 && (
                <>
                  {books.map((book) => (
                    <li className="book-category-item" key={book.category}>
                      <span
                        className={[
                          'book-category-shorthand',
                          `book-category-${book.category}`,
                        ].join(' ')}
                      >
                        {JSON.stringify(book.category).slice(1, 3)}
                      </span>
                      {book.category}
                    </li>
                  ))}
                </>
              )}
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
              {books.length > 0 && (
                <>
                  {books.map((book) => (
                    <li className="book-item" key={book.id}>
                      <Card
                        loading="lazy"
                        width="200"
                        height="200"
                        book={book}
                        onClick={() => {
                          /* Handle pop up action */
                        }}
                      />
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
