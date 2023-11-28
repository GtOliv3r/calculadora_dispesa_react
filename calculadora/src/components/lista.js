import React from 'react';
import './lista.css';

const Lista = ({ dados, tipo, onExcluir }) => {
  return (
    <div className="ListaContainer">
      <h2 className="ListaTitulo">{tipo.charAt(0).toUpperCase() + tipo.slice(1)} - Total: R${calcularTotal(dados)}</h2>
      {dados.map((dado, index) => (
        <div key={index} className="ListaCard">
          <p>Nome: {dado.nome}</p>
          <p>Valor: R${dado.valor}</p>
          <p>Pago por: {dado.pagoPor}</p>
          <button onClick={() => onExcluir(index, tipo)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

const calcularTotal = (lista) => {
  return lista.reduce((total, dado) => total + parseFloat(dado.valor), 0).toFixed(2);
};

export default Lista;