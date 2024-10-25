const technologies = [
  "Vue3",
  "HTML5 & CSS3",
  "JavaScript",
  "Git / GitHub",
  "TypeScript",
  "NodeJS",
  "ExpressJs",
  "Sequelize",
  "SQL (MySQL)",

];
for (const tech of technologies) {
  const li = document.createElement("li");
  li.innerText = tech;
  document.getElementById("technologies").appendChild(li);
}

const inProgressTechnologies = 
[
  "React", 
  "NextJs", 
  "Bootstrap5",
];
for (const tech of inProgressTechnologies) {
  const li = document.createElement("li");
  li.innerText = tech;
  document.getElementById("in-progress-technologies").appendChild(li);
}
