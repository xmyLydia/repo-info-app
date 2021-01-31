
import axios from 'axios';

export const setRepository = (repository) => ({
    type: 'SET_REPOSITORY',
    repository
});
export const setRepositories = (repositories) => ({
    type: 'SET_REPOSITORIES',
    repositories
});
export const fetchRepository = (userName) => {
    return (dispatch) => {
        const repositoryAPI =
            `https://api.github.com/users/${userName}/repos?page=${1}&per_page=1`; // page need change
        return axios.get(repositoryAPI).then((res) => {
            const repositories = res.data;
            dispatch(setRepositories(repositories));
        });
    }
}