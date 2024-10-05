const socialsList = [
    { name: 'GitHub', link: 'https://github.com/kbloski' },
]
for (const social of socialsList) {
    const li = document.createElement('li');
    const a = document.createElement('a')
    const img = document.createElement('img');


    a.innerText = social.name;
    a.href = social.link;
    a.target = '_blank'
    img.src = ".\\images\\icons\\link.png";
    console.log(img.src)
    img.ariaHidden = true;
    img.classList.add('link-icon')

    li.appendChild(img);
    li.appendChild(a);

    document.getElementById('socials').appendChild(li)
}