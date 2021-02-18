import {createStore} from 'redux';

const initialState = {
  items: [
   
  ]
}
const reducerItems = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: state
          .items
          .concat(action.item)
      }
      break;
    case "REMOVE_ITEM":
        const match = state.items.findIndex((item) => item.id === action.item.id);
        if(match !== -1){
          const newItems = state.items.filter((item,index) => index !== match);          
          return {...state, items: newItems }
        }
        return state;

      break
    default:
      return state;
      break;
  }

}

export default createStore(reducerItems)