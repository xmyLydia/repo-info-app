
import axios from 'axios';

export const setUser = (user) => ({
    type: 'SET_USER',
    user
})
export const fetchUser = (userName) => {
    return (dispatch) => {
        //const userAPI = `https://git-info-backend.herokuapp.com/users/${userName}`;
        const userAPI = `https://cors-anywhere.herokuapp.com/https://git-info-backend.herokuapp.com/users/${userName}`
        return axios.get(userAPI, ).then((res) => {
            const userInfo = res.data;
            dispatch(setUser(userInfo));
        });
    }
}