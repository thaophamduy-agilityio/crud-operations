// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import { Icon } from '..';

describe('testing icon component', () => {
  const propsDefault = {
    className: 'icon icon-display-grid',
    onClick: jest.fn(),
  };

  it('should be handle click button', () => {
    const { container } = render(
      <Icon className={propsDefault.className} onClick={propsDefault.onClick} />
    );

    const icon = container.getElementsByClassName('icon')[0];

    fireEvent.click(icon);
    expect(propsDefault.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(
      <Icon className={propsDefault.className} onClick={propsDefault.onClick} />
    );

    expect(component).toMatchSnapshot();
  });
});
