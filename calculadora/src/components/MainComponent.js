// Importa o React, useState e useEffect do pacote 'react' e o componente Formulario
import React, { useState, useEffect } from 'react';
import Formulario from './formulario';

// Componente principal chamado MainComponent
const MainComponent = () => {
  // Estados locais para armazenar despesas e receitas
  const [despesas, setDespesas] = useState([]);
  const [receitas, setReceitas] = useState([]);

  // Efeito que é executado após o componente ser montado
  useEffect(() => {
    // Obtém dados armazenados no Local Storage, inicializando com array vazio se não houver dados
    const dadosArmazenados = JSON.parse(localStorage.getItem('dados')) || [];
    // Filtra despesas e receitas a partir dos dados armazenados
    const despesasArmazenadas = dadosArmazenados.filter((dado) => dado.tipo === 'despesa');
    const receitasArmazenadas = dadosArmazenados.filter((dado) => dado.tipo === 'receita');

    // Atualiza os estados com as despesas e receitas obtidas
    setDespesas(despesasArmazenadas);
    setReceitas(receitasArmazenadas);
  }, []);

  // Função chamada quando o formulário é submetido
  const handleFormSubmit = (novoDado) => {
    // Verifica se é uma despesa ou receita e atualiza o estado correspondente
    if (novoDado.tipo === 'despesa') {
      setDespesas([...despesas, novoDado]);
    } else {
      setReceitas([...receitas, novoDado]);
    }

    // Atualiza os dados no Local Storage
    const dadosAtualizados = [...despesas, ...receitas, novoDado];
    localStorage.setItem('dados', JSON.stringify(dadosAtualizados));
  };

  // Função para lidar com a exclusão de um item
  const handleExcluir = (index, tipo) => {
    let novaLista = [];

    // Verifica se é uma despesa ou receita e atualiza o estado correspondente
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

    // Atualiza os dados no Local Storage
    localStorage.setItem('dados', JSON.stringify([...novaLista]));
  };

  // Função para calcular o total de uma lista somando os valores
  const calcularTotal = (lista) => {
    return lista.reduce((total, item) => total + parseFloat(item.valor), 0);
  };

  // Renderiza o componente principal
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* Renderiza o componente Formulario e passa a função de submissão como propriedade */}
      <Formulario onFormSubmit={handleFormSubmit} />
      {/* Renderiza a lista de receitas */}
      <div style={{ flex: 1 }}>
        <h2>Receitas - Total: R${calcularTotal(receitas)}</h2>
        {/* Mapeia as receitas e renderiza um bloco para cada uma */}
        {receitas.map((dado, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>Nome: {dado.nome}</p>
            <p>Valor: R${dado.valor}</p>
            <p>Pago por: {dado.pagoPor}</p>
            {/* Botão para excluir a receita, chamando a função handleExcluir */}
            <button onClick={() => handleExcluir(index, 'receita')}>Excluir</button>
          </div>
        ))}
      </div>
      {/* Renderiza a lista de despesas */}
      <div style={{ flex: 1 }}>
        <h2>Despesas - Total: R${calcularTotal(despesas)}</h2>
        {/* Mapeia as despesas e renderiza um bloco para cada uma */}
        {despesas.map((dado, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
            <p>Nome: {dado.nome}</p>
            <p>Valor: R${dado.valor}</p>
            <p>Pago por: {dado.pagoPor}</p>
            {/* Botão para excluir a despesa, chamando a função handleExcluir */}
            <button onClick={() => handleExcluir(index, 'despesa')}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exporta o componente MainComponent para ser utilizado em outros lugares
export default MainComponent;
