import React from 'react'

export const InputUI = ({ event, placeHolder, className }) => {
	return (
		<input
			onChange={event}
			placeHolder={placeHolder}
			className={className}
			type="text" />
	)
}
