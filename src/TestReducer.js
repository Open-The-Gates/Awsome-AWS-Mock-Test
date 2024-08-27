
// Define action types
export const actionTypes = {
    CHOOSE_TEST: "CHOOSE_TEST",
    START_TEST: "START_TEST",
    END_TEST: "END_TEST",
    GO_TO_HOMEPAGE: "GO_TO_HOMEPAGE",
  };
  
  // Define initial state
  export const initialState = {
    page: "HOMEPAGE", // or any initial page
  };
  
  // Reducer function to manage state transitions
  export const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.CHOOSE_TEST:
        return { ...state, page: "CHOOSE_TEST" };
      case actionTypes.START_TEST:
        return { ...state, page: "START_TEST" };
      case actionTypes.END_TEST:
        return { ...state, page: "END_TEST" };
      case actionTypes.GO_TO_HOMEPAGE:
        return { ...state, page: "HOMEPAGE" };
      default:
        return state;
    }
  };
  