import { BOOKS_MESSAGES } from '@constants/error-messages';
import { IBook } from '@interface/book';
import BookItem from '@components/BookItem';
import { memo } from 'react';

interface ListBookProps {
  listBook: IBook[] | undefined;
  isDisplayBooks: boolean;
  onToggleModal: (book: IBook) => void;
}

const ListBook = ({ listBook, isDisplayBooks, onToggleModal }: ListBookProps): JSX.Element => {
  const renderListBook = (): JSX.Element[] | undefined => {
    return listBook?.map((book) => (
      <BookItem
        width={200}
        key={book.id}
        book={book}
        isDisplayBooks={isDisplayBooks}
        toggleModal={onToggleModal}
      />
    ));
  };

  return (
    <div className="book-list-wrapper">
      {listBook?.length ? (
        <ul className="book-list">{renderListBook()}</ul>
      ) : (
        <p className="book-item not-found">{BOOKS_MESSAGES.NO_DATA}</p>
      )}
    </div>
  );
};

export default memo(ListBook);
