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
    children: `<div class="modal-content" data-testid="book detail">
        <figure class="modal-container-content">
          <div class="modal-container-img">
            <picture>
              <source class="img-item" srcset="src/assets/images/books/book1.webp" media="(min-width: 768px)">
              <img class="img-item" loading="lazy" src="src/assets/images/books/book1-small.webp" width="128" alt="Angels and demons">
            </picture>
          </div>
          <figcaption class="modal-container-text">
            <p class="modal-desc" data-testid="book description">Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum.</p>
            <p class="modal-author">
              <span class="modal-container-text-title">Author:</span>
              <span class="modal-container-text-content" data-testid="book author">Stuart Matt</span></p>
            <p class="modal-published">
              <span class="modal-container-text-title">Published:</span>
              <span class="modal-container-text-content" data-testid="book published">2021</span></p>
            <p class="modal-publishers">
              <span class="modal-container-text-title">Publishers:</span>
              <span class="modal-container-text-content" data-testid="book publishers">Hollman</span>
            </p>
          </figcaption>
        </figure>
      </div>`,
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
    const container = render(<Modal {...propsDefault} isShowModal={false} />);
    const heading = document.querySelector('h2');

    expect(container).toMatchSnapshot();
    expect(heading).not.toBeInTheDocument();
  });

  it('should be call handle click icon change dark theme', () => {
    const { container } = render(<Modal {...propsDefault} isDarkTheme={true} />);
    const iconChangeDarkTheme = container.getElementsByClassName('icon-sunshine-modal')[0];

    fireEvent.click(iconChangeDarkTheme);

    expect(propsDefault.onToggleThemeModal).toBeCalledTimes(1);
    expect(iconChangeDarkTheme).toHaveClass('icon', 'icon-sunshine-modal');
  });

  it('should be render match to snapshot', () => {
    const component = render(<Modal {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
