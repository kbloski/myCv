import { email } from "./personal.js";

document
  .getElementById("form-contact")
  .addEventListener("submit", (event) => sendEmail(event));

const sendEmail = (event) => {
  event.preventDefault();

  const subject = document.getElementById("form-subject").value;
  const body = document.getElementById("form-body").value;

  const link = `mailto:${email}?subject=${subject}&body=${body}`;
  window.location.href = link;
};


// const sendInformationEl = document.getElementById("send-information");

// const buttonSend = document.getElementById("contact-button");
// // Some bug in github acitons
// // buttonSend.addEventListener("click", () => {
//     sendInformationEl.innerText =
//         "Formularz powinien automatycznie przekierować do domyślnej aplikacji pocztowej po naciśnięciu przycisku „Wyślij”. Jeśli tak się nie stanie, oznacza to, że wiadomość nie została wysłana i należy się skontaktować drogą mailową lub telefoniczną.";
// // });
