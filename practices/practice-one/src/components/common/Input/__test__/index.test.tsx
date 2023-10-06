// libs
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import { Input } from '..';

describe('testing input component', () => {
  const propsDefault = {
    value: '',
    name: 'search',
    placeholder: 'Search books',
    className: 'input input-search',
    type: 'text',
    isDisabled: false,
    onChange: jest.fn(),
  };

  it('should render correctly with default input', () => {
    const { container } = render(<Input {...propsDefault} className="input-default" />);

    expect(container.firstChild).toHaveClass('input-default');
  });

  it('should be render correctly with properties input', () => {
    const { container } = render(<Input {...propsDefault} type="file" />);

    const input = container.getElementsByTagName('input')[0];

    expect(input.name).toBe('search');
    expect(input.placeholder).toBe('Search books');
    expect(input.type).toBe('file');
  });

  it('should be handle change value input', () => {
    const { container } = render(<Input {...propsDefault} />);

    const input = container.getElementsByTagName('input')[0];

    fireEvent.change(input, { target: { value: 'book' } });

    expect(propsDefault.onChange).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<Input {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
