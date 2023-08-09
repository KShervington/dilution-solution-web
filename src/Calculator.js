import { observer } from "mobx-react-lite"

let currentUnit; // Selected unit type for stock solution
let solutionVolume;
let dilutionVolume;
let minVolume;
let stockSolution;

currentUnit = sessionStorage.getItem("stockSolutionUnits");
solutionVolume = sessionStorage.getItem("stockSolution");



// Scan input and split based on comma delimiter
inputVals = scanObj.nextLine().split(",");
inputArrayLength = inputVals.length;

// Created converted val array based on number of input values
convertedValues = new double[inputArrayLength];
solutionVolume = 0;

// Assign selected unit for stock solution
currentUnit = unitTypes[2]; // In js, this can get from dropdown box

// Convert all input into doubles
convertInputToDouble();

// Print starting values
System.out.println("Minimum volume is: " + minVolume + "µL");
System.out.println("Stock Solution is: " + stockSolution + currentUnit);

// Handles unit conversions
convertStockSolution();
System.out.println("------------------------------------");

// Does all calculations for dilution solution transfers
calculateVolumes();


function calculateVolumes() {
    for (let j = inputArrayLength - 1; j > 0; j--) {

        dilutionVolume = minVolume + solutionVolume;

        solutionVolume = (convertedValues[j] * dilutionVolume) / convertedValues[j - 1];

        System.out.println("TUBE " + (j + 1));
        System.out.println("Solution volume from tube [" + j + "] is: " + solutionVolume + "µL");
        System.out.println("Volume of dilution is: " + (dilutionVolume) + "µL");
        System.out.println("Volume of solvent is: " + (dilutionVolume - solutionVolume) + "µL");
        System.out.println();

    }

    // Display stock solution values
    dilutionVolume = minVolume + solutionVolume;
    solutionVolume = (convertedValues[0] * dilutionVolume) / stockSolution;

    System.out.println("TUBE 1");

    // TODO: 'stock' can be variable based on input
    System.out.println("Volume from stock solution is: " + solutionVolume + "µL");
    System.out.println("Volume of dilution in tube [1] is: " + (dilutionVolume) + "µL");

    // TODO: 'solvent' can be variable based on input
    System.out.println("Volume of solvent is: " + (dilutionVolume - solutionVolume) + "µL");

}

function convertStockSolution() {
    switch (currentUnit) {
        case "mM":
            stockSolution *= 1000;
            System.out.println("Stock solution converted to: " + stockSolution + "µM");
            break;

        case "cells/mL":
            stockSolution /= 1000;
            System.out.println("Stock solution converted to: " + stockSolution + "cells/µL");
            break;

        case "µM":
            break;
    }
}

function convertInputToDouble() {
    for (let i = 0; i < inputVals.length; i++) {
        convertedValues[i] = Double.parseDouble(inputVals[i]);
        System.out.println(convertedValues[i] + "\t- TUBE " + (i + 1));
    }
}

