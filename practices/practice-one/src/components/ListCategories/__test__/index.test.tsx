// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import ListCategory from '..';

describe('testing list categories component', () => {
  const propsDefault = {
    categoryList: [],
    categorySelected: 'Adventure',
    onSelectCategory: jest.fn(),
  };

  it('should be render book list correct', () => {
    const { container } = render(<ListCategory {...propsDefault} />);
    const categoryWrapper = container.getElementsByClassName('book-category-wrapper')[0];
    const category = container.querySelectorAll('[role="book-category"]');

    expect(categoryWrapper).toBeInTheDocument();
    expect(category.length).toEqual(0);
  });

  it('should be render match to snapshot', () => {
    const component = render(<ListCategory {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
