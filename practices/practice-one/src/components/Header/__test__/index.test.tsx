// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import Header from '..';

describe('testing header component', () => {
  const propsDefault = {
    isOpenCategoriesOnMobile: false,
    onToggleCategoriesOnMobile: jest.fn(),
    valueSearch: 'a',
    onSearchChange: jest.fn(),
    isDarkTheme: false,
    onToggleThemePage: jest.fn(),
  };

  it('should be call handle click on toggle hamburger menu', () => {
    const { container } = render(<Header {...propsDefault} isOpenCategoriesOnMobile={true} />);

    const iconHamburger = container.getElementsByClassName('icon-hamburger')[0];
    const displayMenu = container.getElementsByClassName('header-site')[0];

    fireEvent.click(iconHamburger);

    expect(propsDefault.onToggleCategoriesOnMobile).toBeCalledTimes(1);
    expect(displayMenu).toHaveClass('open');
  });

  it('should be call handle click on toggle change theme icon', () => {
    const { container } = render(<Header {...propsDefault} isDarkTheme={true} />);

    const iconTheme = container.getElementsByClassName('icon-sunshine')[0];

    fireEvent.click(iconTheme);

    expect(propsDefault.onToggleThemePage).toBeCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<Header {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
