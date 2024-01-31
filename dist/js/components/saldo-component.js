import { formatarData, formatarMoeda } from "../utils/formatters.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoDataAcesso !== null) {
    elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
redenrizarSaldo();
export function redenrizarSaldo() {
    if (elementoSaldo !== null) {
        elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        redenrizarSaldo();
    }
};
export default SaldoComponent;
