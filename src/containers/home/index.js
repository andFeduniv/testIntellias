import React from 'react';
import GitUser from '../git-user'
import './home.css';

class Home extends React.Component {
  render() {
    return <div className="home">
     <h1>Test Task Intellias</h1>
      <GitUser />
    </div>
  }
}

export default Home;