interface ItemPros {
  id: number;
  name: string;
  description: string;
}

interface ListItemsPros {
  items: ItemPros[];
}

const ListItems = ({ items }: ListItemsPros) => {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td className="food-name">{food.name}</td>
            <td className="food-desc">{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ListItems