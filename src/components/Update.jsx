import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { updateUser } from "../store/userSlice";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.users);

  const existingUser = user.filter((f) => f.id === Number(id));
  const { name, email } = existingUser[0];

  const [uname, setUname] = useState(name);
  const [uemail, setUemail] = useState(email);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: uname,
      email: uemail
    }))
    navigate("/");
  };

  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h1>Update User</h1>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Name :
        <input
          type="text"
          name="name"
          value={uname}
          placeholder="Enter name"
          onChange={(e) => setUname(e.target.value)}
        />
        Email :
        <input
          type="email"
          name="email"
          value={uemail}
          placeholder="Enter email"
          onChange={(e) => setUemail(e.target.value)}
        />
      </form>
      <button onClick={handleUpdate}>Update </button>
    </div>
  );
};

export default Update;
