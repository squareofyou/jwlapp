import React, { Component } from "react";

let dialogStyle = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'

}

let dialogCloseButtonStyle = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    float: 'right'
}

class Dialog extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        const { price, weight, total } = this.props;

        return (
            <div style={dialogStyle}>
                <div>
                    <button style={dialogCloseButtonStyle}>x</button>
                    <label><b>Gold Price (per Gram)</b></label><br />
                    <input value={price} disabled /><br />

                    <label><b>Weight(grams)</b></label><br />
                    <input value={weight} disabled /><br />

                    <label><b>Total Price</b></label><br />
                    <input value={total} disabled /><br />

                </div>
                <div></div>
            </div>
        )
    }
}

export default Dialog;