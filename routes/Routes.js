import Landing from "../src/modules/landing";
import Admin from "../src/modules/admin";
import {loadData} from "../src/modules/landing/views/users";

export default [
    {
        loadData,
        path: '/',
        component: Landing,
        exact: true
    },
    {
        path: '/admin',
        component: Admin,
        exact: true
    }
]
