import React from 'react'
import Search from './search';
import Details from './user-details';
import ReposTable from './table';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  getUser
} from '../../modules/git-user';

const mapStateToProps = state => ({
  user: state.git.user
})


const GitUser = (props) => (
  <div className="users-container">
    <Search textInput={props.textInput} getUser={props.getUser} />
    { Object.keys(props.user.details).length ? <Details {...props.user.details} />: null }
    { props.user.repos.length?<ReposTable repos = {props.user.repos} />: null}
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GitUser)

