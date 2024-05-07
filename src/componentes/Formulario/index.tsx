import { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';
import { IColaborador } from '../../compartilhado/interface/IColaboradores';
import { ITime } from '../../compartilhado/interface/ITime';

interface FormularioProps {
    aoColaboradorcadastrado: (colaborador: IColaborador) => void
    times: string[]
    novoTime: (object: ITime) => void
}


const Formulario = (props: FormularioProps) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault();
        props.aoColaboradorcadastrado({
            nome,
            cargo,
            imagem,
            time
        });

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    };
    //FSX
    return (
        <section className="formulario">
            <form onSubmit={evento => aoSalvar(evento)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem..."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    props.novoTime({ nome: nomeTime, cor: corTime });
                    setNomeTime('')
                    setCorTime('')
                }}            >
                <h2>Preencha os dados para criar um novo Time</h2>
                <Campo
                    obrigatorio
                    label="Nome"
                    placeholder="Digite o nome do seu time"
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    type="color"
                    obrigatorio
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    );
};

export default Formulario