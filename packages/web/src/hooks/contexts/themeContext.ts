import { Dispatch, createContext } from "react";
import { ThemeAction } from "../reducers/themeReducer";

export const themeContext = createContext<{
  dark: boolean,
  dispatch: Dispatch<ThemeAction>
}>({
  dark: true,
  dispatch:()  => null
});