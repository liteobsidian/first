import MessageWrapper from "./messageWrapper.jsx";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        messages: state.messagesPage.messages,
    }
};

const MessageWrapperContainer = connect(mapStateToProps)(MessageWrapper);

export default MessageWrapperContainer;