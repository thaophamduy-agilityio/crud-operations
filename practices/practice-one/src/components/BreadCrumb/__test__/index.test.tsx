// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import BreadCrumb from '..';

describe('testing bread crumb component', () => {
  const propsDefault = {
    selectedCategory: 'Adventure',
    total: 18,
  };

  it('should be render match to snapshot', () => {
    const component = render(<BreadCrumb {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
