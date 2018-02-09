import React from 'react'
import Search from './search';
import Details from './user-details';
import ReposTable from './table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getUserDetails,
  getRepos
} from '../../modules/git-user';

const mapStateToProps = state => ({
  user: state.git.user,
  repos: state.git.repos
});


const GitUser = (props) => (
  <div className="users-container">
    <Search textInput={props.textInput} getUser={props.getUserDetails} />
    { Object.keys(props.user).length ? <Details {...props.user} getRepos={props.getRepos} />: null }
    <ReposTable repos={props.repos} />
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  getUserDetails,
  getRepos
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitUser)

