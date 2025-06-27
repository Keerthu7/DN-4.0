import documents.Document;
import factories.worddocuFactory;
import factories.PdfDocumentFactory;
import factories.ExcelDocumentFactory;
import factories.DocumentFactory;

public class hello {
    public static void main(String[] args) {
        DocumentFactory wordFactory = new worddocuFactory();
        Document wordDoc = wordFactory.createDocument();
        wordDoc.open();

        DocumentFactory pdfFactory = new PdfDocumentFactory();
        Document pdfDoc = pdfFactory.createDocument();
        pdfDoc.open();

        DocumentFactory excelFactory = new ExcelDocumentFactory();
        Document excelDoc = excelFactory.createDocument();
        excelDoc.open();
    }
}
