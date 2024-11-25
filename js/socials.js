const socialsList = [
    { name: "GitHub", link: "https://github.com/kbloski" },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kamil-b%C5%82o%C5%84ski-1958b4297/",
    },
];

function initSocials(){
  const elementsUl = document.querySelectorAll(`[data-id='socials']`);

  for(const ulEl of elementsUl){
    for(const social of socialsList){
      const liEl = document.createElement('li');
      liEl.innerHTML = `
        <a href=${social.link}>${social.name}</a>
      `
      ulEl.appendChild(liEl)
    }
  }
}

initSocials();
