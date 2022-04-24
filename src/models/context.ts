import { ReactElement } from "react"
import { ReactChildren } from "react"
import { ReactNode,ReactChild,ReactFragment, ReactPortal } from "react"



export interface DarkMode{
    darkmode:boolean,
    setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}
export interface Context{
    darkmode:DarkMode,
    open:OpenContext
}
export interface OpenContext{
    open:boolean,
    setopen: React.Dispatch<React.SetStateAction<boolean>>
}
export interface ContextProps{
    children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined 
    title:string
}