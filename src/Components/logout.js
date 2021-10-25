import React from "react";
import {useSelector, useDispatch } from "react-redux";
import {logout, selectUser } from "../Features/userSlice";
import "./Logout.css";

const Logout = () => {
   const user = useSelector(selectUser)
  const dispatch = useDispatch();

  const handelLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="Logout">
      <h1>
        Welcome <span className="user-name">{user.name}</span>
      </h1>
      <button
        type="button"
        className="Logout-button"
        onClick={(e) => handelLogout(e)}
      >
        LogOut
      </button>
    </div>
  );
};
export default Logout;
