import { useState } from "react";

export default function InputFields(props) {

    // On stockSolution unit change, set stockSolution state variable using switch statement

    // trim() all values to ensure accuracy

    // Try to avoid doing all the setting and sending on submit.
    // Set onChange() and just send existing state variable values

    const [numTubes, setNumTubes] = useState(0);

    const handleTubeChange = (event) => {
        setNumTubes(event.target.value);
        props.midNumTubeGetter(event.target.value);
    };

    return (
        <div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                <label htmlFor="minVolume" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Minimum Volume<span className="text-red-400">*</span>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="number"
                        name="minVolume"
                        id="minVolume"
                        className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm rounded-md border-solid border border-slate-200 pl-1"
                        placeholder="in µL"
                    />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                <label htmlFor="stockSolution" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Stock Solution<span className="text-red-400">*</span>
                </label>
                <div className="flex mt-1 sm:mt-0 sm:col-span-2">
                    <input type="number"
                        name="stockSolution"
                        id="stockSolution"
                        className="flex-1 shadow-sm sm:text-sm rounded-md border-solid border border-slate-200 pl-1"
                    />

                    <select name="stockSolutionUnits"
                        id="stockSolutionUnits"
                        className="mt-1 sm:mt-0 w-1/6 ml-3 border-solid border border-slate-200">
                        <option defaultValue={"microMolar"}>µM</option>
                        <option value="milliMolar">mM</option>
                        <option value="cellsPerMilliLiter">cells/mL</option>
                    </select>
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                <label htmlFor="numOfTubes" className="justify-self-start block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    # of Tubes<span className="text-red-400">*</span>
                </label>
                <div className="flex mt-1 sm:mt-0 sm:col-span-2">
                    <input type="range" min={"0"} max={"20"} name="numOfTubes" id="numOfTubes" className="flex-1" value={numTubes} onChange={handleTubeChange} />
                    <input type="number" min={"0"} max={"20"} name="secondaryTubeCount" id="secondaryTubeCount" className="mt-1 sm:mt-0 w-1/6 ml-3 border-solid border border-slate-200" value={numTubes} onChange={handleTubeChange} />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                <label htmlFor="solventName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Solvent Name <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="text" name="solventName" id="solventName"
                        className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm rounded-md border-solid border border-slate-200 pl-1" />
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:pt-5">
                <label htmlFor="stockName" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Stock Name <span className="text-gray-400 text-xs">(optional)</span>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <input type="text" name="stockName" id="stockName"
                        className="max-w-lg block w-full shadow-sm sm:max-w-xs sm:text-sm rounded-md border-solid border border-slate-200 pl-1" />
                </div>
            </div>


            <div className="pt-5">
                <div className="flex justify-end">
                    <button type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-bl from-blue-700 to-blue-500 hover:from-blue-500 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}