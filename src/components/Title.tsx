import React, { FC } from 'react'

type Props = {
  title: string
}

const Title: FC<Props> = ({title}) => {
  return (
    <h1 className="pass-generator__title">{title}</h1>
  )
}

export default Title;