import React from "react";
import {connect} from "react-redux";
import Dialogs from "./dialogs.jsx";



let mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs
    }
};

const DialogsContainer = connect(mapStateToProps)(Dialogs)

export default DialogsContainer;