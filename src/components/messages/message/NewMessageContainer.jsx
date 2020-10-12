import {addMessageActionCreator} from "../../../redux/messagesReducer";
import {connect} from "react-redux";
import NewMessage from "./NewMessage.jsx";

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageBody)=>{
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
};

const NewMessageContainer = connect(null,mapDispatchToProps)(NewMessage);

export default NewMessageContainer;