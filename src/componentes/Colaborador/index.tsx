import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ColaboradorProps {
    favoritar?: boolean
    nome: string
    corDeFundo: string
    cargo: string
    imagem: string
    aoDeletar: (id: number | string | undefined) => void
    id?: number | string
    aoFavoritar: (id: number | string | undefined) => void
}


const Colaborador = ({ favoritar, nome, corDeFundo, cargo, imagem, aoDeletar, id, aoFavoritar }: ColaboradorProps) => {
    function favorito() {
        aoFavoritar(id)
    }

    const prospFavorito = {
        size: 25,
        onClick: favorito
    }

    return (
        <div className='colaborador'>
            <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(id)}></AiFillCloseCircle>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favoritar
                        ? <AiFillHeart {...prospFavorito} color='#f50000' />
                        : <AiOutlineHeart {...prospFavorito} />
                    }
                </div>
            </div>
        </div>
    )
};

export default Colaborador;
