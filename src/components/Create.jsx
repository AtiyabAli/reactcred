import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUsers } from "../store/userSlice";

const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUsers({
        id: users[users.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <div>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <h1>Fill user details</h1>

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
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        Email :
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};
export default Create;
