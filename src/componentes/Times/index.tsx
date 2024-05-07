import Colaborador from '../Colaborador';
import hexToRgba from 'hex-to-rgba';
import './Time.css';
import { IColaborador } from '../../compartilhado/interface/IColaboradores';

interface TimeProps {
    id: string | undefined
    cor: string
    aoDeletar: (id: number | string | undefined) => void
    aoFavoritar: (id: number | string | undefined) => void
    mudaCor: (id: string | undefined , cor: string) => void
    nome: string
    colaboradores: IColaborador[]
}


const Time = (props: TimeProps) => {
    return (
        props.colaboradores.length > 0 ? <section className="time" style={{ backgroundColor: hexToRgba(props.cor, '0.6') }}>
            <input type='color' value={props.cor} onChange={e => { props.mudaCor(props.id, e.target.value) }} className='input-color' />
            <h3 style={{ borderColor: props.cor }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map((colaborador, indice) => {
                    return (
                        <Colaborador
                            key={indice}
                            corDeFundo={props.cor}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                            aoDeletar={props.aoDeletar}
                            favoritar={colaborador.favoritar}
                            id={colaborador.id}
                            aoFavoritar={props.aoFavoritar}
                        />
                    )
                })}
            </div>
        </section> : <></>
    )
};

export default Time;
