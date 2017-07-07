import React from 'react'
import styled from 'styled-components'
// styled-components allows us to add named styles to html tags as well as personal and 3rd party components

const Review = (props) => {

  return (
    <li className={props.className}>
      {props.id + ':   ' + props.feedback}
      <button onClick={props.delete}>Delete</button>
    </li>
  )

}

const styledReview = styled(Review)`
  color: pink;
  font-family: 'Open Sans'
`

export default styledReview
