import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import git from './git-user';

export default combineReducers({
  router: routerReducer,
  git: git
})
