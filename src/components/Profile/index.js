import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, toggleShowName } from "../../store/profile/actions";
import { selectProfile } from "../../store/profile/selectors";
import Form from "../Form";
import "./styles.scss";

export default function Profile() {
  const profile = useSelector(selectProfile);
  const dispatch = useDispatch();

  let showName = profile.showName;

  const handleShowName = () => {
    dispatch(toggleShowName);
  };

  const handleClick = (name) => {
    dispatch(changeName(name));
  };

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <Form text="Изменить" label="Имя" onClick={handleClick} />
        <label>
          <input type="checkbox" onChange={handleShowName} />
          Show name
        </label>
        <div>{showName && <p>{profile.name}</p>}</div>
      </div>
    </div>
  );
}
