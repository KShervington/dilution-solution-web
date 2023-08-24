import { GiTestTubes } from "react-icons/gi"
import { IconContext } from "react-icons";

// TODO:
// Implement functionality for the "Clear All Fields" button;
// It could call a function in the Input Store that zeroes out all variables there;
// It would then need to clear the UI text fields as well;

export default function Header() {

    return (
        <header className="bg-gradient-to-r from-slate-700 to-slate-600 border-solid border-b-2 border-slate-500">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">

                <IconContext.Provider value={{ size: 60 }}>
                    <GiTestTubes className="text-blue-400 border-solid border-2 border-blue-400 p-2" />
                </IconContext.Provider>

                {/* <button className="flex rounded-lg h-full lg:h-fit lg:justify-end bg-gradient-to-tr from-red-800 to-red-600 text-white py-1 px-2 hover:from-red-600 hover:to-red-400 active:outline-none active:ring active:ring-red-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pr-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Clear All Fields
                </button> */}
            </nav>

        </header>
    )
}
