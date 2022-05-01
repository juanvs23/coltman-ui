import { InputColtmanProps } from "../models/components";

export default function Input({isDisabled=false,
    error=false,
    iserrorActive=false,
    helperText='',
    ref=null,
   
    
    placeHolder='Placeholder',
    focus=false,
    hovered=false,
    type='text',
    multiline=false,
    row=1,
    size= 'sm' }:InputColtmanProps ){


        return(
            <input type="text" name="" id="" />
        )

}