import React from 'react'

interface IProps {
  setIncludeLowerCase: React.Dispatch<React.SetStateAction<boolean>>,
  setIncludeUpperCase: React.Dispatch<React.SetStateAction<boolean>>,
  setIncludeNumbers: React.Dispatch<React.SetStateAction<boolean>>,
  setIncludeSymbols: React.Dispatch<React.SetStateAction<boolean>>
}

const Options = ({setIncludeLowerCase, setIncludeUpperCase, setIncludeNumbers, setIncludeSymbols}:IProps): JSX.Element => {
  return (
    <div>
        <div className="pass-generator__setting">
          <label>Include uppercase letters</label>
          <input type="checkbox" className="pass-generator__checkbox" onChange={(e) => setIncludeUpperCase(e.target.checked)}></input>
        </div>
        <div className="pass-generator__setting">
          <label>Include lowercase letters</label>  
        <input type="checkbox" className="pass-generator__checkbox" onChange={(e) => setIncludeLowerCase(e.target.checked)}></input>
      </div>
      <div className="pass-generator__setting">
        <label>Include numbers</label>
        <input type="checkbox" className="pass-generator__checkbox" onChange={(e) => setIncludeNumbers(e.target.checked)}></input>
      </div>
      <div className="pass-generator__setting">
        <label>Include symbols</label>
        <input type="checkbox" className="pass-generator__checkbox" onChange={(e) => setIncludeSymbols(e.target.checked)}></input>
      </div>
    </div>
  )
}

export default Options;