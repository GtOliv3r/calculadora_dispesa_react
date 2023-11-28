import React, { useState, useEffect } from 'react';
import Formulario from './formulario';
import Lista from './lista';


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

  const calcularTotal = (lista) => {
    return lista.reduce((total, dado) => total + parseFloat(dado.valor), 0).toFixed(2);
  };

  const handleFormSubmit = (novoDado) => {
    if (novoDado.tipo === 'despesa') {
      setDespesas([...despesas, novoDado]);
    } else {
      setReceitas([...receitas, novoDado]);
    }

    localStorage.setItem(
      'dados',
      JSON.stringify([...despesas, ...receitas, novoDado])
    );
  };

  return (
    <div style={{ display: 'flex' }}>
      <Formulario onFormSubmit={handleFormSubmit} />
      <Lista title="Receitas" items={receitas} calcularTotal={calcularTotal} />
      <Lista title="Despesas" items={despesas} calcularTotal={calcularTotal} />
    </div>
  );
};

export default MainComponent;
