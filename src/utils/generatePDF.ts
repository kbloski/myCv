// ts-ignre because html2pdf not have public types
// @ts-ignore 
import html2pdf from 'html2pdf.js'
interface generatePDFProps {
    elementHtml : HTMLElement,
    filename: string
}

export async function generatePDFandSave( { elementHtml, filename } : generatePDFProps){
    html2pdf()
        .set({
            html2canvas: { scale: 2, scrollY: -window.scrollY },
            margin: 0,
            pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        })
        .from(elementHtml)
        .save(`${filename}.pdf`);
}
