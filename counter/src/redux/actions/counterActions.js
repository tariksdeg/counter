import * as actionTypes from "./actionTypes";

export const counterAction = (value, timer) => async (dispatch) => {
  const stop = (timer) => {
    clearInterval(timer);
  };
  if (value <= 10) {
    timer = setInterval(function () {
      value -= 1;
      dispatch({ type: actionTypes.START, value });

      if (value < 1) {
        window.location.reload();
        stop(timer);
      }
      
    }, 1000);
    
  }
  if (value > 11) {
    
  stop(timer);dispatch({ type: actionTypes.START, value });
}
};
