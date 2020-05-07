import {ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY} from "../acrions/actionTypes";

const initState = {
	menuItems: [
		{
			id: 1,
			name: 'vvv',
			ingredients: 'vvv',
			price: 15.90
		},
		{
			id: 2,
			name: 'vvv',
			ingredients: 'vvv',
			price: 16.90
		},
		{
			id: 3,
			name: 'vvv',
			ingredients: 'vvv',
			price: 25.90
		},
		{
			id: 4,
			name: 'vvv',
			ingredients: 'vvv',
			price: 23.90
		},
		{
			id: 5,
			name: 'vvv',
			ingredients: 'vvv',
			price: 21.90
		},
		{
			id: 6,
			name: 'vvv',
			ingredients: 'vvv',
			price: 14.90
		}
	],
	addedItems:[],
	total: 0

};

function showTotalInCart(addedItems) {
	let element = document.getElementById('total-basket');
	if (addedItems.length === 0) {
		element.innerText = '';
		element.classList.remove("basket-total-visible");
	} else {
		const sum = addedItems.reduce( function(a, b){
			return a + b.quantity;
		}, 0);
		element.innerText = sum.toString();
		element.classList.add("basket-total-visible");
	}

}

const cartReducer= (state = initState, action)=>{

	if(action.type === ADD_TO_CART){
		let addedItem = state.menuItems.find(item=> item.id === action.id);
		let existed_item= state.addedItems.find(item=> action.id === item.id);
		if(existed_item)
		{
			addedItem.quantity += 1;
			showTotalInCart(state.addedItems);
			return{
				...state,
				total: state.total + addedItem.price
			}
		}
		else{
			addedItem.quantity = 1;
			let newTotal = state.total + addedItem.price;
			const newAddedItems = [...state.addedItems, addedItem];
			showTotalInCart(newAddedItems);
			return{
				...state,
				addedItems: newAddedItems,
				total : newTotal
			}

		}
	}
	if(action.type === REMOVE_ITEM){
		let itemToRemove= state.addedItems.find(item=> action.id === item.id);
		let newItems = state.addedItems.filter(item=> action.id !== item.id);
		showTotalInCart(newItems);
		let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity );
		return{
			...state,
			addedItems: newItems,
			total: newTotal
		}
	}
	if(action.type=== ADD_QUANTITY){
		let addedItem = state.menuItems.find(item=> item.id === action.id);
		addedItem.quantity += 1;
		showTotalInCart(state.addedItems);
		let newTotal = state.total + addedItem.price;
		return{
			...state,
			total: newTotal
		}
	}
	if(action.type=== SUB_QUANTITY) {
		let addedItem = state.menuItems.find(item => item.id === action.id);
		if (addedItem.quantity > 1) {
			addedItem.quantity -= 1;
			let newTotal = state.total - addedItem.price;
			showTotalInCart(state.addedItems);
			return {
				...state,
				total: newTotal
			}
		}
	}
	return state
};
export default cartReducer;