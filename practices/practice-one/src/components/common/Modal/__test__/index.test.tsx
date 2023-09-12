// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import { Modal } from '..';

describe('testing modal component', () => {
  const propsDefault = {
    title: 'Angels and demons',
    isShowModal: true,
    isDarkTheme: false,
    onCloseModal: jest.fn(),
    onToggleThemeModal: jest.fn(),
    children: 'Modal content here!',
  };

  it('should be call handle click icon close modal', () => {
    const { container } = render(<Modal {...propsDefault} />);

    const iconCloseModal = container.getElementsByClassName('icon-close-modal')[0];

    fireEvent.click(iconCloseModal);

    expect(propsDefault.onCloseModal).toBeCalledTimes(1);
  });

  it('should be call handle click icon change dark theme', () => {
    const { container } = render(<Modal {...propsDefault} />);

    const iconChangeDarkTheme = container.getElementsByClassName('icon-sunshine-modal')[0];

    fireEvent.click(iconChangeDarkTheme);

    expect(propsDefault.onToggleThemeModal).toBeCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<Modal {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
