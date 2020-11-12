import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../../../store/actions";

const Users = () => {
    const dispatch = useDispatch()
    const { users } = useSelector(state => state.usersReducers)

    // useEffect(() => {
    //     dispatch(actions.fetchUsers())
    // }, [])

    return (
        <div>
            <p> all users list </p>
            {
                users ? users.map((user, index) => (
                       <div key={user.id}>
                           {user.name}
                       </div>
                )) : <div> No user found </div>
            }
        </div>
    );
};
const loadData = (store) => {
    return store.dispatch(actions.fetchUsers())
}
export { loadData }
export default Users;
