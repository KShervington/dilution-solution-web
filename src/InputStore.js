import { makeObservable, observable, action } from "mobx"

class InputStore {
    minVolume = 0;
    stockSolution = 0;
    stockSolutionUnits = "microMolar";
    solventName = "";
    stockName = "";
    tubeValues = new Map();

    constructor() {
        makeObservable(this, {
            minVolume: observable,
            stockSolution: observable,
            stockSolutionUnits: observable,
            solventName: observable,
            stockName: observable,
            tubeValues: observable,
            setMinVolume: action,
            setStockSolution: action,
            setStockSolutionUnits: action,
            setSolventName: action,
            setStockName: action,
            setTubeValue: action,
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
        this.solventName = name;
    }

    setStockName(name) {
        this.stockName = name;
    }

    setTubeValue(index, value) {
        this.tubeValues.set(index, value);
    }

}

const IS = new InputStore();

export default IS;