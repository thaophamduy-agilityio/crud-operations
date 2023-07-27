import { IBook } from '@interface/book';
import { Card } from '@components/Card';

// Define the props for the Modal Detail book
interface BookDetailProps {
  book: IBook;
}

export const BookDetail = ({ book }: BookDetailProps): JSX.Element => {
  return <Card loading="lazy" width={128} viewBook="detail" book={book} />;
};
