// Sessions.New is connected to our store
// It will have the ability to dispatch action userSignIn

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Form, Button } from './sessionsStyles'
import { userSignIn } from '../../redux/actions/userActions'

@connect((store) => { return {} })
class New extends React.Component {

	constructor(props) {
		super(props)
		this.signIn = this.signIn.bind(this)
		this.successCallBack = this.successCallBack.bind(this)
	}

	signIn(e) {
		e.preventDefault()
		let email = this.email.value
		let password = this.password.value
		let successCallBack = this.successCallBack
		this.props.dispatch(userSignIn(email, password, successCallBack))
	}

	successCallBack() {
		this.props.history.push('/profile')
	}

	render() {
		return (
					<Form>
						<form>
					    <input ref={node => {this.email = node} } type="email" placeholder="email"></input>
					    <input ref={node => {this.password = node}} type="password" placeholder="password"></input>
					    <Button primary onClick={this.signIn}>Sign In</Button>
				  	</form>
					</Form>
		)
	}
}

export default New
