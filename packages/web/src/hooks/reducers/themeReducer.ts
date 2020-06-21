
export enum ThemeActionType {
  switch = "theme/switch"
};

export type ThemeAction = {
  type: ThemeActionType
};

type ThemeState = {
  dark: boolean,
};

const initialState:ThemeState = {dark: true};

export const themeReducer = (state: ThemeState  = initialState, action: ThemeAction) => {
  switch(action.type) {
    case ThemeActionType.switch:
      return {
        ...state,
        dark: !state.dark
      };
    default:
      return state;
  }
}