import React from 'react';

const Item = ({ dado }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <p>Nome: {dado.nome}</p>
      <p>Valor: R${dado.valor}</p>
      <p>Pago por: {dado.pagoPor}</p>
    </div>
  );
};

export default Item;
