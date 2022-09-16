export const initializer = (initialState) => initialState;

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT_TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'USER_INPUT_CHECKBOX':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'RESET':
      return initializer(action.payload);
    default:
      return state;
  }
};