import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import Book from '../Book';

interface ListBookProps {
  listBook: IBook[] | undefined;
  displayOption: boolean;
  toggleModal: (book: IBook) => void;
}

const ListBook = ({ listBook, displayOption, toggleModal }: ListBookProps) => {
  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        {!listBook?.length
          ? BOOKS_MESSAGES.NO_DATA
          : listBook?.map((book) => (
              <Book
                key={book.id}
                book={book}
                displayOption={displayOption}
                toggleModal={toggleModal}
              />
            ))}
      </ul>
    </div>
  );
};

export default ListBook;
