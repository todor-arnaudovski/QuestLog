import { initialFormState } from './initialFormState';

export const formReducer = (state, action) => {
  switch (action.type) {
    case 'USER_TEXT_INPUT':
      return {
        ...state,
        [action.field]: {
          value: action.payload,
          isValid: action.payload.length > 0,
        },
      };
    case 'TEXT_INPUT_BLUR':
      return {
        ...state,
        [action.field]: {
          value: action.payload,
          isValid: action.payload.length > 0,
        },
      };
    case 'USER_CHECKBOX_INPUT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'USER_SELECT_PREREQ':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'RESET':
      return initialFormState;
    default:
      return { ...state };
  }
};
