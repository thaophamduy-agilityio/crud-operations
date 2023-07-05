import { Card } from '@components/common/Card';
import { IBook } from '@interface/book';

interface BookProps {
  book: IBook;
  displayOption: boolean;
  toggleModal: (book: IBook) => void;
}

const BookItem = ({ book, displayOption, toggleModal }: BookProps) => {
  const onToggleModal = () => {
    toggleModal(book);
  };

  return (
    <li className={`book-item ${displayOption ? 'list' : ''}`}>
      <Card loading="lazy" width="200" height="200" book={book} onClick={onToggleModal} />
    </li>
  );
};

export default BookItem;
