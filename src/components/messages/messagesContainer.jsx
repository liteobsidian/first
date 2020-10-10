import {connect} from "react-redux";
import Messages from "./messages";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const MessagesContainer = compose(
    connect(),
    withAuthRedirect
)(Messages);
export default MessagesContainer;