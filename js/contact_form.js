const sendInformationEl = document.getElementById("send-information");

const buttonSend = document.getElementById("contact-button");
// Some bug in github acitons
// buttonSend.addEventListener("click", () => {
    sendInformationEl.innerText =
        "Formularz powinien automatycznie przekierować do domyślnej aplikacji pocztowej po naciśnięciu przycisku „Wyślij”. Jeśli tak się nie stanie, oznacza to, że wiadomość nie została wysłana i należy się skontaktować drogą mailową lub telefoniczną.";
// });
