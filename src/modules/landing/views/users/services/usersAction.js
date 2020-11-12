import * as actionType from './usersType'

import axios from 'axios'

const getUsers = (users) => {
    return {
        type: actionType.GET_USERS,
        users: users,

    }
}
export const fetchUsers = () => async  dispatch => {
    const res = await  axios.get('http://react-ssr-api.herokuapp.com/users')
    dispatch(getUsers(res.data))
}
