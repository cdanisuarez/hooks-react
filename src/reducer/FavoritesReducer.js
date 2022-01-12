
const INITIAL_STATE = {
  favorites: [],
};

const ACTIONS = {
  add: 'ADD_TO',
  remove: 'REMOVE_FROM',
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.add:
      return { ...state, favorites: [...state.favorites, action.payload] };
    case ACTIONS.remove:
      const favorites = state.favorites.filter(fav => fav !== action.payload);
      return { ...state, favorites };
    default:
      return state;
  }
};

export { INITIAL_STATE, ACTIONS, favoriteReducer };
