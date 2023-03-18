import React, { FC } from "react";
import "./scss/main.scss";
import Result from "./components/Result";
import Title from "./components/Title";
import GenerateButton from "./components/GeneratePassword";
import Options from "./components/Options";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="pass-generator">
        <Title title={"Password Generator"} />
        <Result />
        <Options />
        <GenerateButton />
      </div>
    </>
  );
};

export default App;
