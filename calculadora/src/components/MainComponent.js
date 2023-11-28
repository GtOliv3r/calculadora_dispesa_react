import React, { useState, useEffect } from 'react';
import Formulario from './formulario';

const MainComponent = () => {
  const [despesas, setDespesas] = useState([]);
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    const dadosArmazenados = JSON.parse(localStorage.getItem('dados')) || [];
    const despesasArmazenadas = dadosArmazenados.filter((dado) => dado.tipo === 'despesa');
    const receitasArmazenadas = dadosArmazenados.filter((dado) => dado.tipo === 'receita');

    setDespesas(despesasArmazenadas);
    setReceitas(receitasArmazenadas);
  }, []);

  const handleFormSubmit = (novoDado) => {
    if (novoDado.tipo === 'despesa') {
      setDespesas([...despesas, novoDado]);
    } else {
      setReceitas([...receitas, novoDado]);
    }

    const dadosAtualizados = [...despesas, ...receitas, novoDado];
    localStorage.setItem('dados', JSON.stringify(dadosAtualizados));
  };

  const handleExcluir = (index, tipo) => {
    let novaLista = [];

    if (tipo === 'despesa') {
      const novaListaDespesas = [...despesas];
      novaListaDespesas.splice(index, 1);
      novaLista = novaListaDespesas;
      setDespesas(novaListaDespesas);
    } else if (tipo === 'receita') {
      const novaListaReceitas = [...receitas];
      novaListaReceitas.splice(index, 1);
      novaLista = novaListaReceitas;
      setReceitas(novaListaReceitas);
    }

    // Atualize o Local Storage
    localStorage.setItem('dados', JSON.stringify([...novaLista]));
  };

  const calcularTotal = (lista) => {
    return lista.reduce((total, item) => total + parseFloat(item.valor), 0);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Formulario onFormSubmit={handleFormSubmit} />
      <div style={{ flex: 1 }}>
        <h2>Receitas - Total: R${calcularTotal(receitas)}</h2>
        {receitas.map((dado, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>Nome: {dado.nome}</p>
            <p>Valor: R${dado.valor}</p>
            <p>Pago por: {dado.pagoPor}</p>
            <button onClick={() => handleExcluir(index, 'receita')}>Excluir</button>
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
            <button onClick={() => handleExcluir(index, 'despesa')}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
