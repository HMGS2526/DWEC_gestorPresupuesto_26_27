function mostrarDatoEnId(idElemento, valor){
    const elemento = document.getElementById(idElemento);
    elemento.textContent = String(valor);
}
export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}