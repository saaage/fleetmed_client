import React from 'react'
import grid from './grid.svg'
import styled from 'styled-components'

const Spinner = props =>

  <div className={props.className}>
    <img src={grid} />
  </div>

const StyledSpinner = styled(Spinner)`

  background-color: rgba(248, 187, 208,0.2);
  border-radius: 5px;

  img {
    height: 150px;
    width: 150px;
    padding: 8px 8px;
  }
`

export default StyledSpinner
