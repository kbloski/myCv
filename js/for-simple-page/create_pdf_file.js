// html2pdf script
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>

const elementsDownload = document.querySelectorAll(".download-cv");
console.log(elementsDownload);

for (const el of elementsDownload) {
    el.addEventListener("click", () => {
        const content = document.getElementById("page-content");
        console.log(content);

        if (!content) {
            console.error("Nie znaleziono elementu o id 'page-content'");
            return;
        }

        html2pdf()
            .from(content)
            .set({
                pageSize: 'A4',
                margin: 0, 
                // pagebreak: { mode: "avoid-all" },
                // Możesz także dodać marginesy lub inne opcje
                // Jeśli chcesz unikać łamania stron:
            })
            .save("kamil_blonski_cv_simple-min.pdf");
    });
}
