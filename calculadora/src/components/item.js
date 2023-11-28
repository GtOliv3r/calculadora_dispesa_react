// Item.js
import React from 'react';
import './Item.css';

// Componente Item recebe a propriedade dado (um objeto)
const Item = ({ dado }) => {
  // Renderiza um container com informações sobre o dado
  return (
    <div className="ItemContainer">
      {/* Exibe o nome do dado */}
      <p>Nome: {dado.nome}</p>
      {/* Exibe o valor do dado formatado como moeda */}
      <p>Valor: R${dado.valor}</p>
      {/* Exibe quem pagou pelo dado */}
      <p>Pago por: {dado.pagoPor}</p>
    </div>
  );
};

// Exporta o componente Item para ser utilizado em outros lugares
export default Item;
