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
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="h1 display-1 fw-medium mb-5">Seja bem vindo!</h1>

            <p className="text-center fs-2">Cadastrar como:</p>

            <div className = "d-flex justify-content-center align-items-center gap-3">
                <Botao texto = "passageiro" onClick = { () => redirecionar("/cadastrarpassageiro") } className = "btn btn-primary btn-lg text-light"/>

                <Botao texto = "motorista" onClick = { () => redirecionar("/cadastrarmotorista") } className = "btn btn-lg text-light"style={{backgroundColor: "#FD8F14"}} />
            </div>

            <p className="m-5 text-primary" onClick = { () => redirecionar("/login")}><u>fazer login</u></p>
        </div>
    )
}

export default Cadastro