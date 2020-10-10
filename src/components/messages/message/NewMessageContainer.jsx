import {addMessageActionCreator} from "../../../redux/messagesReducer";
import {connect} from "react-redux";
import NewMessage from "./NewMessage.jsx";

let mapStateToProps = (state) => {};
let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessageBody)=>{
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
};

const NewMessageContainer = connect(mapStateToProps,mapDispatchToProps)(NewMessage);

export default NewMessageContainer;