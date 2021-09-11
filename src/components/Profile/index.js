import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowName } from "../../store/profile/actions";

export default function Profile() {
  const showName = useSelector((state) => state.showName);
  const dispatch = useDispatch();

  const setShowName = () => {
    dispatch(toggleShowName);
  };

  return (
    <div>
      <h1>Profile</h1>
      <label>
        <input
          type="checkbox"
          value={showName}
          cheked={showName}
          onChange={setShowName}
        />
        Show name
      </label>
      <div>{showName && <h1>Your name.</h1>}</div>
    </div>
  );
}
