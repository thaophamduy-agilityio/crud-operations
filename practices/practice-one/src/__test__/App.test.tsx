// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import App from '../App';

describe('testing app component', () => {
  it('should be render match to snapshot', () => {
    const component = render(<App />);

    expect(component).toMatchSnapshot();
  });
});
