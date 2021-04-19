// Partendo dall'esercizio del biglietto, aggiungiamo la parte visiva come da screenshot

// Creiamo un finto biglietto del treno con:

// Nome passeggero

// Codice treno (numero casuale tra 90000 e 100000 escluso)

// Numero carrozza

// Prezzo calcolato

// Categoria selezionata dall'utente

// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.


// Aggiungiamo listener sul form all'evento "submit"
// submit = avviene ogni volta che si preme il pulsante INVIO all'interno di un input 
//  o si preme sul pulsante invio con il mouse
window.addEventListener("load", function () {
    var myForm = document.getElementById("field-form");

    console.dir(myForm)

    myForm.addEventListener("submit", function (event) {
        var usernameElement = document.querySelector("#userName").value;
        var kmElement = document.querySelector("#km").value;
        var tipoDiTariffaElement = document.querySelector("#fascia-eta").value;

        // Blocchiamo il comportamento di default del submit che normalmente
        // ricaricherebbe la pagina
        event.preventDefault();

        console.log(usernameElement)
        console.log(kmElement)
        console.log(tipoDiTariffaElement)


        var errore = false;

        if (isNaN(kmElement)) {
            alert("i km vanno indicati con un numero")
            errore = true;
        }
        if (!kmElement) {
            alert("manca la quantità di km");
            errore = true;
        }
        if (!usernameElement) {
            alert("Mancano il nome ed il cognome");
            errore = true;
        }
        if (!isNaN(usernameElement)) {
            alert("Inserire il nome ed il cognome")
            errore = true;
        }

        if (errore) {
            return;
        }

        var prezzoBase = 0.21;

        var prezzoTotale = prezzoBase * kmElement;

        var sconto = 0;
        var tipoOfferta = "Base";


        if (tipoDiTariffaElement == "minorenne") {
            sconto = prezzoTotale * 20 / 100;
            tipoOfferta = "Sconto junior"

        } else if (tipoDiTariffaElement == "senior") {
            sconto = prezzoTotale * 40 / 100;
            tipoOfferta = "Sconto senior"

        } else {
            tipoOfferta = "Tariffa base"
        }

        var prezzoFinale = prezzoTotale - sconto;

        document.getElementById("nomeUsername").innerHTML = usernameElement
        document.getElementById("carrozza").innerHTML = numeroRandom(1, 17)
        document.getElementById("codiceCp").innerHTML = numeroRandom(90000, 100000)
        document.getElementById("costoBiglietto").innerHTML = prezzoFinale.toFixed(2) + " €";
        document.getElementById("tipoOfferta").innerText = tipoOfferta;
    });

    function numeroRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

})