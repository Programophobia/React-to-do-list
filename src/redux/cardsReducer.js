import shortid from "shortid";
import strContains from '../utils/strContains'

export const addCard = payload => ({ type: 'ADD_CARD', payload});
export const getFilteredCards = ({ cards, searchString }, columnId) => cards
 .filter(card => card.columnId === columnId && strContains(card.title, searchString));
 export const toggleCardFavorite = payload => ({ type: 'TOGGLE_CARD_FAVORITE', payload });
export const getFavoriteCards = (state) => state.cards.filter(card => card.isFavorite);

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_LIST = createActionName('ADD_CARD');

export const addList = payload => ({ type: ADD_LIST, payload });


const cardsReducer = (statePart = [], action) => {
    switch(action.type) {
      case 'ADD_CARD':
        return [...statePart, { ...action.payload, id: shortid() }];
      case 'TOGGLE_CARD_FAVORITE':
        return statePart.map(card => (card.id === action.payload) ? { ...card, isFavorite: !card.isFavorite } : card);
      default:
        return statePart;
    }
  }
  export default cardsReducer