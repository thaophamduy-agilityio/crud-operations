// libs
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import ErrorFallback from '..';

describe('testing error boundary component', () => {
  const propsDefault = {
    error: {
      message: 'not defined',
    },
    resetErrorBoundary: jest.fn(),
  };

  test('should render error boundary component when there is an error', () => {
    const { container } = render(<ErrorFallback {...propsDefault} />);

    const errorMessage = screen.getByText('not defined');

    expect(container).toMatchSnapshot();
    expect(errorMessage).toBeInTheDocument();
    expect(screen.getByTestId('error message')).toBeInTheDocument();
  });
});
