// Formulario.js
import React, { useState } from 'react';
import './formulario.css'; // Importe o arquivo CSS

const Formulario = ({ onFormSubmit }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa');
  const [pagoPor, setPagoPor] = useState('gustavo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onFormSubmit === 'function') {
      onFormSubmit({ nome, valor, tipo, pagoPor });
    }
    setNome('');
    setValor('');
    setTipo('despesa');
    setPagoPor('gustavo');
  };

  return (
    <div className="FormularioContainer">
      <form className="FormularioForm" onSubmit={handleSubmit}>
        <label className="FormularioLabel">
          Nome:
          <input
            className="FormularioInput"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <label className="FormularioLabel">
          Valor:
          <input
            className="FormularioInput"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </label>
        <label className="FormularioLabel">
          Tipo:
          <select className="FormularioSelect" value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </select>
        </label>
        <label className="FormularioLabel">
          Pago por:
          <select
            className="FormularioSelect"
            value={pagoPor}
            onChange={(e) => setPagoPor(e.target.value)}
          >
            <option value="gustavo">Gustavo</option>
            <option value="misael">Misael</option>
          </select>
        </label>
        <button className="FormularioButton" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
