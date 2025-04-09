import { useNavigate } from "react-router-dom"
import Botao from "../componenentes/Botao"
import { BsFillLockFill } from "react-icons/bs";

function Login()
{
    const ir = useNavigate()

    function redirecionar(caminho)
    {
        ir(caminho)
    }

    return (
        <div className="h-100 ">
            <Botao type="button" className="btn" texto="<- voltar" onClick= { () => redirecionar("/") }/>

            <form onSubmit = { redirecionar("/home") } className="d-flex flex-column">
                <h1 className="h1 mb-4 text-center">Cadastrar Motorista</h1>

                <div className="mb-3">
                    <label className="form-label" htmlFor="nomeCompleto">Nome completo</label>
                    <input className="form-control form-control-lg" type="text" id="nomeCompleto" placeholder="nome completo como no BI" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="senha">Senha</label>                    
                    <div className="input-group ">
                        <span className="input-group-text"><BsFillLockFill /></span>
                        <input type="password" className="form-control form-control-lg" id="senha" placeholder="******" required/>
                    </div>
                </div>

                <Botao texto="Entrar" type="submit" className="btn text-light" style={{backgroundColor: "#FD8F14"}}/>
            </form>
        </div>
    )
}

export default Login