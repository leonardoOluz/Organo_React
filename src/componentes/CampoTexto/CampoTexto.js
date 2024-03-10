import './CampoTexto.css'

export const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`
    
    const aoDigitar = (e) => {
        props.aoAlterado(e.target.value);
    };

    // JSX
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} type={props.type} required={props.obrigatorio} onChange={aoDigitar} placeholder={placeholderModificado}></input>
        </div>
    )
};