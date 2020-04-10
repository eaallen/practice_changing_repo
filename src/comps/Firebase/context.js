import React from 'react';
import {AppContext} from './Firebase'


export default function withFirebase(Component) {
	return function contextComponent(props) {
		return (
			<AppContext.Consumer>
				{(context) => <Component {...props} context={context} />}
			</AppContext.Consumer>
		)
	}
}