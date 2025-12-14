
// vyhladavanie

function vyhladat() {
    const hladanyText = this.value.toLowerCase();
    const karty = document.querySelectorAll(".plan-karta");


    karty.forEach(karta => {

        const nazov = karta.getAttribute("data-nazov").toLowerCase();

        karta.style.display = nazov.includes(hladanyText) ? "" : "none";
    });
}

document.getElementById("vyhladavac").addEventListener("input", vyhladat);


// 1) doplnenie nazvu po stlaceni tlacidla objednat

document.querySelectorAll(".btn-vybrat").forEach(btn => {

    btn.addEventListener("click", function () {

        const nazovPlanu = this.dataset.plan;


        document.getElementById("vyberPlanu").value = nazovPlanu;

        // posun na formular
        document.getElementById("formularPlan").scrollIntoView({ behavior: "smooth" });
    });
});


// odoslanie formulara

function odoslanie() {

    const plan = document.getElementById("vyberPlanu").value.trim();

    const meno = document.getElementById("meno").value.trim();

    const priezvisko = document.getElementById("priezvisko").value.trim();

    const cislo = document.getElementById("cislo").value.trim();

    const mail = document.getElementById("mail").value.trim();

    const poznamka = document.getElementById("poznamka").value.trim();

    const suhlas = document.getElementById("suhlas").checked;



    if (!plan || !meno || !priezvisko || !cislo || !mail || !suhlas) {


        Swal.fire({
            icon: "error",
            title: "Chýbajú údaje",
            text: "Vyplň všetky polia vrátane súhlasu.",
            confirmButtonColor: "#ffc107"
        });
        return;
    }


    if (!mail.includes("@")) {
        Swal.fire({
            icon: "error",
            title: "Neplatný email",
            text: "Email musí obsahovať @.",
            confirmButtonColor: "#ffc107"
        });
        return;
    }



    Swal.fire({
        icon: "success",
        title: "Formulár odoslaný!",
        html: `
            <b>Plán:</b> ${plan}<br>
            <b>Meno:</b> ${meno}<br>
            <b>Priezvisko:</b> ${priezvisko}<br>
            <b>Telefón:</b> ${cislo}<br>
            <b>Email:</b> ${mail}<br>
            <b>Poznámka:</b> ${poznamka}
        `,
        confirmButtonColor: "#ffc107"
    });
}


document.getElementById("odoslatBtn").addEventListener("click", odoslanie)
