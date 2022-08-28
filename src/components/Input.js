import { useEffect, useRef, useState } from "react"

export default function Input({label, type='text', ...props}) {

    const inputRef = useRef()
    const [show, setShow] = useState(false)
    const [inputType, setInputType] = useState(type)

    useEffect(()=>{
        if(show) {
            setInputType('text')
            inputRef.current.focus()
        } else if(type==='password') {
            setInputType('password')
            inputRef.current.focus()
        }
    },[show])
    return(
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
            <input ref={inputRef} {...props} type={inputType} required={true} className=" px-2 w-full h-[38px] text-[12px] outline-none valid:pt-[14px] peer"/>
            <small className="absolute top-1/2 left-[9px] pointer-events-none text-xs cursor-text text-gray-500 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value && (
                <button type="button" onClick={()=>{setShow(!show)}} className="h-full flex items-center text-sm font-semibold pr-2">
                    {show?'Hide':'Show'}
                </button>
            )}

        </label>
    )
}