import User from '../services/git-user'

export const RECEIVE_USER = 'counter/RECEIVE_USER';
export const RECEIVE_REPOS = 'counter/RECEIVE_REPOS';

const initialState = {
  user: {},
  repos: [],
  inputValue: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign({}, state, action.payload);
    case RECEIVE_REPOS:
      return Object.assign({}, state, action.payload);

    default:
      return state
  }
}

export const getUserDetails = (userName) => dispatch => {
  User.getUser(userName, user => {
    dispatch({
      type: RECEIVE_USER,
      payload: { user, repos: [], inputValue: userName }
    })
  });
}

export const getRepos = () => (dispatch, getState) => {
  User.getUserRepos(getState().git.inputValue, repos => {
    dispatch({
      type: RECEIVE_REPOS,
      payload: { repos }
    })
  });
}
