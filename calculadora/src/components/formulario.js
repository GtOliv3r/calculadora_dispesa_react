// Formulario.js
import React, { useState } from 'react';
import './formulario.css'; // Importe o arquivo CSS

// O componente Formulario recebe uma propriedade chamada onFormSubmit
const Formulario = ({ onFormSubmit }) => {
  // Estados locais para armazenar os dados do formulário
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa');
  const [pagoPor, setPagoPor] = useState('gustavo');

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que o formulário recarregue a página padrão
    // Verifica se a propriedade onFormSubmit é uma função e a chama com os dados do formulário
    if (typeof onFormSubmit === 'function') {
      onFormSubmit({ nome, valor, tipo, pagoPor });
    }
    // Limpa os estados, resetando o formulário
    setNome('');
    setValor('');
    setTipo('despesa');
    setPagoPor('gustavo');
  };

  // Componente Formulario renderizado
  return (
    <div className="FormularioContainer">
      {/* Formulário com evento onSubmit que chama a função handleSubmit */}
      <form className="FormularioForm" onSubmit={handleSubmit}>
        {/* Campo para inserção do nome */}
        <label className="FormularioLabel">
          Nome:
          <input
            className="FormularioInput"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        {/* Campo para inserção do valor */}
        <label className="FormularioLabel">
          Valor:
          <input
            className="FormularioInput"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </label>
        {/* Dropdown para seleção do tipo (despesa ou receita) */}
        <label className="FormularioLabel">
          Tipo:
          <select className="FormularioSelect" value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="despesa">Despesa</option>
            <option value="receita">Receita</option>
          </select>
        </label>
        {/* Dropdown para seleção de quem pagou */}
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
        {/* Botão de envio do formulário */}
        <button className="FormularioButton" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

// Exporta o componente Formulario para ser utilizado em outros lugares
export default Formulario;
