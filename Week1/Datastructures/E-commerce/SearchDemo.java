import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, String targetName) {
        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }
        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, String targetName) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = products[mid].productName.compareToIgnoreCase(targetName);
            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shoes", "Fashion"),
            new Product(3, "Phone", "Electronics"),
            new Product(4, "Watch", "Accessories")
        };

        // Linear Search
        System.out.println("Linear Search:");
        Product result1 = linearSearch(products, "Phone");
        System.out.println(result1 != null ? result1 : "Product not found");

        // Sort array before Binary Search
        Arrays.sort(products, Comparator.comparing(p -> p.productName.toLowerCase()));

        // Binary Search
        System.out.println("\nBinary Search:");
        Product result2 = binarySearch(products, "Phone");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
