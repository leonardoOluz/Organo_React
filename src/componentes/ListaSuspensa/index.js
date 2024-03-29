import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} required={props.obrigatorio} onChange={value => props.aoAlterado(value.target.value)}>
                <option value=''>Escolha o seu Time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
};

export default ListaSuspensa;