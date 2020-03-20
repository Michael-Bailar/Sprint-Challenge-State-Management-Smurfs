import React from 'react'
import ASmurf from './ASmurf'
import { connect } from 'react-redux'

const Villiage = props => {
    console.log('villiageprops',props.smurfs)
    return (
        <div className='villiage'>
            {props.smurfs.map(smurf => {
                return(
                    <ASmurf key={smurf.name} smurf={ smurf } />
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
      smurfs:state.smurfs
    };
  };

export default connect(
    mapStateToProps,
    {}
)(Villiage)