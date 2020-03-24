import React from "react";
import {Formik} from "formik";
import MaskedInput from 'react-text-mask'
import {YupSignupSchemaCadastroDespesa, cpfMaskContitional, calculaValorRecursoAcoes, trataNumericos, round} from "../../../utils/ValidacoesAdicionaisFormularios";
import NumberFormat from 'react-number-format';
import DatePicker, {registerLocale} from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import pt from "date-fns/locale/pt-BR"
registerLocale("pt", pt );

export const DespesaForm = () => {

    const initialValues = () => (
        {
            cnpCpf: "",
            razaoSocial: "",
            tipoDocumento: "",
            numreroDocumento: "",
            dataDocumento: "",
            tipoTransacao: "",
            dataTransacao: "",
            valorTotal: "",
            valorRecursoProprio: "",
            valorRecursoAcoes: "",
        }
    )

    const DatePickerField = ({ name, value, onChange }) => {
        return (
            <DatePicker
                selected={(value && new Date(value)) || null}
                onChange={val => {
                    onChange(name, val);
                }}
                dateFormat="dd/MM/yyyy"
                locale="pt"
                showYearDropdown
                className="form-control"
                placeholderText="Somente números"
                customInput={
                    <MaskedInput
                        mask = {[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                    />
                }
            />
        );
    };

    const onSubmit = (values) => {
        values.valorTotal = trataNumericos(values.valorTotal);
        values.valorRecursoProprio = trataNumericos(values.valorRecursoProprio);
        values.valorRecursoAcoes = round( (values.valorTotal - values.valorRecursoProprio),2 );
        console.log("Ollyver ", values)
    }

    return (
        <>
            <Formik
                initialValues={initialValues()}
                validationSchema={YupSignupSchemaCadastroDespesa}
                validateOnBlur={true}
                onSubmit={onSubmit}
            >
                {props => {
                    const {
                        values,
                        setFieldValue
                    } = props;
                    return (
                    <form onSubmit={props.handleSubmit}>
                        <div className="form-row">
                            <div className="col-12 col-md-6 mt-4">
                                <label htmlFor="cnpCpf">CNPJ ou CPF do fornecedor</label>
                                <MaskedInput
                                    mask={(valor) => cpfMaskContitional(valor)}
                                    value={props.values.cnpCpf}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    name="cnpCpf" id="cnpCpf" type="text" className="form-control" placeholder="Digite o número do documento"
                                />
                                {props.errors.cnpCpf && <span className="span_erro text-danger mt-1"> {props.errors.cnpCpf}</span>}
                            </div>
                            <div className="col-12 col-md-6  mt-4">
                                <label htmlFor="razaoSocial">Razão social do fornecedor</label>
                                <input
                                    value={props.values.razaoSocial}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    name="razaoSocial" id="razaoSocial" type="text" className="form-control" placeholder="Digite o nome"/>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="tipoDocumento">Tipo de documento</label>
                                <select
                                    value={props.values.tipoDocumento}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    name='tipoDocumento' id='tipoDocumento' className="form-control" >
                                    <option value="">Selecione o tipo</option>
                                    <option value="laranja">Laranja</option>
                                    <option value="limao">Limão</option>
                                    <option value="coco">Coco</option>
                                    <option value="manga">Manga</option>
                                </select>
                            </div>

                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="numreroDocumento">Número do documento</label>
                                <input
                                    value={props.values.numreroDocumento}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    name="numreroDocumento" id="numreroDocumento" type="text" className="form-control" placeholder="Digite o número"/>
                            </div>

                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="dataDocumento">Data do documento</label>
                                <DatePickerField
                                    name="dataDocumento"
                                    id="dataDocumento"
                                    value={values.dataDocumento}
                                    onChange={setFieldValue}
                                />
                                {props.errors.dataDocumento && <span className="span_erro text-danger mt-1"> {props.errors.dataDocumento}</span>}
                            </div>

                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="tipoTransacao">Tipo de transação</label>
                                <select
                                    value={props.values.tipoTransacao}
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    name='tipoTransacao' id='tipoTransacao' className="form-control" >
                                    <option value="">Selecione o tipo</option>
                                    <option value="laranja">Laranja</option>
                                    <option value="limao">Limão</option>
                                    <option value="coco">Coco</option>
                                    <option value="manga">Manga</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="dataTransacao">Data da transação</label>
                                <DatePickerField
                                    name="dataTransacao"
                                    id="dataTransacao"
                                    value={values.dataTransacao}
                                    onChange={setFieldValue}
                                />
                                {props.errors.dataTransacao && <span className="span_erro text-danger mt-1"> {props.errors.dataTransacao}</span>}

                            </div>
                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="valorTotal">Valor total</label>
                                <NumberFormat
                                    value={props.values.valorTotal}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    decimalScale = {2}
                                    prefix={'R$'}
                                    name="valorTotal"
                                    id="valorTotal"
                                    className="form-control"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                />
                                {props.errors.valorTotal && <span className="span_erro text-danger mt-1"> {props.errors.valorTotal}</span>}

                            </div>
                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="valorRecursoProprio">Valor do recurso próprio</label>
                                <NumberFormat
                                    value={props.values.valorRecursoProprio}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    decimalScale = {2}
                                    prefix={'R$'}
                                    name="valorRecursoProprio"
                                    id="valorRecursoProprio"
                                    className="form-control"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                />
                                {props.errors.valorRecursoProprio && <span className="span_erro text-danger mt-1"> {props.errors.valorRecursoProprio}</span>}
                            </div>
                            <div className="col-12 col-md-3 mt-4">
                                <label htmlFor="valorRecursoAcoes">Valor do recurso das ações</label>
                                <NumberFormat
                                    value={calculaValorRecursoAcoes(props)}
                                    thousandSeparator={'.'}
                                    decimalSeparator={','}
                                    decimalScale = {2}
                                    prefix={'R$ '}
                                    name="valorRecursoAcoes"
                                    id="valorRecursoAcoes"
                                    className="form-control"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    readOnly={true}
                                />
                                {props.errors.valorRecursoAcoes && <span className="span_erro text-danger mt-1"> {props.errors.valorRecursoAcoes}</span>}

                            </div>

                        </div>
                        <div className="d-flex  justify-content-end">
                            <button type="submit" className="btn btn-success mt-2">Acessar</button>
                        </div>
                    </form>
                );
                }}
            </Formik>
        </>
    );
}