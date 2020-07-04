import React from 'react'
import {AppContex} from './AdminCtx'


export default function withAdminCtx(Component) {
	return function contextComponent(props) {
		return (
			<AppContext.Consumer>
				{(context) => <Component {...props} adminCtx={context} />}
			</AppContext.Consumer>
		)
	}
}