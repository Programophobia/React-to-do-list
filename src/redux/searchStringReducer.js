export const getSearchString = (state) => state.searchString;
export const updateSearchstring = payload => ({ type: 'UPDATE_SEARCHSTRING', payload});
export const addList = payload => ({ type: ADD_LIST, payload });

const createActionName = actionName => `app/SearchString/${actionName}`;
const ADD_LIST = createActionName('UPDATE_SEARCHSTRING');

const searchStringReducer = (statePart = '', action) => {
    switch(action.type) {
      case 'UPDATE_SEARCHSTRING':
        return action.payload
      default:
        return statePart;
    }
  }
  export default searchStringReducer