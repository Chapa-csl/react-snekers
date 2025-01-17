const initialState = {
	items: [],
};

const addToCartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return {
				...state,
				items: [...state.items, action.payload],
			};
		default:
			return state;
	}
};

export default addToCartReducer;
