import { IBook } from '@interface/book';
import { Image } from '@components/common/Image';
import { memo } from 'react';

interface BookProps {
  width: number;
  book: IBook;
  isDisplayBooks: boolean;
  toggleModal: (book: IBook) => void;
}

const BookItem = ({ width, book, isDisplayBooks, toggleModal }: BookProps): JSX.Element => {
  const { title, author, published, imageSmall, imageMedium } = book;

  const onToggleModal = (): void => {
    toggleModal(book);
  };

  return (
    <li className={`book-item ${isDisplayBooks ? 'list' : ''}`}>
      <div onClick={onToggleModal}>
        <figure className="card-container">
          <div className="card-container-img">
            <picture>
              <source className="img-item" srcSet={imageMedium} media="(min-width: 768px)" />
              <Image loading="lazy" imageSrc={imageSmall} width={width} altText={title} />
            </picture>
          </div>
          <figcaption>
            <h2 className="card-title">{title}</h2>
            <p className="card-author">{author}</p>
            <p className="card-published">{published}</p>
          </figcaption>
        </figure>
      </div>
    </li>
  );
};

export default memo(BookItem);
