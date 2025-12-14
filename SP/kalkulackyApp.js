function vypocetBMI() {

    const vaha = parseFloat(document.getElementById("vaha").value);
    const vyskaCm = parseFloat(document.getElementById("vyska").value);

    if (!vaha || !vyskaCm) {
        Swal.fire({
            icon: "error",
            title: "Chýbajú údaje",
            text: "Zadaj váhu aj výšku.",
            confirmButtonColor: "#ffc107"
        });
        return;
    }

    const vyskaM = vyskaCm / 100;
    const bmi = vaha / (vyskaM * vyskaM);

    let bmiR = Math.round(bmi);

    let stav = "";

    if (bmi < 18.5) {
        stav = "Podváha";
    } else if (bmi < 25) {
        stav = "Normálna hmotnosť";
    } else if (bmi < 30) {
        stav = "Nadváha";
    } else {
        stav = "Obezita";
    }

    Swal.fire({
        icon: "info",
        title: "Výsledok BMI",
        html: `
            <strong>BMI:</strong> ${bmiR}<br>
            <strong>Kategória:</strong> ${stav}
        `,
        confirmButtonColor: "#ffc107"
    });

}

function vypocetBMR() {

    const pohlavie = document.getElementById("pohlavie").value;
    const vek = parseInt(document.getElementById("vek").value);
    const vaha = parseFloat(document.getElementById("vahaBMR").value);
    const vyska = parseFloat(document.getElementById("vyskaBMR").value);

    if (!pohlavie || !vek || !vaha || !vyska) {
        Swal.fire({
            icon: "error",
            title: "Chýbajú údaje",
            text: "Vyplň všetky polia.",
            confirmButtonColor: "#ffc107"
        });
        return;
    }

    let bmr;

    if (pohlavie === "muz") {
        bmr = 10 * vaha + 6.25 * vyska - 5 * vek + 5;
    } else {
        bmr = 10 * vaha + 6.25 * vyska - 5 * vek - 161;
    }

    Swal.fire({
        icon: "info",
        title: "Tvoje BMR",
        html: `
            <strong>BMR:</strong> ${Math.round(bmr)} kcal/deň<br>
            <small>Toto je množstvo kalórií, ktoré tvoje telo spotrebuje v úplnom pokoji.</small>
        `,
        confirmButtonColor: "#ffc107"
    });

}

function vypocetRM() {

    const vaha = parseFloat(document.getElementById("vahaRM").value);
    const opakovania = parseInt(document.getElementById("opakovania").value);

    if (!vaha || !opakovania || opakovania < 1) {
        Swal.fire({
            icon: "error",
            title: "Chýbajú údaje",
            text: "Zadaj váhu a počet opakovaní.",
            confirmButtonColor: "#ffc107"
        });
        return;
    }

    const oneRM = vaha * (1 + opakovania / 30);

    Swal.fire({
        icon: "info",
        title: "Tvoje 1RM",
        html: `
            <strong>Odhadované 1RM:</strong> ${oneRM.toFixed(1)} kg<br>
            <small>Hodnota je orientačná a závisí od techniky a únavy.</small>
        `,
        confirmButtonColor: "#ffc107"
    });
}




document.getElementById("vypocitajBMI").addEventListener("click", vypocetBMI);

document.getElementById("vypocitajBMR").addEventListener("click", vypocetBMR);

document.getElementById("vypocitajRM").addEventListener("click", vypocetRM);