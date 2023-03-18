import React, { FC } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../hooks/redux";
import paste from "../images/paste.png";

const CopyPassword: FC = () => {
  const password = useAppSelector((state) => state.password.password);

  const copyPasswordHandle = () => {
    if (password.length === 0) {
      toast.error("Nothing to copy!");
    } else {
      navigator.clipboard.writeText(password);
      toast.success("Password has been copied to clipboard!");
    }
  };

  return (
    <button className="pass-generator__btn" onClick={copyPasswordHandle}>
      <img className="pass-generator__img" src={paste} alt="Copy pass image" />
    </button>
  );
};

export default CopyPassword;
