import React, {useEffect, useState} from "react";
import {getAssociacao, alterarAssociacao} from "../../../services/Associacao.service";

export const DadosDaAsssociacao = () => {

    const [stateAssociacao, setStateAssociacao] = useState(undefined);

    useEffect(()=> {
        buscaAssociacao();
    }, [])

    const buscaAssociacao = async () => {
        const associacao = await getAssociacao();
        console.log("Assosicacao ", associacao)
        setStateAssociacao(associacao)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log("nome ", stateAssociacao.nome)
        console.log("codigo_eol ", stateAssociacao.unidade.codigo_eol)
        console.log("dre ", stateAssociacao.unidade.dre.nome)
        console.log("cnpj ", stateAssociacao.cnpj)
        console.log("presidente_associacao_nome ", stateAssociacao.presidente_associacao_nome)
        console.log("presidente_conselho_fiscal_nome ", stateAssociacao.presidente_conselho_fiscal_nome)

        const payload = {
            "nome": stateAssociacao.nome,
            "presidente_associacao_nome": stateAssociacao.presidente_associacao_nome,
            "presidente_associacao_rf": "",
            "presidente_conselho_fiscal_nome": stateAssociacao.presidente_conselho_fiscal_nome,
            "presidente_conselho_fiscal_rf": ""
        }

        await alterarAssociacao(payload);


    }



    const handleChange = (name, value) => {
        setStateAssociacao({
            ...stateAssociacao,
            [name]: value
        });
    }

    return (
        <>
            {stateAssociacao !== undefined ? (
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="nome"><strong>Nome da Associação</strong></label>
                                    <input value={stateAssociacao && stateAssociacao.nome ? stateAssociacao.nome : ""} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="nome" id="nome" type="text" className="form-control" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="codigo_eol"><strong>Código EOL da Unidade Escolar</strong></label>
                                    <input readOnly={true} value={setStateAssociacao && stateAssociacao.unidade.codigo_eol ? stateAssociacao.unidade.codigo_eol : ""} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="codigo_eol" id="codigo_eol" type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="dre"><strong>Diretoria Regional de Educação</strong></label>
                                    <input readOnly={true} value={stateAssociacao && stateAssociacao.unidade.dre.nome ? stateAssociacao.unidade.dre.nome : "" } onChange={(e)=>handleChange(e.target.name, e.target.value)} name="dre" id="dre" type="text" className="form-control" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="cnpj"><strong>Número do CNPJ</strong></label>
                                    <input readOnly={true} value={stateAssociacao.cnpj} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="cnpj" id="cnpj" type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="presidente_associacao_nome"><strong>Presidente da APM</strong></label>
                                    <input value={stateAssociacao.presidente_associacao_nome ? stateAssociacao.presidente_associacao_nome : ""} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="presidente_associacao_nome" id="presidente_associacao_nome" type="text" className="form-control" />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="presidente_conselho_fiscal_nome"><strong>Presidente do Conselho Fiscal</strong></label>
                                    <input value={stateAssociacao.presidente_conselho_fiscal_nome} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="presidente_conselho_fiscal_nome" id="presidente_conselho_fiscal_nome" type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="d-flex  justify-content-end pb-3">
                                <button type="reset" className="btn btn btn-outline-success mt-2 mr-2">Cancelar </button>
                                <button type="submit" className="btn btn-success mt-2 ml-2">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
            ): null}

        </>
    );
}