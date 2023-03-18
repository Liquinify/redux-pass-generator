import React, { FC } from "react";
import { useOptions } from "../hooks/options";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import {
  setLowerCase,
  setNumbers,
  setSymbols,
  setUpperCase,
  setPasswordLength,
} from "../store/features/options-slice";

const Options: FC = () => {
  const dispatch = useAppDispatch();
  const length = useAppSelector((state) => state.options.passwordLength);

  return (
    <div className="pass-generator__options">
      <div className="pass-generator__setting">
        <label>Password length</label>
        <input
          type="number"
          min="4"
          max="20"
          className="pass-generator__length"
          value={length}
          onChange={(e) =>
            dispatch(setPasswordLength(parseInt(e.target.value)))
          }
        />
      </div>
      <div className="pass-generator__setting">
        <label>Include uppercase letters</label>
        <input
          type="checkbox"
          className="pass-generator__checkbox"
          onChange={() => dispatch(setUpperCase())}
        ></input>
      </div>
      <div className="pass-generator__setting">
        <label>Include lowercase letters</label>
        <input
          type="checkbox"
          className="pass-generator__checkbox"
          onChange={() => dispatch(setLowerCase())}
        ></input>
      </div>
      <div className="pass-generator__setting">
        <label>Include numbers</label>
        <input
          type="checkbox"
          className="pass-generator__checkbox"
          onChange={() => dispatch(setNumbers())}
        ></input>
      </div>
      <div className="pass-generator__setting">
        <label>Include symbols</label>
        <input
          type="checkbox"
          className="pass-generator__checkbox"
          onChange={() => dispatch(setSymbols())}
        ></input>
      </div>
    </div>
  );
};

export default Options;
