import { makeObservable, observable, action } from "mobx"

class InputStore {
    minVolume = 0;
    stockSolution = 0;
    stockSolutionUnits = "µM";
    solventName = "Solvent";
    stockName = "Dilution";
    numTubes = 0;
    tubeValues = new Map();
    displayValComponent = false;
    displayVals = {
        0:
        {
            minVolume: 0,
            stockSolution: 0
        }
    }

    constructor() {
        makeObservable(this, {
            minVolume: observable,
            stockSolution: observable,
            stockSolutionUnits: observable,
            solventName: observable,
            stockName: observable,
            numTubes: observable,
            tubeValues: observable,
            displayVals: observable,
            displayValComponent: observable,
            setMinVolume: action,
            setStockSolution: action,
            setStockSolutionUnits: action,
            setSolventName: action,
            setStockName: action,
            setNumTubes: action,
            setTubeValue: action,
            doCalculations: action
        });
    }

    setMinVolume(volume) {
        this.minVolume = parseFloat(volume);
    }

    setStockSolution(volume) {
        this.stockSolution = parseFloat(volume);
    }

    setStockSolutionUnits(units) {
        this.stockSolutionUnits = units;
    }

    setSolventName(name) {
        this.solventName = name.trim();
    }

    setStockName(name) {
        this.stockName = name.trim();
    }

    setNumTubes(tubeCount) {
        this.numTubes = parseInt(tubeCount);
    }

    setTubeValue(index, value) {
        this.tubeValues.set(index, parseFloat(value));
    }

    doCalculations() {
        // Initial Validaitons
        this.reduceMapSize();
        this.logInput();

        // Call Calculator main function
        this.mainCalculator();

        console.log("** displayVals Object **\n" + JSON.stringify(this.displayVals, null, 1));

        this.displayValComponent = true;
    }

    logInput() {
        for (let [key, value] of this.tubeValues) {
            console.log("Tube " + key + " = " + value);
        }

        console.log("map size is: " + this.tubeValues.size);
        console.log("minVolume = " + this.minVolume + " (" + typeof this.minVolume + ")");
        console.log("stockSolution = " + this.stockSolution + " (" + typeof this.stockSolution + ")");
        console.log("numTubes = " + this.numTubes + " (" + typeof this.numTubes + ")");
        console.log("solventName = " + this.solventName + " (" + typeof this.solventName + ")");
        console.log("stockName = " + this.stockName + " (" + typeof this.stockName + ")");
    }

    reduceMapSize() {
        // Check if the map has more entries than the number of tubes
        if (this.tubeValues.size > this.numTubes) {

            // tracks map size after reduction
            let tempSize = this.tubeValues.size

            // Delete each entry beyond number of tubes
            while (tempSize > this.numTubes) {
                this.tubeValues.delete(tempSize--);
            }

        }
    }

    mainCalculator() {

        // These are being entered as strings incorrectly
        this.displayVals[0].minVolume = this.minVolume;
        this.displayVals[0].stockSolution = this.stockSolution;

        this.convertStockSolution();

        this.calculateVolumes();
    }

    convertStockSolution() {
        switch (this.stockSolutionUnits) {
            // microMolar
            case "µM":
                break;

            // milliMolar
            case "mM":
                this.stockSolution *= 1000;
                break;

            // cells per milliliter
            case "cells/mL":
                this.stockSolution /= 1000;
                break;

            default:
                console.error("No valid unit type for stock solution in convertStockSolution()");
                break;
        }
    }

    calculateVolumes() {
        let solutionVolume = 0;
        let dilutionVolume = 0;

        for (let i = this.tubeValues.size; i > 1; i--) {

            dilutionVolume = this.minVolume + solutionVolume;
            solutionVolume = (this.tubeValues.get(i) * dilutionVolume) / this.tubeValues.get(i - 1);

            if (!this.displayVals[i]) {
                this.displayVals[i] = {};
            }

            this.displayVals[i].solutionVolume = this.roundToTwo(solutionVolume);
            this.displayVals[i].dilutionVolume = this.roundToTwo(dilutionVolume);
            this.displayVals[i].solventVolume = this.roundToTwo(dilutionVolume - solutionVolume);
        }

        // Doing calculations for tube 1
        dilutionVolume = this.minVolume + solutionVolume;
        solutionVolume = (this.tubeValues.get(1) * dilutionVolume) / this.stockSolution;

        if (!this.displayVals[1]) {
            this.displayVals[1] = {};
        }

        this.displayVals[1].solutionVolume = this.roundToTwo(solutionVolume);
        this.displayVals[1].dilutionVolume = this.roundToTwo(dilutionVolume);
        this.displayVals[1].solventVolume = this.roundToTwo(dilutionVolume - solutionVolume);
    }

    roundToTwo(num) {
        return +(Math.round(num + "e+2") + "e-2");
    }

}

const IS = new InputStore();

export default IS;