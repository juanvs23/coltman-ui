import { createContext } from "react";
import { Context } from "../models";

export const MainContext = createContext<Context | undefined>(undefined);
