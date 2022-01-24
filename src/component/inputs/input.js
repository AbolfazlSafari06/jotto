import React, { Component } from "react"
import { connect } from "react-redux"
class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const content = this.props.success
            ? null
            :
            (
                <form className="form-inline">
                    <input data-test="input-box" className="mb-2 mx-sm-3" type="text" placeholder="enter guess" />
                    <button data-test="submit-button" className="btn btn-primary mb-2" type="submit">
                        submit
                    </button>
                </form>
            )
            ;

        return (
            <div data-test="componen-input">
                {content}
            </div>
        )
    }
}


const mapStateToProps = ({ success }) => {
    return {
        success
    }
}
export default connect(mapStateToProps, null)(Input)