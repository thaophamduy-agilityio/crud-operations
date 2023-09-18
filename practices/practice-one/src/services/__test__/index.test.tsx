// libs
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import ListBook from '@components/ListBooks';

// constants
import { mockedBooks } from '@constants/mockedData';

describe('testing component get books', () => {
  const propsListBooks = {
    listBook: mockedBooks,
    isDisplayBooks: false,
    onToggleModal: jest.fn(),
  };

  it('should show list books in grid view by default', () => {
    const { container } = render(<ListBook {...propsListBooks} />);

    const books = screen.getAllByTestId('book');

    const bookItem = container.getElementsByClassName('book-item ')[0];
    fireEvent.click(bookItem);

    expect(books.length).toEqual(mockedBooks.length);
    expect(propsListBooks.onToggleModal).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
