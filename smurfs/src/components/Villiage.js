import React from 'react'
import ASmurf from './ASmurf'
import { connect } from 'react-redux'

const Villiage = props => {
    return (
        <div className='villiage'>
            {props.smurfs.map(smurf => {
                return(
                    <ASmurf key={ smurf.id } smurf={ smurf } />
                )
            })}
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
    {}
)(Villiage)