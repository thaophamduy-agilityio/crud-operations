// libs
import { render, fireEvent, screen } from '@testing-library/react';
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
    const modalOverlay = container.getElementsByClassName('modal-overlay')[0];

    fireEvent.click(iconCloseModal);

    expect(propsDefault.onCloseModal).toBeCalledTimes(1);

    fireEvent.click(modalOverlay);

    expect(propsDefault.onCloseModal).toBeCalledTimes(2);
  });

  it('testing component modal render when isShowModal is true', () => {
    const { container } = render(<Modal {...propsDefault} />);
    const title = screen.getByText('Angels and demons');
    const modalOverlay = container.getElementsByClassName('modal-overlay')[0];

    expect(title).toBeInTheDocument();
    expect(modalOverlay).toBeInTheDocument();
  });

  it('testing component modal not render when isShowModal is false', () => {
    const container = render(
      <Modal {...propsDefault} isShowModal={false} children="<h2>This is modal</h2>" />
    );
    const heading = document.querySelector('h2');

    expect(container).toMatchSnapshot();
    expect(heading).not.toBeInTheDocument();
  });

  it('should be call handle click icon change dark theme', () => {
    const { container } = render(<Modal {...propsDefault} />);
    const iconChangeDarkTheme = container.getElementsByClassName('icon-sunshine-modal')[0];
    const modal = container.getElementsByClassName('modal')[0];

    fireEvent.click(iconChangeDarkTheme);

    expect(propsDefault.onToggleThemeModal).toBeCalledTimes(1);
    expect(iconChangeDarkTheme).toHaveClass('dark');
    expect(modal).toBeInTheDocument();
    expect(modal).toHaveClass('dark-theme');
  });

  it('should be render match to snapshot', () => {
    const component = render(<Modal {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
