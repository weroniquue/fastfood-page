import {ADD_QUANTITY, ADD_TO_CART, NEXT_STEP, REMOVE_ITEM, SHOW_SPINNER, SUB_QUANTITY} from "../acrions/actionTypes";

const initState = {
	menuItems: [
		{
			id: 1,
			name: 'MARGHERITA',
			ingredients: 'tomato sauce pelati, mozzarella, basil leaves',
			price: 15.90,
			img: '/pizza.png'
		},
		{
			id: 2,
			name: 'SALAME',
			ingredients: 'tomato sauce, mozzarella, salami, salami spianata picante, peperoni',
			price: 24.90,
			img: '/pizza.png'
		},
		{
			id: 3,
			name: 'FORMAGGIO',
			ingredients: 'tomato sauce, mozzarella, scamorza (italian smoked cheese), gorgoznola, parmesan',
			price: 26.90,
			img: '/pizza.png'
		},
		{
			id: 4,
			name: 'Hamburger',
			ingredients: '100% beef patty with onions, pickles, mustard and a dollop of tomato ketchup, all in a soft bun.',
			price: 15.90,
			img: '/pizza.png'
		},
		{
			id: 5,
			name: 'French Fries',
			ingredients: 'Fries cut from whole potatoes',
			price: 5.90,
			img: '/pizza.png'
		},
		{
			id: 6,
			name: 'Coca-Cola',
			ingredients: '',
			price: 3.90,
			img: '/pizza.png'
		}
	],
	addedItems:[],
	total: 0,
	step: 1

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
	if (action.type === SHOW_SPINNER) {
		return {
			...state,
			shouldShowSpinner : action.showSpinner
		}
	}

	if (action.type === NEXT_STEP) {
		return {
				...state,
			step: action.step
		}
	}

	return state
};
export default cartReducer;