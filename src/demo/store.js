export const reducer = (state, action = {}) => {
	const { type } = action;

	switch (type) {
		case 'increase':
			return { ...state, count: state.count + 1 };
		case 'decrease':
			return { ...state, count: state.count - 1 };
		default:
			return state;
	}
};
