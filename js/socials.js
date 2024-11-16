const socialsList = [
    { name: "GitHub", link: "https://github.com/kbloski" },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kamil-b%C5%82o%C5%84ski-1958b4297/",
    },
];
for (const social of socialsList) {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.innerText = social.name;
  a.href = social.link;
  a.target = "_blank";

  li.appendChild(a);

  document.getElementById("socials").appendChild(li);
}