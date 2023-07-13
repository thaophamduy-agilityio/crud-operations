import { Card } from '@components/common/Card';
import { IBook } from '@interface/book';

interface BookProps {
  book: IBook;
  isDisplayBooks: boolean;
  toggleModal: (book: IBook) => void;
}

const BookItem = ({ book, isDisplayBooks, toggleModal }: BookProps): JSX.Element => {
  const onToggleModal = (): void => {
    toggleModal(book);
  };

  return (
    <li className={`book-item ${isDisplayBooks ? 'list' : ''}`}>
      <Card loading="lazy" width="200" height="200" book={book} onClick={onToggleModal} />
    </li>
  );
};

export default BookItem;
