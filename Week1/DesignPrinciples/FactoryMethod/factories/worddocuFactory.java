package factories;

import documents.Document;
import documents.WordDocument;

public class worddocuFactory extends DocumentFactory {
    public Document createDocument() {
        return new WordDocument();
    }
}
