// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import Search from '..';

describe('testing search component', () => {
  const propsDefault = {
    valueSearch: 'a',
    onSearchChange: jest.fn(),
  };

  it('should be call handle click on filter display', () => {
    const { container } = render(<Search {...propsDefault} />);

    const inputSearch = container.getElementsByClassName('input-search')[0];

    fireEvent.change(inputSearch, { target: { value: 'Hello' } });

    expect(propsDefault.onSearchChange).toHaveBeenCalled();
  });

  it('should be render match to snapshot', () => {
    const component = render(<Search {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
