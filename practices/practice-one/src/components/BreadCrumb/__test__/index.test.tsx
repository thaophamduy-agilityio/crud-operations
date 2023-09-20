// libs
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import BreadCrumb from '..';

describe('testing bread crumb component', () => {
  const propsDefault = {
    selectedCategory: 'Adventure',
    total: 18,
  };

  it('should render correctly with display selected category', () => {
    const { container } = render(<BreadCrumb {...propsDefault} />);
    const breadCrumb = container.getElementsByClassName('book-title')[0];
    const selectedCategory = container.getElementsByClassName('book-title-text')[0];
    const results = screen.getByTestId('bread crumb results');

    expect(breadCrumb).toBeInTheDocument();
    expect(selectedCategory.textContent).toBe(propsDefault.selectedCategory);
    expect(results).toHaveTextContent('Showing 18 Results');
  });

  it('should render correctly with total item in category', () => {
    const { container } = render(<BreadCrumb {...propsDefault} />);
    const breadCrumb = container.getElementsByClassName('book-title')[0];

    expect(breadCrumb.firstChild).toHaveClass('book-title-text');
    expect(propsDefault.total).toEqual(18);
  });

  it('should render correctly show result item', () => {
    const { container } = render(<BreadCrumb {...propsDefault} total={1} />);
    const breadCrumb = container.getElementsByClassName('book-title')[0];
    const results = screen.getByTestId('bread crumb results');

    expect(breadCrumb).toHaveClass('book-title');
    expect(results).toHaveTextContent('Showing 1 Result');
  });

  it('should be render match to snapshot', () => {
    const component = render(<BreadCrumb {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
