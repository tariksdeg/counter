import * as actionTypes from "./actionTypes";

export const counterAction = (value, timer) => async (dispatch) => {
  
   
    timer = setInterval(function () {
      value -= 1;
      dispatch({ type: actionTypes.START, value });
    }, 1000)
  
    
  }

