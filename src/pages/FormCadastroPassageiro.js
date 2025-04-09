import { useNavigate } from "react-router-dom"
import Botao from "../componenentes/Botao"

function FormCadastroPassageiro()
{
    const ir = useNavigate()

    function subimeterFormulario(e)
    {
        e.preventDefault()
        console.log("Formulário enviado!")
        alert("Passageiro cadastrado!")
    }

    function redirecionar(caminho)
    {
        ir(caminho)
    }

    return (
        <div className="h-100">
            <Botao type="button" className="btn" texto="<- voltar" onClick= { () => redirecionar("/") }/>

            <form onSubmit = { subimeterFormulario } className="d-flex flex-column">
                <h1 className="h1 mb-4 text-center">Cadastrar Passageiro</h1>

                <div className="mb-3">
                    <label className="form-label" htmlFor="nomeCompleto">Nome completo</label>
                    <input className="form-control" type="text" id="nomeCompleto" placeholder="nome completo como no BI"/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="telefone">Número de telefone</label>                    
                    <div className="input-group ">
                        <span className="input-group-text">+244</span>
                        <input type="tel" className="form-control" id="telefone" placeholder="923433221" />
                    </div>
                </div>

                <Botao texto="cadastrar" type="submit" className="btn m-auto" style={{backgroundColor: "#FD8F14", width: 40+"%"}}/>
            </form>
        </div>
    )
}

export default FormCadastroPassageiro