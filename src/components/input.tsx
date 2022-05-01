import styled from "styled-components";
import { InputColtmanProps } from "../models/components";
import {
    MdAccountCircle,
    MdCheckCircle,
    MdPhone,
    MdError,
    MdLock,
    MdRemoveRedEye,
  } from "react-icons/md";
import { useState } from "react";

const InputWrapper =styled.div`
position:relative;
display: inline-block;
&.activeFullWidth{
    display:block !important;
}
input.activeFullWidth{
    display:block;
    width:100%;
}
.haveEndIcon {
    padding-right: 44px !important;
}
.haveStartIcon{
    padding-left: 44px !important;
}

label {
    display: block;
    margin-bottom: 4px;
    font-family: 'Noto Sans', sans-serif;
    font-size: 12px;
}
.starting-icon{
    position: absolute;
    left: 10px;
    top: 43%;
    height: 30px;
    width: 30px;
    svg{
        height: 30px;
        width: 30px;
        fill:#828282;
    }
}
.ending-icon {
    position: absolute;
    right: 10px;
    top: 43%;
    height: 30px;
    width: 30px;
    svg{
        height: 30px;
        width: 30px;
        fill:#828282;
    }
}
input,textarea{
    border: 1px solid #828282;
    background: transparent;
    border-radius: 8px;
    outline:1px solid  #828282;
    font-size: 14px;
    transition:0.3s all;
    font-family: 'Noto Sans';
    color:var(--secondary-text-color);
    &:disabled{
       background-color:var(--secondary-color);
       cursor:not-allowed;
    }
}
textarea{
    padding: 22px 12px;
}

input.hoverActive,textarea.hoverActive,
input.hoverActive.hoverAlert.alert,textarea.hoverActive.hoverAlert.alert,
input:hover,textarea:hover{
    border:1px solid #333333;
    outline:1px solid #333333;
}
input.alert,textarea.alert{
    border:1px solid #D32F2F;
    outline:none
}
input.alert.focusActive{
    border:1px solid #D32F2F;
    outline:1px solid #D32F2F;
}
label.alert,
span.alert.helper,
label.alert.focusActive{
    color: #D32F2F;
}
.hoverActive.hoverAlert.alert{
    color:var(--secondary-text-color);
}
        
        label.focusActive{
            color:#2962FF;
        }
    
        span.helper {
            display: block;
            font-size: 10px;
            margin-top: 4px;
            color: #828282;
        }
        span.alert.helper 
input:focus,textarea:focus,input:focus-visible,textarea:focus-visible,input.focusActive,textarea.focusActive{
    border:1px solid #2962FF;
    outline:1px solid #2962FF;
}
.md{
    padding: 22px 12px;
}
.sm{
    padding: 10px 12px;
}
`

export default function Input({isDisabled=false,
    error=false,
    iserrorActive=false,
    helperText='',
    ref=null,
   value='',
   fullWidth=false,
    placeHolder='Placeholder',
    focus=false,
    hovered=false,
    type='text',
    multiline=false,
    label='Label',
    row=1,
    startIcon = "none",
    endIcon = "none",
    size= 'md' }:InputColtmanProps ){
        const [hoverState,sethoverState]=useState(false)
        const [focusState,setFocusState]=useState(false)
        const [focusAlert,setfocusAlert]=useState(false)
        const hoverAlert =focusAlert|| hovered?'hoverAlert':''
        const isFocus = focus|| focusState?'focusActive':''
        const isHovered = hovered||hoverState?'hoverActive':''
        const isError = error|| iserrorActive ?'alert':''
        const isfullWidth = fullWidth?'activeFullWidth':''
        const redeinfetype= multiline?'textarea' : type
        const haveStartIcon =startIcon!=="none"?'haveStartIcon':''
        const haveEndIcon =endIcon!=="none"?'haveEndIcon':''
        const helper= helperText!==''?(<span className={`helper ${isError}`}>{helperText}</span>):''
        const inputType = (redeinfetype=='text')?
                          (<input type="text" 
                            onMouseEnter={()=>{sethoverState(true); setfocusAlert(true)} } 
                            onMouseLeave={()=>{sethoverState(false); setfocusAlert(false)}} 
                            onBlur={()=>setFocusState(false)} 
                            onFocus={()=>setFocusState(true)} 
                            defaultValue={value} 
                            disabled={isDisabled} 
                            ref={ref} 
                            className={`${isFocus} ${isHovered}  ${isfullWidth} ${isError} ${size} ${hoverAlert} ${haveStartIcon} ${haveEndIcon}`} 
                            placeholder={ placeHolder} />):
                          (redeinfetype=='email')?
                          (<input type="email" ref={ref}  defaultValue={value}  placeholder={ placeHolder} />):
                          (redeinfetype=='number')?
                          (<input type="number"  ref={ref} defaultValue={value} placeholder={ placeHolder} />):
                          ( redeinfetype=='textarea')?
                          ( <textarea name="" id=""
                          onMouseEnter={()=>{sethoverState(true); setfocusAlert(true)} } 
                          onMouseLeave={()=>{sethoverState(false); setfocusAlert(false)}} 
                          onBlur={()=>setFocusState(false)} 
                          onFocus={()=>setFocusState(true)} 
                          defaultValue={value} 
                          disabled={isDisabled} 
                          ref={ref} 
                          className={`${isFocus} ${isHovered}  ${isfullWidth} ${isError} ${size} ${hoverAlert} ${haveStartIcon} ${haveEndIcon}`} 
                          cols={30} 
                          placeholder={ placeHolder}
                          rows={row}></textarea>):
                          (<input type="text" defaultValue={value} ref={ref}  placeholder={ placeHolder} />)

                          const showstartIcon =
                          startIcon === "user" ? (
                            <MdAccountCircle />
                          ) : startIcon === "check" ? (
                            <MdCheckCircle />
                          ) : startIcon == "phone" ? (
                            <MdPhone />
                          ) : startIcon == "error" ? (
                            <MdError />
                          ) : startIcon == "lock" ? (
                            <MdLock />
                          ) : startIcon == "eye" ? (
                            <MdRemoveRedEye />
                          ) : (
                            ""
                          );
                        const showendIcon =
                          endIcon === "user" ? (
                            <MdAccountCircle />
                          ) : endIcon === "check" ? (
                            <MdCheckCircle />
                          ) : endIcon == "phone" ? (
                            <MdPhone />
                          ) : endIcon == "error" ? (
                            <MdError />
                          ) : endIcon == "lock" ? (
                            <MdLock />
                          ) : endIcon == "eye" ? (
                            <MdRemoveRedEye />
                          ) : (
                            ""
                          );
        return(
           <InputWrapper className={`coltman-input-row ${isFocus} ${isfullWidth} ${hoverAlert} ${isHovered} ${isFocus }  ${isError} ${isDisabled?'disabled-input':''} `}>
               <label htmlFor="" className={`${isFocus} ${isHovered} ${hoverAlert} ${isError}`}>{label}</label>
               {showstartIcon!==''?(<div className="starting-icon">{showstartIcon}</div>):null}
               
               {inputType}
                {showendIcon!==''?(<div className="ending-icon">{showendIcon}</div>):null}
               {helper} 
           </InputWrapper>
        )

}