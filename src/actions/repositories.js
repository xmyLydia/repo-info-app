
import axios from 'axios';
import {setPage} from '../actions/page';

export const setRepository = (repository) => ({
    type: 'SET_REPOSITORY',
    repository
});
export const setRepositories = (repositories) => ({
    type: 'SET_REPOSITORIES',
    repositories
});
export const fetchRepository = (userName, pageIndex) => {
    return (dispatch) => {
       
        const repositoryAPI =
            `https://cors-anywhere.herokuapp.com/https://git-info-backend.herokuapp.com/users/${userName}/repos?page=${pageIndex}&size=1`; // page need change
        return axios.get(repositoryAPI,{
            headers: {"Access-Control-Allow-Origin": "*"}
        }).then((res) => {
            const repositories = res.data;
            dispatch(setRepositories(repositories));
            dispatch(setPage(pageIndex));
        });
    }
}