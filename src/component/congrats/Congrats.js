import propTypes from 'prop-types'
import React from 'react'

const Congrats = (props) => {

    if (props.success) {
        return (
            <div className='alert alert-success' data-test="component-congrats">
                <span deta-test="congrats-message">
                    congratolations!
                </span>
            </div>
        )
    }
    return (
        <div deta-test="component-congrats">
        </div>
    )
}

Congrats.propTypes = {
    success: propTypes.bool.isRequired
}
export default Congrats
