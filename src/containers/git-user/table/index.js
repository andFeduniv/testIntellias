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
      <h3>Repos table:</h3>
      <ReactTable
      data={data}
      columns={columns}
      />
    </div>
  }
}

export default ReposTable;
