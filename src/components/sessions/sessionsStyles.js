import styled from 'styled-components'

export const Form = styled.div`
	align-content: center;
	border: 1px solid;
	border-radius: 3px;
	display: flex;
	height: 20em;
	justify-content: center;
	margin-top: -5rem;
	width: 30em;

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 50%;
	}
	input {
		display: block;
		margin-bottom: .5em;
		font-size: 100%;
	}
`

export const Button = styled.button`
	/* Adapt the colours based on primary prop */
	background: ${props => props.primary ? 'palevioletred' : 'white'};
	color: ${props => props.primary ? 'white' : 'palevioletred'};

	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	display: block;
`