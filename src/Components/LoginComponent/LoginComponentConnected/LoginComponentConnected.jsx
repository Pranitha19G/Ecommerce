import React, { useState } from "react";
import Signin from "../SignInComponent/Signin";
import SignUp from "../SignUpComponent/SignUp";

export default function LoginComponentConnected() {
  const [active, setActive] = useState("");
  return (
    <div>
      {active === "signin" ? (
        <Signin setActive={setActive} />
      ) : (
        <SignUp setActive={setActive} />
      )}
    </div>
  );
}
