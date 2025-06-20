package com.example.singleton;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First message");

        Logger logger2 = Logger.getInstance();
        logger2.log("Second message");

        // Confirm both references point to the same instance
        System.out.println("Are both loggers same? " + (logger1 == logger2));
    }
}
