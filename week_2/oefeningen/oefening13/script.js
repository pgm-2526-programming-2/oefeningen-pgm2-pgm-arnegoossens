function voegToeAanLijst() {
    // Implementeer de logica om gegevens toe te voegen aan de lijst
    $input = document.getElementById("invoerveld");
    $list = document.getElementById("mijnLijst");
    let html = "";

    html = `<li>${$input.value}</li>`

    $list.innerHTML += html;
}