interface ItemPros {
  id: number;
  name: string;
  description: string;
}

const FilterItems = (items: ItemPros[], query: string) => {
  query = query.toLowerCase();
  return items.filter(item =>
    item.name.split(' ').some(word =>
      word.toLowerCase().startsWith(query)
    )
  );
}

export default FilterItems