import { ActionTypes, EnumValue } from "../actions/layout";

let layout = (state={ collapsed: false, theme: EnumValue.DARK}, action)=>{
    switch(action.type){
        case ActionTypes.LAYOUT_COLLAPSED:
            state.collapsed = !state.collapsed;
            break;
        case ActionTypes.LAYOUT_THEME:
            state.theme = action.theme;
            break;
        default:
            return state;
    }
    return {...state};
}

export default layout;
