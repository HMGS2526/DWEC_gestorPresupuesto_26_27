function mostrarDatoEnId(idElemento, valor){
    const elemento = document.getElementById(idElemento);
    elemento.textContent = String(valor);
}
function mostrarGastoWeb(idElemento, gasto){
    let divMaestro = document.createElement('div');
    divMaestro.className = 'gasto';
    document.getElementById(idElemento).append(divMaestro);

}
export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}