import {addPostActionCreator} from "../../../../redux/profileReducer";
import CreatePost from "./createPost.jsx";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.text
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText)=>{
            let action = addPostActionCreator(newPostText);
            dispatch(action);
        }
    }
};
const CreatePostContainer = connect(mapStateToProps,mapDispatchToProps)(CreatePost);

export default CreatePostContainer;