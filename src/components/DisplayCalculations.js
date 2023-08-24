import { useInputStore } from "../InputStoreContext";

export default function DisplayCalculations(props) {
    const inputStore = useInputStore();

    const storeData = {
        stockSolutionUnits: inputStore.stockSolutionUnits,
        solventName: inputStore.solventName,
        stockName: inputStore.stockName,
    }

    const UnitDisplay = () => {
        return (
            <span className="text-xs">µL</span>
        );
    }

    const SolutionVolumeText = () => {
        return (
            props.tubeNum === 1 ?
                <p>Volume from stock solution: <span className="text-violet-500 drop-shadow-sm">{inputStore.displayVals[props.tubeNum].solutionVolume}</span><UnitDisplay /></p>
                :
                <p>Solution Volume <span className="text-gray-400 text-xs">(prev tube)</span>: <span className="text-violet-500 drop-shadow-sm">{inputStore.displayVals[props.tubeNum].solutionVolume}</span><UnitDisplay /></p>
        );
    }

    // Giving error because displayVals has not been set yet
    return (
        <div className="text-right">
            <SolutionVolumeText />
            <p>{storeData.solventName} Volume: <span className="text-violet-500 drop-shadow-md">{inputStore.displayVals[props.tubeNum].solventVolume}</span><UnitDisplay /></p>
            <p>Total Volume: <span className="text-violet-500 drop-shadow-md">{inputStore.displayVals[props.tubeNum].dilutionVolume}</span><UnitDisplay /></p>
            {/* <p>{storeData.stockName} Volume: <span className="text-violet-500 drop-shadow-md">{inputStore.displayVals[props.tubeNum].dilutionVolume}</span><UnitDisplay /></p> */}
        </div>
    );

}