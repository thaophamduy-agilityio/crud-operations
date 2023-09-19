// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import ListCategory from '..';
import { mockedCategories } from '@constants/mockedData';

describe('testing list categories component', () => {
  const propsDefault = {
    categoryList: mockedCategories,
    categorySelected: 'Adventure',
    onSelectCategory: jest.fn(),
  };

  it('should be render category list correct', () => {
    const { container } = render(<ListCategory {...propsDefault} />);
    const categoryWrapper = container.getElementsByClassName('book-category-wrapper')[0];
    const category = container.querySelectorAll('[role="book-category"]');

    expect(categoryWrapper).toBeInTheDocument();
    expect(category.length).toEqual(0);
    expect(propsDefault.categoryList.length).toEqual(4);
  });

  it('should be handle click selected list category', () => {
    const { container } = render(<ListCategory {...propsDefault} />);
    const categoryItem = container.getElementsByClassName('book-category-item')[0];

    fireEvent.click(categoryItem);
    expect(propsDefault.onSelectCategory).toBeCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<ListCategory {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
