import {connect} from "react-redux";
import News from "./news";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const NewsContainer = compose(
    connect(),
    withAuthRedirect
)(News)

export default NewsContainer;