import React, { useEffect, useState, } from "react";
import {useNavigate} from 'react-router-dom';
import styles from "./Signin.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import chairimg from "../../../assets/Chairpic.png";

export default function Signin({ setActive }) {
  const navigate= useNavigate();

  const [message, setMessage]=useState("")
  const [data, setData] = useState({
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

  const buttonfun=()=>{
    console.log("data",data);
    const getData= JSON.parse(localStorage.getItem('signup'));
    console.log("getdata",getData.email);
    if(getData && getData.email===data.email&& getData.password===data.password){
      setMessage("Login Succesful")
    }
    else{
      setMessage("Login Failed")
    }
  }
  useEffect(()=>{
    if(message==="Login Succesful"){
      localStorage.setItem('login','success')
      navigate('/shop')
    }
  }, [message])

  const signUpfun = () => {
    setActive("signUp");
  };
  return (
    <div className={styles.SignInParent}>
      <div className={styles.imgdiv}>
        <img src={chairimg} alt="img"></img>
      </div>
      <div className={styles.inputParent}>
        <div className={styles.SignIn}>
          <span className={styles.signInboldtxt}>Sign In</span>
          <p>
            Don’t have an accout yet?
            <span className={styles.signIntxt} onClick={() => signUpfun()}>
              Sign Up
            </span>
          </p>
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
            SignIn
          </Button>
        </div>
      </div>
    </div>
  );
}
