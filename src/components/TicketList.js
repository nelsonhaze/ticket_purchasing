import React from 'react';

const initialList = [
  { id: 'a', name: 'Monster Jam', dateTime: 'April 28th 2023 7:00pm', price: '$10.00'},
  { id: 'b', name: 'Stingrays vs Sharks', dateTime: 'April 27th 2023 8:00pm', price: '$10.00'},
  { id: 'c', name: 'Disney on Ice', dateTime: 'April 28th 2023 6:00pm', price:'$10.00'},
];

const TicketList = () => {
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <ul>
      {list.map(item => (
        <li key={item.id}>
          <label>{item.name}{item.dateTime}{item.price}</label>
          <input placeholder='Quantity'></input>
          <button type="button" onClick={() => handleClick(item.id)}>
            Add to cart
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TicketList;