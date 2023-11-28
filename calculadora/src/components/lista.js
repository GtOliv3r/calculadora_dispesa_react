import React from 'react';
import Item from './item';


const Lista = ({ dados, tipo, onExcluir }) => {
    return (
      <div>
        <h2>{tipo.charAt(0).toUpperCase() + tipo.slice(1)} - Total: R${calcularTotal(dados)}</h2>
        {dados.map((dado, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
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
