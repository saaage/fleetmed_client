import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import SignInForm from './SignInForm'
import { userSignIn } from '../../redux/actions/userActions'

@connect((store) => {
	return {}
})
class New extends React.Component {

	constructor(props) {
		super(props)

		this.signIn = this.signIn.bind(this)
	}

	signIn(e) {
		e.preventDefault()
		this.props.dispatch(userSignIn())
	}

	render() {

		return (
			<SignInForm signIn={(e) => this.signIn(e)}/>
		)
	}

}

export default New
