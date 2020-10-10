const SEND_MESSAGE = 'messages/SEND-MESSAGE';

let initialState = {
    messages: [
        {userId: 1, name: 'Andrew', message: 'Hellow! How are you?'},
        {userId: 4, name: 'Roman', message: 'Hi! I\'m fine!'}
    ],
    dialogs: [
        {name: "Andrey", userId: "001"},
        {name: "Dmitry", userId: "002"},
        {name: "Semion", userId: "003"}
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {userId: 4, name: 'Roman', message: action.newMessageBody}]
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