import React from "react";
import './ocorrencia.css';
import Logo from '../../assets/nc3.png';
import emailjs from "emailjs-com";


export default function Ocorrencia() {

    function enviarForm(e) {
        // alert("Clicou e deu certo!!!")
        e.preventDefault();

        emailjs.sendForm('gmailMessageNC', 'template_klaymp6', e.target, 'user_AKO5NRnp5Bf6iePYrQpfL')
            .then((result) => {
                alert("Menságem enviada com sucesso! :) ");
                e.target.reset();
            }, (error) => {
                alert(error.message);
                e.target.reset();
            });
    }

    return (
        <div className="container-ocorrencia">
            <div>
                <div className="logo">
                    <img src={Logo} />
                    <span><h2 className="titulo">Livro de Ocorrências</h2></span>
                </div>
            </div>

            <form onSubmit={enviarForm}>
                {/* componente de inspetoria */}
                <div className="cont-inspetoria">
                    <span><h2>Inspetoria:</h2></span>
                    <div className="cont-insp-entra-sai">
                        <div className="insp-linha1">
                            <label>Insp. entra:</label>

                            <input type="text" placeholder="Por favor, digite o nome do inspetor..." name="insp-entra"/>

                        </div>
                        <div className="insp-linha2">
                            <label>Insp. sai:</label>

                            <input type="text" placeholder="Por favor, digite o nome do inspetor..." name="insp-sai"/>

                        </div>
                    </div>
                    <div className="cont-matricula">
                        <div className="mat-linha1">
                            <label>Matricula:</label>

                            <input type="text" placeholder="por favor, digite a matricula..." name="matricula-entra"/>

                        </div>
                        <div className="mat-linha2">
                            <label>Matricula:</label>

                            <input type="text" placeholder="por favor, digite a matricula..." name="matricula-sai"/>

                        </div>
                    </div>

                    <div className="data-turno">
                        <div className="data-linha">
                            <label>Data:</label>

                            <input type="text" name="data"/>

                        </div>
                        <div className="turno-linha">
                            <label>Turno:</label>

                            <select name="turno">
                                <option value="Selecione">Selecione</option>
                                <option value="Diurno">Diurno</option>
                                <option value="Noturno">Noturno</option>
                            </select>

                        </div>
                    </div>

                </div>
                {/* Componente de Veículo */}
                <div className="cont-viatura">
                    <span><h2>Viatura:</h2></span>
                    <div className="veiculo">
                        {/* <div className="cont-vei-vtr"> */}
                        {/* <label>Veículo:</label>
                            <select>
                                <option value="selecione">Selecione</option>
                                <option value="veiculo01">Veículo 01</option>
                                <option value="veiculo02">Veículo 02</option>
                                <option value="veiculo03">Veículo 03</option>
                                <option value="veiculo04">Veículo 04</option>
                                <option value="veiculo05">Veículo 05</option>
                            </select> */}
                        {/* <label>VTR:</label>
                            <input type="text" placeholder="Veículo" /> */}
                        {/* <select>
                                <option value="selecione">Selecione</option>
                                <option value="vtr01">VTR 01</option>
                                <option value="vtr02">VTR 02</option>
                                <option value="vtr03">VTR 03</option>
                                <option value="vtr04">VTR 04</option>
                                <option value="vtr05">VTR 05</option>
                            </select> */}
                        {/* </div> */}


                    </div>
                    <div className="comp-abaast-rot-visit">
                        <div className="abastecimento-saldo">
                            <div className="cont-vei-vtr">
                                <label>VTR:</label>

                                <input type="text" placeholder="Digite quel foi o veículo utilizado..." name="vtr"/>

                            </div>
                            <div className="km-inicial-final">
                                <label>Km Inical:</label>

                                <input type="text" placeholder="Digite o Km inicial..." name="km-inicial"/>

                                <label>Km Final:</label>

                                <input type="text" placeholder="Digite o Km final..." name="km-final"/>

                            </div>
                            <div className="abast-saldo-rota">
                                <div className="abastecimento">
                                    <label>Abastecimento:</label>

                                    <input type="text" placeholder="Valor abastecido..." name="abastecimento"/>

                                </div>
                                <div className="saldo">
                                    <label>Saldo:</label>

                                    <input type="text" placeholder="Saldo restante..." name="saldo"/>

                                </div>
                                <div className="rota">
                                    <label>Rota:</label>

                                    <select name="rota">
                                        <option value="selecione">Selecione</option>
                                        <option value="rota01">Rota 01</option>
                                        <option value="rota01">Rota 02</option>
                                        <option value="rota01">Rota 03</option>
                                    </select>

                                </div>
                            </div>
                        </div>
                        <div className="rota-visitados">
                            <div className="postos-visitados">
                                <label>Postos visitados:</label>

                                <textarea name="textarea-postos-visitados" placeholder="Digite os postos visitados..." name="postos-visitados"></textarea>

                            </div>
                        </div>
                    </div>

                </div>

                {/* component de Ocorrencias */}
                <div className="cont-ocorrencia">
                    <span><h2>Observações/Ocorrencias:</h2></span>
                    <div className="ocorrencia">

                        <textarea name="textarea-ocorrencia" placeholder="Digite as ocorrências encontradas..." name="ocorrencia"></textarea>
                        
                    </div>
                </div>

                <div className="botao">
                    <button className="but-enviar"><span><h3>Enviar</h3></span></button>
                </div>

            </form>
        </div>
    )
}