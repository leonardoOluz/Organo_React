import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Banner from './componentes/banner';

function App() {
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        aoColaboradorcadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
      />
    </div>
  );
}

export default App;
