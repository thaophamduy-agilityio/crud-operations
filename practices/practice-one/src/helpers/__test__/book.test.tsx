// components
import { sortedBookList, Search } from '../book';
// constants
import { mockedBooks } from '@constants/mockedData';

describe('testing sort list book', () => {
  it('should be list book by alphabet', () => {
    const listBookByAlphabet = sortedBookList(mockedBooks, {
      isSortByAlphabet: true,
      isSortByYear: false,
    });

    expect(listBookByAlphabet.length).toEqual(18);
    expect(listBookByAlphabet[2].id).toEqual('14');
    expect(listBookByAlphabet[5].title).toEqual('Life is Like This');
  });

  it('should be list book by year', () => {
    const listBookByYear = sortedBookList(mockedBooks, {
      isSortByAlphabet: false,
      isSortByYear: true,
    });

    expect(listBookByYear.length).toEqual(18);
    expect(listBookByYear[1].id).toEqual('3');
    expect(listBookByYear[17].title).toEqual('Life is Like This');
  });
});

describe('testing search book', () => {
  it('should be list book by value search', () => {
    const searchBook = Search(mockedBooks, 'a');

    expect(searchBook.length).toEqual(15);
    expect(searchBook[0].id).toEqual('1');
  });
});
