import React from 'react'
import styled from 'styled-components'
import fmlogo from './fmlogo.svg'

const rawlogo = props => (
  <img className={props.className} alt="logo" src={fmlogo} />
)

export const Logo = styled(rawlogo)`
  height: 35px;
  width: 32px;
`
export const LargeLogo = styled(rawlogo)`
  grid-area: logo;
  align-self: end;
  justify-self: center;
  height: 60px;
  width: 56px;
`
