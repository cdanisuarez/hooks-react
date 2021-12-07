
const INITIAL_STATE = {
  favorites: [],
};

const ACTIONS = {
  add: 'ADD_TO',
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.add:
      return { ...state, favorites: [...state.favorites, action.payload] };
    default:
      return state;
  }
};

export { INITIAL_STATE, ACTIONS, favoriteReducer };
