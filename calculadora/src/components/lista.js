import React from 'react';
import Item from './item';


const Lista = ({ title, items, calcularTotal }) => {
  return (
    <div style={{ flex: 1 }}>
      <h2>{title} - Total: R${calcularTotal(items)}</h2>
      {items.map((dado, index) => (
        <Item key={index} dado={dado} />
      ))}
    </div>
  );
};

export default Lista;
