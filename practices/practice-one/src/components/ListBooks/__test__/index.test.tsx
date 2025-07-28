// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import ListBook from '..';

describe('testing list books component', () => {
  const propsDefault = {
    listBook: [],
    isDisplayBooks: false,
    onToggleModal: jest.fn(),
  };

  it('should be render book list correct', () => {
    const { container } = render(<ListBook {...propsDefault} />);
    const bookWrapper = container.getElementsByClassName('book-list-wrapper')[0];
    const list = container.querySelectorAll('[role="book-list"]');

    expect(bookWrapper).toBeInTheDocument();
    expect(list.length).toEqual(0);
  });

  it('should be render match to snapshot', () => {
    const component = render(<ListBook {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
