import React from 'react'
import paste from '../images/paste.svg';
import { COPY_SUCCESS  } from '../utils/message';

interface IProps {
    password: string,
    notify: any
}

const CopyPassword = ({password, notify}:IProps): JSX.Element => {

 const copyToClipboard = () => {
    navigator.clipboard.writeText(password)
 }

 const copyPasswordHandle = () => {
    if (password.length === 0) {
        notify('Nothing To Copy', true)
    } else {
        copyToClipboard()
        notify(COPY_SUCCESS)
    }
 }

 return (
    <button className="pass-generator__btn" onClick={copyPasswordHandle}>
        <img className="pass-generator__img" src={paste} alt="Copy pass image" />
    </button>
  )
}

export default CopyPassword;