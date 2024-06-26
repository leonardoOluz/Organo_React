import './Campo.css'

interface CampoProps {
    aoAlterado: (valor: string) => void
    label: string
    obrigatorio?: boolean
    placeholder: string
    type?: 'text' | 'date' | 'password' | 'email' | 'number' | 'color'
    valor: string
}

const Campo = ({ aoAlterado, label, obrigatorio = false, placeholder, type = 'text', valor }: CampoProps) => {

    const placeholderModificado = `${placeholder}...`

    const aoDigitar = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value);
    };

    // JSX
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                value={valor}
                type={type}
                required={obrigatorio}
                onChange={e => aoDigitar(e)}
                placeholder={placeholderModificado}
            />
        </div>
    )
};

export default Campo;