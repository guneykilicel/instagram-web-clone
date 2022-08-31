import SVG from "react-inlinesvg"
import {FiSearch} from "react-icons/fi"

export default function Search() {
    return(
        <label className="w-[268] relative justify-between group">
            {/* <SVG src={`http://localhost:3000//icons/search.svg`} /> */}
            <span className="group-focus-within:hidden text-[#8e8e8e] absolute top-0 h-9 w-9 flex items-center justify-center">
                <FiSearch name="search"/>
            </span>
            <input type="text" placeholder="Search" className="h-9 outline-none pl-9 focus:pl-3 w-full rounded bg-[#efefef]" />
        </label>
    )
}