import { Card } from '@components/Card';
import { IBook } from '@interface/book';

interface BookProps {
  book: IBook;
  display: {
    grid: boolean;
    list: boolean;
  };
  toggleModal: (book: IBook) => void;
}

const Book = ({ book, display, toggleModal }: BookProps) => {
  return (
    <li className={`book-item ${display.list ? 'list' : ''}`}>
      <Card loading="lazy" width="200" height="200" book={book} onClick={() => toggleModal(book)} />
    </li>
  );
};

export default Book;
