import './App.css'
import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Banner from './componentes/banner';
import Time from './componentes/Times';
import Rodape from './componentes/Rodape';
import { v4 as uuidV4 } from 'uuid';
import { IoDocuments, IoDocumentsOutline } from "react-icons/io5";

function App() {

  const [times, setTimes] = useState([
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

  const inicial = [
    {
      id: uuidV4(),
      favoritar: true,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[0].nome
    },
    {
      id: uuidV4(),
      favoritar: true,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[1].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[2].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[3].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[4].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      time: times[5].nome
    },
    {
      id: uuidV4(),
      favoritar: false,
      nome: 'LEONARDO LUZ',
      cargo: 'Student of development web',
      imagem: 'https://github.com/leonardoOluz.png',
      time: times[6].nome
    },
  ]
  const [colaboradores, setColaboradores] = useState(inicial);

  function mudarCorDotime(id, cor) {
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

  const resolverFavorito = (id) => {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) colaborador.favoritar = !colaborador.favoritar;
      return colaborador
    }))
  }

  const aoNovoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidV4() }])
  }

  const cadastrarNovoTime = (timeNovo) => {
    setTimes([...times, { ...timeNovo, id: uuidV4() }])
  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(Colaborador => Colaborador.id !== id))
    console.log('deletarColaborador', id)
  }

  return (
    <div className='app'>
      <Banner />
      {documents ? <Formulario
        novoTime={cadastrarNovoTime}
        aoColaboradorcadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)}
        times={times.map(time => time.nome)}
      /> : ''}

      <div className='container-doc'>{
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
