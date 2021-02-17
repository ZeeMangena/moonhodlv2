export const initialState = {
	//initialize State Variables here
	hidden: [],
};


const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_HIDDEN
      			return {
        			//State Altering action below
        			...state,
        			basket: [...state.basket, action.item],
       				 //basket+=item
      				};
		case "CLEAR_HIDDEN"
			return {
        			...state,
        			hidden: [],
				};

		default:
			return state; //in case the app action request matches none of the know commands
	}
};

export default reducer;
