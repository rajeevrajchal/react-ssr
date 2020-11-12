
import * as actionType from './usersType'

const initialState = {
    users:[]
}

export default (state = initialState, actions) => {
    switch (actions.type) {
        case actionType.GET_USERS:
            return {
                ...state,
                users: actions.users,
            };
        default:
            return state;
    }
}
