import React from 'react'

const Review = (props) => {

  let id = props.id
  let feedback = props.feedback

  return (
    <li>
      {id + ':   ' + feedback}
      <button onClick={props.delete}>Delete</button>
    </li>
  )

}

export default Review
