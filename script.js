const btnGenerate = document.querySelector("#generate-pdf");


btnGenerate.addEventListener("click", () => {

    // Conteudo do PDF
    const content = document.querySelector("#content")

    // Configuração do arquivo final de PDF

    const options = {
        margin: [10, 10, 10, 10],
        filename: "arquivo.pdf",
        html2canvas: {scale: 2},
        jsPDF: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    // Gerar e baixar o PDF

    html2pdf().set(options).from(content).save();
})









// <script  biblioteca para o gerador de pdf 
//src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js" integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==" crossorigin="anonymous" referrerpolicy="no-referrer">
//</script> 