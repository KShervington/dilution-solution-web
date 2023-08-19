import { makeObservable, observable, action } from "mobx"

// TODO:
// Make sure the tubeValues map does not use
// invalid entries in calculations.
// The current problem is that tubes can only be added to 
// the map but not removed.
// NOTE: a new entry in the tube value map is only set when
// typed in the tube text box, not when tubes are added
// or removed; still a problem.

class InputStore {
    minVolume = 0;
    stockSolution = 0;
    stockSolutionUnits = "microMolar";
    solventName = "";
    stockName = "";
    numTubes = 0;
    tubeValues = new Map();

    constructor() {
        makeObservable(this, {
            minVolume: observable,
            stockSolution: observable,
            stockSolutionUnits: observable,
            solventName: observable,
            stockName: observable,
            numTubes: observable,
            tubeValues: observable,
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
        this.minVolume = volume;
    }

    setStockSolution(volume) {
        this.stockSolution = volume;
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
        this.numTubes = tubeCount;
    }

    setTubeValue(index, value) {
        this.tubeValues.set(index, value);
    }

    doCalculations() {
        // Initial Validaitons
        this.reduceMapSize();
        this.logInput();

        // Call Calculator main function
    }

    logInput() {
        for (let [key, value] of this.tubeValues) {
            console.log("Tube " + key + " = " + value);
        }

        console.log("map size is: " + this.tubeValues.size);
        console.log("minVolume = " + this.minVolume);
        console.log("stockSolution = " + this.stockSolution);
        console.log("numTubes = " + this.numTubes);
        console.log("solventName = " + this.solventName);
        console.log("stockName = " + this.stockName);
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

}

const IS = new InputStore();

export default IS;