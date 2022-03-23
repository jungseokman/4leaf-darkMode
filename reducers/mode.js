import produce from "immer";

export const initState = {
  theme: true,
};
export const THEME_TOGGLE_REQUEST = "THEME_TOGGLE_REQUEST";

const reducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case THEME_TOGGLE_REQUEST:
        draft.theme = !draft.theme;

        break;
      default:
        break;
    }
  });

export default reducer;
