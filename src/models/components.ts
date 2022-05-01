import { PropsWithChildren, ReactNode } from "react";

export interface ButtomProps {
  variant?: string;
  size?: string;
  color?: string;
  disableShadow?: boolean;
  isDisabled?: boolean;
  onclik?: () => void;
  text?: string;
  startIcon?: string;
  endIcon?: string;
  hovered?: string;
}

export interface InputColtmanProps{
  isDisabled?:boolean,
  error?:boolean,
  iserrorActive?:boolean
  helperText?:string,
  ref?:React.RefAttributes<any>|null,
  startIcon?: string,
  endIcon?: string,
  value?:string,
  placeHolder?:string,
  focus?:boolean,
  hovered?:boolean
  type?:'email'|'text'|'number',
  multiline?:boolean,
  row?:number
  size?: 'sm' | 'md'| 'lg' | 'lx' 
}
