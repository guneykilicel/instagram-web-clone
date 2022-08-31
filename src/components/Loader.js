import {FaInstagram} from "react-icons/fa"

export default function Loader() {
    return(
        <div className="w-full h-full fixed flex-col top-0 left-0 bg-zinc-50 text-pink-600 text-2xl flex items-center justify-center">
            <FaInstagram size={100} />
            <h6>Instagram</h6>
        </div>
    )
}