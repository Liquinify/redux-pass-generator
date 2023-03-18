import React, { FC, useState } from "react";
import { useOptions } from "../hooks/options";
import { useAppDispatch } from "../hooks/redux";
import { setPassword } from "../store/features/password-slice";
import { toast } from "react-toastify";
import {
  lowercaseChars,
  uppercaseChars,
  numericChars,
  specialChars,
} from "../utils/characters";

const GenerateButton: FC = () => {
  const [isGeneratingPassword, setIsGeneratingPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [ IncludeUppercase, IncludeLowercase, IncludeNumbers, IncludeSymbols, passLength ] = useOptions();

  const handleGeneratePassword = () => {
    setIsGeneratingPassword(true);
    if (
      !IncludeUppercase &&
      !IncludeLowercase &&
      !IncludeNumbers &&
      !IncludeSymbols
    ) {
      toast.error("Please select one of the options below!");
      setIsGeneratingPassword(false);
      return;
    }

    let allowedChars = "";

    if (IncludeLowercase) {
      allowedChars += lowercaseChars;
    }

    if (IncludeUppercase) {
      allowedChars += uppercaseChars;
    }

    if (IncludeNumbers) {
      allowedChars += numericChars;
    }

    if (IncludeSymbols) {
      allowedChars += specialChars;
    }

    let generatedPassword = "";

    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      generatedPassword += allowedChars[randomIndex];
    }

    dispatch(setPassword(generatedPassword));
    setIsGeneratingPassword(false);
  };

  return (
    <button className="pass-generator__create" onClick={handleGeneratePassword}>
      Generate password
    </button>
  );
};

export default GenerateButton;
