// import profileReducer from "./profileReducer";
// import messagesReducer from "./messagesReducer";
// import sidebarReducer from "./sidebarReducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, user: 'Strelnykov Roman', message: 'Hello World! I can use props!', like: 15},
//                 {id: 2, user: 'Strelnykov Roman', message: 'It\'s my first post in this wall', like: 23}
//             ],
//             text: ""
//         },
//         messagesPage: {
//             messages: [
//                 {userId: "001", name: 'Andrew', message: 'Hellow! How are you?'},
//                 {userId: "004", name: 'Roman', message: 'Hi! I\'m fine!'}
//             ],
//             dialogs: [
//                 {name: "Andrey", userId: "001"},
//                 {name: "Dmitry", userId: "002"},
//                 {name: "Semion", userId: "003"}
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {}
//
//     },
//     _callSubscriber() {
//         console.log('state changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state)
//     }
// }
//
// window.store = store._state;
//
// export default store






// [
//         {
//             id: 1,
//             photoUrl: 'https://sun9-50.userapi.com/AB_LQgGXcyhfncetKKObZgXxx-_3vZ03GcINgQ/yPNOmo9Bc0c.jpg',
//             followed: false,
//             fullName: 'Roman S.',
//             status: 'I find new job',
//             location: {
//                 city: 'Lipetsk',
//                 country: 'Russia'
//             }
//         },
//         {
//             id: 2,
//             photoUrl: 'https://sun9-3.userapi.com/aSpcJ1VNJ54nEpz8rvIgtRgVaBEvHmhegU5jYQ/IzzpDgOQxNQ.jpg',
//             followed: true,
//             fullName: 'Nikita',
//             status: 'Hi, I\`m true programmer',
//             location: {
//                 city: 'Lipetsk',
//                 country: 'Russia'
//             }
//         },
//         {
//             id: 3,
//             photoUrl: 'https://sun9-10.userapi.com/2HmgLjuFut4nRnOCnYWa1g6JE8PMAucl8b98Yw/-eH_32PWSxE.jpg',
//             followed: false,
//             fullName: 'Tosha L.',
//             status: 'Hi I\'m a good boy and I\'ll eat your stupid brain while you sleep',
//             location: {
//                 city: 'Minsk',
//                 country: 'Belarus'
//             }
//         },
//     ]