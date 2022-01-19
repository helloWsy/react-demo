const initState = 0

function reducer(preState = initState, action) {
	const { type, data } = action
	switch (type) {
		case 'increment':
			return preState + data
		default: return preState
	}
}