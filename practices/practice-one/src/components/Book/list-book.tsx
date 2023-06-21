import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import Book from '.';

interface ListBookProps {
  isDarkTheme: boolean;
  listBook: IBook[];
  display: {
    grid: boolean;
    list: boolean;
  };
  toggleModal: (book: IBook) => void;
}

const ListBook = ({ isDarkTheme, listBook, display, toggleModal }: ListBookProps) => {
  return (
    <div className={`${isDarkTheme ? 'book-list-wrapper' : 'book-list-wrapper dark-theme'}`}>
      <ul className="book-list">
        {listBook.length === 0
          ? BOOKS_MESSAGES.NO_DATA
          : listBook.map((book) => (
              <Book key={book.id} book={book} display={display} toggleModal={toggleModal} />
            ))}
      </ul>
    </div>
  );
};

export default ListBook;
