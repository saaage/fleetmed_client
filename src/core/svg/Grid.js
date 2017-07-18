import React from 'react'
import styled from 'styled-components'

import grid from './grid.svg'

const Spinner = props => (
  <div className={props.className}>
    <img alt="animation while loading" src={grid} />
  </div>
)
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
