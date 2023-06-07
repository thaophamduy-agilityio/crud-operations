import { FC, useCallback, useEffect, useState } from 'react';
import { IBook } from '../../interface/book';
import endpoint from '../../helpers/endpoints-config';
import axios from 'axios';

const Main: FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    fetchData();
  });

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
    <main className="main-site">
      <aside className="column-sidebar">List categories</aside>
      <section className="column-content">
        {books.length > 0 && <>List books: {books.length} </>}
      </section>
    </main>
  );
};

export default Main;
