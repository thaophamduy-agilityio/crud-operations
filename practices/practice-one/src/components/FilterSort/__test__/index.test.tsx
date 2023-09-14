// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import FilterSort from '..';

describe('testing filter sort component', () => {
  const propsDefault = {
    sortOption: {
      isSortByAlphabet: true,
      isSortByYear: false,
    },
    onSortBooks: jest.fn(),
  };

  it('should be call handle click on sort book', () => {
    const { container } = render(<FilterSort {...propsDefault} />);

    const btnSort = container.getElementsByClassName('btn-sort')[0];

    fireEvent.click(btnSort);

    expect(propsDefault.onSortBooks).toBeCalledTimes(1);
  });

  it('should render correctly with display selected sort book', () => {
    const { container } = render(
      <FilterSort
        {...propsDefault}
        sortOption={{
          isSortByAlphabet: false,
          isSortByYear: true,
        }}
      />
    );

    const btnSort = container.getElementsByClassName('filter-sort-icons')[0];

    expect(btnSort.firstChild).toHaveClass('btn-sort');
  });

  it('should be render match to snapshot', () => {
    const component = render(<FilterSort {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
