import { constants } from "../../constants";
import { ActionType } from "../../types";

export const settingsReducer = (
  state = {},
  { payload, type }: ActionType<any>
) => {
  switch (type) {
    case constants.SET_SETTINGS:
      return (state = payload);
    default:
      return state;
  }
};
