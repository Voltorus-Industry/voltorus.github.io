function calculer() {
    let surface = Number(document.getElementById("surface").value);

    let ratio = Number(document.getElementById("ratio").value);

    let cycles = Number(document.getElementById("cycles").value);

    let prixEau = Number(document.getElementById("prixEau").value);

    let production = Number(document.getElementById("production").value);

    let energie = Number(document.getElementById("energie").value);

    let prixElectricite = Number(document.getElementById("electricite").value);

    let prixMachine = Number(document.getElementById("machine").value);

    // Agricultural water requirement
    let journalier = surface * ratio * cycles;
    let annuel = journalier * 365;

    // Daily
    document.getElementById("jour").innerHTML = journalier.toFixed(2);

    // Weekly
    document.getElementById("semaine").innerHTML = (journalier * 7).toFixed(2);

    // Monthly
    document.getElementById("mois").innerHTML = (journalier * 30).toFixed(2);

    // Annual
    document.getElementById("annee").innerHTML = annuel.toFixed(2);

    // Current water cost
    let coutEau = annuel * prixEau;
    document.getElementById("coutEau").innerHTML = coutEau.toFixed(2);

    // AWG
    let productionM3jour = production / 1000;

    // Number of machines required
    let machines = Math.ceil(journalier / productionM3jour);
    document.getElementById("nbMachine").innerHTML = machines;

    // Annual AWG production
    let productionAWG = machines * productionM3jour * 365;
    document.getElementById("productionAWG").innerHTML = productionAWG.toFixed(0);

    // Energy cost
    let coutAWG = productionAWG * energie * prixElectricite;
    document.getElementById("coutAWG").innerHTML = coutAWG.toFixed(2);

    // Estimated savings
    let economie = coutEau - coutAWG;
    document.getElementById("economie").innerHTML = economie.toFixed(2);

    // ROI
    let investissement = machines * prixMachine;

    if (economie > 0) {
        let roi =
        investissement / economie;
        document.getElementById("roi").innerHTML = roi.toFixed(1);
    } else {
        document.getElementById("roi").innerHTML = "Not profitable";
    }
}

calculer();
