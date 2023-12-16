import React from 'react'

import snipper from "../gif/spinner.gif"

function Loader() {
  return (
    <div>
        <img  src={snipper} alt='loading'/>
        <h5>Loading ...</h5>
    </div>
  )
}

export default Loader