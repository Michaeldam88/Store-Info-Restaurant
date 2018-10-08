var Spesa = function (ristorante, cliente, conto, mancia) {
    this.ristorante = ristorante;
    this.cliente = cliente;
    this.conto = conto;
    this.mancia = mancia;
}

var numeroCliente = 0;

var clienti = [];

function calcoloSpesaTotale(conto, mancia) {

    return parseFloat(conto) + parseFloat(mancia);

}

function calcoloMancia(conto, percMancia) {
    if (percMancia >= 10) {
        totMancia = conto * ('0.' + percMancia);
    } else {
        totMancia = conto * ('0.0' + percMancia);
    }
    return totMancia;

}

function visualizaListado() {
    for (let i = 0; i < clienti.length; i++) {

        var totMancia = calcoloMancia(clienti[i].conto, clienti[i].mancia);
        var totConMancia = calcoloSpesaTotale(clienti[i].conto, totMancia);

        listadoRisultati += ("- " + (i + 1) + " La spesa di " + clienti[i].cliente + " nel " + clienti[i].ristorante + " è stata di " + clienti[i].conto + "€ con una mancia di " + totMancia + "€. In totale ha speso " + totConMancia + "€. </br>");
        document.getElementById("risultato").innerHTML = listadoRisultati;
    }
}

document.getElementById("add").addEventListener("click", function () {
    var entrataRistorante = document.getElementById("ristorante");
    var entrataCliente = document.getElementById("cliente");
    var entrataConto = document.getElementById("conto");
    var entrataMancia = document.getElementById("mancia");

    if (entrataRistorante.value !== "" && entrataCliente.value !== "" && entrataConto.value !== "" && entrataMancia.value !== "") {
        clienti[numeroCliente] = new Spesa(entrataRistorante.value, entrataCliente.value, entrataConto.value, entrataMancia.value);

        numeroCliente += 1;

        document.getElementById("inserisciDati").reset();

        listadoRisultati = "";
        visualizaListado();
    } else {
        alert("Completa i dati");
    }

});