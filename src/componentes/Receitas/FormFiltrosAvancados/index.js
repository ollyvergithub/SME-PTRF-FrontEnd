import React, {useEffect, useState} from "react";
import {getTabelasReceita} from "../../../services/Receitas.service";
import {filtrosAvancadosReceitas} from "../../../services/Receitas.service";

export const FormFiltrosAvancados = (props) => {

    const { btnMaisFiltros, onClickBtnMaisFiltros, setLista, setBuscaUtilizandoFiltro, iniciaLista } = props

    const tabelaInicial = {
        tipos_receita: [],
        acoes_associacao: [],
        contas_associacao: []
    };

    const initialState = {
        filtrar_por_termo: "",
        tipo_receita: "",
        acao_associacao: "",
        conta_associacao: "",
    }

    const [tabelas, setTabelas] = useState(tabelaInicial);
    const [state, setState] = useState(initialState);


    useEffect(() => {
        const carregaTabelas = async () => {
            getTabelasReceita()
            .then(response => {
                setTabelas(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        };
        carregaTabelas()
    }, [])


    const handleChange = (name, value) => {
        setState({
            ...state,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const lista_retorno_api =  await filtrosAvancadosReceitas(state.filtrar_por_termo, state.tipo_receita, state.acao_associacao, state.conta_associacao)
        setLista(lista_retorno_api)
        setBuscaUtilizandoFiltro(true)
    }

    const limpaFormulario = () => {
        setState(initialState);
    }

    return(
        <div className={`row ${btnMaisFiltros ? "lista-de-receitas-visible" : "lista-de-receitas-invisible"}`}>
            <div className="col-12">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">

                        <div className="form-group col-lg-6">
                            <label htmlFor="filtrar_por_termo">Filtrar por um termo</label>
                            <input value={state.filtrar_por_termo} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="filtrar_por_termo" id="filtrar_por_termo" type="text" className="form-control" placeholder="Escreva o termo que deseja filtrar"/>
                        </div>

                        <div className="col-12 col-lg-6">

                            <div className="row">

                                <div className="form-group col-12 col-md-6 pr-md-1">
                                    <label htmlFor="acao_associacao">Filtrar por tipo de crédito</label>
                                    <select value={state.tipo_receita} onChange={(e)=>handleChange(e.target.name, e.target.value)} name="tipo_receita" id="tipo_receita" className="form-control">
                                        <option key={0} value="">Selecione uma tipo</option>
                                        {tabelas.tipos_receita !== undefined && tabelas.tipos_receita.length > 0 ? (tabelas.tipos_receita.map(item => (
                                            <option key={item.id} value={item.id}>{item.nome}</option>
                                        ))): null}
                                    </select>
                                </div>

                                <div className="form-group col-12 col-md-6 pl-md-1">
                                    <label htmlFor="conta_associacao">Filtrar por tipo de conta</label>
                                    <select id="conta_associacao" name="conta_associacao" value={state.conta_associacao} onChange={(e)=>handleChange(e.target.name, e.target.value)} className="form-control"
                                    >
                                        <option key={0} value="">Selecione um tipo</option>
                                        {tabelas.contas_associacao !== undefined && tabelas.contas_associacao.length > 0 ? (tabelas.contas_associacao.map((item, key) => (
                                            <option key={key} value={item.uuid}>{item.nome}</option>
                                        ))): null}
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div className="form-group col-12 col-lg-6">

                                <label htmlFor="acao_associacao">Ação</label>
                                <select id="acao_associacao" name="acao_associacao" value={state.acao_associacao} onChange={(e)=>handleChange(e.target.name, e.target.value)} className="form-control"
                                >
                                    <option key={0} value="">Selecione status </option>
                                    {tabelas.acoes_associacao !== undefined && tabelas.acoes_associacao.length > 0 ? (tabelas.acoes_associacao.map((item, key) => (
                                        <option key={key} value={item.uuid}>{item.nome}</option>
                                    ))): null}
                                </select>

                            </div>

                    </div>


                    <div className="d-flex justify-content-end pb-3 mt-3">
                        <button
                            onClick={(e)=>{
                                onClickBtnMaisFiltros();
                                iniciaLista();
                                limpaFormulario()
                            }
                            }
                            className="btn btn-outline-success mt-2 mr-2"
                            type="button"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="btn btn-success mt-2 ml-2"
                        >
                            Filtrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}