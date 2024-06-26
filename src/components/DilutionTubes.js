import { IconContext } from "react-icons";
import { GiDrippingTube } from 'react-icons/gi'
import { useInputStore } from "../InputStoreContext";
import DisplayCalculations from "./DisplayCalculations"
import { observer } from "mobx-react-lite";

const DilutionTubes = observer((props) => {

    const inputStore = useInputStore();

    return (
        <div className="flex flex-col justify-center items-center w-3/4 sm:w-1/2 md:w-1/5 py-2 mt-2 mx-1 sm:mx-2 rounded-md bg-white shadow-md">
            <label htmlFor="tube">
                Tube {props.tubeNumber}<span className="text-red-400">*</span>
            </label>
            <IconContext.Provider value={{ size: 30 }}>
                <GiDrippingTube className="text-cyan-400 my-1" />
            </IconContext.Provider>
            <input type="number"
                name="tube"
                className="flex-1 shadow-sm w-1/2 sm:text-sm rounded-md border-solid border border-slate-200 pl-1"
                placeholder="concentration"
                onChange={(e) => inputStore.setTubeValue(props.tubeNumber, e.target.value)}
            />

            {inputStore.displayValComponent && <DisplayCalculations tubeNum={props.tubeNumber} />}

        </div>
    );
});

export default DilutionTubes;