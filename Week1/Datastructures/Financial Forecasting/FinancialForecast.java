public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double currentValue, double growthRate, int years) {
        // Base case: no more years
        if (years == 0) {
            return currentValue;
        }
        // Recursive case: calculate value for previous year and grow it
        return futureValue(currentValue, growthRate, years - 1) * (1 + growthRate);
    }

    public static void main(String[] args) {
        double currentValue = 1000.0; // Starting amount
        double growthRate = 0.05;     // 5% growth rate
        int years = 5;

        double result = futureValue(currentValue, growthRate, years);
        System.out.printf("Future value after %d years: %.2f\n", years, result);
    }
}
