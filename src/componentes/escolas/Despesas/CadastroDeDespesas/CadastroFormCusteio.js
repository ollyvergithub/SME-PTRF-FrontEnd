import React from "react";
import CurrencyInput from "react-currency-input";
import {trataNumericos} from "../../../../utils/ValidacoesAdicionaisFormularios";

export const CadastroFormCusteio = (propriedades) => {

    const {formikProps, rateio, index, despesasTabelas,  especificacoes_custeio, verboHttp, disabled, errors, exibeMsgErroValorRecursos, exibeMsgErroValorOriginal, setValorRateioOriginalAlterado} = propriedades

    const setValorRateioRealizado=(setFieldValue, index, valor)=>{

        console.log("setValorRateioRealizado ", setFieldValue)
        console.log("setValorRateioRealizado index ", setFieldValue)
        console.log("setValorRateioRealizado valor ", valor)

        setFieldValue(`rateios[${index}].valor_rateio`, trataNumericos(valor))

    }

    return (
        <>
            <div className="form-row">
                <div className="col-12 col-md-6 mt-4">

                    <label htmlFor="tipo_custeio">Tipo de custeio</label>
                    <select
                        value={
                            rateio.tipo_custeio !== null ? (
                                typeof rateio.tipo_custeio === "object" ? rateio.tipo_custeio.id : rateio.tipo_custeio
                            ) : ""
                        }
                        onChange={(e) => {
                            formikProps.handleChange(e);
                        }}
                        name={`rateios[${index}].tipo_custeio`}
                        id='tipo_custeio'
                        className={`${!rateio.tipo_custeio && verboHttp === "PUT" && "is_invalid "} form-control`}
                        disabled={disabled}
                    >
                        <option value="">Selecione um tipo</option>
                        {despesasTabelas.tipos_custeio && despesasTabelas.tipos_custeio.map(item => (
                            <option key={item.id} value={item.id}>{item.nome}</option>
                        ))}
                    </select>
                </div>

            </div>

            <div className="form-row">
                <div className="col-12 mt-4">
                    <label htmlFor="especificacao_material_servico">Especificação do material ou serviço</label>
                    <select
                        value={
                            rateio.especificacao_material_servico !== null ? (
                                typeof rateio.especificacao_material_servico === "object" ? rateio.especificacao_material_servico.id : rateio.especificacao_material_servico
                            ) : ""
                        }
                        onChange={formikProps.handleChange}
                        name={`rateios[${index}].especificacao_material_servico`}
                        id='especificacao_material_servico'
                        className={`${!rateio.especificacao_material_servico && verboHttp === "PUT" && "is_invalid "} form-control`}
                        disabled={disabled}
                    >
                        <option key={0} value="">Selecione uma especificação</option>
                        {
                            rateio.tipo_custeio !== null && rateio.tipo_custeio !== undefined && rateio.tipo_custeio.id !== null && rateio.tipo_custeio.id !== undefined && typeof especificacoes_custeio === "object" && especificacoes_custeio[rateio.tipo_custeio.id] ? (especificacoes_custeio[rateio.tipo_custeio.id].map((item) => (
                                    <option key={item.id} value={item.id}>{item.descricao}</option>
                                )))
                                : (
                                    especificacoes_custeio && especificacoes_custeio[rateio.tipo_custeio] && especificacoes_custeio[rateio.tipo_custeio].map(item => (
                                        <option key={item.id} value={item.id}>{item.descricao}</option>
                                    ))
                                )
                        }
                    </select>
                </div>
                <div className="col-12 col-md-3 mt-4">
                    <label htmlFor="acao_associacao">Ação</label>
                    <select
                        value={
                            rateio.acao_associacao !== null ? (
                                typeof rateio.acao_associacao === "object" ? rateio.acao_associacao.uuid : rateio.acao_associacao
                            ) : ""
                        }
                        onChange={formikProps.handleChange}
                        name={`rateios[${index}].acao_associacao`}
                        id='acao_associacao'
                        className={`${!rateio.acao_associacao && verboHttp === "PUT" && "is_invalid "} form-control`}
                        disabled={disabled}
                    >
                        <option key={0} value="">Selecione uma ação</option>
                        {despesasTabelas.acoes_associacao && despesasTabelas.acoes_associacao.map(item => (
                            <option key={item.uuid} value={item.uuid}>{item.nome}</option>
                        ))}
                    </select>
                </div>
                        <div className="col-12 col-md-3 mt-4">
                            <label htmlFor="conta_associacao">Tipo de conta utilizada</label>
                            <select
                                value={
                                    rateio.conta_associacao !== null ? (
                                        typeof rateio.conta_associacao === "object" ? rateio.conta_associacao.uuid : rateio.conta_associacao
                                    ) : ""
                                }
                                onChange={formikProps.handleChange}
                                name={`rateios[${index}].conta_associacao`}
                                id='conta_associacao'
                                className={`${!rateio.conta_associacao && verboHttp === "PUT" && "is_invalid "} form-control`}
                                disabled={disabled}
                            >
                                <option key={0} value="">Selecione uma conta</option>
                                {despesasTabelas.contas_associacao && despesasTabelas.contas_associacao.map(item => (
                                    <option key={item.uuid} value={item.uuid}>{item.nome}</option>
                                ))}
                            </select>
                        </div>

                        <div className="col-12 col-md-3 mt-4">
                            <label htmlFor="valor_original">Valor RATEIO ORIGINAL</label>
                            <CurrencyInput
                                allowNegative={false}
                                prefix='R$'
                                decimalSeparator=","
                                thousandSeparator="."
                                value={rateio.valor_original}
                                name={`rateios[${index}].valor_original`}
                                id="valor_original"
                                className={`${ trataNumericos(rateio.valor_original) === 0 && verboHttp === "PUT" ? "is_invalid" : ""} form-control`}
                                onChangeEvent={(e) => {
                                    formikProps.handleChange(e);
                                    setValorRateioOriginalAlterado(true);
                                    setValorRateioRealizado(formikProps.setFieldValue, index, e.target.value)
                                }}
                                disabled={disabled}
                            />
                            {errors.valor_original && exibeMsgErroValorOriginal && <span className="span_erro text-danger mt-1"> ERRO VALOR ORIGINAL DENTRO DO SPAN CADASTRO FORM CUSTEIO</span>}
                        </div>

                        <div className="col-12 col-md-3 mt-4">
                            <label htmlFor="valor_rateio">Valor RATEIO REALIZADO - {rateio.valor_rateio}</label>
                            <CurrencyInput
                                allowNegative={false}
                                prefix='R$'
                                decimalSeparator=","
                                thousandSeparator="."
                                value={rateio.valor_rateio}
                                //value={rateio.valor_rateio === "R$0,00" || rateio.valor_rateio === "0" || rateio.valor_rateio === 0 ? rateio.valor_original : rateio.valor_rateio}
                                name={`rateios[${index}].valor_rateio`}
                                id="valor_rateio"
                                className={`${ trataNumericos(rateio.valor_rateio) === 0 && verboHttp === "PUT" ? "is_invalid" : ""} form-control`}
                                onChangeEvent={formikProps.handleChange}
                                disabled={disabled}
                            />
                            {errors.valor_recusos_acoes && exibeMsgErroValorRecursos && <span className="span_erro text-danger mt-1"> A soma dos valores do rateio não está correspondendo ao valor total utilizado com recursos do Programa.</span>}
                        </div>



                    </div>

        </>

    );
}