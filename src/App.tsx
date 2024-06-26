import './App.css'
import { useEffect, useState } from 'react';
import Formulario from './componentes/Formulario';
import Banner from './componentes/banner';
import Time from './componentes/Times';
import Rodape from './componentes/Rodape';
import { v4 as uuidV4 } from 'uuid';
import { IoDocuments, IoDocumentsOutline } from "react-icons/io5";
import { IColaborador } from './compartilhado/interface/IColaboradores';
import { ITime } from './compartilhado/interface/ITime';

function App() {

  const [times, setTimes] = useState<ITime[]>([
    {
      id: uuidV4(),
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      id: uuidV4(),
      nome: 'Front-End',
      cor: '#82CFFA',
    },
    {
      id: uuidV4(),
      nome: 'Data Science',
      cor: '#A6D157',
    },
    {
      id: uuidV4(),
      nome: 'Devops',
      cor: '#E06B69',
    },
    {
      id: uuidV4(),
      nome: 'UX e Design',
      cor: '#DB6EBF',
    },
    {
      id: uuidV4(),
      nome: 'Mobile',
      cor: '#FFBA05',
    },
    {
      id: uuidV4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29',
    }
  ])
  const [documents, setDocuments] = useState(false)

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/leonardoOluz/Organo_Api/inicial')
      .then(resposta => resposta.json())
      .then(dados => {
        setColaboradores(dados)
      })
  }, [])

  function mudarCorDotime(id: number | string | undefined, cor: string) {
    setTimes(times.map(time => {
      if (time.id === id) {
        time.cor = cor;
      };
      return time;
    }))
  }

  const showDoc = () => {
    setDocuments(!documents)
  }

  const propsShowDoc = {
    className: 'show-doc',
    size: 35,
    onClick: showDoc
  }

  const resolverFavorito = (id: number | string | undefined) => {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) colaborador.favoritar = !colaborador.favoritar;
      return colaborador;
    }))
  }

  const aoNovoColaboradorCadastrado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidV4() }]);
  }

  const cadastrarNovoTime = (timeNovo: ITime) => {
    let newTime = times;
    timeNovo.id = uuidV4();
    newTime.push(timeNovo);
    setTimes([...newTime]);
  }

  function deletarColaborador(id: number | string | undefined) {
    setColaboradores(colaboradores.filter(Colaborador => Colaborador.id !== id))
  }

  return (
    <div className='app'>
      <Banner
        enderecoImagem='./imagens/banner.png'
        textoAlternativo='Logo do cabeçalho do organo'
      />
      {documents ? <Formulario
        novoTime={cadastrarNovoTime}
        aoColaboradorcadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
        times={times.map(time => time.nome)}
      /> : <></>}

      <div className='container-doc'>
        <h3>Minha Organização</h3>
        {
          documents
            ? <IoDocumentsOutline {...propsShowDoc} />
            : <IoDocuments {...propsShowDoc} />}
      </div>
      {times.map((time) => {
        return < Time
          key={time.nome}
          aoFavoritar={resolverFavorito}
          mudaCor={mudarCorDotime}
          id={time.id}
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />
      })}
      <Rodape />
    </div>
  );
}

export default App;
