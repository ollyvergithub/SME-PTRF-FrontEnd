import React from "react";
import {PaginasContainer} from "../PaginasContainer";
import {PrestacaoDeContas} from "../../componentes/PrestacaoDeContas";
import "../../componentes/PrestacaoDeContas/prestacao-de-contas.scss"
import "../../componentes/PrestacaoDeContas/InformacoesIniciais"
import {InformacoesIniciais} from "../../componentes/PrestacaoDeContas/InformacoesIniciais";


export const PrestacaoDeContasPage = () => {
    return (
        <PaginasContainer>
            <h1 className="titulo-itens-painel mt-5">Prestação de contas</h1>
            <InformacoesIniciais/>
            <div className="page-content-inner">
                <PrestacaoDeContas/>
            </div>
        </PaginasContainer>
    )
}