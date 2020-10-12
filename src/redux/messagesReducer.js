const SEND_MESSAGE = 'messages/SEND-MESSAGE';

let initialState = {
    messages: [
        {id:1, userId: 1, name: 'Andrew', message: 'Fake message'},
        {id:2, userId: 4, name: 'Roman', message: 'You can try to post message on state'}
    ],
    dialogs: [
        {name: "Andrey", userId: "001"},
        {name: "Dmitry", userId: "002"},
        {name: "Semion", userId: "003"},
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id:3, userId: 4, name: 'Roman', message: action.newMessageBody}]
            }
        default:
            return state;
    }
};


export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
};

export default messagesReducer;