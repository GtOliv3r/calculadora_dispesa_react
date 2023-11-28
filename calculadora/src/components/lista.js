// Lista.js
import React from 'react';
import './lista.css';

// Componente Lista recebe as propriedades: dados (array de objetos), tipo (string) e onExcluir (função)
const Lista = ({ dados, tipo, onExcluir }) => {
  // Função para renderizar o componente Lista
  return (
    <div className="ListaContainer">
      {/* Título da lista com o tipo e o total calculado a partir dos dados */}
      <h2 className="ListaTitulo">
        {tipo.charAt(0).toUpperCase() + tipo.slice(1)} - Total: R${calcularTotal(dados)}
      </h2>
      {/* Mapeia os dados e renderiza um card para cada item */}
      {dados.map((dado, index) => (
        <div key={index} className="ListaCard">
          {/* Exibe o nome do dado */}
          <p>Nome: {dado.nome}</p>
          {/* Exibe o valor do dado formatado como moeda */}
          <p>Valor: R${dado.valor}</p>
          {/* Exibe quem pagou e inclui um botão para excluir o dado */}
          <p>Pago por: {dado.pagoPor}</p>
          <button onClick={() => onExcluir(index, tipo)}>Excluir</button>
        </div>
      ))}
    </div>
  );
};

// Função para calcular o total da lista somando os valores
const calcularTotal = (lista) => {
  return lista.reduce((total, dado) => total + parseFloat(dado.valor), 0).toFixed(2);
};

// Exporta o componente Lista para ser utilizado em outros lugares
export default Lista;
