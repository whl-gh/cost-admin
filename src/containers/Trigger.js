import { connect } from "react-redux";
import { siderToggle } from "../actions/layout";
import Trigger from "../components/Trigger";

let mapStateToProps = (state)=>({
    collapsed: state.layout.collapsed
});

let mapDispatchToProps = (dispatch)=>({
    toggle: ()=>dispatch(siderToggle())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trigger);