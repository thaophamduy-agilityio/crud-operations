// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import { LoadingIndicator } from '..';

describe('testing loading indicator component', () => {
  it('should be render match to snapshot', () => {
    const component = render(<LoadingIndicator />);

    expect(component).toMatchSnapshot();
  });
});
