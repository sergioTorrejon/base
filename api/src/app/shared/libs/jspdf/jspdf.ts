import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export const pdfBuild=async (data:any)=> {
  console.log('******************PDF******************')

    const tituloReport = 'Reporte-Documentos'
    const header = []
    for (let h of data.header) {
      header.push(h['label'])
    }

    //cuerpo
    let body = []
    for (let row of data.data) {
      let r = []
      for (let h of data.header) {
        r.push(row[h['name']] || '')
      }
      body.push(r)
    }
    let doc = new jsPDF('landscape', 'cm', 'a4')
    doc.setFontSize(10);
    doc.text("REGISTRO DEL MERCADO DE SEGUROS - RMS", doc.internal.pageSize.width / 3, 1)
    doc.setFontSize(7);
    doc.setTextColor('red')
    autoTable(doc,{
      startY: 2,
      styles: {fontSize: 7},
      head: [header],
      body: body
    })
    doc.setProperties({
      title: tituloReport
    })
    const pdf = await Buffer.from(doc.output('arraybuffer'));
    return pdf
  }