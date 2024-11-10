const sendInformationEl = document.getElementById("send-information");
// sendInformationEl.style.display = 'none'

const buttonSend = document.getElementById("contact-button");
buttonSend.addEventListener('click', () => {
    sendInformationEl.style.display = 'block'
})