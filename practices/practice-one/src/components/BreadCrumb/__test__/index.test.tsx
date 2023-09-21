// libs
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import BreadCrumb from '..';

describe('testing bread crumb component', () => {
  const propsDefault = {
    selectedCategory: '',
    total: 18,
  };

  it('should render correctly with display selected category', () => {
    const { container } = render(<BreadCrumb {...propsDefault} />);
    const breadCrumb = container.getElementsByClassName('book-title')[0];
    const selectedCategory = container.getElementsByClassName('book-title-text')[0];
    const results = screen.getByTestId('bread crumb results');

    expect(breadCrumb).toBeInTheDocument();
    expect(selectedCategory.textContent).toBe('All Books');
    expect(results).toHaveTextContent(`Results`);
  });

  it('should render correctly show result item', () => {
    const { container } = render(<BreadCrumb {...propsDefault} total={1} />);
    const breadCrumb = container.getElementsByClassName('book-title')[0];
    const results = screen.getByTestId('bread crumb results');

    expect(breadCrumb).toHaveClass('book-title');
    expect(results).toHaveTextContent(`Result`);
  });

  it('should be render match to snapshot', () => {
    const component = render(<BreadCrumb {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
