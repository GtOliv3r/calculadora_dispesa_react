import React from 'react';
import Formulario from './components/formulario';

function App() {
  const handleSubmit = (formData) => {
    console.log('Dados do formulário:', formData);
    // Adicione aqui a lógica para lidar com os dados do formulário (por exemplo, enviar para um servidor)
    
    // Limpe os dados do local storage após o envio bem-sucedido, se necessário
    // localStorage.removeItem("formData");
  };

  return (
    <div className="App">
      <h1>Formulário React</h1>
      <Formulario onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
