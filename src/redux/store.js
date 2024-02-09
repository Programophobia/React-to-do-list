import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import listsReducer from './listsRedux';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const updateSearchstring = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});
export const getColumnsByList = ({columns}, listId) => columns.filter(column => column.listId === listId);
export const getSearchString = (state) => state.searchString;

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


/*const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
      
    case 'ADD_CARD': 
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]};

    case 'ADD_LIST':
      return { ...state, lists: [...state.lists,{...action.payload, id: shortid()}]};

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };

    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card) }  
      
    default:
      return state;
  }
}*/
//lubie frytki