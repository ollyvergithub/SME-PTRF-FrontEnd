import React from "react";
import {RespostaSucesso} from "./respostaSucesso";
import {RespostaErro} from "./respostaErro";

export const RecuperacaoResposta = ({recuperacaoResposta, emailComMascara, respostaDeErro}) =>{
    return (
        <>
            <div className="esqueci-minha-senha-inner-texto">
                <h1 className="titulo-services mb-3">Recuperação de Senha</h1>
                {recuperacaoResposta && Object.entries(recuperacaoResposta).length > 0 ? (
                    <RespostaSucesso
                        emailComMascara={emailComMascara}
                    />
                ):
                    <RespostaErro
                        respostaDeErro={respostaDeErro}
                    />
                }
            </div>
        </>
    )
};