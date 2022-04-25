import { createGlobalStyle } from "styled-components";
import { DarkMode } from "../models/context";

export const GlobalStyles = createGlobalStyle<{
  darkmode: DarkMode["darkmode"];
  open: boolean;
}>`
/*
font-family: 'Montserrat', sans-serif;
font-family: 'Noto Sans', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Ubuntu Mono', monospace;
*/
:root{
    --main-color:${(darkmode) => (!darkmode.darkmode ? "#fff" : "#181818")};

    --main-text-color:${(darkmode) => (darkmode.darkmode ? "#ccc" : "#333333")};
    --secondary-color:${(darkmode) =>
      !darkmode.darkmode ? "#d1d2d5" : "#343a40"};
    --secondary-text-color:${(darkmode) =>
      darkmode.darkmode ? "#9E9E9E" : "#939393"};
    --width-size:${(open) => (open.open ? "250" : "50")}px;
    --enfasis-text:${(darkmode) => (darkmode.darkmode ? "#5972ff" : "#090F31")};
    --regular-bg:#E0E0E0;
    --regular-bg-hover:#AEAEAE;
    --regular-text:#3F3F3F;
    --outline-bg:transparent:transparent;
    --outline-bg-hover-primary:rgba(41, 98, 255,0.1);
    --outline-bg-hover-secondary:rgba(69, 90, 100,0.1);
    --primary:#3D5AFE;
    --primary-hover:#0039CB;
    --secondary:#455A64;
    --secondary-hover:#1C313A;
    --disabled-text:#9E9E9E;
    --disabled-bg:#E0E0E0;
    --box-shadow:0 2px 3px 0 rgba(51, 51, 51,0.2);
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

    body {
        margin: 0;
      
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        main{
            background-color: var(--main-color);
            color: var(--main-text-color);
            margin-left: var(--width-size);
            min-height: 100vh;
            
        }
        aside{
            background-color: var(--secondary-color);
            position:fixed;
            top:0;
            left:0;
            width:var(--width-size);
            color:var(--secondary-text-color);
            height:100vh;
        }
        footer{
            margin-left: var(--width-size);
            color:var( --secondary-text-color);
        }
      }
      .container{
         
          max-width:1024px;
          margin:auto;
          display:block;
      }
      .row{
       
        display:flex;
        width:100%;
      }
      .row >*{
        padding-left:15px;
        padding-right:15px;
      }
      
      .col-1{flex:0 0 auto;width:8.33333333%}.col-2{flex:0 0 auto;width:16.66666667%}.col-3{flex:0 0 auto;width:25%}.col-4{flex:0 0 auto;width:33.33333333%}.col-5{flex:0 0 auto;width:41.66666667%}.col-6{flex:0 0 auto;width:50%}.col-7{flex:0 0 auto;width:58.33333333%}.col-8{flex:0 0 auto;width:66.66666667%}.col-9{flex:0 0 auto;width:75%}.col-10{flex:0 0 auto;width:83.33333333%}.col-11{flex:0 0 auto;width:91.66666667%}.col-12{flex:0 0 auto;width:100%}
      @media(max-width:767px){
        .col-1,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-10,.col-11,.col-12{flex:0 0 auto;width:100%}

      }
      .mb-1{
        margin-bottom:1rem !important;

      }
      .mb-2{
        margin-bottom:2rem !important;

      }
      .mb-3{
        margin-bottom:3rem !important;

      }
      .mb-4{
        margin-bottom:4rem !important;

      }
      /*buttons*/
      .btn{
        padding:8px 16px;
        border-radius:10px;
        cursor:pointer;
        transition:0.3s;
       font-size:18px;
       font-weight:500;
       box-shadow:var(--box-shadow);
      }
      code{
        font-size:12px !important;
      }
      .regular{
      
        color:var(--regular-text);
        border:1px solid var(--regular-bg);
        background:var(--regular-bg);

        &:hover,&:focus,&.hovered-regular{
          color:var(--regular-text);
        background:var(--regular-bg-hover);
        border:1px solid var(--regular-bg-hover);
        }
      }
      .text{
        color:var( --primary);
        border:1px solid var(--outline-bg);
        background:var(--outline-bg);
        box-shadow:none;
        &:hover,&:focus,&.hovered{
          color:var(--primary);
        background:var(--outline-bg-hover-primary);
        border:none;
        
        }
      }
      .outline.primary{
        color:var( --primary);
        border:1px solid var(--primary);
        background:var(--outline-bg);
       
        &:hover,&:focus,&.hovered{
          color:var(--primary);
        background:var(--outline-bg-hover-primary);
        border:1px solid var(--primary);
        }
      }
      .secondary{
        /*
        --secondary:#455A64;
        --secondary-hover:#1C313A;
        */
        color:white;
        border:1px solid var(--secondary);
        background:var(--secondary);
       
        &:hover,&:focus,&.hovered{
          color:white;
        background:var(--secondary-hover);
        border:1px solid var(--secondary-hover);
        }
      }
      .no-shadow{
        box-shadow:none !important;
      }
      .disabled,btn:disabled{
        cursor: not-allowed !important;
        background:#E0E0E0 !important;
        color:#9E9E9E !important;
        border:1px solid transparent !important;
        box-shadow:none;
        &:hover,&:focus{
          background:#E0E0E0 !important;
          color:#9E9E9E !important;
          border:1px solid transparent !important;
          box-shadow:none;
        }
        
        &.text{
         
        background:var(--outline-bg) !important;
       
        }
      }
      .primary{
        color:white;
        border:1px solid var(--primary);
        background:var(--primary);
        
        &:hover,&:focus,&.hovered{
          color:white;
        background:var(--primary-hover);
        border:1px solid var(--primary-hover);
        }
      }
      .md{
        padding: 12px 25px;
      }
      .lg{
        padding: 15px 30px;
      }
     
`;
