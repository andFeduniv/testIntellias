import React from 'react'

const Details = (props) => (
  <div className="details-container">
    <h3>User details:</h3>
    <p>Name: {props.name}</p>
    <p>Company: {props.company}</p>
    <p>Email: {props.email}</p>
    <p>Folowers: {props.name}</p>
    <p>Updated_at: {props.updated_at}</p>
    <p>Avatar: {props.avatar_url}</p>
  </div>
);

export default Details
