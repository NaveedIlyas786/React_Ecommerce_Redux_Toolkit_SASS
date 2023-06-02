import React from 'react';
import { errorimg } from '../../utils/Images';
import "./Error.scss"

const Error = () => {
  return (
    <div className="container py-5">
    <div className="flex flex-center error">
      <img src={errorimg} alt="Error Image" />
    </div>
  </div>
  )
}

export default Error