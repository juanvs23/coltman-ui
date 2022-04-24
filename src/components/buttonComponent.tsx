import { ButtomProps } from "../models";
import styled from "styled-components";
import { MdSend,MdOutlineLoop,MdOutlineStop,MdOutlineCall,MdOutlinePlayArrow,MdOutlinePause } from "react-icons/md";
import { PropsWithChildren } from "react";


const ButtonElement = styled.button<{isBoxShadow:boolean,variant:string,size:string,color:string}>`
box-shadow:${shadow=>shadow.isBoxShadow==true?'0 2px 3px 0 rgba(51, 51, 51,0.2)':'none' };
color:${color=>color.color=='secondary'||color.color=='primary'?'white':color.variant=='outline'?'':'#3F3F3F'};
border:1px solid ${color=>color.color=='primary'?'#2962FF':color.color=='secondary'?'#455A64':'#E0E0E0'};
   height:36px;
   padding:8px 16px;
   border-radius:10px;
   cursor:pointer;
`

export default function Button(
    {
        variant="regular",
        disableShadow=false,
        isDisabled=false,
        size='sm',
        color='default',
        onclik,
        text='Default',
        startIcon='none',
        endIcon='none',
        hovered=''
     
     }:PropsWithChildren<ButtomProps> ){
         const handler=()=>{onclik}
            const showstartIcon = startIcon==='send'?(<MdSend  />)
                                          :(startIcon==='loop')?
                                          (<MdOutlineLoop/>):(startIcon=='stop')?
                                          (<MdOutlineStop/>):(startIcon=='phone')?
                                          (<MdOutlineCall/>):(startIcon=='play')?
                                          (<MdOutlinePlayArrow/>):(startIcon=='pause')?
                                          (<MdOutlinePause/>):'';
            const showendIcon = endIcon==='send'?(<MdSend  />)
                                          :(endIcon==='loop')?
                                          (<MdOutlineLoop/>):(endIcon=='stop')?
                                          (<MdOutlineStop/>):(endIcon=='phone')?
                                          (<MdOutlineCall/>):(endIcon=='play')?
                                          (<MdOutlinePlayArrow/>):(endIcon=='pause')?
                                          (<MdOutlinePause/>):'';
            
        return(
            <button 
           className={`btn 
           ${variant} 
           ${hovered} 
           ${disableShadow?'no-shadow':''} 
           ${isDisabled?'disabled':''}
           ${size}
           ${color}
           ` }
           disabled={isDisabled}
            onClick={handler}>
                {showstartIcon}{'  '}{text}{'  '}{showendIcon} 
            </button>
        )

}