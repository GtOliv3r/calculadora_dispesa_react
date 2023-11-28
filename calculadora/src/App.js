// Importa o React para criar componentes
import React from 'react';

// Importa o componente MainComponent do arquivo './components/MainComponent'
import MainComponent from './components/MainComponent';

// Componente principal chamado App
const App = () => {
  // Renderiza um elemento div contendo o componente MainComponent
  return (
    <div>
      <MainComponent />
    </div>
  );
}

// Exporta o componente App para ser utilizado em outros lugares
export default App;
