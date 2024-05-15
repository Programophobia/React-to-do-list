import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
<<<<<<< HEAD
import shortid from 'shortid';
import strContains from '../utils/strContains'
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
  .filter(card => card.columnId === columnId &&
          strContains(card.title, searchString));
//export const getFilteredCards = ({ cards, searchString }, columnId) => cards
 //.filter(card => card.columnId === columnId && strContains(card.title, searchString));
export const getAllColumns = state => state.columns;
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload})
export const updateSearchstring = payload => ({ type: 'UPDATE_SEARCHSTRING', payload})


const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }]};
      
    case 'ADD_CARD': 
      return {...state, cards: [...state.cards, {...action.payload, id: shortid()}]};

    case 'UPDATE_SEARCHSTRING':
      return { ...state, searchString: action.payload };
      
    default:
      return state;
  }
=======
import listsReducer from './listsRedux';
import columnsReducer from './columnsReducer';
import cardsReducer from './cardsReducer';
import searchStringReducer from './searchStringReducer';

const subreducers = {
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
>>>>>>> 659d3454523a7c1948d618694961ae18927c92a1
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
