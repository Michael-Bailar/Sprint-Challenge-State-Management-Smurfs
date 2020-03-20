import React from 'react'

const ASmurf = ({ smurf }) => {
    return (
        <div className='smurf-box'>
            <p>{smurf.name}</p>
            <p>Age: {smurf.age}</p>
            <p>Height: {smurf.height}</p>
        </div>
    )
}

export default ASmurf