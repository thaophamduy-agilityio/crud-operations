// libs
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import { Button } from '..';

describe('testing button component', () => {
  const propsDefault = {
    size: 'medium',
    variant: 'primary',
    label: 'Test Button',
    onClick: jest.fn(),
  };

  it('should render correctly with button small size and primary type', () => {
    const { container } = render(
      <Button size="small" label={propsDefault.label} onClick={propsDefault.onClick} />
    );

    expect(container.firstChild).toHaveClass('btn-small');
    expect(container.firstChild).toHaveClass('btn-primary');
  });

  it('should render correctly with button large size', () => {
    const { container } = render(
      <Button size="large" label={propsDefault.label} onClick={propsDefault.onClick} />
    );

    expect(container.firstChild).toHaveClass('btn-large');
  });

  it('should render correctly with button medium size and secondary type', () => {
    const { container } = render(
      <Button
        size="medium"
        variant="secondary"
        label={propsDefault.label}
        onClick={propsDefault.onClick}
      />
    );

    expect(container.firstChild).toHaveClass('btn-medium');
    expect(container.firstChild).toHaveClass('btn-secondary');
  });

  it('should render correctly with button is disabled', () => {
    render(<Button label={propsDefault.label} onClick={propsDefault.onClick} isDisabled />);

    expect(screen.getByText(propsDefault.label)).toBeDisabled();
  });

  it('should be handle click button', () => {
    const { container } = render(
      <Button label={propsDefault.label} onClick={propsDefault.onClick} />
    );

    const button = container.getElementsByTagName('button')[0];
    fireEvent.click(button);

    expect(propsDefault.onClick).toHaveBeenCalledTimes(1);
  });

  it('should be render match to snapshot', () => {
    const component = render(<Button label={propsDefault.label} onClick={propsDefault.onClick} />);

    expect(component).toMatchSnapshot();
  });
});
