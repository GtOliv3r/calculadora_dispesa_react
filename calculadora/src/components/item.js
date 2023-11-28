// Item.js

import React from 'react';
import './Item.css';

const Item = ({ dado }) => {
  return (
    <div className="ItemContainer">
      <p>Nome: {dado.nome}</p>
      <p>Valor: R${dado.valor}</p>
      <p>Pago por: {dado.pagoPor}</p>
    </div>
  );
};

export default Item;
