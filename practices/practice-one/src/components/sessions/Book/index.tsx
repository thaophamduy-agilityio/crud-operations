import { Card } from '@components/common/Card';
import { IBook } from '@interface/book';

interface BookProps {
  book: IBook;
  displayOption: boolean;
  toggleModal: (book: IBook) => void;
}

const Book = ({ book, displayOption, toggleModal }: BookProps) => {
  const handleClick = () => {
    toggleModal(book);
  };

  return (
    <li className={`book-item ${displayOption ? 'list' : ''}`}>
      <Card loading="lazy" width="200" height="200" book={book} onClick={handleClick} />
    </li>
  );
};

export default Book;
