// libs
import { render, fireEvent, screen } from '@testing-library/react';
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
    const { container } = render(<Category {...propsDefault} categorySelected="Contemporary" />);
    const selectedCategory = container.getElementsByClassName('book-category-item')[0];
    const categoryName = screen.getByTestId('category name');

    expect(selectedCategory).not.toHaveClass('selected');
    expect(categoryName.textContent).toEqual('Adventure');
    expect(propsDefault.category.name.substring(0, 2)).toBe('Ad');
  });

  it('should render correctly with display total item in category', () => {
    const { container } = render(<Category {...propsDefault} />);
    const total = container.getElementsByClassName('book-category-total')[0];

    expect(Number(total.innerHTML)).toEqual(18);
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
