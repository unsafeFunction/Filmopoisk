export default function single({ types }) {
  const [requestType, successType, failureType] = types;
  return (reducer) => {
    const initialState = {
      ...reducer(undefined, {}),
    };

    return (state = initialState, action = {}) => {
      switch (action.type) {
        case requestType:
          return {
            ...state,
            isLoading: false,
          };
        case successType:
          return {
            ...state,
            ...action.payload.data,
            isLoading: true,
          };
        case failureType:
          return {
            ...state,
            isLoading: true,
          };
        default:
          return reducer(state, action);
      }
    };
  };
}
