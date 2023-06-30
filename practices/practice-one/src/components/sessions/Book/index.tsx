import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import Book from './book';

interface ListBookProps {
  listBook: IBook[] | undefined;
  display: {
    grid: boolean;
    list: boolean;
  };
  toggleModal: (book: IBook) => void;
}

const ListBook = ({ listBook, display, toggleModal }: ListBookProps) => {
  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        {!listBook?.length
          ? BOOKS_MESSAGES.NO_DATA
          : listBook?.map((book) => (
              <Book key={book.id} book={book} display={display} toggleModal={toggleModal} />
            ))}
      </ul>
    </div>
  );
};

export default ListBook;
