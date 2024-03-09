import './Colaborador.css';
import { IoCloseCircle } from "react-icons/io5";

const Colaborador = ({nome, corDeFundo, cargo, imagem, aoDeletar, id}) => {
    return (
        <div className='colaborador'>
            <IoCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)}></IoCloseCircle>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
};

export default Colaborador;
