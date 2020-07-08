import React  from "react";
import {PaginasContainer} from "../../PaginasContainer";
import {ListaDeReceitas} from "../../../componentes/Receitas/ListaDeReceitas";

export const ListaDeReceitasPage = props => {


    return (
        <PaginasContainer>
            <h1 className="titulo-itens-painel mt-5">Créditos da escola</h1>
            <div className="page-content-inner ">
                <ListaDeReceitas {...props}/>
            </div>
        </PaginasContainer>

    );
}