import React, { useState, useEffect } from 'react';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('despesa');
  const [pagoPor, setPagoPor] = useState('gustavo');
  const [despesas, setDespesas] = useState([]);
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    // Carregar dados do Local Storage quando o componente montar
    const dadosArmazenados = JSON.parse(localStorage.getItem('dados')) || [];
    const despesasArmazenadas = dadosArmazenados.filter((dado) => dado.tipo === 'despesa');
    const receitasArmazenadas = dadosArmazenados.filter((dado) => dado.tipo === 'receita');

    setDespesas(despesasArmazenadas);
    setReceitas(receitasArmazenadas);
  }, []);

  const calcularTotal = (lista) => {
    return lista.reduce((total, dado) => total + parseFloat(dado.valor), 0).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar se nome e valor estão preenchidos
    if (!nome || !valor) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Criar novo objeto com os dados do formulário
    const novoDado = {
      nome,
      valor,
      tipo,
      pagoPor,
    };

    // Atualizar o estado com os novos dados
    if (tipo === 'despesa') {
      setDespesas([...despesas, novoDado]);
    } else {
      setReceitas([...receitas, novoDado]);
    }

    // Limpar os campos do formulário
    setNome('');
    setValor('');
    setTipo('despesa');
    setPagoPor('gustavo');

    // Armazenar dados no Local Storage
    localStorage.setItem(
      'dados',
      JSON.stringify([...despesas, ...receitas, novoDado])
    );
  };

  return (
    <div style={{ display: 'flex' }}>
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
      <div style={{ flex: 1 }}>
        <h2>Receitas - Total: R${calcularTotal(receitas)}</h2>
        {receitas.map((dado, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>Nome: {dado.nome}</p>
            <p>Valor: R${dado.valor}</p>
            <p>Pago por: {dado.pagoPor}</p>
          </div>
        ))}
      </div>
      <div style={{ flex: 1 }}>
        <h2>Despesas - Total: R${calcularTotal(despesas)}</h2>
        {despesas.map((dado, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>Nome: {dado.nome}</p>
            <p>Valor: R${dado.valor}</p>
            <p>Pago por: {dado.pagoPor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Formulario;
