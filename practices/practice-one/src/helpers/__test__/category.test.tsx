// components
import { filterBooksByCategoryName, getCategoryWithTotalItem } from '../category';
// constants
import { mockedBooks, mockedCategories } from '@constants/mockedData';

describe('testing filter list book', () => {
  it('should be list book by filter name', () => {
    const listBookByCategoryName = filterBooksByCategoryName(mockedBooks, 'Adventure');

    expect(listBookByCategoryName.length).toEqual(2);
    expect(listBookByCategoryName[0].id).toEqual('1');
    expect(listBookByCategoryName[5]).toBeFalsy;
  });
});

describe('testing get category with total items', () => {
  it('should be list category with total items', () => {
    const listCategoryWithTotalItem = getCategoryWithTotalItem(mockedCategories, mockedBooks);

    expect(listCategoryWithTotalItem.length).toEqual(4);
    expect(listCategoryWithTotalItem[0].name).toEqual('adventure');
    expect(listCategoryWithTotalItem[0].total).toEqual(0);
  });
});
