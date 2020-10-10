import {connect} from "react-redux";
import Settings from "./settings";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const SettingsContainer = compose(
    connect(),
    withAuthRedirect
)(Settings);

export default SettingsContainer;