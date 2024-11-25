// html2pdf script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>

const elementsDownload = document.querySelectorAll(".download-cv");
console.log( elementsDownload)

for(const el of elementsDownload){
    el.addEventListener("click", () => {
        const content = document.getElementById("page-content");
        console.log( content )
        html2pdf()
        .from(content)
        .set({
            pagebreak: { mode: 'avoid-all'}
        })
        .save('cv-dokument-kamil-blonski.pdf')
    })
}