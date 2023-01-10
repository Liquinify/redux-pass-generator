import React, { useState } from 'react';
import './scss/main.scss';
import CopyPassword from './components/CopyPassword';
import Options from './components/Options';
import { numbers, upperCaseLetters, lowerCaseLetters, specialCharacters } from './utils/characterList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = (): JSX.Element => {

  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(4)
  const [includeUpperCase, setIncludeUpperCase] = useState(false)
  const [includeLowerCase, setIncludeLowerCase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

  const createPassword = (characterList:string) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const generatePasswordHandle = () => {
    if (
      !includeUpperCase &&
      !includeLowerCase &&
      !includeNumbers &&
      !includeSymbols
    ) {
      notify('You must Select atleast one option', true)
    }

    let characterList = ''

    if (includeLowerCase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUpperCase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList))
  }

   const notify = (message:string, hasError:boolean = false) => {
    if (hasError) {
      toast.error(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast(message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <div className="App">
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="pass-generator">
         <h1 className="pass-generator__title">Password Generator</h1>
        <div className="pass-generator__result">
          <p className="pass-generator__password">{password}</p>
          <CopyPassword notify={notify} password={password}/>
        </div>
        <div className="pass-generator__options">
          <div className="pass-generator__setting">
          <label>Password length</label>
            <input type="number" min="4" max="20" className="pass-generator__length" value={passwordLength} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswordLength(parseInt(e.target.value))}></input>
         </div>
            <Options setIncludeUpperCase={setIncludeUpperCase} setIncludeLowerCase={setIncludeLowerCase} setIncludeNumbers={setIncludeNumbers} setIncludeSymbols={setIncludeSymbols}/>
          </div> 
          <button className="pass-generator__create" onClick={generatePasswordHandle}>Generate password</button>
        </div>
    </div>
  )
}
  
export default App;
