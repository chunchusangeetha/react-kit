import { useEffect, useRef } from "react";

export default function UsePrevious(value){
    const ref = useRef()
    useEffect(()=>{
        ref.current = value
    },[value])
    return ref.current

}