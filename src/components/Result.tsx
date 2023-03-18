import React, { FC } from "react";
import { useAppSelector } from "../hooks/redux";
import CopyPassword from "./CopyButton";

const Result: FC = () => {
  const password = useAppSelector(state => state.password.password)
  
  return (
    <div className="pass-generator__result">
      <p className="pass-generator__password">{password.length === 0 ? "Press generate password" : password}</p>
      <CopyPassword/>
    </div>
  );
};

export default Result;
