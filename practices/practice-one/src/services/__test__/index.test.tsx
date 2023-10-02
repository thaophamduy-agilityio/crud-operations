// libs
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';

// components
import ListBook from '@components/ListBooks';
import ListCategory from '@components/ListCategories';

// services
import { getBooks, getCategories } from '../api-request';

// constants
import { mockedBooks, mockedCategories } from '@constants/mockedData';

jest.mock('axios');

describe('testing component get books', () => {
  const propsListBooks = {
    listBook: mockedBooks,
    isDisplayBooks: false,
    onToggleModal: jest.fn(),
  };

  it('renders book data', async () => {
    const books = mockedBooks;

    jest.spyOn(axios, 'get').mockImplementation(() =>
      Promise.resolve({
        data: () => Promise.resolve(books),
      })
    );

    jest.spyOn(axios, 'get').mockImplementation(() =>
      Promise.reject(books).catch(() => {
        console.log('Error fetching data');
      })
    );

    await act(async () => {
      render(<ListBook {...propsListBooks} />);
    });

    expect(screen.getAllByTestId('book').length).toEqual(books.length);
  });

  it('returns the length of book items', async () => {
    render(<ListBook {...propsListBooks} />);

    const listBook = await getBooks();
    expect(listBook?.length).toBeUndefined;

    await waitFor(() => {
      expect(screen.getAllByTestId('book').length).toEqual(18);
    });
  });

  it('should show list books in grid view by default', () => {
    const { container } = render(<ListBook {...propsListBooks} />);

    const books = screen.getAllByTestId('book');

    const bookItem = container.getElementsByClassName('book-item ')[0];
    fireEvent.click(bookItem);

    expect(books.length).toEqual(mockedBooks.length);
    expect(propsListBooks.onToggleModal).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});

describe('testing component get categories', () => {
  const propsListCategories = {
    categoryList: mockedCategories,
    categorySelected: 'Adventure',
    onSelectCategory: jest.fn(),
  };

  it('renders category data', async () => {
    const category = mockedCategories;

    jest.spyOn(axios, 'get').mockImplementation(() =>
      Promise.resolve({
        data: () => Promise.resolve(category),
      })
    );

    jest.spyOn(axios, 'get').mockImplementation(() =>
      Promise.reject(category).catch(() => {
        console.log('Error fetching data');
      })
    );

    await act(async () => {
      render(<ListCategory {...propsListCategories} />);
    });

    expect(screen.getAllByTestId('category').length).toEqual(category.length);
  });

  it('returns the length of item', async () => {
    render(<ListCategory {...propsListCategories} />);

    const listCategory = await getCategories();
    expect(listCategory?.length).toBeUndefined;

    await waitFor(() => {
      expect(screen.getAllByTestId('category').length).toEqual(4);
    });
  });

  it('should show list books in grid view by default', () => {
    const { container } = render(<ListCategory {...propsListCategories} />);

    const categories = screen.getAllByTestId('category');

    const categoryItem = container.getElementsByClassName('book-category-item')[0];
    fireEvent.click(categoryItem);

    expect(categories.length).not.toEqual(mockedBooks.length);
    expect(propsListCategories.onSelectCategory).toHaveBeenCalledTimes(1);
    expect(container).toMatchSnapshot();
  });
});
