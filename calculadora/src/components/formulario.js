import React, { useState } from 'react';

const Formulario = ({ onFormSubmit }) => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa');
  const [pagoPor, setPagoPor] = useState('gustavo');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onFormSubmit === 'function') {
        // Chame onFormSubmit como uma função
        onFormSubmit({ nome, valor, tipo, pagoPor });
      }
    setNome('');
    setValor('');
    setTipo('despesa');
    setPagoPor('gustavo');
  };

  return (
    <div style={{ flex: 1, marginRight: '20px' }}>
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <br />
        <label>
          Valor:
          <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
        </label>
        <br />
        <label>
          Tipo:
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </select>
        </label>
        <br />
        <label>
          Pago por:
          <select value={pagoPor} onChange={(e) => setPagoPor(e.target.value)}>
            <option value="gustavo">Gustavo</option>
            <option value="misael">Misael</option>
          </select>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Formulario;
