import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/sidebar.jsx";
import {BrowserRouter, Route} from "react-router-dom";
import {withRouter} from "react-router-dom";
// import UsersContainer from "./components/users/usersContainer.jsx";
import ProfileContainer from "./components/profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";
import Login from "./components/login/login";
import NewsContainer from "./components/news/newsContainer";
import MusicContainer from "./components/music/musicContainer";
import SettingsContainer from "./components/settings/settingsContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/preloader/preloader";
import {initializeApp} from "./redux/appReducer";
import store from "./redux/reduxStore";
import {withSuspense} from "./hoc/withSuspense";

let MessagesContainer = React.lazy(() => import (`./components/messages/messagesContainer`));
let UsersContainer = React.lazy(() => import (`./components/users/usersContainer.jsx`));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="AppWrapper">
                <HeaderContainer/>
                <div className="contentContainer">
                    <Sidebar/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/message" render={withSuspense(MessagesContainer)}/>
                    <Route path="/users" render={withSuspense(UsersContainer)}
                    />
                    <Route path="/news" render={() => <NewsContainer/>}/>
                    <Route path="/music" render={() => <MusicContainer/>}/>
                    <Route path="/settings" render={() => <SettingsContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

let AppWithRouter = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default AppWithRouter
