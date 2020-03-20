import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addSmurf } from '../actions/actions'



const SmurfForm = props => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: ``,
        height: ''
    })

    const handleChanges = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const addNewSmurf = smurf => {
        const newSmurf = {
            name: smurf.name,
            age: smurf.age,
            role: smurf.role
        }
        setNewSmurf({newSmurf})
    }

    const handleSubmit = e => {
        e.preventDefault()
        addNewSmurf(newSmurf)
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }


    return (
        <div className='smurf-form-container'>
            <p>Add a Smurf</p>
            
            <form onSubmit={handleSubmit} className='smurf-form'>
            <div className='smurf-form-inner-container'>
                <label>
                    Name:
                <input
                        id='name'
                        type="text"
                        name="name"
                        value={newSmurf.name}
                        onChange={handleChanges}
                        placeholder="name"
                    />
                </label>
                <label>
                    Age:
                <input
                        id='age'
                        name="age"
                        type='text'
                        value={newSmurf.age}
                        onChange={handleChanges}
                        placeholder="age"
                    />
                </label>
                <label>
                    Height(in cm):
            <input
                        id='height'
                        type="text"
                        name="height"
                        value={newSmurf.height}
                        onChange={handleChanges}
                        placeholder="height"
                    />
                </label>
                
                <br />
                </div>
                <button type="submit">Add Smurf</button>
            </form>  
        </div> 
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}
export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm)