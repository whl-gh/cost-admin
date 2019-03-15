let layout = (state={ filter: "ALL", list: []}, action)=>{
    switch(action.type){
        case "ADD":
            return { ...state };
        case "COMPLETE":
            return { ...state };
        case "Filter_TODO":
            return { ...state };
        default:
            return state;
    }
}

export default layout;
