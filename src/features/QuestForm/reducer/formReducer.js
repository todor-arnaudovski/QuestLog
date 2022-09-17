export const initialFormState = {
  title: {
    value: '',
    isValid: null,
  },
  description: {
    value: '',
    isValid: null,
  },
  level: {
    value: '',
    isValid: null,
  },
  isShareable: false,
};

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
    case 'RESET':
      return initialFormState;
    default:
      return { ...state };
  }
};
