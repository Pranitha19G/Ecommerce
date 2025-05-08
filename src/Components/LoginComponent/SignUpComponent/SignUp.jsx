import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./SignUp.module.css";
import chair from "../../../assets/Chairpic.png";

export default function SignUp({ setActive }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const buttonfun = () => {
    console.log("data", data);
    localStorage.setItem('signup',JSON.stringify(data));
  };

  const signinfun = () => {
    setActive("signin");
  };

  return (
    <div className={styles.SignUpParent}>
      <div className={styles.imgdiv}>
        <img src={chair} alt="img"></img>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.SignUp}>
          <span className={styles.signupboldtxt}>Sign Up</span>
          <p>
            Already have an account?{" "}
            <span className={styles.signuptxt} onClick={() => signinfun()}>
              Sign in
            </span>
          </p>
          <TextField
            id="standard-basic"
            label="User Name"
            variant="standard"
            name="name"
            value={data.name}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            type="email"
            id="standard-basic"
            label="Email"
            variant="standard"
            name="email"
            value={data.email}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            type="password"
            id="standard-basic"
            label="Password"
            variant="standard"
            name="password"
            value={data.password}
            onChange={(e) => handleChange(e)}
          />
          <Button variant="contained" onClick={() => buttonfun()}>
            SignUp
          </Button>
        </div>
      </div>
    </div>
  );
}
