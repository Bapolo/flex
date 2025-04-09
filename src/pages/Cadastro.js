import Botao from "../componenentes/Botao"
import { useNavigate } from "react-router-dom"

function Cadastro()
{
    const ir = useNavigate()

    function redirecionar(caminho)
    {
        ir(caminho)
    }

    return (
        <div className="">
            <h1 className="h1 mb-5">Seja bem vindo!</h1>

            <p className="text-center fs-2">Cadastrar como:</p>

            <div className = "d-flex gap-3">
                <Botao texto = "passageiro" onClick = { () => redirecionar("/cadastrarpassageiro") } className = "btn btn-primary"/>

                <Botao texto = "motorista" onClick = { () => redirecionar("/cadastrarmotorista") } className = "btn"style={{backgroundColor: "#FD8F14"}} />
            </div>
        </div>
    )
}

export default Cadastro