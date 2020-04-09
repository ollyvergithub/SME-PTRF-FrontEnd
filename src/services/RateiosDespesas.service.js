import api from './Api'
import {ASSOCIACAO_UUID} from "./auth.service";

const authHeader = {
    'Content-Type': 'application/json'
}

export const getListaRateiosDespesas = async uuid => {
    return (await api.get('api/rateios-despesas/', authHeader)).data
}


export const filtroPorPalavra = async (palavra) => {
    return (await api.get(`api/rateios-despesas/?search=${palavra}&associacao__uuid=${localStorage.getItem(ASSOCIACAO_UUID)}`, authHeader)).data
}
