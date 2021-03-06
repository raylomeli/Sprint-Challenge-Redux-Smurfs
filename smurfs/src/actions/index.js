import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
// add Smurf function (the C in CRUD)
export const addSmurf = newSmurf => {
  return dispatch => {
    dispatch({ type: "ADDING_SMURF" });
    axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(response => {
        dispatch({ type: "SMURF_ADDED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};

// get Smurfs function (the R in CRUD)!
export const getSmurfs = () => {
  return dispatch => {
    dispatch({ type: "FETCHING_SMURFS" });
    axios
      .get(`http://localhost:3333/smurfs`)
      .then(response => {
        dispatch({ type: "SMURFS_FETCHED", payload: response.data });
      })
      .catch(error => {
        dispatch({ type: "ERROR", payload: error });
      });
  };
};
