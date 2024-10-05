const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.classList = 'scroll-btn'
scrollToTopBtn.innerText = 'GO TO UP';
const body = document.getElementsByTagName('body')[0].appendChild(scrollToTopBtn);
scrollToTopBtn.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
window.addEventListener('scroll', setProgressBar);


function setProgressBar(){
    const calcProcHeight = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    )

    if (window.scrollY < 200){
        scrollToTopBtn.style.display = 'none';
    } else {
        scrollToTopBtn.style.display = 'block';
        
    }

    const color1 = 'rgb(255, 195, 45)';
    const bg = `
            conic-gradient(
                ${color1} 0% ${calcProcHeight}%,
                rgba(0, 0, 0, 0.4) ${calcProcHeight}% 100%
            )`;

    scrollToTopBtn.style.background = bg;

}




