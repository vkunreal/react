export const CHANGE_NAME = "PROFILE::CHANGE_NAME";
export const TOGGLE_SHOW_NAME = "PROFILE::TOGGLE_SHOW_NAME";
export const CHANGE_ID = "PROFILE::CHANGE_ID";

export const changeName = (name) => ({
  type: CHANGE_NAME,
  payload: name,
});

export const toggleShowName = {
  type: TOGGLE_SHOW_NAME,
};

export const changeId = (id) => ({
  type: CHANGE_ID,
  payload: id,
});
