function mostrarDatoEnId(idElemento, valor){
    const elemento = document.getElementById(idElemento);
    elemento.textContent = valor;
}
function mostrarGastoWeb(idElemento, gasto){
    const divMaestro = document.createElement('div');
    divMaestro.className = 'gasto';
    document.getElementById(idElemento).append(divMaestro);

    const divDescripcion = document.createElement('div');
    divDescripcion.className = 'gasto-descripcion';
    divDescripcion.textContent = gasto.descripcion;
    divMaestro.append(divDescripcion);

    const divFecha = document.createElement('div');
    divFecha.className = 'gasto-fecha';
    divFecha.textContent = gasto.fecha;
    divMaestro.append(divFecha);

    const divValor = document.createElement('div');
    divValor.className = 'gasto-valor';
    divValor.textContent = gasto.valor;
    divMaestro.append(divValor);

    const divEtiquetas = document.createElement('div');
    divEtiquetas.className = 'gasto-etiquetas';

    for (let etiqueta of gasto.etiquetas) {
        const spanEtiqueta = document.createElement('span');
        spanEtiqueta.className = 'gasto-etiquetas-etiqueta';
        spanEtiqueta.textContent = etiqueta + " ";
        divEtiquetas.append(spanEtiqueta);
    }
    divMaestro.append(divEtiquetas);
}
function mostrarGastosAgrupadosWeb(){}


export{
    mostrarDatoEnId,
    mostrarGastoWeb,
    mostrarGastosAgrupadosWeb
}