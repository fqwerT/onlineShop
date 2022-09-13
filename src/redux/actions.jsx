import {
  increment,
  decrement,
  COMMENT_CREATE,
  COMMENT_UPDATE,
  COMMENT_DELETE,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  ERROR_DISPLAY_ON,
  ERROR_DISPLAY_OFF,
} from "./types";

export function IncrementAmount() {
  return {
    type: increment,
  };
}

export function DecrementAmount() {
  return {
    type: decrement,
  };
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id },
  };
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    data: { text, id },
  };
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  };
}

export function loaderOn() {
  return {
    type: LOADER_DISPLAY_ON,
  };
}
export function loaderOff() {
  return {
    type: LOADER_DISPLAY_OFF,
  };
}

export function errorOn(text) {
  return (dispatch) => {
    dispatch({
      type: ERROR_DISPLAY_ON,
      text,
    });

    setTimeout(() => {
      dispatch(errorOff());
    }, 2000);
  };
}
export function errorOff() {
  return {
    type: ERROR_DISPLAY_OFF,
  };
}
