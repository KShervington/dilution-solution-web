import { useState } from "react";
import { IconContext } from "react-icons";
import { BsFillCaretDownSquareFill } from 'react-icons/bs'
import InputFields from "./InputFields";
import { useObserver } from 'mobx-react-lite';

export default function MainInputs(props) {
    const [toggleForm, setToggleForm] = useState(false);

    // This is the middle function for grabbing number of tubes form InputFields component
    const pullNumTubesMid = (tubeCount) => {
        props.topNumTubeGetter(tubeCount);
    }

    return useObserver(() => (
        <div className="flex justify-center items-center w-full sm:pt-2">
            <div className={`rounded-b-md sm:rounded-md pl-4 pr-4 pb-4 w-full sm:w-auto ${toggleForm ? 'bg-white shadow-md' : 'bg-transparent'}`}>
                {toggleForm && <InputFields midNumTubeGetter={pullNumTubesMid} />}
                <div className="flex justify-center">
                    <button onClick={() => { setToggleForm(!toggleForm) }}>
                        <IconContext.Provider value={{ size: 30 }}>
                            <BsFillCaretDownSquareFill className={`text-slate-600 transition-transform duration-700 ease-in-out ${toggleForm ? 'rotate-180' : 'rotate-0'}`} />
                        </IconContext.Provider>
                    </button>
                </div>

            </div>
        </div>

    ));
}

// Old Code for getting tube count:
// {toggleForm && <InputFields midNumTubeGetter={pullNumTubesMid} />}