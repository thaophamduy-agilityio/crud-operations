// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import FilterDisplay from '..';

describe('testing filter display component', () => {
  const propsDefault = {
    isDisplayBooks: false,
    onDisplayBooks: jest.fn(),
  };

  it('should be call handle click on filter display', () => {
    const { container } = render(<FilterDisplay {...propsDefault} />);

    const iconDisplay = container.getElementsByClassName('icon-display-grid')[0];

    fireEvent.click(iconDisplay);

    expect(propsDefault.onDisplayBooks).toBeCalledTimes(1);
  });

  it('should render correctly with display selected list book', () => {
    const { container } = render(<FilterDisplay {...propsDefault} isDisplayBooks={true} />);

    const displayBook = container.getElementsByClassName('icon-display-list')[0];

    expect(displayBook).toHaveClass('selected');
  });

  it('should be render match to snapshot', () => {
    const component = render(<FilterDisplay {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
