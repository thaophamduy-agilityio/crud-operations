// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import { Image } from '..';

describe('testing image component', () => {
  it('should be render match to snapshot', () => {
    const component = render(
      <Image loading="lazy" imageSrc="https://picsum.photos/200/200" altText="image" width={200} />
    );

    expect(component).toMatchSnapshot();
  });
});
