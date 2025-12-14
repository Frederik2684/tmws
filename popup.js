
function popup() {
    Swal.fire({
        title: "🎄 Vianočná akcia 🎄",
        text: "Objednaj do Vianoc a dostaneš tričko zdarma",
        imageUrl: "popup.jpg",
        imageWidth: 400,
        imageAlt: "Vianočná akcia",
        confirmButtonColor: "#ffc107"
    });
}

window.addEventListener("load", popup());

