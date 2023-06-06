import { FC, useEffect, useState } from 'react';
import { IBook } from '../../interface/book';
import endpoint from '../../helpers/endpoints-config';
import { APIRequest } from '../../services';
import { ERROR_MESSAGES } from '@constants/error-messages';
import clsx from 'clsx';

const Main: FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [isBookModal, setIsBookModal] = useState<boolean>(false);
  const [isOpenMenuSideBar, setIsOpenMenuSideBar] = useState<boolean>(false);

  // Classes
  const classes = clsx('column-sidebar', { 'column-sidebar-open': isOpenMenuSideBar });

  useEffect(() => {
    const fetchBook = async (): Promise<void> => {
      try {
        const listBlogServer = await APIRequest.getAPI(
          `${import.meta.env.API_ENDPOINT}/${endpoint.BooksBaseUrl}`
        );
        setBooks(listBlogServer);
      } catch (error) {
        throw new Error(ERROR_MESSAGES.NOT_FOUND);
      }
    };

    fetchBook();
  }, []);

  return (
    <main className="main-site">
      <aside className="column-sidebar">List categories</aside>
      <section className="column-content">{books.length > 0 && <>List books</>}</section>
    </main>
  );
};

export default Main;
