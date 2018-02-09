export const RECEIVE_USER = 'counter/RECEIVE_USER';

const initialState = {
  user: {
    details: {},
    repos: []
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload;

    default:
      return state
  }
}

export const getUser = (userName) => dispatch => {
  let baseUrl = 'https://api.github.com/users/';
  let userDetailsUrl = `${baseUrl}${userName}`;
  let userReposUrl = `${baseUrl}${userName}/repos`;
  let getUserDetail = fetch(userDetailsUrl);
  let getUserRepos = fetch(userReposUrl);
  return Promise.all([ getUserDetail, getUserRepos ])
    .then(data => { data[0].json().then(details => data[1].json().then(repos => {
        details = details.message ? {} : details; // TODO: add error handling
        repos = repos.message ? [] : repos;
        dispatch({
          type: RECEIVE_USER,
          payload: { user: { details, repos } }
        })
      }))
    })
}
