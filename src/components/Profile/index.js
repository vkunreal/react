import { onValue, ref, set } from "@firebase/database";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../services/firebase";
import { toggleShowName } from "../../store/profile/actions";
import { selectShowName } from "../../store/profile/selectors";
import Form from "../Form";
import "./styles.scss";

export default function Profile() {
  const [name, setName] = useState("");

  const showName = useSelector(selectShowName);
  const dispatch = useDispatch();

  useEffect(() => {
    const userDbRef = ref(db, "profile");
    onValue(userDbRef, (snapshot) => {
      const data = snapshot.val();
      setName(data?.username || "");
    });
  }, []);

  const handleShowName = () => {
    dispatch(toggleShowName);
  };

  const handleClick = (name) => {
    set(ref(db, "profile"), {
      username: name,
    });
  };

  return (
    <div className="profileContainer">
      <div className="profileWrapper">
        <Form text="Изменить" label="Имя" onClick={handleClick} />
        <label className="profileLabel">
          <input type="checkbox" onChange={handleShowName} value={showName} />
          Show name
        </label>
        <div>{showName && <p>{name}</p>}</div>
      </div>
    </div>
  );
}
