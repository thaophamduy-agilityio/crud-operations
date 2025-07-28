// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import Logo from '..';

describe('testing logo component', () => {
  const propsDefault = {
    onToggleCategoriesOnMobile: jest.fn(),
  };

  it('should be call handle click on toggle hamburger menu', () => {
    const { container } = render(<Logo {...propsDefault} />);

    const iconHamburger = container.getElementsByClassName('icon-hamburger')[0];

    fireEvent.click(iconHamburger);

    expect(propsDefault.onToggleCategoriesOnMobile).toBeCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<Logo {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
