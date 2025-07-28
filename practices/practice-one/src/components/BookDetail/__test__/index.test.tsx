// libs
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// components
import BookDetail from '..';

// images source
const imageSmall = 'src/assets/images/books/book1-small.webp';
const imageMedium = 'src/assets/images/books/book1.webp';

describe('testing book detail component', () => {
  const propsDefault = {
    width: 128,
    book: {
      title: 'Angels and demons',
      category: 'Adventure',
      description:
        'Culpa nulla pariatur cupidatat nisi incididunt ea do ipsum. Incididunt quis mollit elit commodo cillum eiusmod reprehenderit labore irure. Cillum et incididunt et nostrud exercitation quis aute laboris non ut adipisicing. Laboris ad minim aute nulla proident deserunt velit anim sunt aliquip ut sit. Exercitation aliquip ullamco officia non aliqua. Sint deserunt aliquip veniam id eiusmod sit consectetur mollit ea aliqua officia consequat. Magna non mollit nisi est commodo voluptate aute id. Deserunt nostrud id do in nisi mollit deserunt non. Pariatur fugiat cillum irure elit sint nisi ad ipsum culpa deserunt cupidatat esse consequat laboris. Id aliquip non consectetur esse proident duis Lorem.',
      imageSmall: `${imageSmall}`,
      imageMedium: `${imageMedium}`,
      author: 'Stuart Matt',
      published: '2021',
      publishers: 'Hollma',
    },
  };

  it('should be render match to snapshot', () => {
    const component = render(<BookDetail {...propsDefault} />);

    expect(component).toMatchSnapshot();
  });
});
