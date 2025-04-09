

function Botao({texto, ...props})
{
    return (
        <button {...props}>{texto}</button>
    )
}

export default Botao