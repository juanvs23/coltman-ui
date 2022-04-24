
import { Link, LinkProps, useMatch, useResolvedPath } from "react-router-dom";
import styled from "styled-components";
import { Router } from "../models/routes";
import {routers} from '../router'
const NavWrapper = styled.nav`
ul{
    list-style-type: none;
    padding:0;
    li{
        list-style-type: none;
        a{
            padding: 16px 47px;
           
            text-decoration: none;
            color: var(--secondary-text-color);
            width: 100%;
            display: block;
        }
        &.active{
            a{
                color:var(--enfasis-text);
            }
        }
    }
}
`
const NavLink =({ children, to, ...props }: LinkProps)=>{
    let resolved = useResolvedPath (to);
  let match = useMatch ({ path: resolved.pathname, end: true });
    return(
        <li  className={`${match?'active':''}`}>
        <Link
          style={{ fontWeight: match ? "700" : "400" }}
          to={to}
          {...props}
         
        >
          {children}
        </Link>
       </li>
    )
}
export default function Nav(){
return(
    <NavWrapper>
        <ul>
            {routers.map((router:Router,i )=><NavLink key={i} to={router.path}>{router.linkName}</NavLink>)}
        </ul>
    </NavWrapper>
)
}