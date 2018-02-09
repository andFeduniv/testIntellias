import React from 'react'
import ReactTable from 'react-table';
import "react-table/react-table.css";

class ReposTable extends React.Component {
  render() {
    const data = this.props.repos;
    const columns = [{
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Description',
        accessor: 'description'
      },
      {
        Header: 'Url',
        accessor: 'url'
      },
      {
        Header: 'Url',
        accessor: 'url'
      },
      {
        Header: 'Forks count',
        accessor: 'forks_count'
      },
      {
        Header: 'Watchers count',
        accessor: 'watchers_count'
      }
    ];

    return <div>
      <a href="javascript:void(0)" onClick={this.props.getRepos} >Repos</a>
      { data.length ? <ReactTable data={data} columns={columns} /> : null }
      </div>
  }
}

export default ReposTable;
