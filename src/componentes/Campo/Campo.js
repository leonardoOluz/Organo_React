import './Campo.css'

export const Campo = ({ label, placeholder, aoAlterado, valor, type = 'text', obrigatorio = false, }) => {

    const placeholderModificado = `${placeholder}...`

    const aoDigitar = (e) => {
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
                onChange={aoDigitar}
                placeholder={placeholderModificado}
            />
        </div>
    )
};