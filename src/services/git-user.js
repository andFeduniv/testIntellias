const apiUrl = 'https://api.github.com/users/';

class GitUser {
  getUser (userName, cb) {
    let userDetailsUrl = `${apiUrl}${userName}`;
    fetch(userDetailsUrl).then(data => {
      if (data.status !== 200) {
        alert('Error');
      } else {
        data.json().then(res => cb(res))
      }
    })
  };

  getUserRepos (userName, cb) {
    let userReposUrl = `${apiUrl}${userName}/repos`;
    fetch(userReposUrl).then(data => {
      if (data.status !== 200) {
        alert('Error');
      } else {
        data.json().then(res => cb(res))
      }
    })
  }
}

const User = new GitUser();

export default User;
