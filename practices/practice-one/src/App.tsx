import Header from '@components/Header';
import { useCallback, useEffect, useState } from 'react';
import { IBook } from './interface/book';
import endpoint from './helpers/endpoints-config';
import axios from 'axios';
import './App.scss';
import { Card } from '@components/Card';

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
                    <li className="book-category-item" key={book.id}>
                      {book.category}
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>
        </aside>
        <section className="column-content">
          <div className="book-filter-wrapper"></div>
          <div className="book-list-wrapper">
            <ul className="book-list">
              {books.length > 0 && (
                <>
                  {books.map((book) => (
                    <li className="book-item" key={book.id}>
                      <Card
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
