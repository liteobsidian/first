import {connect} from "react-redux";
import Music from "./music";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



const MusicContainer = compose(
    connect(),
    withAuthRedirect,
)(Music)

export default MusicContainer;