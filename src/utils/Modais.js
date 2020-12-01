import React from "react";
import {
    ModalBootstrap,
    ModalBootstrapReverConciliacao,
    ModalBootstrapSaldoInsuficiente,
    ModalBootstrapSaldoInsuficienteDaconta,
    ModalBootstrapFormMembros,
    ModalBootstrapFormMeusDadosSenha,
    ModalBootstrapFormMeusDadosEmail
} from "../componentes/Globais/ModalBootstrap";
import {FormAlterarSenha} from "../componentes/Globais/EdicaoDeSenha/FormAlterarSenha";
import {TextoValidacaoSenha} from "../componentes/Globais/MedidorForcaSenha/textoValidacaoSenha";
import {FormAlterarEmail} from "../componentes/Globais/FormAlterarEmail";
import {Formik} from 'formik';
import {YupSignupSchemaMembros} from "./ValidacoesAdicionaisFormularios";
import {visoesService} from "../services/visoes.service";

export const AvisoCapitalModal = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Aviso"
            bodyText="<p>A relação de bens de
capital é a mesma utilizada no Sistema de Bens Patrimoniais Móveis (SBPM) da Prefeitura de São Paulo e, portanto, contém itens que não podem ser adquiridos com recursos do PTRF.</p>"
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Estou Ciente"
        />
    )
};

export const CancelarModal = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Cancelar cadastro"
            bodyText="<p>Tem certeza que deseja cancelar esse cadastramento? As informações não serão salvas</p>"
            primeiroBotaoOnclick={propriedades.onCancelarTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const DeletarModal = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Deseja excluir esta Despesa?"
            bodyText="<p>Tem certeza que deseja excluir esta despesa? A ação não poderá ser desfeita.</p>"
            primeiroBotaoOnclick={propriedades.onDeletarTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};
export const DeletarModalReceitas = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Deseja excluir este Crédito?"
            bodyText="<p>Tem certeza que deseja excluir este crédito? A ação não poderá ser desfeita.</p>"
            primeiroBotaoOnclick={propriedades.onDeletarTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const CancelarModalAssociacao = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Deseja cancelar a Edição da Associacao?"
            bodyText="<p>Tem certeza que deseja cancelar a edição? A ação não poderá ser desfeita.</p>"
            primeiroBotaoOnclick={propriedades.onCancelarTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const SalvarModalAssociacao = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Edição salva"
            bodyText="<p>A edição foi salva com sucesso!</p>"
            primeiroBotaoOnclick={propriedades.onCancelarTrue}
            primeiroBotaoTexto="OK"
        />
    )
};

export const RedirectModalTabelaLancamentos = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Edição do lançamento"
            bodyText="<p>Você será direcionado para a página de edição desse lançamento, deseja continuar?</p>"
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Não"
            primeiroBotaoCss="outline-success"
            segundoBotaoOnclick={propriedades.onCancelarTrue}
            segundoBotaoTexto="Sim, leve-me à página de edição"
            segundoBotaoCss="success"
        />
    )
};


export const CancelarPrestacaoDeContas = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Deseja cancelar a conciliação?"
            bodyText="<p>Você será direcionado para a página prestação de contas, deseja continuar?</p>"
            primeiroBotaoOnclick={propriedades.onCancelarTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const SalvarPrestacaoDeContas = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Salvar informações"
            bodyText="<p>Deseja salvar as informações da conciliação bancária?</p>"
            primeiroBotaoOnclick={propriedades.onSalvarTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const ConcluirPrestacaoDeContas = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Deseja concluir a conciliação?"
            bodyText="<p>Ela poderá ser revisada se desejar.</p>"
            primeiroBotaoOnclick={propriedades.onConcluirTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const ErroGeral = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Ooops!!! Algum erro aconteceu"
            bodyText="<p>Tente atualizar a página e repetir a operação</p>"
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Fechar"
        />
    )
};

export const ReverConciliacao = (propriedades) => {
    const bodyTextarea = () => {
        return (
            <form className="form-group">
                <p><strong>Revisão dos lançamentos realizados no período: Ao rever os lançamentos deste período, você
                    permitirá que alterações sejam feitas nos dados da Associação e cadastro de créditos e
                    despesas.</strong></p>
                <label htmlFor="reabrir-periodo">Escreva abaixo o motivo da revisão dos lançamentos</label>
                <textarea
                    rows="3"
                    placeholder="Escreva o motivo"
                    value={propriedades.textareaModalReverConciliacao}
                    onChange={propriedades.handleChangeModalReverConciliacao}
                    name="reabrir-periodo"
                    className="form-control"
                />
            </form>
        )

    };
    return (
        <ModalBootstrapReverConciliacao
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Reabertura prévia da prestação de contas do período"
            bodyText={bodyTextarea()}
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Cancelar"
            primeiroBotaoCss="outline-success"
            segundoBotaoOnclick={propriedades.reabrirPeriodo}
            segundoBotaoTexto="Salvar e reabrir o período"
            segundoBotaoCss={propriedades.textareaModalReverConciliacao.trim() === "" ? "dark" : "success"}
            segundoBotaoDisable={propriedades.textareaModalReverConciliacao.trim() === ""}
        />

    )
};

export const SaldoInsuficiente = (propriedades) => {

    const listaDeSaldosInsuficientes = () => {

        return (
            <>
                <p>Não há saldo disponível para a despesa cadastrada, nas ações/aplicações abaixo. Você deseja
                    cadastrá-la mesmo assim?</p>
                {propriedades.saldosInsuficientesDaAcao && propriedades.saldosInsuficientesDaAcao.length > 0 && propriedades.saldosInsuficientesDaAcao.map((item, index) =>
                    <ul key={index} className="list-group list-group-flush mb-3">
                        <li className="list-group-item p-0">
                            <strong>Ação:</strong> {item.acao}
                        </li>
                        <li className="list-group-item p-0">
                            <strong>Aplicacao:</strong> {item.aplicacao}
                        </li>
                        <li className="list-group-item p-0">
                            <strong>Saldo Disponível:</strong> {item.saldo_disponivel.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                        </li>
                        <li className="list-group-item p-0" key={index}>
                            <strong>Total dos rateios:</strong> {item.total_rateios.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                        </li>
                    </ul>
                )
                }
            </>
        )
    };
    return (
        <ModalBootstrapSaldoInsuficiente
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Saldo Insuficiente"
            bodyText={listaDeSaldosInsuficientes()}
            primeiroBotaoOnclick={propriedades.onSaldoInsuficienteTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const SaldoInsuficienteConta = (propriedades) => {

    const listaDeSaldosInsuficientes = () => {

        return (
            <>
                <p>Não há saldo disponível para a despesa cadastrada na conta
                    selecionada. {propriedades.saldosInsuficientesDaConta.aceitar_lancamento ? "Deseja salvar assim mesmo?" : ""}</p>
                {propriedades.saldosInsuficientesDaConta.saldos_insuficientes && propriedades.saldosInsuficientesDaConta.saldos_insuficientes.length > 0 && propriedades.saldosInsuficientesDaConta.saldos_insuficientes.map((item, index) =>
                    <ul key={index} className="list-group list-group-flush mb-3">
                        <li className="list-group-item p-0">
                            <strong>Conta:</strong> {item.conta}
                        </li>
                        <li className="list-group-item p-0">
                            <strong>Saldo Disponível:</strong> {item.saldo_disponivel.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                        </li>
                        <li className="list-group-item p-0" key={index}>
                            <strong>Total dos rateios:</strong> {item.total_rateios.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        })}
                        </li>
                    </ul>
                )
                }
            </>
        )
    };
    return (
        <ModalBootstrapSaldoInsuficienteDaconta
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Saldo da Conta Insuficiente"
            bodyText={listaDeSaldosInsuficientes()}
            aceitarLancamento={propriedades.saldosInsuficientesDaConta.aceitar_lancamento}
            primeiroBotaoOnclick={propriedades.onSaldoInsuficienteContaTrue}
            primeiroBotaoTexto="OK"
            segundoBotaoOnclick={propriedades.handleClose}
            segundoBotaoTexto="Fechar"
        />
    )
};

export const PeriodoFechado = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Período Fechado"
            bodyText="Este período está fechado. Para inclusão ou edição de lançamentos (créditos ou despesas) é necessário reabrir o processo de prestação de contas. Se for esse o caso, por favor, entre em contato com sua Diretoria Regional de Educação - DRE."
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Fechar"
            primeiroBotaoCss="success"
            // segundoBotaoOnclick={() => {window.location.assign("/prestacao-de-contas")}}
            // segundoBotaoTexto="Sim"
            // segundoBotaoCss="success"
        />
    )
};

export const TextoCopiado = ({show, handleClose}) => {
    return (
        <ModalBootstrap
            show={show}
            onHide={handleClose}
            titulo="Texto copiado com sucesso"
            bodyText='Digite as teclas CTRL + V para "colar" o conteúdo copiado onde desejar'
            primeiroBotaoOnclick={handleClose}
            primeiroBotaoTexto="Fechar"
        />
    )
};

export const SalvarValoresReprogramados = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Todos os dados estão corretos?"
            bodyText="<p><strong>Já verificou se todos os itens cadastrados estão corretos?</strong></p>"
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Não, cancelar"
            primeiroBotaoCss="outline-success"
            segundoBotaoOnclick={propriedades.onSalvarTrue}
            segundoBotaoTexto="Sim, salvar"
            segundoBotaoCss="success"
        />
    )
};

export const ChecarDespesaExistente = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo="Despesa já cadastrada"
            bodyText="<p>Esta despesa já foi cadastrada. Deseja cadastrá-la novamente?</p>"
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoTexto="Não, cancelar"
            primeiroBotaoCss="outline-success"
            segundoBotaoOnclick={propriedades.onSalvarDespesaCadastradaTrue}
            segundoBotaoTexto="Sim, salvar"
            segundoBotaoCss="success"
        />
    )
};

export const AlterarSenhaMeusDados = ({show, handleClose}) => {

    const bodyTextarea = () => {
        return (
            <>
                <div className="row padding-bottom-50">
                    <div className='col'>
                        <FormAlterarSenha
                            textoValidacaoDentroDoForm={false}
                            handleClose={handleClose}
                        />
                    </div>
                    <div className='col'>
                        <TextoValidacaoSenha/>
                    </div>
                </div>
            </>
        )
    };
    return (
        <ModalBootstrapFormMeusDadosSenha
            show={show}
            onHide={handleClose}
            titulo="Editar Senha"
            bodyText={bodyTextarea()}
        />
    )
};

export const AlterarEmailMeusDados = ({show, handleClose}) => {

    const bodyTextarea = () => {
        return (
            <>
                <div className="col-12">
                    <FormAlterarEmail
                        handleClose={handleClose}
                    />
                </div>
            </>
        )
    };
    return (
        <ModalBootstrapFormMeusDadosEmail
            show={show}
            onHide={handleClose}
            titulo="Editar E-mail"
            bodyText={bodyTextarea()}
        />
    )
};

export const ModalConfirmaSalvar = (propriedades) => {
    return (
        <ModalBootstrap
            show={propriedades.show}
            onHide={propriedades.handleClose}
            titulo={propriedades.titulo}
            bodyText={`<p>${propriedades.texto}</p>`}
            primeiroBotaoOnclick={propriedades.handleClose}
            primeiroBotaoCss={propriedades.primeiroBotaoCss}
            primeiroBotaoTexto={propriedades.primeiroBotaoTexto ? propriedades.primeiroBotaoTexto : "OK"}
        />
    )
};
