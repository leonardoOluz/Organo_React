import './ListaSuspensa.css';

interface ListaSuspensaProps {
    label: string
    valor: string
    obrigatorio: boolean
    aoAlterado: (valor: string) => void
    itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
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