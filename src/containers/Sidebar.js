import { connect } from "react-redux";
import { siderToggle } from "../actions/layout";
import Sidebar from "../components/Sidebar";

let mapStateToProps = (state)=>({
    collapsed: state.layout.collapsed,
    theme: state.layout.theme
});

let mapDispatchToProps = (dispatch)=>({
    toggle: ()=>dispatch(siderToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);