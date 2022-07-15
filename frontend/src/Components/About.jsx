import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import profile from "../Assets/profile.png";

const About = () => {
  const history = useHistory(); // Used to manipulate the current state of the browser history
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const callPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET", // authenticate.js as a middleware will get executed and then information will be fetched
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      history.push("/login");
    }
  };

  useEffect(() => {
    callPage(); // calling callPage() after page load
  }, []);

  return (
    <>
      <div class="container mt-4 mb-4 p-4 d-flex justify-content-center">
        <div class="card p-4">
          <div class=" image d-flex flex-column justify-content-center align-items-center">
            <button class="btn btn-secondary">
              <img src={profile} height="100" width="100" />
            </button>
            <span class="name mt-3">{userData.name}</span>
            <span class="idd">{userData.email}</span>
            <div class=" px-2 rounded mt-4 date ">
              <span class="join">Joined May,2021</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
