import axios from "axios";

export const SHOW_USERS = "SHOW_USERS";

export function showUsers() {
  return (dispatch, getState) => {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php")
      .then((response) => {
        dispatch({ type: SHOW_USERS, payload: response.data.data });
      });
  };
}
