import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import BookItem from '@components/sessions/BookItem';

interface ListBookProps {
  listBook: IBook[] | undefined;
  isDisplayBooks: boolean;
  onToggleModal: (book: IBook) => void;
}

const ListBook = ({ listBook, isDisplayBooks, onToggleModal }: ListBookProps): JSX.Element => {
  const renderListBook = (): JSX.Element[] | undefined => {
    return listBook?.map((book) => (
      <BookItem
        key={book.id}
        book={book}
        isDisplayBooks={isDisplayBooks}
        toggleModal={onToggleModal}
      />
    ));
  };

  return (
    <div className="book-list-wrapper">
      <ul className="book-list">
        {listBook?.length ? (
          renderListBook()
        ) : (
          <li className="book-item not-found">{BOOKS_MESSAGES.NO_DATA}</li>
        )}
      </ul>
    </div>
  );
};

export default ListBook;
