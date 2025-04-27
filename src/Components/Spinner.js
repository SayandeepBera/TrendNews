import spinner from './Images/spinner.gif'

import React from 'react'

export default function Spinner() {
  return (
    <div className="text-center">
      <img src={spinner} alt="Loading" />
    </div>
  )
}

