// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import Category from '..';

describe('testing category component', () => {
  const propsDefault = {
    category: {
      id: '1',
      name: 'Adventure',
      total: 18,
      onClick: jest.fn(),
    },
    categorySelected: 'Adventure',
    onSelectCategory: jest.fn(),
  };

  it('should render correctly with display selected category', () => {
    const { container } = render(<Category {...propsDefault} />);

    const selectedCategory = container.getElementsByClassName('book-category-item')[0];

    expect(selectedCategory).toHaveClass('selected');
  });

  it('should be call handle click on category', () => {
    const { container } = render(<Category {...propsDefault} />);

    const bookCategory = container.getElementsByTagName('li')[0];

    fireEvent.click(bookCategory);

    expect(propsDefault.onSelectCategory).toBeCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<Category {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
