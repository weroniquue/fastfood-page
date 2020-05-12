import {
	ADD_TO_CART,
	REMOVE_ITEM,
	SUB_QUANTITY,
	ADD_QUANTITY,
	ADD_SŁHIPPING,
	SHOW_SPINNER,
	NEXT_STEP
} from './actionTypes'

export const addToCart = (id) => {
	return {
		type: ADD_TO_CART,
		id
	}
};

export const removeItem = (id) => {
	return {
		type: REMOVE_ITEM,
		id
	}
};

export const subtractQuantity = (id) => {
	return {
		type: SUB_QUANTITY,
		id
	}
};

export const addQuantity = (id) => {
	return {
		type: ADD_QUANTITY,
		id
	}
};

export const showSpinner = (showSpinner) => {
	return {
		type: SHOW_SPINNER,
		showSpinner
	}
};

export const goToStep = (step) => {
	return {
		type: NEXT_STEP,
		step
	}
};