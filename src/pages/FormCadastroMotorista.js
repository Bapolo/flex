import { useNavigate } from "react-router-dom"
import Botao from "../componenentes/Botao"
import { BsFillLockFill } from "react-icons/bs";

function FormCadastroMotorista()
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
        <div className="h-100 ">
            <Botao type="button" className="btn" texto="<- voltar" onClick= { () => redirecionar("/") }/>

            <form onSubmit = { subimeterFormulario } className="d-flex flex-column">
                <h1 className="h1 mb-4 text-center">Cadastrar Motorista</h1>

                <div className="mb-3">
                    <label className="form-label" htmlFor="nomeCompleto">Nome completo</label>
                    <input className="form-control form-control-lg" type="text" id="nomeCompleto" placeholder="nome completo como no BI" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="telefone">Número de telefone</label>                    
                    <div className="input-group ">
                        <span className="input-group-text">+244</span>
                        <input type="tel" className="form-control form-control-lg" id="telefone" placeholder="923433221" required/>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="marcaDaMoto">Marca da Moto</label>
                    <input className="form-control form-control-lg" type="text" id="marcaDaMoto" placeholder="Ex: delop" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="matricula">Matricula</label>
                    <input className="form-control form-control-lg" type="text" id="matricula" placeholder="LD2389" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="cor">Cor da Moto</label>
                    <input className="form-control form-control-lg" type="text" id="cor" placeholder="azul" required/>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>                    
                    <div className="input-group ">
                        <span className="input-group-text">@</span>
                        <input type="Email" className="form-control form-control-lg" id="email" placeholder="exemplo@gmail.com" />
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="senha">Senha</label>                    
                    <div className="input-group ">
                        <span className="input-group-text"><BsFillLockFill /></span>
                        <input type="password" className="form-control form-control-lg" id="senha" placeholder="******" required/>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="conirmarSenha">Conirmar Senha</label>                    
                    <div className="input-group ">
                        <span className="input-group-text"><BsFillLockFill /></span>
                        <input type="password" className="form-control form-control-lg" id="conirmarSenha" placeholder="******" required/>
                    </div>
                </div>               


                <Botao texto="cadastrar" type="submit" className="btn text-light" style={{backgroundColor: "#FD8F14"}}/>
            </form>

            <p className="m-5 text-primary text-center" onClick = { () => redirecionar("/login")}><u>fazer login</u></p>
        </div>
    )
}

export default FormCadastroMotorista

